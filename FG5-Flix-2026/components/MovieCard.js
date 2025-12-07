import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div style={{marginTop:8}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h4 style={{margin:0, fontSize:16}}>{movie.title}</h4>
          <div className="small-muted" style={{fontSize:12}}>{movie.year}</div>
        </div>
      </div>
    </div>
  );
}
