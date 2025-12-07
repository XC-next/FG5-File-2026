import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WeatherForm from "../components/WeatherForm";
import WeatherCard from "../components/WeatherCard";
import { geocode, getWeatherByCoords } from "../utils/weatherApi";

export default function WeatherPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    setQuery(city);
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const geo = await geocode(city);
      if (!geo) {
        setError("Location not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geo;
      const data = await getWeatherByCoords(latitude, longitude);
      setWeather({ location: { name, country, latitude, longitude }, data });
    } catch (e) {
      console.error(e);
      setError("Failed to fetch weather. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Weather — FG5 Flix</title>
        <meta name="description" content="Weather dashboard powered by Open-Meteo" />
      </Head>

      <div className="container">
        <Navbar />

        <div style={{ marginTop: 12 }}>
          <h2>Weather Dashboard</h2>
          <p className="small-muted">Search a city to view current conditions and a short forecast (Open-Meteo).</p>

          <WeatherForm onSearch={handleSearch} defaultValue={query} />

          {loading && <p className="small-muted">Fetching weather...</p>}
          {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

          {weather && (
            <div style={{ marginTop: 16 }}>
              <WeatherCard weather={weather} />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
