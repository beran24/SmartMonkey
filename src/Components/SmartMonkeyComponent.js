import React, { Component, Fragment } from "react";
import { titleDiv } from "../Assets/SmartMonkey";
import LoadResultsComponent from "./LoadResultsComponent";
import LoaderComponent from "./LoaderComponent";
import ResultsComponent from "./ResultsComponent";

const URL =
  "https://services.smartmonkey.io/api/v1/optimize?key=N0xPN2hFSm5NYkFkblpCaU1FM29ZNUZzV1grL1lxcGZieCtVN2Q0YUE0ZmNoR2hxdWFlbk1QVTcxcThGSU5zanVhekNGdHphbzdNQ1IyWXNqWFRkd0E9PQ==";

const bodyParam = {
  services: [
    { id: "service-627629", location: { lat: 40.4237, lng: -3.64639 } },
    { id: "service-267535", location: { lat: 40.46351, lng: -3.62191 } },
    { id: "service-486771", location: { lat: 40.44406, lng: -3.60746 } },
    { id: "service-980178", location: { lat: 40.44552, lng: -3.77944 } },
    { id: "service-766307", location: { lat: 40.40452, lng: -3.75176 } }
  ],
  vehicles: [
    {
      id: "vehicle-490503",
      start: { lat: 40.4766, lng: -3.6296 },
      end: { lat: 40.44374, lng: -3.6362 }
    }
  ]
};

class SmartMonkeyComponent extends Component {
  state = {
    results: null,
    isLoading: false
  };

  handleClickLoadResults = event => {
    this.setState({ isLoading: true });
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(bodyParam),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({ isLoading: false, results: responseJson });
      })
      .catch(error => {
        this.setState({ results: null, isLoading: false });
      });
  };

  showData = () => {
    return bodyParam.services.map(service => {
      const objectToReturn = {};
      objectToReturn.id = service.id.split("-").pop();
      objectToReturn.name = service.id;
      objectToReturn.latitude = service.location.lat;
      objectToReturn.longitude = service.location.lng;
      return objectToReturn;
    });
  };

  render = () => {
    const { results, isLoading } = this.state;
    return (
      <Fragment>
        <div style={titleDiv}>SmartMonkey API Consumer</div>
        <div>
          {!isLoading && results === null && (
            <LoadResultsComponent
              handleClickLoadResults={this.handleClickLoadResults}
            />
          )}
          {isLoading && <LoaderComponent />}
          {results !== null && (
            <ResultsComponent
              services={this.showData()}
              results={results.solution}
            />
          )}
        </div>
      </Fragment>
    );
  };
}

export default SmartMonkeyComponent;
