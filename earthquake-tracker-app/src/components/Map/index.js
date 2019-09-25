import React from 'react'
import GoogleMapReact from 'google-map-react'

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 30.2682,
            lng: -97.74295
          },
          zoom: 1
    }

    render(){
        return(
            <h1>I am the map</h1>
        )
    }
}

export default Map