import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const notify = (message, type = "error") => toast[type](message);

const AirQualityInfo = () => {
  const [city, setCity] = useState("");
  const [airQuality, setAirQuality] = useState(null);

  const getAirDetails = async (city) => {
    const API_KEY = '741eca894b264c9f05a6554cc3ee54c5';
    try {
      const geoRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
      );
      const lat = geoRes.data[0].lat;
      const lon = geoRes.data[0].lon;
      const airRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      return airRes.data.list[0].components;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const search = async () => {
    if (!city.trim()) {
      notify("City name not entered.");
      return;
    }

    try {
      const detail = await getAirDetails(city);
      setAirQuality(detail);
      notify("City found.", "success");
    } catch (error) {
      notify("City not found.");
    }
  };

  const isPolluted = (airQuality) => {
    if (!airQuality) return false;
    // Define threshold values for pollutants
    const thresholds = {
      co: 100,
      no2: 40,
      o3: 100,
      so2: 100,
      pm2_5: 10,
      pm10: 20,
      nh3: 0
    };
    // Check if any pollutant exceeds its threshold
    for (let pollutant in thresholds) {
      if (airQuality[pollutant] > thresholds[pollutant]) {
        return true;
      }
    }
    return false;
  };

  const pollutionSolutions = [
    {
      pollutant: "CO",
      threshold: 100,
      solution: ["Promote cleaner transportation: Encourage the use of electric vehicles, bicycles, and public transportation to reduce emissions from combustion engines."
      , "Reduce industrial emissions: Implement stricter regulations on industrial processes to minimize CO emissions."]
    },
    {
      pollutant: "NO2",
      threshold: 40,
      solution: ["Promote cleaner transportation: Encourage the use of electric vehicles and public transportation to reduce emissions from vehicles."
      , "Improve waste management: Implement proper waste disposal and recycling programs to reduce emissions from landfills, which can contribute to NO2 levels."]
    },
    {
        pollutant: "O3",
        threshold: 100,
        solution: ["Promote cleaner transportation: Reduce emissions from vehicles by promoting the use of electric vehicles and improving public transportation infrastructure."
        , "Reduce industrial emissions: Implement cleaner production processes and technologies to minimize the release of ozone precursors into the atmosphere."]
    },
    {
        pollutant: "SO2",
        threshold: 100,
        solution: ["Promote cleaner transportation: Encourage the use of low-sulfur fuels and emission control technologies in vehicles to reduce SO2 emissions."
        , "Reduce industrial emissions: Implement cleaner production methods and technologies in industries that use or produce sulfur-containing materials."]
    },
    {
        pollutant: "PM2_5",
        threshold: 10,
        solution: ["Promote cleaner transportation: Reduce emissions from vehicles by promoting the use of electric vehicles, improving fuel efficiency, and enforcing vehicle emission standards."
        , "Reduce industrial emissions: Implement measures such as dust control, emission controls, and the use of cleaner production technologies to reduce particulate matter emissions from industrial sources."]
    },
    {
        pollutant: "PM10",
        threshold: 20,
        solution: ["Promote cleaner transportation: Reduce emissions from vehicles by promoting the use of electric vehicles, improving fuel efficiency, and enforcing vehicle emission standards."
        , "Reduce industrial emissions: Implement measures such as dust control, emission controls, and the use of cleaner production technologies to reduce particulate matter emissions from industrial sources."]
    },
    {
        pollutant: "NH3",
        threshold: 0,
        solution: ["Promote cleaner transportation: Encourage the use of vehicles with low emissions and promote the adoption of electric vehicles and alternative fuels."
        , "Reduce industrial emissions: Implement measures to minimize ammonia emissions from agricultural activities, such as optimizing fertilizer application practices and using ammonia capture technologies."]
    },
  ];

  useEffect(() => {
    console.log("Air Quality:", airQuality);
  }, [airQuality]);

  return (
    <section className="pollutiontracker" id="Pollutiontracker">
      <div className="container1">
      <h1 className="title">Pollution Tracker</h1>
      <p id="pollution">Enter your city name to find out the Air pollution rates in your neighbourhood!</p>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="button" onClick={search}>
          Search
        </button>
      </div>

      {airQuality && (
        <div className={`details ${isPolluted(airQuality) ? 'polluted' : ''}`}>
          <h2 className="subtitle">Air Quality Details</h2>
          <ul>
          {Object.entries(airQuality).map(([key, value]) => (
              <li key={key} className={value > 50 ? 'polluted-gas' : ''}>
               <span style={{ textTransform: 'uppercase' }}>{key}:</span> <span>{value} μg/m3</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isPolluted(airQuality) && (
        <div className="solutions">
          <h2 className="subtitle">Solutions for Reducing Air Pollution</h2>
          <ul>
            {pollutionSolutions.map(({ pollutant, threshold, solution }) => ((
                <li key={pollutant}>
                  <h3>{pollutant}</h3>
                  <ul>
                    {solution.map((sol, index) => (
                      <p key={index}>{sol}</p>
                    ))}
                  </ul>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
    </section>
  );
};

export default AirQualityInfo;

