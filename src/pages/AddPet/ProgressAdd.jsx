import styled from "styled-components"

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px){
        margin-bottom: 24px;
    }
    @media (min-width: 768px){
        margin-bottom: 40px;
    }
`

const Item = styled.li`
p {
    color: #888888;
    text-align: start;
    margin-bottom: 12px;
}

div {
        background-color: #CCE4FB;
        border-radius: 40px;
}
@media (max-width: 767px){
    width: 80px;
    p {
        font-family: 'ManropeMedium';
        font-weight: 500;
        font-size: 10px;
    }
}
@media (min-width: 768px) {
    width: 120px;
    p {
        font-family: 'ManropeMedium';
        font-weight: 500;
        font-size: 16px;
    }
}
    
    
`
// #CCE4F
const ProgressAdd = ({step}) => {
    const firstDivColor = step >= 2 ? 'green' : '#54ADFF';
    const secondDivColor = firstDivColor === 'green' ? '#54ADFF' : (step === 1 ? '#CCE4FB' : '#54ADFF');
    
    const firstTextColor = step >= 2 ? 'green' : '#54ADFF';
    const secondTextColor = firstDivColor === 'green' ? '#54ADFF' : (step === 1 ? '#CCE4F' : '#54ADFF');

    return (
        
        <List>
        <Item>
          <p style={{color: firstTextColor}}>Choose option</p>
          <div style={{ width: '100%', height: '8px', backgroundColor: firstDivColor }}></div>
        </Item>
        <Item>
          <p style={{color: step === 3 ? 'green' : secondTextColor}}>Personal details</p>
          <div style={{ width: '100%', height: '8px', backgroundColor: step === 3 ? 'green' : secondDivColor }}></div>
        </Item>
        <Item>
          <p style={{color: step === 3 ? '#54ADFF' : ''}}>More info</p>
          <div style={{ width: '100%', height: '8px', backgroundColor: step === 3 ? '#54ADFF' : '' }}></div>
        </Item>
      </List>
        
    )
}

export default ProgressAdd