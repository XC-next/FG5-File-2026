import Link from "next/link";

export default function HeroBanner(){
  return (
    <section className="hero">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{maxWidth:720}}>
          <h1 style={{margin:0}}>Stream the future of cinema — FG5-Flix</h1>
          <p className="small-muted" style={{marginTop:8}}>Discover new releases, curated collections, and personalized recommendations.</p>
          <div style={{marginTop:12}}>
            <Link href="/signup" legacyBehavior><a className="animated-btn">Get started — It's free</a></Link>
          </div>
        </div>
        <img src="https://placehold.co/360x220/0b1220/ffffff/png?text=Featured" alt="featured" style={{borderRadius:12}} />
      </div>
    </section>
  );
}
