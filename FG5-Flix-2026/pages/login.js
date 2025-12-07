import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // TODO: wire up Firebase auth
    console.log("login", email, password);
    alert("Login submitted (stub)");
  };

  return (
    <>
      <Head><title>Login — FG5 Flix</title></Head>
      <div className="container">
        <Navbar />
        <div style={{maxWidth:420, marginTop:20}}>
          <h2>Login</h2>
          <form onSubmit={submit} style={{display:"grid", gap:12, marginTop:12}}>
            <input required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input required type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="animated-btn" type="submit">Sign In</button>
          </form>
          <p style={{marginTop:12}}>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </div>
        <Footer />
      </div>
    </>
  );
}
