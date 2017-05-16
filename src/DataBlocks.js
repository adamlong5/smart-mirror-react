import React from 'react';
// import PropTypes from 'prop-types';

function capitalize(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
}

const Block = props => (
  <div>
    <div className="icon">{props.icon}</div>
    {props.children}
  </div>
);

const WeatherBlock = props => (
  <Block icon="weather">
    <h2>{props.data.weather_current_temp}° | {capitalize(props.data.weather_conditions)}</h2>
    <div className="weatherDetails">
      <div className="lowTemp">
        <h3>{props.data.weather_low_temp}°</h3>
      </div>
      <div className="highTemp">
        <h3>{props.data.weather_high_temp}°</h3>
      </div>
      <div className="windSpeed">
        <h3>{props.data.weather_wind_speed}{props.data.weather_wind_direction}</h3>
      </div>
    </div>
  </Block>
);

const TextBlock = props => (
  <Block icon={props.icon}>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
  </Block>
);

const DataBlocks = props => (
  <div>
    <WeatherBlock {...props} />
    <hr />
    <TextBlock
      icon="reminder"
      title={props.data.reminder_title}
      subtitle="In 2 days"
    />
    <hr />
    <TextBlock
      icon="traffic"
      title={props.data.traffic_conditions === 'jam' ? "Expect delays" : "Clear commute"}
      subtitle={`Expect delays of ${props.data.traffic_expected_time - props.data.traffic_usual_time} minutes.`}
    />
  </div>
);

export default DataBlocks;
