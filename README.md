# Next.js RSC with Express, Tailwind CSS, Prisma, and more!

![Next.js RSC Starter](/path/to/your/banner/image.png)

This is a full-stack web app that leverages the power of React Server Components (RSC) to create fast and dynamic user interfaces. App implements basic cruds with file upload. It utilizes a range of technologies to peek into new way of doing reactive app with Nextjs.

## Table of Contents

- [Technologies](#technologies)
- [Installation and usage](#installation)
- [Project Structure](#project-structure)

## Technologies

- Built on ![Next.js](https://img.shields.io/badge/Next.js-13.4-blue?logo=next.js) with React Server Components (RSC).
- Express server for serving images. ![Express](https://img.shields.io/badge/Express-^4.17-green?logo=express)
- TypeScript (TS) for strong typing and enhanced developer experience. ![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue?logo=typescript)
- Prisma with SQLite for managing the database. ![Prisma](https://img.shields.io/badge/Prisma-latest-blue?logo=prisma)
- Tailwind CSS for rapid and responsive styling. ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-latest-blue?logo=tailwind-css)
- Image processing using sharp for optimal performance. ![sharp](https://img.shields.io/badge/sharp-latest-blue)
- NextAuth for easy and secure authentication. ![NextAuth](https://img.shields.io/badge/NextAuth-^4.0-purple?logo=next.js)
- React Hook Form for efficient form handling. ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-^7.0-purple?logo=react)
- Zod for data schema validation. ![Zod](https://img.shields.io/badge/Zod-latest-purple)

## Installation

1. Clone this repository to your local machine:

```bash
git clone git@github.com:geo318/kordz.git
```

2. Navigate to the project directory:

```bash
cd kordz
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up your database with Prisma:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

NOTE: You shoud enter express folder and start server to be able to serve images
```bash
cd express
npm install
npm start
```

Open your browser and visit http://localhost:3333 to see the app in action!

## Project Structure

The structure of the project is organized as follows:

```
kordz/
├── .gitignore
├── .env
├── .env.local
├── package.json
├── tsconfig.json
├── actions/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── icon.png (favicon)
│   ├── globals.css (tw)
│   ├── admin/
│   ├── api/
│   │   ├── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── event/
│   │   │   ├── music/
├── components/
├── config/
├── express/
│   ├── server.ts
├── hooks/
├── prisma/
│   ├── schema.prisma
├── public/
│   ├── assets/
│   │   ├── logo.png
├── schema/
├── types/
├── utils/
└── README.md

```
---
<span style="font-family: 'Courier New', monospace;">**_George Lomidze_**</span>
