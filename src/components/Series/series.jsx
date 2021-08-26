import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Cards from "../UI/Cards/cards";
import Circles from "react-loader-spinner";
import { fetchData } from "../../api/api";
import { sorting } from "../../common/SortingFunction/sorting";
import SortingBar from "../SortingBar/sorting-bar";

const Series = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState(false);

  useEffect(() => {
    fetchData("series").then((res) => {
      let anyError = res.status;
      setError(anyError);
      let allSeries = res.data;
      setSeriesList(allSeries);
    });
  }, []);

  const sortingHandler = (sortBy) => {
    setSortBy(sortBy);
  };
  useEffect(() => {
    let sortedData = sorting(seriesList, sortBy);
    sortedData != null &&
      sortedData.length > 1 &&
      setSeriesList([...sortedData]);
  }, [sortBy]);

  return (
    <>
      <SortingBar sort={sortingHandler} />
      {seriesList && seriesList.length < 1 ? (
        <Circles type="Puff" color="#00BFFF" height={300} width={200} />
      ) : (
        seriesList &&
        seriesList.map((item, index) => (
          <Grid item md={3} xs={12} lg={4} sm={6}>
            <Cards
              key={item.title + index}
              image={item.images["Poster Art"].url}
              title={item.title}
              year={item.releaseYear}
              type={item.programType}
            />
          </Grid>
        ))
      )}
    </>
  );
};

export default Series;
