import React from 'react';
import './App.css';

class App extends React.Component{
  state ={
    earthquakes: []
  }

  getEarthQuakes = async () => {
    try{
      const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
      const quakesJson = await quakes.json()
      return quakesJson
    }catch(err){
      console.log(err)
    }
  }

  render(){
    console.log(this.getEarthQuakes())
    return (
      <div className="App">
        <h1>heyy</h1>
      </div>
    )
  }
}

export default App;
