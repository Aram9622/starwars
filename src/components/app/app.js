import React, { Component } from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import './app.css'
class App extends Component {
    state = {
        selectedPerson: null
    }
    OnItemsSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){
        const {selectedPerson} = this.state;

        return (
            
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className='col-md-6'>
                        <ItemList OnItemsSelected={this.OnItemsSelected}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App
