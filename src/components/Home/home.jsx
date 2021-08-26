import React,{useState} from "react";
import Cards from "../UI/Cards/cards";
import { Grid } from "@material-ui/core";
import {Link} from "react-router-dom"


const Home = () => {
  const [moviesData,setMoviesData] = useState([
    {
      title: "Movies",
      link: "/movies",
      image:"https://via.placeholder.com/300"
    },
    {
      title: "Series",
      link: "/series",
      image:"https://via.placeholder.com/300"
    },
  ]);

  return moviesData.map((item,index) => (
    <Grid item md={3} xs={12} lg={4} sm={4} key={index}>
      <Link to={item.link} style={{textDecoration:"none"}}>
        <Cards image={item.image} title={item.title} />
      </Link>
    </Grid>
  ));
};
export default Home;
