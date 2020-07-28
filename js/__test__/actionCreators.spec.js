// @flow
import moxios from "moxios";
import { setSearchTerm, addAPIData, getAPIData } from "../redux/actionCreators";

const show = {
  title: "Atlanta",
  year: "2008–2013",
  description:
    "Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",
  poster: "a.jpg",
  imdbID: "tt4288182",
  trailer: "MpEdJ-mmTlY",
};

test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("addAPIData", () => {
  expect(addAPIData(show)).toMatchSnapshot();
});

test("getAPIData", (done: Function) => {
  const dispatchMock = jest.fn(); // spy function
  moxios.withMock(() => {
    getAPIData(show.imdbID)(dispatchMock); // self-invoking function
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: show }).then(() => {
        expect(request.url).toEqual(`http://localhost:3000/${show.imdbID}`);
        expect(dispatchMock).toBeCalledWith(addAPIData(show));
        done();
      });
    });
  });
});
