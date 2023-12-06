import React, { Component } from 'react'

 class ServiceDetails extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {
    const {selectedService} = this.props
    return (
      <div>
        <h4>This description about - {selectedService}</h4>
      </div>
    )
  }
}


export default ServiceDetails