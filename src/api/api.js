import axios from "axios";

export const fetchData = (datatype) => {
  const result = { status: null, data: null };
  return axios
    .get("https://mumer01.github.io/publicApis/BoxOffice.json")
    .then((response) => {
      let allData = response.data.entries;
      if (allData.length > 1) {
        switch (datatype) {
          case "movie":
            let filterOnlyMovies = allData.filter(
              (item) => item.programType == "movie"
            );
            let sliced25Movies = filterOnlyMovies.slice(0, 25);
            result.status = "success";
            result.data = sliced25Movies;
            break;
          case "series":
            let filterOnlySeries = allData.filter(
              (item) => item.programType == "series"
              
            );
            let sliced25Series = filterOnlySeries.slice(0, 25);
              console.log(sliced25Series)
            result.status = "success";
            result.data = sliced25Series;
            break;
        }
      } else {
        result.status = "No Data Found";
      }
     return result
    }
    )
    .catch((error) => {
      result.status = error.message;
      return result;
    });


};
