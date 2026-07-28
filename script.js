/* ============================================================
   Sai Mudragada — portfolio interactions
   1. Scroll reveal
   2. Metric count-up
   3. Live system log (typed loop)
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

  /* ---------- 2. metric count-up ---------- */
  function animateCount(el) {
    var target = parseFloat(el.dataset.target);
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix || "";
    var duration = 1400;
    var start = null;

    function frame(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll(".count");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    counters.forEach(function (el) {
      el.textContent = (el.dataset.prefix || "") + el.dataset.target + (el.dataset.suffix || "");
    });
  } else {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { countObserver.observe(el); });
  }

  /* ---------- 3. live system log ---------- */
  var logEl = document.getElementById("syslog");
  if (!logEl) return;

  var LOG_LINES = [
    { t: "07:14:03", text: "signal detected — series-A raise, no cloud contract on record", ok: false },
    { t: "07:14:05", text: "clay: waterfall enrichment complete · 37 fields resolved", ok: false },
    { t: "07:14:09", text: "hubspot: upserted 1 record · 0 duplicates · 0 stale", ok: false },
    { t: "07:14:12", text: "outbound: account-specific draft generated · relevancy 0.94", ok: false },
    { t: "07:14:14", text: "meddic: economic buyer identified · champion flagged", ok: false },
    { t: "07:16:41", text: 'reply received: "this is timely — let’s talk."', ok: true },
  ];

  if (reducedMotion) {
    LOG_LINES.forEach(function (line) { appendLine(line, true); });
    return;
  }

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

  // start the log only once it scrolls into view
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
