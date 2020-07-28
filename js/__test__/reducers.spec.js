// @flow
import reducers from "../redux/reducers";

test("SET_SEARCH_TERM", () => {
  const state = reducers(
    { searchTerm: "", apiData: {} },
    { type: "SET_SEARCH_TERM", payload: "black" }
  );
  expect(state).toEqual({ searchTerm: "black", apiData: {} });
});

test("ADD_API_DATA", () => {
  const state = reducers(
    { searchTerm: "", apiData: {} },
    {
      type: "ADD_API_DATA",
      payload: {
        rating: "8.6",
        title: "Billions",
        year: "2016–",
        description:
          'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: "b.jpg",
        imdbID: "tt4270492",
        trailer: "_raEUMLL-ZI",
      },
    }
  );
  expect(state).toEqual({
    searchTerm: "",
    apiData: {
      tt4270492: {
        rating: "8.6",
        title: "Billions",
        year: "2016–",
        description:
          'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: "b.jpg",
        imdbID: "tt4270492",
        trailer: "_raEUMLL-ZI",
      },
    },
  });
});
