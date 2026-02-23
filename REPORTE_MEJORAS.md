# Auditoría rápida del sitio web

Este reporte resume errores detectados y oportunidades de mejora para la landing de **Tu Negocio de Globos**.

## 1) Errores / riesgos actuales

1. **Dependencia de JavaScript para enlaces de WhatsApp**
   - Los tres botones principales inician con `href="#"` y solo funcionan cuando `script.js` corre correctamente.
   - Si falla JS, el CTA principal queda roto.

2. **Número de WhatsApp hardcodeado en frontend**
   - El número está definido directamente en `script.js`.
   - Cada cambio requiere editar y redeployar código.

3. **Portafolio sin imágenes reales**
   - Actualmente se muestran placeholders (`📷` + “Próximamente”), lo cual reduce confianza y conversión.

4. **Testimonios de ejemplo no validados**
   - Los testimonios aparentan reales, pero el propio texto indica que son editables.
   - Esto puede afectar credibilidad si no se reemplazan por reseñas reales.

5. **SEO social incompleto**
   - Falta metadata Open Graph / Twitter Card para compartir enlaces en WhatsApp, Facebook e Instagram con mejor vista previa.

6. **Accesibilidad mejorable**
   - Hay elementos visuales con emojis como contenido principal (ej. logo/preview) sin alternativa semántica equivalente.
   - No hay estados `:focus-visible` explícitos para mejorar navegación con teclado.

## 2) Mejoras de alto impacto (prioridad alta)

1. **Dar fallback real a WhatsApp sin JS**
   - Poner el enlace `https://wa.me/...` directamente en cada botón (`href`) y dejar JS solo para personalizar mensajes por categoría.

2. **Reemplazar placeholders por trabajos reales**
   - Subir al menos 6 fotos optimizadas (`webp` o `jpg` comprimido).
   - Añadir `alt` descriptivo y `loading="lazy"`.

3. **Agregar prueba social real**
   - Sustituir testimonios de muestra por capturas o citas reales (ideal con nombre inicial + fecha/ocasión).

4. **Agregar bloque de información comercial clave**
   - Zonas de entrega, horarios de atención, métodos de pago, tiempo mínimo de anticipación.

5. **Optimizar SEO básico local**
   - Añadir `meta property="og:*"`, `twitter:*`, canonical, y datos estructurados tipo `LocalBusiness`.

## 3) Mejoras de conversión (prioridad media)

1. **CTA persistente en móvil**
   - Botón flotante de WhatsApp en la esquina inferior para subir tasa de contacto.

2. **Plantillas de mensaje por ocasión**
   - Ya existe la idea con chips; se puede enriquecer incluyendo fecha y presupuesto orientativo en el mensaje prellenado.

3. **Sección de paquetes/precios desde**
   - Mostrar 3 niveles (básico, medio, premium) para reducir fricción inicial.

4. **Microcopys orientados a cierre**
   - Ejemplos: “Cotización en menos de 10 min”, “Agenda con 50% de anticipo”, “Entrega puntual garantizada”.

## 4) Mejoras técnicas (prioridad media-baja)

1. **Variables de configuración**
   - Mover el número de WhatsApp y mensajes a un `config.js` o inyectarlo por entorno para no tocar lógica principal.

2. **Imágenes optimizadas**
   - Usar tamaños responsivos y compresión para mejorar LCP.

3. **Estados de foco accesibles**
   - Definir estilos `:focus-visible` en botones y enlaces.

4. **Monitoreo básico**
   - Integrar analítica ligera (por ejemplo eventos de clic en WhatsApp) para medir conversión.

## 5) Plan de implementación sugerido (1 semana)

- **Día 1:** Fallback de WhatsApp + metadata SEO social.
- **Día 2-3:** Cargar portafolio real optimizado y testimonios reales.
- **Día 4:** Añadir sección de cobertura/pagos/tiempos + paquetes.
- **Día 5:** Ajustes de accesibilidad, medición de clics y revisión final móvil.

## 6) Resultado esperado

Con estas mejoras, deberías ver:
- Más clics al WhatsApp (mejor CTA + confianza visual).
- Mejor percepción de marca (portafolio y reseñas reales).
- Más contactos calificados (información clara de cobertura/precios/tiempos).
