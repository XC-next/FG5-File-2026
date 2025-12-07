export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} FG5-Flix. All rights reserved.</div>
      <div style={{marginTop:8}}>
        <a href="#" className="small-muted" style={{marginRight:12}}>Terms</a>
        <a href="#" className="small-muted">Privacy</a>
      </div>
    </footer>
  );
}
