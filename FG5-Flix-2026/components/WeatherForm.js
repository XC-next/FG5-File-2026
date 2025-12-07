import { useState } from "react";

export default function WeatherForm({ onSearch, defaultValue = "" }) {
  const [city, setCity] = useState(defaultValue);

  const submit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, marginTop: 12, maxWidth: 720 }}>
      <input
        aria-label="City"
        placeholder="Enter city (e.g. London, Tokyo)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "inherit" }}
      />
      <button className="animated-btn" type="submit">Search</button>
    </form>
  );
}
