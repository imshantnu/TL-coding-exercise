import * as React from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { AppContext } from "../../context/appContext";
import { SearchSuggestionsComponent } from "../searchSuggestionsComponent/searchSuggestionsComponent";

const SearchComponent = props => {
  const appContext = React.useContext(AppContext);

  const onSubmitByName = React.useCallback(
    event => {
      event.preventDefault();
      appContext.fetchByName(event.target.search.value, 25);
    },
    [appContext]
  );

  const onSubmitByABN = React.useCallback(
    event => {
      event.preventDefault();
      appContext.fetchByABN(event.target.abn.value);
    },
    [appContext]
  );

  return (
    <div className={`navbar has-background-white-ter ${props.className}`}>
      <form onSubmit={onSubmitByName} className="field has-addons">
        <InputComponent
          type="text"
          name="search"
          placeholder="Search by name"
          aria-label="Search by company name"
          autoComplete="off"
          className="input is-primary"
        />
        <ButtonComponent className="button is-primary" type="submit">
          Search
        </ButtonComponent>
      </form>

      <form onSubmit={onSubmitByABN} className="field has-addons">
        <InputComponent
          type="number"
          name="abn"
          placeholder="Search by ABN"
          aria-label="Search by ABN"
          autoComplete="off"
          className="input is-primary"
        />
        <ButtonComponent type="submit" className="button is-primary">
          Search
        </ButtonComponent>
      </form>

      <SearchSuggestionsComponent />
    </div>
  );
};

export default SearchComponent;
