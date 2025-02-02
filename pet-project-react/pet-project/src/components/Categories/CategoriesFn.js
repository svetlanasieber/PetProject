import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";
import CategoriNavigation from "./CategoryNavigation";

const Categories = ({ match }) => {
    const [x, setX] = useState([]);
    useEffect(() => {
        fetch('http://localhost:6500/pets')
            .then(x => x.json())
            .then(x => setX(x))
            .catch(x => console.log(x));
    }, [])
    return (
        <section className="dashboard">
            <h1>Dashboard</h1>
            <CategoriNavigation currrentCategory={match.params.category} />
            <ul className="other-pets-list">
                {x.map(x => <Pet key={x.id} {...x}/>)}
            </ul>
        </section>
    )
};
export default Categories;