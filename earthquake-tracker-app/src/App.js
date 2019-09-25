import React from 'react';
import './App.css';

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
        <h1>heyy</h1>
      </div>
    )
  }
}

export default App;
