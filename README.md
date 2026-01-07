# Dyondzisani Commerce Official Website

This repository contains the official website for **Dyondzisani Commerce**. The application is built with Next.js and provides information about tutoring services while enabling student enrolment for both Basic and Higher Education programmes.

---

## Features

* **Responsive Design** – Mobile‑first UI built with Tailwind CSS.
* **Student Enrolment** – Dedicated enrolment forms for Basic and Higher Education.
* **Contact Services** – General contact form for enquiries.
* **Email Integration** – Automated email notifications using Resend and React Email.
* **Analytics** – Google Analytics and Vercel Analytics integration for performance and usage tracking.
* **SEO Optimised** – Metadata, Open Graph tags, and sitemap support.

---

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** Radix UI, Lucide React
* **Forms & Validation:** React Hook Form, Zod
* **Email:** Resend, React Email
* **Package Manager:** pnpm

---

## Environment Variables

This project uses environment variables for secure configuration. Create a `.env.local` file in the root of the project with the following variable:

| Variable                                         | Description                                                  | Used In                                         |
| ------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| `RESEND_API_KEY`                                 | API key from Resend for sending enrolment and contact emails | `src/app/actions/SendBasicEducationEmail.ts`  \ |
| `src/app/actions/SendHigherEducationEmail.ts`  \ |                                                              |                                                 |
| `src/app/actions/SendContactEmail.ts`            |                                                              |                                                 |

### Optional

The Google Analytics ID is currently hard‑coded in `src/app/layout.tsx`.

If you prefer to manage it via environment variables in future, you can replace it with:

```
process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
```

and add the following to your `.env.local` file:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## Getting Started

Follow the steps below to set up the project locally.

### Prerequisites

* Node.js (LTS recommended)
* pnpm (preferred package manager)

### Installation

1. **Clone the repository**

```
git clone https://github.com/your-username/dyondzisani-commerce-website.git
cd dyondzisani-commerce-website
```

2. **Install dependencies**

```
pnpm install
```

3. **Configure environment variables**

Create a `.env.local` file in the project root:

```
RESEND_API_KEY=re_123456789
```

4. **Run the development server**

```
pnpm dev
```

Open `http://localhost:3000` in your browser to view the application.

---

## Scripts

| Command       | Description                                        |
| ------------- | -------------------------------------------------- |
| `pnpm dev`    | Start the development server                       |
| `pnpm build`  | Build the application for production               |
| `pnpm start`  | Start the production server                        |
| `pnpm lint`   | Run ESLint checks                                  |
| `pnpm format` | Format code in `src/` and `emails/` using Prettier |
| `pnpm email`  | Start the React Email dev server on port 3002      |

---

## Project Structure

```
/src/app        → App Router pages and layouts
/src/components → Reusable UI components
/src/actions    → Server Actions for form handling and emails
/src/emails     → React Email templates
/src/lib        → Utilities and validation schemas
/public         → Static assets
```

---

## Deployment

The recommended deployment platform for this project is **Vercel**, which provides first‑class support for Next.js.

Refer to the official Next.js deployment documentation for additional configuration options.

---

## License

This project is proprietary and maintained by Dyondzisani Commerce.
