const days = document.querySelectorAll(".day");

days.forEach((day) => {
  const trigger = day.querySelector(".day-trigger");
  const toggle = day.querySelector(".day-toggle");

  trigger.addEventListener("click", () => {
    const willOpen = !day.classList.contains("open");
    day.classList.toggle("open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
    toggle.textContent = willOpen ? "−" : "＋";
  });
});

const checklist = [...document.querySelectorAll('.prep-grid input[type="checkbox"]')];
const saved = JSON.parse(localStorage.getItem("busan-checklist") || "[]");

checklist.forEach((item, index) => {
  item.checked = Boolean(saved[index]);
  item.addEventListener("change", () => {
    localStorage.setItem("busan-checklist", JSON.stringify(checklist.map((box) => box.checked)));
  });
});
