import { Link } from "react-router-dom";
import { Title } from "./MyPets.styled";
import { selectedPetsCurrentUser } from "../../../redux/pets/selectorsPets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPetsById } from "../../../redux/pets/thunkPets";

const MyPets = () => {
    const petsCurrentUser = useSelector(selectedPetsCurrentUser)
    console.log(petsCurrentUser, 'petsCurrentUserpetsCurrentUserpetsCurrentUserpetsCurrentUserpetsCurrentUser')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allPetsById())
    }, [dispatch])

    return (
        <>
        <div style={{outline: '2px solid green', height: '100%', width: '70%'}}>
                <div>
                    <Title>My pets:</Title>
                    <Link style={{border: '1px solid black', color: '#000000'}} to={'/addPet'}>add pet</Link>
                </div>
                <div style={{width: '100%'}}>
                    <ul>
                        {
                            petsCurrentUser?.map(pet => (
                                <li key={pet._id}>
                                    {pet.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MyPets;