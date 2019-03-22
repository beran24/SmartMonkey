import React, { Fragment } from "react";
import PropTypes from "prop-types";
import search from "../Assets/Images/search.png";

const ResultsComponent = ({ services, results }) => {
  const rowsServices = services.map((service, index) => (
    <tr key={"row" + service.id}>
      <td key={"service" + service.id}>
        <img
          src={search}
          style={{
            backgroundColor: index % 2 ? "white" : "Gainsboro",
            paddingRight: "10px"
          }}
        />
        {service.id}
      </td>
      <td key={"name" + service.id}>{service.name}</td>
      <td key={"latitude" + service.id}>{service.latitude}</td>
      <td key={"longitude" + service.id}>{service.longitude}</td>
    </tr>
  ));
  const tableRoutes = results.routes.map(result => {
    const rowsSteps = result.steps.map(step => {
      return (
        <tr>
          <td>{step.type}</td>
          <td>{step.dep_time}</td>
          <td>{step.arr_time}</td>
          <td>{step.distance}</td>
        </tr>
      );
    });
    return (
      <Fragment>
        <h3>Route for {result.vehicle_id}</h3>
        <table>
          <tr>
            <th>Type</th>
            <th>Departure time</th>
            <th>Arrival time</th>
            <th>Distance</th>
          </tr>
          {rowsSteps}
        </table>
      </Fragment>
    );
  });
  return (
    <div>
      <h3>Results</h3>
      <table>
        <tr>
          <th>Service</th>
          <th>Name</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
        {rowsServices}
      </table>
      {tableRoutes}
    </div>
  );
};

ResultsComponent.propTypes = {
  services: PropTypes.array.isRequired,
  results: PropTypes.object
};

ResultsComponent.defaultProps = {
  results: null
};

export default ResultsComponent;
