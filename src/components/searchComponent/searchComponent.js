import * as React from "react";
import _ from "lodash";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { AppContext } from "../../context/appContext";

const SearchComponent = props => {
  const appContext = React.useContext(AppContext);

  const onKeyUp = React.useCallback(
    event => {
      event.persist();
      _.debounce(event => {
        if (event.target.value) {
          appContext.lookup(event.target.value);
        }
      }, 1000)(event);
    },
    [appContext]
  );

  const onSubmit = React.useCallback(
    event => {
      event.preventDefault();
      appContext.search(event.target.search.value);
    },
    [appContext]
  );

  return (
    <div className={props.className}>
      <form onSubmit={onSubmit}>
        <InputComponent
          onKeyUp={onKeyUp}
          name="search"
          placeholder="Search by name"
          aria-label="Search by company name"
        />
        <ButtonComponent type="submit">Search</ButtonComponent>
      </form>

      <ul>
        {appContext.suggestions.map(suggestion => (
          <li>
            <a>{suggestion.Name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
