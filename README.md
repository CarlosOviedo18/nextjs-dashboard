# Acme Dashboard — Next.js

Panel de administración de facturas construido con **Next.js (App Router)**, basado en el curso oficial [Learn Next.js](https://nextjs.org/learn/dashboard-app). Permite ver métricas de ingresos, gestionar facturas (crear, editar, eliminar, buscar y paginar) y consultar clientes, todo protegido con inicio de sesión.

##  Credenciales de prueba

Si quieres navegar por el dashboard, inicia sesión en `/login` con:

| Campo      | Valor               |
| ---------- | ------------------- |
| Email      | `user@nextmail.com` |
| Contraseña | `123456`            |

> Este usuario se crea al ejecutar el seed (`/seed`) a partir de [app/lib/placeholder-data.ts](app/lib/placeholder-data.ts). La contraseña se guarda hasheada con bcrypt en la base de datos.

##  Tecnologías utilizadas

- **[Next.js](https://nextjs.org/)** — App Router, Server Components, Server Actions, Turbopack en desarrollo
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** + `@tailwindcss/forms` — estilos
- **[NextAuth.js v5 (Auth.js)](https://authjs.dev/)** — autenticación con proveedor de credenciales
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** — hash de contraseñas
- **[Zod](https://zod.dev/)** — validación de formularios y credenciales
- **[postgres](https://github.com/porsager/postgres)** — cliente SQL para PostgreSQL
- **[Supabase / Vercel Postgres](https://supabase.com/)** — base de datos
- **[Heroicons](https://heroicons.com/)** — iconos
- **[use-debounce](https://www.npmjs.com/package/use-debounce)** — búsqueda con debounce
- **[clsx](https://www.npmjs.com/package/clsx)** — clases condicionales
- **ESLint** — linting
- **pnpm** — gestor de paquetes

##  Funcionalidades

- **Login protegido**: todas las rutas `/dashboard/*` requieren sesión (ver [auth.config.ts](auth.config.ts) y [proxy.ts](proxy.ts)).
- **Resumen**: tarjetas con totales, gráfico de ingresos y últimas facturas, con *streaming* y skeletons de carga.
- **Facturas**: listado con búsqueda y paginación por URL, creación, edición y eliminación mediante Server Actions.
- **Clientes**: tabla de clientes con sus totales.
- **Manejo de errores**: páginas `error.tsx` y `not-found.tsx`, y validación de formularios con mensajes por campo.

##  Estructura principal

```
app/
├── dashboard/          # Páginas del panel (overview, invoices, customers)
├── lib/                # Acciones, consultas SQL, tipos y utilidades
├── login/              # Página de inicio de sesión
├── seed/route.ts       # Endpoint para crear tablas y datos de prueba
├── query/route.ts      # Endpoint de consulta de ejemplo
└── ui/                 # Componentes de interfaz
auth.ts                 # Configuración de NextAuth + proveedor de credenciales
auth.config.ts          # Reglas de autorización y página de login
proxy.ts                # Middleware que protege las rutas
```

##  Cómo ejecutarlo localmente

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/CarlosOviedo18/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. **Instala dependencias**

   ```bash
   pnpm install
   ```

3. **Configura las variables de entorno** creando un archivo `.env` en la raíz:

   ```env
   STORAGE_POSTGRES_URL=postgres://...
   STORAGE_POSTGRES_URL_NON_POOLING=postgres://...

   # Genera uno con: openssl rand -base64 32
   AUTH_SECRET=tu_secreto
   AUTH_URL=http://localhost:3000/api/auth
   ```

4. **Inicia el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

5. **Carga los datos de prueba** visitando una sola vez:

   ```
   http://localhost:3000/seed
   ```

6. Abre [http://localhost:3000](http://localhost:3000) e inicia sesión con las credenciales de arriba.

##  Scripts

| Comando      | Descripción                             |
| ------------ | --------------------------------------- |
| `pnpm dev`   | Servidor de desarrollo con Turbopack    |
| `pnpm build` | Compila la app para producción          |
| `pnpm start` | Ejecuta la app compilada                |
| `pnpm lint`  | Revisa el código con ESLint             |

## Autor

**Carlos Oviedo** — [GitHub](https://github.com/CarlosOviedo18)
