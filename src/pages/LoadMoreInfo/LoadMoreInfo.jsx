import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
    padding: 44px 20px 16px;
    min-width: 280px;
    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 681px;
        height: 540px;
    }
    @media (min-width: 1280px){
        width: 681px;
        height: 540px;
    }
`
export const ContTop = styled.div`
@media (max-width: 767px) {
    margin-bottom: 13px;
}
    @media (min-width: 768px) {
        display: flex;
        margin-bottom: 28px;
    }
`

export const ContCommentsBottom = styled.div`
@media (max-width: 767px) {
    margin-bottom: 12px;
    p {
        font-family: 'ManropeSemiBolt';
font-weight: 600;
font-size: 14px;
line-height: 19px;
letter-spacing: 0.04em;

color: #000000;
    }
    span {
        font-weight: 500;
    }
}
@media (min-width: 768px) {
    font-size: 16px;
line-height: 24px;
}
`

export const ContImg = styled.div`

@media (max-width: 767px){
    margin: 0 auto;
    margin-bottom: 12px;

}
@media (min-width: 768px) {
        width: 262px;
        height: 298px;
        margin-right: 24px;
    }
`

export const Image = styled.img`
width: 100%;
height: 100%;
    border-radius: 0px 0px 40px 40px;
    
`

export const Title = styled.h2`
    font-family: 'ManropeBolt';
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
color: #000000;
margin-bottom: 20px;
@media (min-width: 768px){
    font-size: 28px;
line-height: 38px;
    }
`
export const List = styled.ul`
 li + li {
    margin-top: 8px;
}

    @media (max-width: 13px) {
        margin-bottom: 13px;
    }
`
export const TextKey = styled.p`
font-family: 'ManropeSemiBolt';
font-weight: 600;
font-size: 14px;
line-height: 19px;
color: #000000;
width: 61px;
margin-right: 20px;
@media (min-width: 768px){
    font-size: 16px;
line-height: 22px;
width: 70px;
margin-right: 50px;
    }
`
export const TextValue = styled.p`
    font-family: 'ManropeMedium';
font-weight: 500;
font-size: 12px;
display: flex;
align-items: center;

color: #000000;
@media (min-width: 768px) {
    font-size: 16px;
line-height: 22px;
}
`
export const ContButton = styled.div`
    @media (min-width: 768px) {
    margin-left: auto;
}
`

export const ListButton = styled.ul`
    @media (max-width: 767px) {
    li + li {
        margin-top: 8px;
    }
    li:first-child button {
        color: #54ADFF;
        transition: all 250ms;
        &:hover, &:focus {
            color: #0011ff;
            border-color: #0011ff;
        }
    }

    li:last-child button {
        color: #FEF9F9;
        transition: all 250ms;
        background-color: #54ADFF;
        &:hover, &:focus {
            color: #0011ff;
            border-color: #0011ff;
        }
    }
}
@media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    li:last-child button {
        margin-left: 17px;
    }
}
`
export const Button = styled.button`
    font-family: 'ManropeBolt';
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.04em;
    display: flex;
justify-content: center;
align-items: center;
border: 2px solid #54ADFF;
border-radius: 40px;
padding: 8px 20px;
cursor: pointer;
height: 40px;

@media (max-width: 767px) {
    width: 100%;
}

`
const LoadMoreInfo = ({currentPet}) => {
    const name = currentPet.title;
    const { _id, title, ...petInfo} = currentPet
    return (
        <>
        <Container>
            <div>
            <ContTop>
                <ContImg>
                    <Image src="../../../src/assets/Rectangle24.png" alt="cat" />
                </ContImg>
                <div>
                    <Title>{name}</Title>
                    <List>
                    
                <li style={{display: 'flex'}}>
                  <TextKey>Name:</TextKey>
                  <TextValue>{currentPet.name}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>Birthday:</TextKey>
                  <TextValue>{currentPet.birth}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>Breed:</TextKey>
                  <TextValue>{currentPet.breed}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>Place:</TextKey>
                  <TextValue>{currentPet.location}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>The sex:</TextKey>
                  <TextValue>{currentPet.sex === 'Male' || currentPet.sex === 'Female' ? currentPet.sex[0].toLowerCase() + currentPet.sex.slice(1) : currentPet.sex}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>Email:</TextKey>
                  <TextValue>{currentPet.email}</TextValue>
                </li>
                <li style={{display: 'flex'}}>
                  <TextKey>Phone:</TextKey>
                  <TextValue>добавить в бэк</TextValue>
                </li>
                    </List>
                </div>
            </ContTop>
            <ContCommentsBottom>
                <p>Comments: <span>{currentPet.comments}</span></p>
            </ContCommentsBottom>
            </div>
            <ContButton>
                <ListButton>
                    <li>
                        <Button type="Button">Contact</Button>
                    </li>
                    <li>
                        <Button type="Button">Add to</Button>
                    </li>
                </ListButton>
            </ContButton>
        </Container>
        </>
    )
}

export default LoadMoreInfo;