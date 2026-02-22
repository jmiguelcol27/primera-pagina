// WhatsApp link (con mensaje inicial)
const phoneE164 = "17865992191"; // +1 786 599 2191 (sin +, sin espacios)
const defaultMsg = "Hola! Estoy interesado/a en un arreglo con globos. ¿Me ayudas con información y disponibilidad?";

const waLink = `https://wa.me/${phoneE164}?text=${encodeURIComponent(defaultMsg)}`;

const btns = ["whatsappBtn", "whatsappBtn2", "whatsappBtn3"];
btns.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// (Opcional) Cuando hacen clic en un "chip", cambia el mensaje sugerido
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const tema = chip.textContent.trim();
    const msg = `Hola! Quiero un arreglo con globos para: ${tema}. ¿Qué opciones tienen y cuánto cuesta?`;
    const link = `https://wa.me/${phoneE164}?text=${encodeURIComponent(msg)}`;
    window.open(link, "_blank", "noopener");
  });
});
