import styled from "styled-components";
import ChooseOption from "./ChooseOption";
import PersonalDetails from "./PersonalDetails";
import MoreInfo from "./MoreInfo";
import { useState } from "react";
import ProgressAdd from "./ProgressAdd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createPets } from "../../redux/pets/thunkPets";

export const ContainerAdd = styled.div`
outline: 1px solid blue;
margin: auto;
border-radius: 40px;
    @media (max-width: 767px) {
        width: 100%;
        
        padding: 20px 8px 0;
    }
    
    @media (min-width: 768px){
        position: relative;
        justify-content: center;
    width: 704px;
    padding: 20px 32px;
    }
`
export const Title = styled.h2`
text-align: start;
    @media (max-width: 767px){
        font-family: 'ManropeMedium';
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 24px;
    }
`
const AddPet = () => {
    const [step, setStep] = useState(1)
const [chooseInfo, setChooseInfo] = useState(null)
const [personalInfo, setPersonalInfo] = useState(null)
const [moreInfo, setMoreInfo] = useState(null)

    const dispatch = useDispatch()
    //====================
    const handleAddPet = async () => {
        const { image, location, price, comment, sex } = moreInfo;
        const { name, birth, breed, title } = personalInfo;
        
        console.log({status: chooseInfo, image, location, price, comments: comment, sex, name: name, age: birth, breed})
        const petData = {
            title: title,
            name: name,
            birth: birth,
            age: "8 лет",
            price: price,
            breed: breed,
            status: chooseInfo,
            sex: sex,
            image: image.name,
            location: location,
            comments: comment
          };
        await dispatch(createPets(petData));
        
        console.log({chooseInfo, personalInfo, moreInfo}, '6666666')
    }

    const handleChooseInfo = (data) => {
        setChooseInfo(data);
        
      };
    
      const handlePersonalInfo = (data) => {
        setPersonalInfo(data);
        
      };
    
      const handleMoreInfo = (data) => {
        setMoreInfo(data);
        
      };
    //====================
    const handleNext = () => {
        
        setStep(pS => pS + 1)
    }
    const handleBack = () => {
        setStep(pS => pS - 1)

    }

    useEffect(() => {
        if (chooseInfo && personalInfo && moreInfo) {
          handleAddPet();
        }
      }, [chooseInfo, personalInfo, moreInfo]);
    return (
        <>
            <ContainerAdd>
            <Title>Add pet</Title>
            <ProgressAdd step={step}/>
            
            {step === 1 && <ChooseOption handleChooseInfo={handleChooseInfo} handleNext={handleNext} handleBack={handleBack}/>}
            {step === 2 && <PersonalDetails handlePersonalInfo={handlePersonalInfo} handleNext={handleNext} handleBack={handleBack}/>}
            {step === 3 && <MoreInfo handleMoreInfo={handleMoreInfo}  handleBack={handleBack}/>}
            </ContainerAdd>
        </>
    )
}

export default AddPet;