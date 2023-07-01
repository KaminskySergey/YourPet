import { Link } from "react-router-dom";
import { ButtonDelete, ContImg, ContInfo, IconDelete, ItemInfo, ItemPets, ListInfo, ListPets, Title, Wrapper } from "./MyPets.styled";
import { selectedPetsCurrentUser } from "../../../redux/pets/selectorsPets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPetsById, deletePets } from "../../../redux/pets/thunkPets";


const MyPets = () => {
    const petsCurrentUser = useSelector(selectedPetsCurrentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allPetsById())
    }, [dispatch])
    
    const handleDelete = (id) => {
        console.log(id, 'idididididid')
        dispatch(deletePets(id))
    }

    return (
        <>
        <Wrapper >
                <div>
                    <Title>My pets:</Title>
                    <Link style={{border: '1px solid black', color: '#000000'}} to={'/addPet'}>add pet</Link>
                </div>
                <ListPets>
                {
                    petsCurrentUser?.map(item => (
                        <ItemPets key={item._id}>
                    <ContImg>
                        <img src={item.image} alt={item.name} />
                    </ContImg>
                    <ContInfo>
                    <ButtonDelete onClick={() => handleDelete(item._id)} type="button"><IconDelete /></ButtonDelete>
                        <ListInfo>
                            <ItemInfo><p>Name:</p><span style={{display: 'block'}}>{item.name}</span></ItemInfo>
                            <ItemInfo><p>Birth:</p><span>{item.birth}</span></ItemInfo>
                            <ItemInfo><p>Breed:</p><span>{item.breed}</span></ItemInfo>
                            <ItemInfo comment={'comment'}><p>Comments:</p><span>{item.comments}</span></ItemInfo>
                        </ListInfo>
                    </ContInfo>
                </ItemPets>
                    ))
                }
                </ListPets>
                
            </Wrapper>
        </>
    )
}

export default MyPets;