import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import HomeView from "./views/HomeView";
// import AuthorsView from "./views/AuthorsView";
// import BooksView from "./views/BooksView";
// import BookDetailsView from "./views/BookDetailsView";
import NotFoundView from "./views/NotFoundView";
import AppBar from "./components/AppBar";
import { routes } from "./routes";

const HomeView = lazy(() =>
  import("./views/HomeView.jsx" /* webpackChunkName: "HomeView" */),
);
const AuthorsView = lazy(() =>
  import("./views/AuthorsView.jsx" /* webpackChunkName: "AuthorsView" */),
);
const BooksView = lazy(() =>
  import("./views/BooksView.jsx" /* webpackChunkName: "BooksView" */),
);
const BookDetailsView = lazy(() =>
  import(
    "./views/BookDetailsView.jsx" /* webpackChunkName: "BookDetailsView" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.authors} component={AuthorsView} />
          <Route exact path={routes.books} component={BooksView} />
          <Route path={routes.bookDetails} component={BookDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
