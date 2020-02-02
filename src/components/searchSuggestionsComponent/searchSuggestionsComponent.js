import React from 'react';
import { AppContext } from '../../context/appContext';

export const SearchSuggestionsComponent = () => {
    const appContext = React.useContext(AppContext);

    return (
        <div className="panel is-shadowless">
            {appContext.processing && (
                <div className="loader-wrapper">
                    <i className="loader" />
                </div>
            )}

            {appContext.message && <p className="notification is-danger">{appContext.message}</p>}

            {appContext.suggestions.length > 0 && (
                <ul>
                    {appContext.suggestions.map((suggestion, i) => (
                        <li
                            key={i}
                            className={`panel-block is-clickable${
                                appContext.selected && appContext.selected.Name === suggestion.Name
                                    ? ' is-active'
                                    : ''
                            }`}
                            onClick={() => {
                                appContext.select(suggestion);
                            }}
                        >
                            {suggestion.Name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
