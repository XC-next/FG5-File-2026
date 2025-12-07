import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard(){
  // Replace with real user data from auth
  return (
    <>
      <Head><title>Dashboard — FG5 Flix</title></Head>
      <div className="container">
        <Navbar />
        <div style={{marginTop:12}}>
          <h2>Your Dashboard</h2>
          <p className="small-muted">This is a stub dashboard. Wire this up to show user watchlist, recently watched, and account settings.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
