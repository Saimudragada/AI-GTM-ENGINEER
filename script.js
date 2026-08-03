/* ============================================================
   Sai Mudragada — "The Field Manual" interactions
   1. Scroll reveal
   2. Receipt system-log (typed loop)
   ============================================================ */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- 2. receipt system log ---------- */
  var logEl = document.getElementById("syslog");
  if (!logEl) return;

  var LOG_LINES = [
    { t: "07:14:03", text: "signal: series-A raise, no cloud contract on record", ok: false },
    { t: "07:14:05", text: "clay: waterfall enrichment done · 37 fields resolved", ok: false },
    { t: "07:14:09", text: "hubspot: upserted 1 record · 0 dupes · 0 stale", ok: false },
    { t: "07:14:12", text: "outbound: draft generated · relevancy 0.94", ok: false },
    { t: "07:14:14", text: "meddic: economic buyer found · champion flagged", ok: false },
    { t: "07:16:41", text: 'reply: "this is timely — let’s talk."', ok: true },
  ];

  function appendLine(line, instant) {
    var span = document.createElement("span");
    span.className = "log-line";
    var t = document.createElement("span");
    t.className = "t";
    t.textContent = "[" + line.t + "]";
    var body = document.createElement("span");
    if (line.ok) body.className = "ok";
    span.appendChild(t);
    span.appendChild(body);
    logEl.appendChild(span);

    if (instant) {
      body.textContent = line.text;
      return Promise.resolve();
    }

    return new Promise(function (resolve) {
      var i = 0;
      var timer = setInterval(function () {
        body.textContent = line.text.slice(0, ++i);
        if (i >= line.text.length) {
          clearInterval(timer);
          resolve();
        }
      }, 14);
    });
  }

  if (reducedMotion) {
    LOG_LINES.forEach(function (line) { appendLine(line, true); });
    return;
  }

  function runLog() {
    logEl.innerHTML = "";
    var chain = Promise.resolve();
    LOG_LINES.forEach(function (line, idx) {
      chain = chain
        .then(function () { return appendLine(line); })
        .then(function () {
          // longer beat before the reply lands
          var wait = idx === LOG_LINES.length - 2 ? 1100 : 350;
          return new Promise(function (r) { setTimeout(r, wait); });
        });
    });
    chain.then(function () {
      setTimeout(runLog, 6000); // loop
    });
  }

  var logStarted = false;
  var logObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting && !logStarted) {
        logStarted = true;
        runLog();
        logObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  logObserver.observe(logEl);
})();
