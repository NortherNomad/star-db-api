import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-service";
import Row from "../row"
import "./people-page.css"

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedItem: null,
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {

        const {
            getPerson,
            getAllPeople,
            getStarship,
            getPlanet,
            getPersonImage,
            getStarshipImage,
            getPlanetImage
        } = this.swapiService

        const itemList = (
            <ItemList onItemSelected={this.props.onItemSelected} getData={ getAllPeople } >
                {i => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={getPlanet}
                getImageUrl={getPlanetImage}>
                
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>
        )
    }
}