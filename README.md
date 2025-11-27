# Momentum – Wedding Event Management

[Live Demo](https://momentum-client-seven.vercel.app/)

Momentum is a modern, responsive wedding event management platform built with **Next.js**, **NextAuth.js**, and **Express.js**. Manage events, add products, and explore beautiful event listings with ease.

---

## Table of Contents
- [Features](#features)
- [Pages](#pages)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- **Authentication**: Google OAuth & Email/Password (Credentials)
- **Responsive UI**: Works perfectly on desktop, tablet, and mobile
- **Event/Product Management**: Add, view, and manage wedding products
- **Interactive Design**: Uniform cards, hover/focus states, toast notifications
- **Search & Filter**: Easily browse event items (UI ready)
- **Protected Routes**: Add & Manage Products only accessible to logged-in users

---

## Pages

1. **Landing Page**
   - Navbar: logo, 4+ routes, login/register (replaced by user info dropdown after login)
   - Hero section: headline, subtitle, CTA button
   - 4 additional sections: features, testimonials, banners, or items
   - Footer: links, social icons, copyright

2. **Login/Register**
   - Google & credentials login
   - Redirects to `/` after successful login

3. **Item List Page**
   - Page title + description
   - Search bar + optional category filter
   - Grid layout with cards showing image, title, description, price, and details button

4. **Item Details Page**
   - Large banner image
   - Full description & meta info (price/date/priority)
   - Back button

5. **Protected Pages**
   - **Add Product**: Form with title, description, price/date/priority, optional image URL, toast notification on success
   - **Manage Products**: Grid/table of all products with actions (View/Delete)

---

## Technologies

- **Frontend**: Next.js (App Router), TailwindCSS, DaisyUI, React
- **Authentication**: NextAuth.js (Google & Credentials)
- **Backend**: Express.js with MongoDB (Mongoose)
- **Notifications**: react-hot-toast
- **UI/Icons**: react-icons, react-fast-marquee

---

