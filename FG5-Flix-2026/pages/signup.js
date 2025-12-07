import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    // TODO: wire up Firebase createUserWithEmailAndPassword
    console.log("signup", email, password);
    alert("Signup submitted (stub)");
  };

  return (
    <>
      <Head><title>Sign up — FG5 Flix</title></Head>
      <div className="container">
        <Navbar />
        <div style={{maxWidth:500, marginTop:20}}>
          <h2>Create an account</h2>
          <form onSubmit={submit} style={{display:"grid", gap:12, marginTop:12}}>
            <input required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input required type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="animated-btn" type="submit">Create account</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
