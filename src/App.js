import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="widget">
          <h1 id="cityT">Type City to Begin</h1>
          <h2 className="time">20:14</h2>
          <h2 id="conditions">Clear Skies</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Light Cloud Vector"
                id="icon"
              />
              <div id="temperature" className="temp"></div>{" "}
              <span className="degrees">
                <strong>°C</strong>
              </span>
            </div>
            <div className="col-md-6">
              <div>
                ˳༄꠶ Wind Speed: <span id="wSpeed">3.6</span>
              </div>
              <div>
                📈 Humidity: <span id="humidity">86%</span>
              </div>
              <div>
                ✅ Feels Like: <span id="fLike">26</span>{" "}
                <span className="degreesLike">°C</span>
              </div>
            </div>
          </div>
          <br />
          <form id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  id="searchCity"
                  type="search"
                  placeholder="Choose city..."
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-1">
                <span>
                  <input
                    id="geoButton"
                    type="submit"
                    value="📍"
                    className="btn btn-primary"
                  />
                </span>
              </div>
            </div>
          </form>
          <br />
          <br />
          <div className="wForecast" id="forecast"></div>
        </div>
        <div className="footer">
          This app was coded with 🍷 by{" "}
          <a href="https://www.shecodes.io/graduates/89758-caroline-knight">
            Caroline Knight
          </a>{" "}
          and is opensourced on{" "}
          <a href="https://github.com/carolineflora95/Weather-Application-Plus">
            Github.
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
