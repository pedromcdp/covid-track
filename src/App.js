import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard";
import CountryCard from "./components/CountryCard";
import Divider from "./components/Divider";

function App() {
  const apiUrl = "https://disease.sh/v3/covid-19/countries/";
  const [covidData, setCovidData] = useState({
    country: String,
    countryInfo: {
      flag: String,
    },
    cases: Number,
    todayCases: Number,
    deaths: Number,
    todayDeaths: Number,
    recovered: Number,
    todayRecovered: Number,
    active: Number,
  });

  const {
    country: countryName,
    cases,
    deaths,
    recovered,
    countryInfo: { flag: countryFlag },
    todayCases,
    todayDeaths,
    todayRecovered,
    active,
  } = covidData;

  async function fetchCovidData(country) {
    try {
      const response = await fetch(apiUrl + country);
      await response.json().then((resData) => {
        setCovidData(() => {
          return resData;
        });
      });
    } catch (error) {
      alert("Ocorreu um erro a obter os dados: " + error.message);
    }
  }

  useEffect(() => {
    fetchCovidData("pt");
  }, []);

  return (
    <div className="max-w-screen-md lg:max-w-screen-xl mx-auto">
      <SearchBar handleSearch={fetchCovidData} />
      <CountryCard countryName={countryName} countryFlag={countryFlag} />
      <Divider title="Today" />
      <div className="grid sm:grid-cols-8 md:grid-cols-12 gap-6 mx-5 mb-5">
        <InfoCard title="Cases" stat={todayCases} />
        <InfoCard title="Deaths" stat={todayDeaths} />
        <InfoCard title="Recovered" stat={todayRecovered} />
        <InfoCard title="Active" stat={active} />
      </div>
      <Divider title="All time" />
      <div className="grid md:grid-cols-8 lg:grid-cols-12 gap-6 mx-5 mb-5">
        <InfoCard title="Cases" stat={cases} />
        <InfoCard title="Deaths" stat={deaths} />
        <InfoCard title="Recovered" stat={recovered} />
      </div>
    </div>
  );
}

export default App;
