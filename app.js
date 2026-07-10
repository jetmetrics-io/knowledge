(function () {
  // The cheatsheet count lives in the library's own data.json — never copy it
  // here, or this landing starts lying the day a cheatsheet is added.
  var DATA_URL = "https://jetmetrics-io.github.io/hub-cheatsheets/data.json";

  function pluralize(n, one, few, many) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  }

  var badge = document.getElementById("jm-kb-cheatsheets-count");
  if (!badge) return;

  fetch(DATA_URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var total = data.items.length;
      badge.textContent = total + " " + pluralize(total, "читшит", "читшита", "читшитов");
      badge.hidden = false;
    })
    // Better no badge than a stale number.
    .catch(function () { badge.remove(); });
})();
