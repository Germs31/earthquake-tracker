import React from 'react'
import GoogleMapReact from 'google-map-react'
import {MapDiv} from './style'

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
            <MapDiv>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API  }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} 
                >

                </GoogleMapReact>
            </MapDiv>
        )
    }
}

export default Map