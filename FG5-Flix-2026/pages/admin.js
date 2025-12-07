import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin(){
  // Protect this route in production using auth and roles
  return (
    <>
      <Head><title>Admin Panel — FG5 Flix</title></Head>
      <div className="container">
        <Navbar />
        <h2 style={{marginTop:12}}>Admin Panel (stub)</h2>
        <p className="small-muted">Add content management tools here (movie CRUD, analytics, moderation).</p>
        <Footer />
      </div>
    </>
  );
}
