import React, { Component } from 'react'
import SwapiServie from '../../services/swapi-service'
import './random-planet.css'
import Spinner from '../spinner'
import Error404 from '../404'
class RandomPlanet extends Component {
    swapiservice = new SwapiServie();
    state = {
        planet: {},
        loading: true,
        error: false
    }
    componentDidMount(){
        setInterval(()=>{
            this.updatePlanet()
        }, 2500)
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet,loading:false})
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    updatePlanet(){
        const id = Math.floor(Math.random() * 25 + 2 );
        this.swapiservice
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    } 
    render(){
        const {planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <Error404/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        return (
            <div className="random-planet card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
    
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diametr} = planet;
    return (
        <>
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div className="card-body">
                <h2>{name}</h2>
                <ul className="list-group list-group-item">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diametr}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default RandomPlanet
