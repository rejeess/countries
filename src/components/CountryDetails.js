import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Button from "@mui/material/Button";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.countryDetails}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  console.log(country?.capital);
  return (
    <>
      <h1>Country Details</h1>
      {country.map((data) => (
        <>
          <img src={data.flags.png} alt="country flag" />
          <h2>Country: {data.name.common}</h2>
          <p>Capital: {data.capital}</p>
          <p>Continent: {data.continents}</p>
          <p>Population: {data.population}</p>
          <Link to={`/country`}>
            <Button>Back to Countries</Button>
          </Link>
        </>
      ))}
    </>
  );
};

export default CountryDetails;
