# Personal Profile & Life Archive

A clean, scalable personal website built with Next.js and Tailwind CSS. The project is designed for future API connectivity, mock-data onboarding, and real backend integration without forcing large UI rewrites.

## 8. API Architecture & Endpoint Structure

### 8.1 API Structure

The project separates concerns into three layers:

- Frontend: UI pages and reusable components under `src/app` and `src/components`
- API layer: Next.js route handlers under `src/app/api/v1`
- Data layer: mock data and business logic under `src/data`, `src/services`, and `src/lib`

This creates a structure ready for production APIs and future database integration.

### 8.2 Endpoint examples

Profile:

- `GET /api/v1/profile`
- `PUT /api/v1/profile`

Education:

- `GET /api/v1/education`
- `POST /api/v1/education`
- `PUT /api/v1/education/:id`
- `DELETE /api/v1/education/:id`

Experience:

- `GET /api/v1/experience`
- `POST /api/v1/experience`
- `PUT /api/v1/experience/:id`
- `DELETE /api/v1/experience/:id`

Notes:

- `GET /api/v1/notes`
- `POST /api/v1/notes`
- `GET /api/v1/notes/:id`
- `PUT /api/v1/notes/:id`
- `DELETE /api/v1/notes/:id`

Categories:

- `GET /api/v1/categories`
- `POST /api/v1/categories`
- `PUT /api/v1/categories/:id`
- `DELETE /api/v1/categories/:id`

### 8.3 Service layer

The service layer is organized by feature and makes it simple to swap mocked data for a real API or database later.

```text
src/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── profile/route.ts
│   │       ├── education/route.ts
│   │       ├── education/[id]/route.ts
│   │       ├── experience/route.ts
│   │       ├── experience/[id]/route.ts
│   │       ├── notes/route.ts
│   │       ├── notes/[id]/route.ts
│   │       ├── categories/route.ts
│   │       └── categories/[id]/route.ts
│   ├── about/page.tsx
│   ├── archive/page.tsx
│   ├── notes/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── NavBar.tsx
│   ├── SectionCard.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── profile.ts
├── lib/
│   ├── api/
│   │   ├── config.ts
│   │   ├── response.ts
│   │   └── types.ts
│   └── utils.ts
├── schemas/
│   └── profile.schema.ts
├── services/
│   ├── profile.service.ts
│   ├── education.service.ts
│   ├── experience.service.ts
│   ├── notes.service.ts
│   └── categories.service.ts
├── types/
│   └── profile.ts
└──
```

### 8.4 Standard response format

```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": {},
  "meta": null
}
```

Error format:

```json
{
  "success": false,
  "message": "Something went wrong",
  "errors": []
}
```

This project follows those conventions in the route handlers and service helpers.

### 8.5 Development mode

The app starts with mock data, but the layer is prepared for a real database and API without touching the UI extensively. The mock data sits in `src/data/profile.ts`, while the API/service layer abstracts the data access.

## 9. Responsive & mobile-first design

The layout is built mobile-first and then expands for wider screens:

- Mobile: single-column cards, touch-friendly controls, hamburger navigation
- Tablet: balanced two-column content areas where appropriate
- Desktop: wider layouts and max content width for readability

The UI is designed to avoid unnecessary horizontal scrolling, and the navigation supports both desktop and mobile usage.

## 10. Run the project

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## 11. Production readiness checklist

- Project runs successfully in development mode
- API endpoints are organized by feature and version
- Frontend, API, and data layers are separated
- Mock data can be replaced with real services without major UI rewrites
- Navigation and layouts are mobile-friendly
- README documents setup, architecture, and API examples

## 12. Example request and response

Request:

```bash
curl http://localhost:3000/api/v1/profile
```

Response:

```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "name": "Nattapong Srisawat",
    "title": "Product-minded developer and lifelong learner"
  },
  "meta": null
}
```
