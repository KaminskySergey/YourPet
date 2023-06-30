import { Field, Form, Formik, useFormik } from "formik"
import styled from "styled-components";
import * as Yup from 'yup';

export const PersonalValidSchema = Yup.object().shape({
    title: Yup.string().required(),
    name: Yup.string().required(),
    birth: Yup.string().required(),
    breed: Yup.string().required(),
    
});

export const Label = styled.label`
font-family: "ManropeMedium";
font-weight: 500;
font-size: 14px;
text-align: start;
display: flex;
justify-content: start;
flex-direction: column;
color: #111111;
@media (max-width: 767px) {
    margin-bottom: 4px;
}
@media (min-width: 768px) {
    margin-bottom: 8px;
}
`
export const Input = styled(Field)`
width: 100%;
height: 40px;
padding: 8px 16px;
border: 1px solid #54ADFF;
border-radius: 40px;
margin-top: 8px;
`
export const Error = styled.div`
  
  margin-left: 8px;
  width: 250px;
  font-size: 10px;
  color: #c10430;

  @media (min-width: 768px) {
    width: 300px;
  }
`;
const PersonalDetails = ({handlePersonalInfo, handleNext, handleBack}) => {
    
    const formik = useFormik({
        initialValues: {
            title: '',
            name: '',
            birth: '',
            breed: '',
        },
        validationSchema: PersonalValidSchema,
        onSubmit: async (value, {resetForm}) => {
            handlePersonalInfo(value)
            handleNext()
            resetForm()
        }
    })
    
    return (
        <>
        <Formik initialValues={formik.values}>
            <Form onSubmit={formik.handleSubmit}>
                <Label>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Title of add</p>
                    {formik.touched.title && formik.errors.title ? (
                    <Error>*{formik.errors.title}</Error>
                    ) : null}
                    </div>
                    <Input name='title' type="text" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}/>
                    
                </Label>
                <Label>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Name of add</p>
                    {formik.touched.name && formik.errors.name ? (
                    <Error>*{formik.errors.name}</Error>
                    ) : null}
                    </div>
                    <Input name='name' type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                </Label>
                <Label>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Date of birth</p>
                    {formik.touched.birth && formik.errors.birth ? (
                    <Error>*{formik.errors.birth}</Error>
                    ) : null}
                    </div>
                    <Input name='birth' type="date" onChange={formik.handleChange} value={formik.values.birth} onBlur={formik.handleBlur}/>
                </Label>
                <Label>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Breed</p>
                    {formik.touched.breed && formik.errors.breed ? (
                    <Error>*{formik.errors.breed}</Error>
                    ) : null}
                    </div>
                    <Input name='breed' type="text" onChange={formik.handleChange} value={formik.values.breed} onBlur={formik.handleBlur}/>
                </Label>
            </Form>
        </Formik>
        <button type="button" onClick={handleBack}>back</button>
        <button type="button" onClick={() => formik.submitForm()}>next</button>
        </>
    )
}

export default PersonalDetails