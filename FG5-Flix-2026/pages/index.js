import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CategorySlider from "../components/CategorySlider";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

const mockMovies = [
  { id: "1", title: "Aurora Nights", poster: "https://placehold.co/600x900/111827/ffffff/png?text=Aurora+Nights", year: 2026 },
  { id: "2", title: "Ocean Zero", poster: "https://placehold.co/600x900/0b1220/ffffff/png?text=Ocean+Zero", year: 2025 },
  { id: "3", title: "Neon Drift", poster: "https://placehold.co/600x900/0f1724/ffffff/png?text=Neon+Drift", year: 2024 },
  { id: "4", title: "Mountain Line", poster: "https://placehold.co/600x900/102030/ffffff/png?text=Mountain+Line", year: 2023 }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>FG5 Flix — Home</title>
        <meta name="description" content="FG5-Flix 2026 - Sample Next.js streaming site scaffold" />
      </Head>

      <div className="container">
        <Navbar />
        <HeroBanner />
        <h2 style={{marginTop:18}}>Trending</h2>
        <div className="movie-grid" style={{marginTop:12}}>
          {mockMovies.map(m => (
            <Link key={m.id} href={`/movie/${m.id}`} legacyBehavior>
              <a style={{textDecoration:"none"}}>
                <MovieCard movie={m} />
              </a>
            </Link>
          ))}
        </div>

        <h3 style={{marginTop:28}}>Categories</h3>
        <CategorySlider />

        <Footer />
      </div>
    </>
  );
}
