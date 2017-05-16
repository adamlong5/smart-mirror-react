import React from 'react';
// import PropTypes from 'prop-types';
import cloudyImg from './img/cloudy.svg';
import rainyImg from './img/rainy.svg';
import sunnyImg from './img/sunny.svg';
import highTemp from './img/high_temp.svg';
import lowTemp from './img/low_temp.svg';
import wind from './img/wind.svg';
import present from './img/present.svg';
import trafficGreen from './img/traffic_green.svg';
import trafficRed from './img/traffic_red.svg';
import plumber from './img/plumber.svg';

function capitalize(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
}

const Block = props => (
  <div className="block">
    <div className="blockImageWrapper">
      <img src={props.icon} className="blockIcon" alt="blockIcon" />
    </div>
    {props.children}
  </div>
);

const WeatherBlock = props => (
  <Block icon={props.data.weather_conditions === 'cloudy' ? cloudyImg : props.data.weather_conditions === 'sunny' ? sunnyImg : rainyImg}>
    <div className="blockText">
      <h2>{props.data.weather_current_temp}° | {capitalize(props.data.weather_conditions)}</h2>
      <div className="weatherDetails">
        <div className="lowTemp">
          <img src={lowTemp} alt="lowTemp" className="weatherSmallIcon" />
          <h3>{props.data.weather_low_temp}°</h3>
        </div>
        <div className="highTemp">
          <img src={highTemp} alt="highTemp" className="weatherSmallIcon" />
          <h3>{props.data.weather_high_temp}°</h3>
        </div>
        <div className="windSpeed">
          <img src={wind} alt="wind" className="weatherSmallIcon" />
          <h3>{props.data.weather_wind_speed}{props.data.weather_wind_direction}</h3>
        </div>
      </div>
    </div>
  </Block>
);

const TextBlock = props => (
  <Block icon={props.icon}>
    <div className="blockText">
      <h2 className="blockTitle">{props.title}</h2>
      <h3 className="blockSubTitle">{props.subtitle}</h3>
    </div>
  </Block>
);

const DataBlocks = props => {
  const delay = props.data.traffic_expected_time - props.data.traffic_usual_time;
  return (
    <div>
      <WeatherBlock {...props} />
      <TextBlock
        icon={props.data.reminder_type === 'birthday' ? present : plumber}
        title={props.data.reminder_title}
        subtitle={`In ${props.data.reminder_date} days`}
      />
      <TextBlock
        icon={props.data.traffic_conditions === 'jam' ? trafficRed : trafficGreen}
        title={props.data.traffic_conditions === 'jam' ? "Expect delays" : "Clear commute"}
        subtitle={delay > 0 ? `Expect delays of ${delay} minutes.` : 'No delays'}
      />
    </div>
  );
}

export default DataBlocks;
