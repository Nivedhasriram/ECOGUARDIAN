import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandPollution from './components/Landpollution';
import AirPollution from './components/Airpollution';
import WaterPollution from './components/Waterpollution';
import PollutionTracker from './components/PollutionTracker';

ReactDOM.render(
  <Router> {/* Wrap your App component with Router */}
    <React.StrictMode>
      <PollutionTracker />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
