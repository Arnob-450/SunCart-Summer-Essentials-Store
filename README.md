<div align="center">

# ☀️ SunCart

### Summer Essentials, All in One Place.

A modern, full-stack e-commerce web app for shopping summer must-haves — sunglasses, tees, sandals, and more — built with Next.js App Router, MongoDB, and Better Auth.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/daisyUI-5-1AD1A5?style=for-the-badge)](https://daisyui.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Better Auth](https://img.shields.io/badge/Better--Auth-Authentication-orange?style=for-the-badge)](https://www.better-auth.com/)

[Live Demo](#) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## ✨ Overview

**SunCart** is a fully responsive e-commerce storefront designed around a bright, teal-and-amber summer aesthetic. It showcases popular products, seasonal care tips, top brands, and a complete authentication flow — all built on the Next.js App Router with server components, clean UI, and smooth micro-interactions.

---

## 🚀 Features

- 🛍️ **Product Catalog** — Browse a responsive grid of products with images, ratings, pricing, and descriptions
- 📄 **Product Details Page** — Dynamic routes with full product info, stock status, and category/brand badges
- 🔐 **Authentication** — Email/password sign up & login, plus Google OAuth, powered by [Better Auth](https://www.better-auth.com/)
- 👤 **User Profile** — View and update your name, avatar, and account details
- 🌞 **Seasonal Content Sections** — Summer Care Tips and Top Brands showcase blocks
- 🔔 **Toast Notifications** — Real-time success/error feedback with `react-toastify`
- 🎬 **Entrance Animations** — Subtle staggered animations on the hero banner via `animate.css`
- 📱 **Fully Responsive** — Mobile-first layout that adapts cleanly across phone, tablet, and desktop
- ✅ **Form Validation** — Robust client-side validation with `react-hook-form`

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server Components) |
| **UI Library** | [React](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Authentication** | [Better Auth](https://www.better-auth.com/) (Email/Password + Google OAuth) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Animations** | [Animate.css](https://animate.style/) |

---

## 📸 Preview

<div align="center">

| Home Page | Product Details |
|---|---|
| Popular products, care tips & top brands | Full details, stock status, add-to-cart |

| Login | Register |
|---|---|
| Email/password + Google sign in | Account creation with avatar URL |

</div>

> Add real screenshots or a demo GIF here once available — visuals go a long way for a project README!

---

## 📁 Project Structure

```
suncart/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── api/
│   │   │   └── auth/[...all]/
│   │   ├── product/
│   │   ├── productDetails/[id]/
│   │   ├── profile/
│   │   │   └── update/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── homePage/
│   │   │   ├── Banner.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── SummerTips.jsx
│   │   │   └── TopBrands.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── NavLink.jsx
│   ├── lib/
│   │   ├── auth.js
│   │   ├── auth-client.js
│   │   └── data.js
│   └── assets/
├── public/
│   └── data.json
├── next.config.mjs
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB connection string (local or [Atlas](https://www.mongodb.com/atlas))
- A Google Cloud OAuth Client ID/Secret *(optional, for Google login)*

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/suncart.git
cd suncart

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

Fill in your `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

```bash
# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. 🎉

---

## 🖼️ Image Domains

If you're loading product or avatar images from external URLs, make sure to whitelist their hostnames in `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      // add any other image source domains used in your data
    ],
  },
};

export default nextConfig;
```

---

## 🗺️ Roadmap

- [ ] Shopping cart & checkout flow
- [ ] Order history on user profile
- [ ] Product search & filtering
- [ ] Wishlist functionality
- [ ] Admin dashboard for product management
- [ ] Payment gateway integration

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

Made with ☀️ and 💛 for summer shopping.

</div>