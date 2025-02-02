import { useEffect, useState } from "react";
import * as petService from '../../services/petsService';

const PetDetails = ({match}) => {
    const [x, y] = useState({});
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(y)
    }, [match]);
    return (
        <section class="detailsOtherPet">
            <h3>{x.name}</h3>
            <p>Pet counter: {x.likes}
        <a href="#">
                    <button class="button">
                        <i class="fas fa-heart"></i>Pet
            </button>
                </a>
            </p>
            <p class="img"><img src={x.imageURL} /></p>
            <p class="description">{x.description}</p>
        </section>
    )
};
export default PetDetails;