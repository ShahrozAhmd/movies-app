import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Body from "./components/Body/body";
import HomeRoute from "./Routes/HomeRoute";
import MoviesRoute from "./Routes/MoviesRoute";
import SeriesRoute from "./Routes/SeriesRoute";
import { useLocation } from "react-router";
// import Instructions from "./screens/Instructions";

const App = () => {
  let location = useLocation();

  return (
    <main>
      <div>
        <Header />
        <Switch>
          {/* Commented this route because all the instruction will be available in Readme */}
          {/* <Route exact path="/" component={Instructions} /> */}
          <Body>
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/home" component={HomeRoute} />
            <Route exact path="/series" component={SeriesRoute} />
            <Route exact path="/movies" component={MoviesRoute} />
          </Body>
        </Switch>
        <Footer />
      </div>
    </main>
  );
};

export default App;
