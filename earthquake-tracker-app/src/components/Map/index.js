import React from 'react'
import GoogleMapReact from 'google-map-react'
import {MapDiv ,QuakeImg} from './style'

const QuakeImage = () => <QuakeImg src='/earthquake.png'/>

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 30.2682,
            lng: -97.74295
          },
          zoom: 1
    }

    render(){
        console.log(this.props.quakes)
        return(
            <MapDiv>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} 
                >
                    {this.props.quakes.map((q,i)=>{
                    console.log(q.geometry.coordinates)
                    return(
                        
                        <QuakeImage
                            key={i}
                            lat={q.geometry.coordinates[1]}
                            lng={q.geometry.coordinates[0]}
                        />
                    
                    )
                    })}

                </GoogleMapReact>
            </MapDiv>
        )
    }
}

export default Map