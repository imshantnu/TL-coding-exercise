import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
const API_GUID = "b6242120-5bce-4b10-9839-d3045a7682da";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  state = {
    selected: undefined,
    message: "",
    suggestions: [],
    processing: false,
    fetchByName: this.fetchByName.bind(this),
    fetchByABN: this.fetchByABN.bind(this),
    select: this.select.bind(this)
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  select(suggestion) {
    this.setState({ selected: suggestion });
  }

  fetchByName(query, maxResults = 10) {
    this.setState({ processing: true });
    fetchJsonp(
      `/json/MatchingNames.aspx?name=${encodeURI(
        query
      )}&maxResults=${maxResults}&guid=${API_GUID}`
    )
      .then(response => response.json())
      .then(response => {
        if (!response.Names.length) {
          throw "No businesses found";
        }

        this.setState({
          suggestions: response.Names,
          message: response.Message,
          processing: false
        });
      })
      .catch(error => {
        this.setState({
          suggestions: [],
          message: error,
          processing: false
        });
      });
  }

  fetchByABN(abn) {
    this.setState({ processing: true });
    fetchJsonp(`/json/AbnDetails.aspx?abn=${encodeURI(abn)}&guid=${API_GUID}`)
      .then(response => response.json())
      .then(response => {
        if (!response.Abn) {
          throw response.Message;
        }

        this.setState({
          suggestions: [],
          selected: response,
          message: response.Message,
          processing: false
        });
      })
      .catch(error => {
        this.setState({
          suggestions: [],
          message: error,
          processing: false
        });
      });
  }
}

export const ContextConsumer = AppContext.Consumer;
