/* Shared by the main app and the Sponsorship page.

   Lives in its own file because both pages render .n-table content and both
   need the same behaviour. It used to sit inside app.js, which Sponsorship
   does not load, so Sponsorship's tables scrolled on phones with nothing to
   say they scrolled: the exact failure the comment below describes, in the
   one place the fix had not reached. Duplicating it into the second page
   would set up the kind of drift that has bitten this codebase before, so it
   moved here and both pages load it.

   Must be loaded BEFORE app.js, which calls it in four places. */

// Tables that overflow horizontally on mobile (see .n-table's max-width:768px
// rule in style.css) read as clean and complete, not cut off - nothing about
// them signals there is more to the right. Wraps every table that actually
// overflows (measured after render, not guessed from viewport width, so it
// stays correct across orientation changes and tablet-sized screens) with a
// small pulsing hint that fades out the first time that specific table is
// scrolled or touched.
function _addTableScrollHints(container) {
    if (!container) return;
    var tables = container.querySelectorAll('.n-table');
    if (!tables.length) return;

    function checkOne(table, wrap) {
        var overflowing = table.scrollWidth > table.clientWidth + 2;
        wrap.classList.toggle('has-scroll-hint', overflowing && !wrap.classList.contains('hint-dismissed'));
    }

    tables.forEach(function(table) {
        if (table.dataset.scrollHinted) return;
        table.dataset.scrollHinted = '1';

        var wrap = document.createElement('div');
        wrap.className = 'n-table-wrap';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);

        var hint = document.createElement('span');
        hint.className = 'n-table-hint';
        hint.setAttribute('aria-hidden', 'true');
        hint.textContent = '⇄'; // ⇄
        wrap.appendChild(hint);

        checkOne(table, wrap);

        var dismiss = function() { wrap.classList.add('hint-dismissed'); wrap.classList.remove('has-scroll-hint'); };
        table.addEventListener('scroll', dismiss, { passive: true, once: true });
        table.addEventListener('touchstart', dismiss, { passive: true, once: true });

        window.addEventListener('resize', function() { checkOne(table, wrap); });
    });
}
