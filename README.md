# 🌸 Momentum – Wedding Event Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?logo=next.js)](https://nextjs.org/) 
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node.js-18.16.0-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.0.0-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🚀 Overview

Momentum is a modern, full-stack **wedding event management platform** built with **Next.js**, **NextAuth.js**, **TailwindCSS**, and a **MongoDB + Express.js backend**.  
It allows users to browse items, view details, manage products, and login via Google or credentials — all with a **clean, responsive UI**.

---

## 🌟 Features

### Landing Page
- Responsive **Navbar** with logo, routes, login/register  
- **User dropdown** (after login): Add Product, Manage Products, Logout  
- Hero section with headline, subtitle, CTA  
- 4 themed sections: Features, items, testimonials, promotional banner  
- Footer with links, social icons, copyright  

### Authentication
- **Google OAuth** & **Email/Password login**  
- Redirect to home (`/`) after login  
- Middleware-protected routes (`/add-event`, `/manage`)  

### Item List Page
- Grid of cards (min 6) with image/icon, title, short description, price/meta, details button  
- Search bar + optional category filter (UI only)  

### Item Details Page
- Large image/banner  
- Product title, full description, meta info (price/date/priority)  
- Back button  

### Protected Pages
**Add Product:** Only accessible when logged in  
- Form fields: title, short/long description, price/date/priority, optional image URL  
- Submit with success toast  

**Manage Products:**  
- List all products in table/grid  
- Actions: View, Delete  
- Clean, readable, responsive layout  

---

## 🎨 UI & Design Guidelines
- Fully **responsive** for mobile, tablet, desktop  
- Consistent **typography, spacing, colors**  
- Uniform cards with **hover/focus states**  
- Clean forms with validation & loading states  
- Micro-interactions for buttons and elements  

---

## 🛠 Tech Stack
**Frontend:** Next.js 16, React 19, TailwindCSS 4, DaisyUI, React Hot Toast, React Icons, React Fast Marquee  
**Authentication:** NextAuth.js (Google + Credentials)  
**Backend:** Express.js, MongoDB + Mongoose  
**Tools:** ESLint, Middleware for protected routes  

