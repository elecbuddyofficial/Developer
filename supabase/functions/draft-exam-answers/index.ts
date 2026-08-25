/* ─────────────────────────────────────────────────────────────────────────
   DRAFT ANSWERS for live exam feed questions.

   Takes the questions a sitting has collected and writes a model answer for
   each, in the house format, so the work left is checking rather than writing.

   WHY THE PROMPT LOOKS THE WAY IT DOES

   Every rule in it comes from an error actually found in this app's content:

   - The marine-versus-shore rule exists because an audit on 22 Aug 2026 found
     six real errors in live content and three were shore standards presented
     as marine answers: NFPA 12's 34% for CO2 quantity, NFPA 750's droplet
     threshold for water mist, and an EU F-gas figure for the ODS record book.
     That is the single most common way a confident answer is wrong here.

   - The "say the principle, not a number you are unsure of" rule exists
     because a fabricated spec number is worse than an omission. A cadet who
     quotes 5 knots for a rescue boat to a surveyor loses the question; our own
     quiz taught that until it was fixed.

   - The format is not a preference. formatSqAnswer() in app/app.js renders
     "Label: text" lines as labelled bullets and everything else as a
     paragraph. 89% of the 7,131 lines in the existing bank are labelled
     lines, so anything else looks foreign next to it.

   ACCURACY OVER COVERAGE. Every answer carries a self-assessed confidence and
   a flag list. The console shows low-confidence answers first, so the reading
   goes where it is needed instead of over all of them equally.

   Set the key with:  supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
   ───────────────────────────────────────────────────────────────────────── */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const MODEL = Deno.env.get('CLAUDE_ANSWER_MODEL') ?? 'claude-opus-5';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const SYSTEM = `You write model answers for Elec-Buddy, an exam-prep app used by marine Electro-Technical Officers sitting MMD/STCW oral examinations in India. Cadets pay for this material and take it into the exam room.

WHAT YOU ARE ANSWERING
Each input is a question recollected by a candidate who has just come out of an MMD oral. The wording is approximate and often terse: "HRC fuse", "Polarisation index and its value", "Draw cable penetration gland". Answer what the surveyor was plainly getting at. If a question is too vague to answer safely, say so in the flags rather than guessing at what was meant.

MARINE, NOT SHORE. THIS IS THE RULE THAT MATTERS MOST.
The answer must be the one a class surveyor expects on a SOLAS ship. Standards come from SOLAS, the FSS Code, the LSA Code, MARPOL, STCW, the ISM and ISPS Codes, IEC 60092, and classification society rules.
Do NOT answer from NFPA, IEEE, NEC, IS, BS or EU regulations. Those are shore standards. Where a shore figure is widely quoted for the same subject, either leave it out or name it explicitly as the shore standard it is, and give the marine figure as the answer.
Three real examples of this exact error, found in this app's own content:
- CO2 quantity for a machinery space: the answer is the FSS Code free-gas rule, NOT NFPA 12's 34% design concentration.
- Water mist: the marine definition comes from the FSS Code and MSC.1/Circ.1165, NOT NFPA 750's droplet threshold.
- ODS record book: the requirement is MARPOL Annex VI Regulation 12, NOT the EU F-gas leak-check threshold.
If you catch yourself about to quote NFPA, stop and ask what the marine document says.

NEVER INVENT A NUMBER
A specific figure you are not sure of, a pressure, a voltage, a percentage, a clause number, does not go in. Give the principle and the reasoning instead, and put the missing figure in flags. An answer that explains the mechanism correctly and omits one value is useful. An answer with a confident wrong value costs the cadet the question.
The same applies to regulation citations. Cite a clause only when you are sure of it. A wrong regulation number invites a follow-up the candidate cannot survive.

FORMAT, WHICH IS ENFORCED BY THE RENDERER
Write 4 to 6 lines. Each line is "Label: sentence" where Label is 1 to 3 words followed by a colon. No markdown, no bullet characters, no numbering, no headings, no blank lines between them. The app renders each such line as a labelled bullet; anything else renders as a loose paragraph and looks wrong.

Shape of an answer, for format only:
Definition: what the thing is, in one sentence.
Working Principle: how it does what it does.
Shipboard Application: where the cadet meets it on their own vessel.
Typical Values: the figures a surveyor expects, only where you are certain of them.
Common Fault: what goes wrong with it and what that looks like.

Vary the labels to suit the question. A procedure question takes steps as labels; a comparison question takes the two things being compared.

VOICE
Professional and plain. Written by a working ETO for a cadet, not by a textbook. No em dashes, use a colon or a comma. Avoid "it is worth noting", "crucially", "robust", "delve", "leverage", and sentences built on "not X, but Y". Say the thing directly.

NOT EVERY LINE IS AN EXAM QUESTION
Recollections are written from memory and carry the whole encounter, including
things nobody needs an answer to. Classify each line first:
  exam         a technical or regulatory question. Answer it.
  chat         small talk and stage directions: "GO to the mirror and adjust your
               tie properly", "Wait in lobby", "3rd attempt". No answer.
  personal     about the candidate rather than the syllabus: "Which company
               sailed on", "What type ship sailed". No answer. These are real
               opening questions, but the answer is the cadet's own history and
               nothing can be written for them.
For chat and personal, return kind and leave answer empty. Do not invent a
technical reading of a line that plainly is not one.

CONFIDENCE, HONESTLY
high: standard syllabus material you are certain of, marine sourced.
medium: correct in substance, but a figure or a clause number needs checking against the source.
low: the question is ambiguous, or the answer depends on the specific vessel, or you are working from shore knowledge that may not transfer.
Do not mark something high because it reads well. The console shows low and medium first, and that is how a person's reading time gets spent where it matters.`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) {
      return json({ error: 'ANTHROPIC_API_KEY is not set on this project' }, 500);
    }

    const auth = req.headers.get('Authorization') ?? '';
    const sb = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: auth } } },
    );

    // Admin only. The RLS policy would stop the write anyway, but failing here
    // means no API spend on a request that could never have been saved.
    const { data: who } = await sb.auth.getUser();
    if (!who?.user) return json({ error: 'Not signed in' }, 401);
    const { data: isAdmin } = await sb.rpc('is_admin');
    if (!isAdmin) return json({ error: 'Admins only' }, 403);

    const body = await req.json().catch(() => ({}));
    const ids: string[] = Array.isArray(body.ids) ? body.ids.slice(0, 60) : [];
    if (!ids.length) return json({ error: 'No question ids given' }, 400);

    const { data: qs, error } = await sb.from('exam_questions')
      .select('id,question_text,topic,answer_text').in('id', ids);
    if (error) return json({ error: error.message }, 500);

    // Never overwrite an answer that already exists. Re-drafting one is a
    // deliberate act, done by clearing it first.
    const todo = (qs ?? []).filter((q) => !q.answer_text || !q.answer_text.trim());
    if (!todo.length) return json({ drafted: 0, note: 'Every one of those already has an answer' });

    const listed = todo.map((q, i) =>
      `${i + 1}. ${q.question_text}${q.topic ? `  [syllabus topic ${q.topic}]` : ''}`).join('\n');

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      signal: AbortSignal.timeout(300000),
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 16000,
        system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
        // A tool schema rather than "reply in JSON": the API enforces the
        // shape, so there is no prose to strip and no fence to trip over.
        /* strict:true makes the API enforce the schema instead of hoping.
           Without it the first run came back missing `confidence` on four of
           six answers even though it was in `required`, which would have
           silently defaulted every one of them to unreviewed.

           Topic is deliberately NOT asked for. The console already classifies
           it with a model trained on the 1,193 questions this app labelled by
           hand, which agrees with house convention; asking here produced free
           text like "HRC fuse" instead of a T-code. Let each side do what it
           is good at. */
        tools: [{
          name: 'answers',
          description: 'One drafted answer for every question, in the order given.',
          strict: true,
          input_schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              a: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    i: { type: 'integer', description: 'the question number from the list' },
                    kind: {
                      type: 'string',
                      enum: ['exam', 'chat', 'personal'],
                      description: 'exam gets an answer; chat and personal do not',
                    },
                    answer: { type: 'string', description: '4 to 6 "Label: sentence" lines for an exam question, empty string otherwise' },
                    confidence: {
                      type: 'string',
                      enum: ['high', 'medium', 'low'],
                      description: 'high only for standard marine syllabus material you are certain of',
                    },
                    flags: {
                      type: 'string',
                      description: 'Empty string when there is nothing to raise. Otherwise what needs checking and why, under 25 words: a figure you left out, an ambiguity, a clause number to verify.',
                    },
                  },
                  required: ['i', 'kind', 'answer', 'confidence', 'flags'],
                },
              },
            },
            required: ['a'],
          },
        }],
        tool_choice: { type: 'tool', name: 'answers' },
        messages: [{
          role: 'user',
          content: `These questions were asked at an MMD oral examination. Write a model answer for each.\n\n${listed}`,
        }],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return json({ error: `Claude API ${res.status}`, detail: detail.slice(0, 400) }, 502);
    }

    const out = await res.json();
    const block = (out.content ?? []).find((b: any) => b.type === 'tool_use');
    if (!block) return json({ error: 'No structured answer came back' }, 502);

    const drafted: any[] = block.input?.a ?? [];
    let saved = 0;
    const results: any[] = [];

    for (const d of drafted) {
      const q = todo[(d.i ?? 0) - 1];
      // A line the model judged not to be an exam question gets no answer.
      if (!q || d.kind !== 'exam' || !d.answer) continue;
      // Topic is set by the console's own classifier, not here.
      // reviewed_at stays NULL: nothing here has been read by a person yet,
      // and the console sorts on exactly that.
      const up = await sb.from('exam_questions').update({
        answer_text: String(d.answer).trim(),
        ai_confidence: d.confidence ?? null,
        ai_flags: (d.flags ?? '').trim() || null,
        ai_model: MODEL,
        reviewed_at: null,
      }).eq('id', q.id);
      if (!up.error) {
        saved++;
        results.push({ id: q.id, confidence: d.confidence, flags: d.flags || '' });
      }
    }

    return json({
      drafted: saved,
      asked: todo.length,
      model: MODEL,
      usage: out.usage ?? null,
      results,
    });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
