import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import proj from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

class MapComponent extends Component {

    constructor (props) {
        super(props);
        this.mapRef = null;
        this.setMapRef = element => {
          this.mapRef = element;
        }
      }

    render() {
        const styles = { height: '100%', width: '100%'}
        return(
            <div style={styles} ref={this.setMapRef}></div>
        )
    }

    componentDidMount() {
        const mapDOMNode = ReactDOM.findDOMNode(this.mapRef);
        new Map({
            target: mapDOMNode,
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
              center: fromLonLat([24.9400117,60.188055]),
              zoom: 18
            })
          });
    }

}

export default MapComponent
