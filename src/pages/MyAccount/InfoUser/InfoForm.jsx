import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

export const Label = styled.label`
    font-family: 'ManropeSemiBolt';
    width: 100%;
font-weight: 600;
font-size: 18px;
line-height: 25px;
text-align: start;
display: flex;
align-items: center;
justify-content: space-between;
letter-spacing: 0.04em;
    & + & {
        margin-top: 8px;
    }
`

export const Input = styled(Field)`
    width: 76%;
    height: 32px;
    padding: 4px 12px;
    border: 1px solid #54ADFF;
border-radius: 20px;
margin-left: 16px;
`

const InfoForm = () => {
    
    return (
        <>
        <Formik initialValues={{name: ''}} >
              <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '21px'}}>
                <Label>
                <p style={{width: '84px'}}>Name:</p>
                    <Input name='name' type='text'/>
                </Label>
                <Label>
                <p style={{width: '84px'}}>Email:</p>
                    <Input name='email' type='email'/>
                </Label>
                <Label>
                <p style={{width: '84px',}}>Birthday:</p>
                    <Input name='birthday' type='date'/>
                </Label>
                <Label>
                <p style={{width: '84px'}}>Phone:</p>
                    <Input name='phone' type='tel'/>
                </Label>
                <Label>
                <p style={{width: '84px'}}>City:</p>
                    <Input name='city' type='text'/>
                </Label>
              </Form>
        </Formik>
        </>
    )
}

export default InfoForm;