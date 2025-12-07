import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="navbar">
      <div style={{display:"flex", alignItems:"center", gap:16}}>
        <Link href="/" legacyBehavior><a style={{fontWeight:700, fontSize:18, color:"white", textDecoration:"none"}}>FG5-Flix</a></Link>
        <div className="small-muted" style={{fontSize:13}}>Stream | Discover | Share</div>
      </div>

      <div style={{display:"flex", gap:12}}>
        <Link href="/login" legacyBehavior><a className="small-muted">Login</a></Link>
        <Link href="/signup" legacyBehavior><a className="animated-btn">Sign up</a></Link>
      </div>
    </nav>
  );
}
