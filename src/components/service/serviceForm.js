import React, { Component } from 'react'

 class ServiceForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            serviceName : "",
        }
    }

    onClickBack = () => {
        debugger
        this.props.onClickBack()
    }

  render() {
    return (
      <>
        <input value={this.state.serviceName} onChange={(e) => this.setState({serviceName: e.target.value})}/>
        <button onClick={this.onClickBack}>Back</button>
      </>
    )
  }
}

export default ServiceForm 
