import * as React from "react";
import SearchComponent from "../searchComponent/searchComponent";
import DetailsComponent from "../detailsComponent/detailsComponent";
import { ContextProvider } from "../../context/appContext";

const AppComponent = () => {
  return (
    <div className="container is-fluid">
      <header className="box">
        <h1 className="title is-1">Australian Business Lookup Service</h1>
      </header>
      <main className="columns">
        <ContextProvider>
          <SearchComponent className="column is-one-third" />
          <DetailsComponent className="column is-two-thirds" />
        </ContextProvider>
      </main>
    </div>
  );
};

export default AppComponent;
