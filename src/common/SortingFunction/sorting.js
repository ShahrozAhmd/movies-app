export const sorting = (data, sortBy) => {
  let getData = data;
  let sortedArray = null;

  switch (sortBy) {
    case "sort-by-title":
      return (sortedArray = getData.sort((a, b) =>
        a.title[0].localeCompare(b.title[0])
      ));
      break;
    case "sort-by-year":
      return (sortedArray = getData.sort(
        (a, b) => a.releaseYear - b.releaseYear
      ));
      break;
    default:
      return sortedArray;
  }
};
