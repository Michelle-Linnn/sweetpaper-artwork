(function () {
  var labs = window.SWEETPAPER_LABS || [];
  var founder = window.SWEETPAPER_FOUNDER;
  var grid = document.getElementById("lab-grid");
  var filters = document.getElementById("filters");
  var active = "All";

  var themes = ["All"];
  labs.forEach(function (l) {
    if (themes.indexOf(l.theme) === -1) themes.push(l.theme);
  });

  function renderFilters() {
    filters.innerHTML = "";
    themes.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = t;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", t === active);
      b.onclick = function () {
        active = t;
        renderFilters();
        renderGrid();
      };
      filters.appendChild(b);
    });
  }

  function renderGrid() {
    grid.innerHTML = "";
    var shown = labs.filter(function (l) {
      return active === "All" || l.theme === active;
    });
    shown.forEach(function (l) {
      var soon = l.status === "soon" || !l.id;
      var card = document.createElement(soon ? "div" : "a");
      card.className = "card" + (soon ? " is-soon" : "");
      if (!soon) card.href = "labs/" + l.id + "/index.html";
      card.style.setProperty("--tint", l.color);
      card.innerHTML =
        '<div class="card-art"><span class="no">' + l.no + "</span></div>" +
        '<div class="card-body">' +
        '<div class="meta"><span class="tag">' + l.theme + "</span><span>" + l.year + "</span></div>" +
        "<h3>" + l.title + "</h3>" +
        "<p>" + l.desc + "</p>" +
        '<span class="go">' + (soon ? "Coming soon" : "Open lab →") + "</span>" +
        "</div>";
      grid.appendChild(card);
    });
    document.getElementById("lab-count").textContent =
      "(" + labs.filter(function (l) { return l.status !== "soon"; }).length + ")";
  }

  if (founder) {
    document.getElementById("founder-name").textContent = founder.name;
    document.getElementById("founder-link").href = founder.url;
  }
  document.getElementById("year").textContent = new Date().getFullYear();

  renderFilters();
  renderGrid();
})();
