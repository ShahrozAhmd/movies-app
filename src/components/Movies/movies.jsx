import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Cards from "../UI/Cards/cards";
import Circles from "react-loader-spinner";
import { fetchData } from "../../api/api";
import { sorting } from "../../common/SortingFunction/sorting";
import SortingBar from "../SortingBar/sorting-bar";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState(false);

  useEffect(() => {
    fetchData("movie").then((res) => {
      let anyError = res.status;
      setError(anyError);
      let allMovies = res.data;
      setMoviesList(allMovies);
    });
  }, []);

  const sortingHandler = (sortBy) => {
    setSortBy(sortBy);
  };
  useEffect(() => {
    let sortedData = sorting(moviesList, sortBy);
    sortedData != null &&
      sortedData.length > 1 &&
      setMoviesList([...sortedData]);
  }, [sortBy]);

  return (
    <>
      <SortingBar sort={sortingHandler} />
      {moviesList && moviesList.length < 1 ? (
        <Circles type="Puff" color="#00BFFF" height={300} width={200} />
      ) : (
        moviesList &&
        moviesList.map((item, index) => (
          <Grid item md={3} xs={12} lg={4} sm={6} key={item.title + index}>
            <Cards
              image={item.images["Poster Art"].url}
              title={item.title}
              year={item.releaseYear}
              type={item.programType}
            />
          </Grid>
        ))
      )}
      ;
    </>
  );
};

export default Movies;
