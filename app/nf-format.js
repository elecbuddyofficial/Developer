/* Notification text formatting, shared by the CoC app, the Sponsorship app and
   the admin console (whose live preview must show exactly what readers get,
   which only holds if all three run the same code).

   Notices are stored as plain text with a few markers, never as HTML:
     **bold**   *italic*   __underline__
     lines starting "- " or "• "     -> bullet list
     lines starting "1. " or "1) "   -> numbered list
     [label](https://...)            -> link
     a bare https://... address      -> link

   SAFETY: the text is HTML-escaped FIRST, quotes included, and only then are
   the markers turned into tags this file writes itself. So nothing an admin
   types can become live markup, and a link can only ever be http or https.
   (linkifyNf in index.html used the same escape-first order; it left " alone,
   which is why it had to cut URLs short at a quote. Escaping quotes here
   removes that whole class of problem.)

   No lookbehind in any pattern: older iOS Safari throws a SyntaxError on it,
   and a syntax error here would blank every notification on those phones.

   Old notices have no markers, so they render as before; their line breaks
   become <br>, which the pre-wrap containers they sit in showed anyway. */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function anchor(href, label) {
    return '<a class="nf-link" href="' + href + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }

  // Inline markers on one already-escaped line.
  function inline(line) {
    var saved = [];
    var keep = function (html) { saved.push(html); return '\u0000' + (saved.length - 1) + '\u0000'; };

    // Links first, parked behind placeholders, so an underscore or asterisk
    // inside an address is never read as formatting.
    // An address stops at an escaped quote: no real URL contains one, and
    // without this a quote typed after an address was swallowed into it.
    line = line.replace(/\[([^\]\n]{1,200})\]\((https?:\/\/(?:(?!&quot;|&#39;)[^\s)])+)\)/g, function (m, label, url) {
      return keep(anchor(url, label));
    });
    line = line.replace(/https?:\/\/(?:(?!&quot;|&#39;)[^\s<])+/g, function (url) {
      var tail = '', t = url.match(/[.,;:!?)\]]+$/);
      if (t) { tail = t[0]; url = url.slice(0, -tail.length); }
      return keep(anchor(url, url)) + tail;
    });

    line = line.replace(/\*\*([^\s*](?:[^*]*?[^\s*])?)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/__([^\s_](?:[^_]*?[^\s_])?)__/g, '<u>$1</u>');
    line = line.replace(/(^|[^*\w])\*([^\s*](?:[^*]*?[^\s*])?)\*(?![*\w])/g, '$1<em>$2</em>');

    return line.replace(/\u0000(\d+)\u0000/g, function (m, i) { return saved[+i]; });
  }

  var BULLET = /^\s*[-•]\s+(.*)$/;
  var NUMBER = /^\s*(\d{1,3})[.)]\s+(.*)$/;

  /* opts.inline: for one-line previews (the notification list, where the
     body is clamped to two lines). Lists become "• item" text there, since a
     real list inside a line clamp breaks the clamp. */
  function render(text, opts) {
    var inlineOnly = !!(opts && opts.inline);
    var lines = esc(String(text == null ? '' : text).replace(/\r\n?/g, '\n')).split('\n');
    var out = [], list = null, buf = [];

    function flushText() { if (buf.length) { out.push(buf.join('<br>')); buf = []; } }
    function flushList() {
      if (!list) return;
      out.push('<' + list.tag + ' class="nf-list">' + list.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</' + list.tag + '>');
      list = null;
    }

    lines.forEach(function (raw) {
      var b = raw.match(BULLET), n = !b && raw.match(NUMBER);
      if (inlineOnly) {
        buf.push(b ? '• ' + inline(b[1]) : inline(raw));
        return;
      }
      if (b || n) {
        var tag = b ? 'ul' : 'ol';
        flushText();
        if (list && list.tag !== tag) flushList();
        if (!list) list = { tag: tag, items: [] };
        list.items.push(inline(b ? b[1] : n[2]));
      } else {
        flushList();
        buf.push(inline(raw));
      }
    });
    flushList(); flushText();
    // Joined with <br> between blocks, so the result holds no newline at all
    // and reads the same inside a pre-wrap container as outside one.
    return out.join('<br>').replace(/(<\/[uo]l>)<br>/g, '$1').replace(/<br>(<[uo]l )/g, '$1');
  }

  window.EBFormat = { render: render, escape: esc };
})();
