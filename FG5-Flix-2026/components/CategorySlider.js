export default function CategorySlider(){
  const categories = ["Action", "Drama", "Sci-Fi", "Comedy", "Horror", "Documentary", "Kids"];
  return (
    <div className="slider" style={{marginTop:12}}>
      {categories.map(cat => (
        <div key={cat} style={{minWidth:160, padding:12, background:"rgba(255,255,255,0.02)", borderRadius:10}}>
          <h4 style={{margin:"0 0 6px 0"}}>{cat}</h4>
          <div className="small-muted">Popular selection</div>
        </div>
      ))}
    </div>
  );
}
