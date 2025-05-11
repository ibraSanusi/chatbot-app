# 🧠 Chatbot App – Prueba Técnica Full Stack (Next.js)

Este proyecto es una solución para la prueba técnica de Clintell, cuyo objetivo es demostrar habilidades como Full Stack Developer con enfoque en Frontend usando Next.js 14 (App Router). La aplicación permite a usuarios autenticarse con login simulado, interactuar con un chatbot y ver su historial de conversaciones.

---

## 🚀 Tecnologías principales

- **Next.js 14** con App Router
- **TypeScript**
- **Zustand** para estado global
- **Tailwind CSS**
- **API Routes** simuladas con `fetch` local
- **JSON** como base de datos mock (usuarios y chats)
- **Figma** para replicar la UI base

---

## 🧱 Estructura del Proyecto

```
/app
  ├── /api                → Rutas API para login, usuario y chats
  ├── /components         → Componentes compartidos globales
  ├── /helpers            → Funciones auxiliares como generación de títulos
  ├── /hooks              → Custom Hooks (ej: input del chat)
  ├── /interfaces         → Tipado global con TypeScript
  ├── /lib/api            → Lógica para llamadas a API internas
  ├── /pages              → Rutas legacy como /auth/login (puede migrarse a /app)
  ├── /ui                 → Componentes UI base (Button, Iconos, etc.)
  └── /store/chatStore.ts → Estado global (chats, mensajes)

+ /data/                  → Archivos JSON para usuarios y chats simulados
+ /auth.ts                → Lógica auxiliar de autenticación
+ /middleware.ts          → Middleware para proteger rutas y verificar tokens/cookies
```

---

## ✅ Funcionalidades

- **Login falso**: validación contra `/data/users.json`.
- **Listado de chats por usuario**: persistencia temporal con `chatStore`.
- **Detalle de chat**: mensajes del usuario y respuestas del bot.
- **Chatbot**: envía mensaje y obtiene una respuesta simulada (placeholder).

---

## ▶️ ¿Cómo ejecutar?

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ibraSanusi/chatbot-app.git
   cd chatbot-app
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

---

## 🔍 Decisiones técnicas

- **Next.js App Router**: mejor organización y escalabilidad por segmentos.
- **Zustand**: más simple que Redux para esta escala; buena integración con el flujo de mensajes.
- **JSON simulados**: más rápido para pruebas, imitando una BBDD simple.
- **Modularidad**: separación clara por responsabilidades: API, lógica, vistas y componentes base.
- **Middleware de autenticación**: protege rutas sensibles (como `/chats`) verificando cookies y redirigiendo al login en caso necesario.

---

## 📈 Posibles mejoras

- Persistencia real con SQLite, PostgreSQL o Firebase.
- Autenticación con NextAuth u OAuth.
- Integración con API de OpenAI o HuggingFace.
- Soporte offline (IndexedDB o LocalStorage).
- Pruebas unitarias con Jest o Testing Library.
- Dark mode y accesibilidad (a11y).
- Mejor manejo de errores y loading states.

---

## 📬 Contacto

Ibrahim Sanusi
Frontend Developer
📧 ibra.sanusi.ayo@gmail.com
