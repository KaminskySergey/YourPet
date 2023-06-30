import { useState } from "react"
import styled from "styled-components"

const List = styled.ul`
    text-align: start;
`

const Item = styled.li`
    &:not(:last-child){
        margin-bottom: 12px;
    }
`
const Button = styled.button`
    padding: 8px 16px;
    border-radius: 40px;
    border: none;
    color: ${({ active }) => (active ? '#CCE4FB' : '#54ADFF')};
  background-color: ${({ active }) => (active ? '#54ADFF' : '#CCE4FB')};
    cursor: pointer;
    transition: all 250ms;
`
const ChooseOption = ({handleChooseInfo, handleNext, handleBack}) => {
    const [activeButton, setActiveButton] = useState('');
    
    const handleClick = (data) => {
        setActiveButton(data);
        handleChooseInfo()
      };

      const handleNextClick = () => {
        handleChooseInfo(activeButton);
        handleNext();
      };

    return (
        <>
            <List>
                <Item>
                    <Button type="button" active={activeButton === 'your pet'} onClick={() => handleClick('your pet')}>your pet</Button>
                </Item>
                <Item>
                    <Button type="button" active={activeButton === 'sell'} onClick={() => handleClick('sell')}>sell</Button>
                </Item>
                <Item>
                    <Button type="button" active={activeButton === 'lost/found'} onClick={() => handleClick('lost/found')}>lost/found</Button>
                </Item>
                <Item>
                    <Button type="button" active={activeButton === 'in good hands'} onClick={() => handleClick('in good hands')}>in good hands</Button>
                </Item>
            </List>
            <div>
                <button type="button" onClick={handleNextClick}>Next</button>
                <button type="button" onClick={handleBack}>Calcel</button>

            </div>
        
        </>
    )
}

export default ChooseOption