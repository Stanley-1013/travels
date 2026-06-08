const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

const closeNav = () => {
  navToggle?.setAttribute("aria-expanded", "false");
  navLinks?.classList.remove("open");
};

navToggle?.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  navLinks?.classList.toggle("open", willOpen);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

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

const photoInput = document.querySelector("#photo-input");
const photoWall = document.querySelector("#photo-wall");

photoInput?.addEventListener("change", () => {
  const files = [...photoInput.files].filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;

  photoWall.innerHTML = "";
  files.forEach((file, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("p");
    figure.className = "photo-memory";
    image.src = URL.createObjectURL(file);
    image.alt = `本機預覽照片 ${index + 1}`;
    image.addEventListener("load", () => URL.revokeObjectURL(image.src), { once: true });
    caption.textContent = file.name;
    figure.append(image, caption);
    photoWall.append(figure);
  });
});
