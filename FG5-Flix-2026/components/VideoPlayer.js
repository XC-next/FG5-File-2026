export default function VideoPlayer({ src, title }) {
  return (
    <div style={{background:"black", borderRadius:10, overflow:"hidden", maxWidth:960}}>
      <video controls width="100%" height="480" style={{display:"block"}}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{padding:12}}>
        <h3 style={{margin:0}}>{title}</h3>
      </div>
    </div>
  );
}
