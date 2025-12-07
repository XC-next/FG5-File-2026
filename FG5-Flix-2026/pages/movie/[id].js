import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sampleData = {
  "1": { id: "1", title: "Aurora Nights", description: "A sci-fi adventure across the aurora-lit skies.", poster: "https://placehold.co/600x900/111827/ffffff/png?text=Aurora+Nights", year: 2026, runtime: 128 },
  "2": { id: "2", title: "Ocean Zero", description: "A deep ocean mystery.", poster: "https://placehold.co/600x900/0b1220/ffffff/png?text=Ocean+Zero", year: 2025, runtime: 102 }
};

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const movie = sampleData[id] || { id, title: "Unknown Movie", description: "No details available.", poster: "", year: "-", runtime: "-" };

  return (
    <>
      <Head>
        <title>{movie.title} — FG5 Flix</title>
      </Head>

      <div className="container">
        <Navbar />
        <div style={{display:"flex", gap:24, marginTop:12, alignItems:"flex-start"}}>
          <img src={movie.poster} alt={movie.title} className="movie-poster" style={{width:260, height:390}}/>
          <div style={{flex:1}}>
            <h1>{movie.title} <span className="small-muted">({movie.year})</span></h1>
            <p className="small-muted">Runtime: {movie.runtime} mins</p>
            <p style={{marginTop:12}}>{movie.description}</p>

            <div style={{marginTop:18, display:"flex", gap:12}}>
              <Link href={`/player/${movie.id}`} legacyBehavior>
                <a className="animated-btn">Play</a>
              </Link>
              <button className="animated-btn" style={{background:"#3b82f6"}}>Add to Watchlist</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
