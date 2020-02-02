import * as React from "react";
import SearchComponent from "../searchComponent/searchComponent";
import DetailsComponent from "../detailsComponent/detailsComponent";
import { ContextProvider } from "../../context/appContext";

const AppComponent = () => {
  return (
    <>
      <ContextProvider>
        <header className="is-full navbar is-dark">
          <div className="navbar-brand">
            <h1 className="navbar-item title is-4">
              Australian Business Lookup
            </h1>
          </div>
        </header>

        <main className="is-full-height columns is-marginless">
          <SearchComponent className="column is-one-third is-radiusless is-scrollable" />
          <DetailsComponent className="column is-two-thirds is-main-content" />
        </main>
      </ContextProvider>
    </>
  );
};

export default AppComponent;
