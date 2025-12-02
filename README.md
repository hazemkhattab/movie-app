# 🎬 CineHub - Movie Discovery App

A modern movie discovery application built with Next.js 16, featuring server-side rendering, dynamic search, and beautiful UI powered by Tailwind CSS.

## ✨ Features

- 🎥 Browse popular movies from TMDB
- 🔍 Real-time movie search
- 📄 Pagination for movie lists
- 📱 Responsive design
- ⚡ Server-side rendering for better SEO
- 🎨 Modern UI with gradient effects and animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie-app-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_MAIN_API_URL=https://api.themoviedb.org
   NEXT_PUBLIC_MAIN_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Quick Deploy Steps:

1. Push your code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_MAIN_API_URL`
   - `NEXT_PUBLIC_MAIN_API_KEY`
4. Deploy!

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **API**: TMDB (The Movie Database)
- **Language**: JavaScript
- **Deployment**: Vercel

## 📁 Project Structure

```
movie-app-master/
├── src/
│   └── app/
│       ├── components/      # React components
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── MovieCard.jsx
│       │   ├── SearchMovie.jsx
│       │   └── Pagination.jsx
│       ├── movies/          # Movies list page
│       ├── movie/[id]/      # Movie detail page
│       ├── about/           # About page
│       ├── layout.js        # Root layout
│       └── page.js          # Home page
├── public/                  # Static assets
├── .env.local              # Environment variables (create this)
└── next.config.mjs         # Next.js configuration
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_MAIN_API_URL` | TMDB API base URL | Yes |
| `NEXT_PUBLIC_MAIN_API_KEY` | Your TMDB API key | Yes |

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub.
