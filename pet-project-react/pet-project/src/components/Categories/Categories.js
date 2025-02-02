import { Component } from "react";
import Pet from "../Pet/Pet";
import CategoriNavigation from "./CategoryNavigation";
import * as petsService from '../../services/petsService';

class Categories extends Component {
    constructor() { super(); this.state = { x: [] } };
    componentDidMount() {
        petsService.getAll()
            .then(x => this.setState({ x }));
    }
    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;
        if (category == prevProps.match.params.category) return;
        petsService.getAll(category)
            .then(x => this.setState({ x }));
    }
    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>
                <CategoriNavigation currrentCategory={this.props.match.params.category} />
                <ul className="other-pets-list">
                    {this.state.x.map(x => <Pet key={x.id} {...x} />)}
                </ul>
            </section>
        )
}
};
export default Categories;