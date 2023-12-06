import React, { Component } from 'react'
import ServiceDetails from './serviceDetails';
import ServiceForm from './serviceForm';

 class Servicelist extends Component {
    constructor(props){
        super(props);
        this.state = {
            servicelist : ["Banking", "Education", "Fitness" , "Food Services"],
            selectedService : "Banking",
            showForm : false

        }
    }
    componentDidMount() {
        let url = "" // fetch url
        fetch(url).then((res) => {
            if(res?.status && res?.res?.data){
                this.setState({
                    servicelist :  res.res.data
                })
            }
        })
    }

    onChangeSelection = (e) => {
        this.setState({
            selectedService : e
        })
    }

    onClickBack = () => {
        this.setState({
            showForm : false
        })
    }

  render() {
    const {selectedService} = this.state
    return (
      <>
        {!this.state.showForm && 
        <>
        <div style={{marginTop : "100px"}}>
            <h1>SelectedService : {selectedService}</h1>
            {this.state.servicelist.map((e,i) => {
                return (
                    <>
                    <div  onClick={() => {this.onChangeSelection(e)}}>
                        <h3>{e}</h3>
                    </div>
                    </>
                )
            })}
        </div>
        <div style={{marginTop : "100px"}}>
            <ServiceDetails selectedService = {selectedService}/>
        </div>
        <button onClick = {() => this.setState({showForm : true})}>Create Service</button>
        </>}
        {this.state.showForm && 
        <ServiceForm onClickBack = {this.onClickBack}/>
        }
      </>
    )
  }
}

export default Servicelist