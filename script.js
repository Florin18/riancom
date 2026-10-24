const CONTACT = {
  phoneDisplay: "0766 561 598",
  phoneInternational: "40766561598",
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

function setMenu(open) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Închide meniul" : "Deschide meniul");
  navigation.classList.toggle("is-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (
    menuButton?.getAttribute("aria-expanded") === "true" &&
    !event.target.closest(".site-header")
  ) {
    setMenu(false);
  }
});

let headerTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (headerTicking) return;
    headerTicking = true;
    window.requestAnimationFrame(() => {
      header?.setAttribute("data-scrolled", String(window.scrollY > 12));
      headerTicking = false;
    });
  },
  { passive: true },
);

const productSelect = document.querySelector("#product");
document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const requestedProduct = link.dataset.product;
    if (!productSelect || !requestedProduct) return;

    const matchingOption = [...productSelect.options].find(
      (option) => option.text === requestedProduct,
    );

    if (matchingOption) productSelect.value = matchingOption.value;
  });
});

const quoteForm = document.querySelector("#quote-form");
const formStatus = document.querySelector("#form-status");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  quoteForm.classList.add("was-validated");

  if (!quoteForm.checkValidity()) {
    formStatus.textContent = "Completează câmpurile obligatorii înainte de a continua.";
    quoteForm.reportValidity();
    return;
  }

  const data = new FormData(quoteForm);
  const line = (label, value) => `${label}: ${String(value || "—").trim() || "—"}`;
  const message = [
    "Bună ziua! Doresc o ofertă Riancom.",
    "",
    line("Nume", data.get("name")),
    line("Telefon", data.get("phone")),
    line("Email", data.get("email")),
    line("Tip client", data.get("clientType")),
    line("Produs / material", data.get("product")),
    line("Cantitate aproximativă", data.get("quantity")),
    line("Localitate livrare", data.get("locality")),
    line("Mesaj", data.get("message")),
  ].join("\n");

  formStatus.textContent = `Se deschide WhatsApp către ${CONTACT.phoneDisplay}.`;
  const whatsappUrl = `https://wa.me/${CONTACT.phoneInternational}?text=${encodeURIComponent(message)}`;
  const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!opened) window.location.href = whatsappUrl;
});

quoteForm?.removeAttribute("hidden");

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
