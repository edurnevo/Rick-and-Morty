const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item) => {
        return {
          id: item.id,
          name: item.name,
          status: item.status,
          species: item.species,
          image: item.image,
          origin: item.origin.name,
          episodes: item.episode
        };
      });
    });
};

export default getDataFromApi;
