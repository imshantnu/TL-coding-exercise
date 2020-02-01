import React, { Component } from "react";
const API_GUID = "b6242120-5bce-4b10-9839-d3045a7682da";
const API_HOST = "https://abr.business.gov.au/json";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  state = {
    selected: undefined,
    suggestions: [],
    results: [],
    processing: false,
    lookup: this.lookup.bind(this),
    search: this.search.bind(this)
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  lookup(query) {
    this.suggestions = this.fetchByName(query, 10).then(
      response => response.Names
    );
    this.processing = false;
  }

  search(query, byName = true) {
    if (byName) {
      this.fetchByName(query);
    } else {
      this.fetchByABN(query);
    }
  }

  async fetchByName(query, maxResults = 99) {
    this.processing = true;
    const response = await fetch(
      `${API_HOST}/MatchingNames.aspx?name=${encodeURI(
        query
      )}&maxResults=${maxResults}&guid=${API_GUID}`
    );
    const responseText = await response.text();
    const match = responseText.match(/\?\((.*)\);/);
    if (!match) throw new Error("invalid JSONP response");
    return JSON.parse(match[1]);
  }

  fetchByABN(abn) {}
}

export const ContextConsumer = AppContext.Consumer;
