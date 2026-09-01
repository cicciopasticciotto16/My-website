// FRIENDS PANEL
// Apre/chiude il pannello degli amici (vedi layouts/partials/friends.html).
// Lo stato vive in una classe sul contenitore: l'animazione e' in CSS.
(function () {
  const root = document.querySelector("[data-friends]");
  if (!root) return;

  const fab = root.querySelector("[data-friends-toggle]");
  const closeBtn = root.querySelector("[data-friends-close]");
  const panel = root.querySelector(".friends__panel");

  function setOpen(open) {
    root.classList.toggle("friends--open", open);
    fab.setAttribute("aria-expanded", open ? "true" : "false");
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    // Sposta il focus dove l'utente si aspetta di trovarlo
    (open ? closeBtn : fab).focus();
  }

  const isOpen = () => root.classList.contains("friends--open");

  fab.addEventListener("click", () => setOpen(!isOpen()));
  closeBtn.addEventListener("click", () => setOpen(false));

  // Esc chiude
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) setOpen(false);
  });

  // Click fuori dal pannello chiude
  document.addEventListener("click", (event) => {
    if (isOpen() && !root.contains(event.target)) setOpen(false);
  });
})();
