import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.handleForm=this.handleForm.bind(this);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      img:undefined,
      getat: undefined,
      wind:undefined,
      pressure: undefined,
      humidity: undefined,
      sunrise: undefined,
      sunset:undefined,
      geocords:undefined,
      data:[]
    };
  };

  static defaultProps = {
      city: 'Coimbatore',
    };


  handleForm(event){
    let currentComponent = this;
    event.preventDefault();
    let query='';
    if(event.target.search.value === '') {
      query="Coimbatore";
    } else {
      query=event.target.search.value;
    }
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+query+"&APPID=7dc6cc46880333a41949d8323aa6fba6")
    .then((result) => {
        // Get the result
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        if(jsonResult.length !== 0){
            this.setState({
              city: jsonResult.name,
              country: jsonResult.sys.country,
              temperature: jsonResult.main.temp,
              img:jsonResult.weather["0"].icon,
              getat: new Date(jsonResult.dt),
              wind:jsonResult.wind.speed,
              pressure: jsonResult.main.pressure,
              humidity: jsonResult.main.humidity,
              sunrise: new Date(jsonResult.sys.sunrise),
              sunset:new Date(jsonResult.sys.sunset),
              geocords : "["+ jsonResult.coord.lat +","+ jsonResult.coord.lon +"]"
            });
          }
          console.log(jsonResult);
          axios.post('/weathers', {
            city: jsonResult.name,
            country: jsonResult.sys.country,
            temperature: jsonResult.main.temp,
            img:jsonResult.weather[0].icon,
            wind:jsonResult.wind.speed,
            pressure: jsonResult.main.pressure,
            humidity: jsonResult.main.humidity,
            sunrise: jsonResult.sys.sunrise,
            sunset:jsonResult.sys.sunset,
            lat:jsonResult.coord.lat,
            lon:jsonResult.coord.lon
          }).then(function(response){
            console.log(response);
            var data = response.data;
            console.log("data",data);
            currentComponent.setState({
              data:data
            });
          }).catch(function(error) {
            console.log(error);
          });
        })
      }
  render() {
    console.log("state ", this.state);
    let city= this.state.city;
    let country= this.state.country;
    let temperature= this.state.temperature;
    let img= "http://openweathermap.org/img/w/"+this.state.img+".png";
    var  wind=this.state.wind;
    let pressure= this.state.pressure;
    let humidity= this.state.humidity;
    let sunrise= this.state.sunrise;
    let sunset=this.state.sunset;
    let geocoord = this.state.geocords;
    this.state.data.map(val=>console.log(val));
    if(city === undefined) {
      return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={this.handleForm} className="form-inline">
              <div className="form-group">
                <input type="text" className="form-control" name="search" placeholder="Search a City..."/>
              </div>
              <input type="submit" value="Submit" className="btn"/>
            </form>
          </header>
          <p className="App-intro">
            Please enter the city
          </p>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleForm} className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" name="search" placeholder="Search a City..."/>
          </div>

            <input type="submit" value="Submit" className="btn"/>
          </form>
        </header>
        <p className="App-intro">
          Current Weather and Forecast in your City
        </p>
        <div className="container">
  <h2>City of {city}, {country}</h2>
  <div className="imgtemp">
  <div><img src={img} alt="weather"/></div>
  <div className="temp">{temperature} <sup>o</sup> F</div>
  </div>
  <table className="table table-bordered">
    <tbody>
      <tr>
        <td>wind</td>
        <td>{wind}</td>
      </tr>
      <tr>
        <td>pressure</td>
        <td>{pressure}</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>{humidity}</td>
      </tr>
      <tr>
        <td>Sunrise</td>
        <td>{sunrise.getHours()+":"+sunrise.getMinutes()+":"+sunrise.getSeconds()}</td>
      </tr>
      <tr>
        <td>Sunset</td>
        <td>{sunset.getHours()+":"+sunset.getMinutes()+":"+sunset.getSeconds()}</td>
      </tr>
      <tr>
        <td>Geo Coords</td>
        <td>{geocoord}</td>
      </tr>
    </tbody>
  </table>
</div>
<p className="App-intro">
  History
</p>
<div className="container">
<h2>History of {city}</h2>
<table className="table table-bordered">
    <thead>
      <tr>
        <th>Temperature</th>
        <th>Wind</th>
        <th>pressure</th>
        <th>humidity</th>
        <th>Cloud</th>
        <th>sunrise</th>
        <th>sunset</th>
        <th>latitude</th>
        <th>longtitude</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
    {
      this.state.data.length > 0 ?

      this.state.data.map((val,i)=>{
      let sunrise = new Date(val.sunrise).getHours()+":"+new Date(val.sunrise).getMinutes()+":"+new Date(val.sunrise).getSeconds();
      let img = "http://openweathermap.org/img/w/"+val.img+".png";
      return(
      <tr key={i}>
      <td>{val.temperature}</td>
      <td>{val.wind}</td>
      <td>{val.pressure}</td>
      <td>{val.humidity}</td>
      <td><img src={img}/></td>
      <td>{sunrise}</td>
      <td>{new Date(val.sunset).getHours()}</td>
      <td>{val.lat}</td>
      <td>{val.lon}</td>
      <td>{val.datetime}</td>
      </tr>
    )

  }) : <tr>
  <td colspan="11" className="nodata">No data found</td></tr>
}
    </tbody>
  </table>
</div>
      </div>
    );
  }
}

export default App;
