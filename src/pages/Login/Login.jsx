import { Formik, Form, useFormik } from "formik"
import AuthContainer from "../../components/AuthContainer/AuthContainer"
import { Button, Input, Label, LinkChange, Text, Title } from "./Login.styled"
import { useResponce } from "../../components/hooks/response/response"

const Login = () => {
    const {isDesktop, isTablet, isMobile} = useResponce()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value, { resetForm }) => {
            console.log(value)
            resetForm()
        }
    })
    return (
        <>
        <AuthContainer>
            <Title>Login</Title>
            <Formik onSubmit={formik.handleSubmit} initialValues={{name: '', password: '', passwordConfirm: ''}} >
              <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: `${isDesktop && '20px' || isTablet && '16px' || isMobile && '24px'}`}}>
                <Label>
                    <Input name='email' type='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                </Label>
                <Label>
                    <Input name='password' type='password' placeholder='Password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
                </Label>
                <Button type="submit">
                    Login
                </Button>
              </Form>
        </Formik>
        <Text>Don't have an account? <LinkChange to={'/register'}>Register</LinkChange></Text>
        </AuthContainer>
        </>
    )
}

export default Login