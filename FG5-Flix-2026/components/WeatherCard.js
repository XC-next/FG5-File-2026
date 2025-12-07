function weatherCodeToDesc(code) {
  // Simple mapping based on WMO weather interpretation codes used by Open-Meteo
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    99: "Thunderstorm with hail",
  };
  return map[code] || "Unknown";
}

export default function WeatherCard({ weather }) {
  const { location, data } = weather;
  const current = data?.current_weather || null;
  const daily = data?.daily || null;

  return (
    <div style={{ marginTop: 12, background: "rgba(255,255,255,0.02)", padding: 16, borderRadius: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div>
          <h3 style={{ margin: 0 }}>{location.name}, {location.country}</h3>
          <div className="small-muted">Lat: {location.latitude.toFixed(2)}, Lon: {location.longitude.toFixed(2)}</div>
        </div>

        {current && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{current.temperature}°C</div>
            <div className="small-muted">{weatherCodeToDesc(current.weathercode)}</div>
            <div className="small-muted">Wind: {current.windspeed} km/h</div>
          </div>
        )}
      </div>

      {daily && (
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10 }}>
          {daily.time.map((d, i) => (
            <div key={d} style={{ background: "rgba(0,0,0,0.25)", padding: 10, borderRadius: 8 }}>
              <div style={{ fontWeight: 700 }}>{d}</div>
              <div className="small-muted">Max: {daily.temperature_2m_max[i]}°C</div>
              <div className="small-muted">Min: {daily.temperature_2m_min[i]}°C</div>
              <div className="small-muted">{weatherCodeToDesc(daily.weathercode[i])}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
