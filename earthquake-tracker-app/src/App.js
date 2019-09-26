import React from 'react';
import './App.css';
import List from './components/Quakes'
import Map from './components/Map'


class App extends React.Component{
  state ={
    earthquakes: []
  }

  async componentDidMount(){
    console.log('comp did mount')
    const allQuakes = await this.getEarthQuakes()
    this.setState({
      earthquakes: allQuakes
    })
  }
  
  getEarthQuakes = async () => {
    try{
      const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')

      if(!quakes.ok){
        throw Error(Response.statusText)
      }

      const quakesJson = await quakes.json()
      return quakesJson.features

    }catch(err){
      console.log(err)
    }
  }

  render(){
    console.log(this.state.earthquakes)
    return (
      <div className="App">
        <div>
          <div class="mapContain"></div>
          <h1>EarthQuakes</h1>
          <Map quakes={this.state.earthquakes}/>
          <h1>Earthquakes from past week:</h1>
          <List quakes={this.state.earthquakes}/>
        </div>
      </div>
    )
  }
}

export default App;
