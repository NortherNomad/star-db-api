import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-service";
import Row from "../row"
import "./people-page.css"

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render() {

        const itemList = (
            <ItemList onItemSelected={this.props.onPersonSelected} getData={ this.swapiService.getAllPeople } >
                {i => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <PersonDetails personId = {this.state.onPersonSelected} />
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>
        )
    }
}