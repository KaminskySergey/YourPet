import styled from "styled-components";
import Box from "../../components/Box/Box"
import { Item, Img, ContainerImg, Title, Button, ListIcons, ItemIcons, TextIcons, LogoPaw, ButtonText } from "./GalleryItem.styled"
import { SiGooglemaps } from 'react-icons/si';
import { BiTimeFive } from 'react-icons/bi';
import { BiFemaleSign } from 'react-icons/bi';
// import { BiMaleSign } from 'react-icons/bi';  для мущины питомца
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from "react";
// import { AiFillHeart } from 'react-icons/ai';  для добаленного питомца по условию



const GalleryItem = () => {
  const [isPaw, setIsPaw] = useState(false)
  const handleClickButton = () => {
    setIsPaw(pS => !pS)
  }
    return (
        <>
        <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
      <Item>
          <Box style={{position: 'absolute', top: 16, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '126px', height: '32px', background:'#CCE4FB', borderRadius: '0px 16px 16px 0px', padding: '11px 17px', zIndex: 1,}}>
            <p style={{fontFamily: 'ManropeMedium', fontWeight: 500, fontSize: '14px', fontHeight: '19px', color: '#111111'}}>In good hands</p>
          </Box>
          <Box style={{position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background:'#CCE4FB', padding: '13px 11px', zIndex: 1}}>
            <AiOutlineHeart style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
          </Box>
        <ContainerImg>
          <Img src="https://www.purina.ru/sites/default/files/2021-10/amer-korotkoserst-2.jpg" alt="cat" />
          <ListIcons>
            <ItemIcons>
              <SiGooglemaps style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>Azov</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiTimeFive style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>1 year</TextIcons>
            </ItemIcons>
            <ItemIcons>
              <BiFemaleSign style={{width: '24px', height: '24px', color: '#54ADFF'}}/>
              <TextIcons>female</TextIcons>
            </ItemIcons>
          </ListIcons>
        </ContainerImg>
        <div style={{padding: '0 20px'}}>
          <Title>Cute dog looking for a home</Title>
          <Button isPaw={isPaw} type="button" onClick={handleClickButton}> 
           <ButtonText isPaw={isPaw}>Load more</ButtonText>
           {isPaw && <LogoPaw />}
          </Button>
        </div>
      </Item>
        </>
    )
}

export default GalleryItem