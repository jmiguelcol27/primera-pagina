diff --git a/script.js b/script.js
index 6a56059e3b5e074672fa8df7b66cad4de8d9e9a9..db47b21c94b84c95d35c22d548de19f3f3f9c372 100644
--- a/script.js
+++ b/script.js
@@ -1,21 +1,30 @@
-// WhatsApp link (con mensaje inicial)
-const phoneE164 = "17865992191"; // +1 786 599 2191 (sin +, sin espacios)
-const defaultMsg = "Hola! Estoy interesado/a en un arreglo con globos. ¿Me ayudas con información y disponibilidad?";
+const config = window.SITE_CONFIG || {};
+const phoneE164 = config.whatsappPhoneE164 || "17865992191";
+const defaultMsg = config.defaultMessage || "Hola! Estoy interesado/a en un arreglo con globos.";
 
-const waLink = `https://wa.me/${phoneE164}?text=${encodeURIComponent(defaultMsg)}`;
+const makeWaLink = (message) => `https://wa.me/${phoneE164}?text=${encodeURIComponent(message || defaultMsg)}`;
 
-const btns = ["whatsappBtn", "whatsappBtn2", "whatsappBtn3"];
-btns.forEach(id => {
-  const el = document.getElementById(id);
-  if (el) el.href = waLink;
+document.querySelectorAll(".js-wa-link").forEach((link) => {
+  const customMessage = link.dataset.message;
+  link.href = makeWaLink(customMessage);
+
+  link.addEventListener("click", () => {
+    if (typeof window.gtag === "function") {
+      window.gtag("event", "whatsapp_click", {
+        event_category: "engagement",
+        event_label: link.id || "whatsapp-link"
+      });
+    }
+  });
 });
 
-// (Opcional) Cuando hacen clic en un "chip", cambia el mensaje sugerido
-document.querySelectorAll(".chip").forEach(chip => {
+document.querySelectorAll(".chip").forEach((chip) => {
   chip.addEventListener("click", () => {
     const tema = chip.textContent.trim();
-    const msg = `Hola! Quiero un arreglo con globos para: ${tema}. ¿Qué opciones tienen y cuánto cuesta?`;
-    const link = `https://wa.me/${phoneE164}?text=${encodeURIComponent(msg)}`;
-    window.open(link, "_blank", "noopener");
+    const msg = `Hola! Quiero un arreglo con globos para ${tema}. Fecha: ____. Presupuesto aproximado: ____. ¿Qué opciones tienen?`;
+    window.open(makeWaLink(msg), "_blank", "noopener");
   });
 });
+
+const year = document.getElementById("year");
+if (year) year.textContent = new Date().getFullYear();
