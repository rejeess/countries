import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ContentItem from "./ContentItem";
import classes from "./Content.module.css";
import SubHead from "./Sub-Head";
import Grid from "@material-ui/core/Grid";

const Content = () => {
  const [countries, setCountries] = useState([]);
  const [filteredRegion, setFilteredRegion] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   fetch(
  //     "https://restcountries.com/v3.1/all"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data));
  // }, [])

  useEffect(() => {
    filteredRegion === "All"
      ? setFilteredData(countries)
      : setFilteredData(
          countries.filter((country) => country.region === filteredRegion)
        );
  }, [filteredRegion, countries]);

  const fetchCountries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filterContinent = (region) => {
    setFilteredRegion(region);
  };
  return (
    <>
      <SubHead filterContinent={filterContinent} />

      {!countries.length > 0 && (
        <button onClick={fetchCountries}>Fetch Countries</button>
      )}
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!isLoading && countries.length > 0 && (
        <Grid className={`${classes.backdrop}`} container spacing={3}>
          {filteredData?.map((country, i) => (
            <Grid item xs={3}>
              <Link to={`/country/${country.name.common}`}>
                <ContentItem
                  key={country.tId}
                  index={i + 1}
                  countryPoplulation={(+country.population / 1000000).toFixed(1)}
                  countryFlag={country?.flags?.png}
                  countryName={country?.name?.common}
                  region={country.region}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default Content;
