const config = window.SITE_CONFIG || {};
const phoneE164 = config.whatsappPhoneE164 || "17865992191";
const defaultMsg = config.defaultMessage || "Hola! Estoy interesado/a en un arreglo con globos.";

const pricing = {
  perBalloon: 2.5,
  baseFee: 35,
  perMile: 1.75
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const makeWaLink = (message) => `https://wa.me/${phoneE164}?text=${encodeURIComponent(message || defaultMsg)}`;

document.querySelectorAll(".js-wa-link").forEach((link) => {
  const customMessage = link.dataset.waMessage || link.dataset.message;
  const currentHref = link.getAttribute("href") || "";

  if (customMessage) {
    link.href = makeWaLink(customMessage);
  } else if (!currentHref || currentHref === "#") {
    link.href = makeWaLink(defaultMsg);
  }

  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: link.id || "whatsapp-link"
      });
    }
  });
});

// Calculadora de estimado
const qtyInput = document.getElementById("balloonQty");
// Calculadora de estimado (sin cantidad de globos)
const detailsInput = document.getElementById("eventDetails");
const milesInput = document.getElementById("milesDistance");
const occasionInput = document.getElementById("occasionType");
const quoteBtn = document.getElementById("whatsappQuoteBtn");

const calcQty = document.getElementById("calcQty");
const calcMiles = document.getElementById("calcMiles");
const calcPriceBalloon = document.getElementById("calcPriceBalloon");
const calcPriceMile = document.getElementById("calcPriceMile");
const calcBalloonsTotal = document.getElementById("calcBalloonsTotal");
const calcDeliveryTotal = document.getElementById("calcDeliveryTotal");
const calcGrandTotal = document.getElementById("calcGrandTotal");

if (calcPriceBalloon) calcPriceBalloon.textContent = pricing.perBalloon.toFixed(2);
if (calcPriceMile) calcPriceMile.textContent = pricing.perMile.toFixed(2);

const updateCalculator = () => {
  if (!qtyInput || !milesInput) return;

  const qty = Math.max(1, Number(qtyInput.value) || 1);
  const miles = Math.max(0, Number(milesInput.value) || 0);
  const occasion = occasionInput ? occasionInput.value : "Evento";

  const balloonsTotal = qty * pricing.perBalloon;
  const deliveryTotal = miles * pricing.perMile;
  const grandTotal = balloonsTotal + deliveryTotal;

  if (calcQty) calcQty.textContent = String(qty);
  if (calcMiles) calcMiles.textContent = miles.toFixed(1);
  if (calcBalloonsTotal) calcBalloonsTotal.textContent = money.format(balloonsTotal);
const calcBaseTotal = document.getElementById("calcBaseTotal");
const calcMiles = document.getElementById("calcMiles");
const calcPriceMile = document.getElementById("calcPriceMile");
const calcDeliveryTotal = document.getElementById("calcDeliveryTotal");
const calcGrandTotal = document.getElementById("calcGrandTotal");

if (calcBaseTotal) calcBaseTotal.textContent = money.format(pricing.baseFee);
if (calcPriceMile) calcPriceMile.textContent = pricing.perMile.toFixed(2);

const updateCalculator = () => {
  if (!milesInput) return;

  const miles = Math.max(0, Number(milesInput.value) || 0);
  const occasion = occasionInput ? occasionInput.value : "Evento";
  const details = detailsInput ? detailsInput.value.trim() : "";

  const deliveryTotal = miles * pricing.perMile;
  const grandTotal = pricing.baseFee + deliveryTotal;

  if (calcMiles) calcMiles.textContent = miles.toFixed(1);
  if (calcDeliveryTotal) calcDeliveryTotal.textContent = money.format(deliveryTotal);
  if (calcGrandTotal) calcGrandTotal.textContent = money.format(grandTotal);

  if (quoteBtn) {
    const msg = `Hola! Me gustaría cotizar un arreglo de globos. Ocasión: ${occasion}. Cantidad: ${qty} globos. Distancia: ${miles.toFixed(1)} millas. Estimado mostrado: ${money.format(grandTotal)}.`;
    const detailText = details || "Necesito asesoría para definir el arreglo.";
    const msg = `Hola! Quiero cotizar un arreglo de globos. Ocasión: ${occasion}. Distancia: ${miles.toFixed(1)} millas. Tipo de arreglo: ${detailText}. Estimado mostrado: ${money.format(grandTotal)}.`;
    quoteBtn.href = makeWaLink(msg);
  }
};

[qtyInput, milesInput, occasionInput].forEach((input) => {
[detailsInput, milesInput, occasionInput].forEach((input) => {
  if (input) input.addEventListener("input", updateCalculator);
  if (input) input.addEventListener("change", updateCalculator);
});
updateCalculator();

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const tema = chip.textContent.trim();
    const msg = `Hola! Quiero un arreglo con globos para ${tema}. Fecha: ____. Presupuesto aproximado: ____. ¿Qué opciones tienen?`;
    window.open(makeWaLink(msg), "_blank", "noopener");
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
