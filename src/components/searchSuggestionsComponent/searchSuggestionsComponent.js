import React from "react";
import { AppContext } from "../../context/appContext";

export const SearchSuggestionsComponent = () => {
  const appContext = React.useContext(AppContext);

  if (appContext.processing) {
    return <progress className="progress is-small is-primary" max="100" />;
  }

  return (
    <ul>
      {appContext.message}
      {appContext.suggestions.map((suggestion, i) => (
        <li
          key={i}
          onClick={() => {
            appContext.select(suggestion);
          }}
        >
          <a>{suggestion.Name}</a>
        </li>
      ))}
    </ul>
  );
};
