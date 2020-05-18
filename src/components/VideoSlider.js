import React, { Component } from 'react'
import data from '../data';
import Card from './Card';

export default class VideoSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
          properties: data.properties,
          property: data.properties[0]
        }
      }
      nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
          property: data.properties[newIndex]
        })
      } 
      prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
          property: data.properties[newIndex]
        })
      } 


    render() {
        const {properties, property} = this.state;

        return (
            <div className="App">
                <button
                onClick={() => this.nextProperty()}
                disabled={property.index ===
                data.properties.length-1}
                >Next</button>
                <button
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}
                >Prev</button>

                <div className="page">
                   <Card property={property} />
                </div>
            </div>
        );
    };
}
