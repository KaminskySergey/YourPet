import AuthContainer from "../../components/AuthContainer/AuthContainer"
import { Formik, Form, useFormik, ErrorMessage } from 'formik';
import { useResponce } from "../../components/hooks/response/response";
import { Button, Input, Label, Title, Text, LinkChange } from "./Register.styled";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/thunkAuth";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

export const RegisterValidSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(5, 'Password is too short')
        .max(20, 'Password is too long')
        .matches(
            passwordRules,
            'Password must contain lowecase letters, uppercase letters and numbers'
        )
        .required('Required'),
});

const Register = () => {
    const {isDesktop, isTablet, isMobile} = useResponce()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
          },
          validationSchema: RegisterValidSchema,
          onSubmit: async (value, { resetForm }) => {
                  if(value.password === value.passwordConfirm){
                    const { passwordConfirm, ...data } = value;
                    const resultAction = await dispatch(register(data))
                    if(resultAction.type === 'auth/register/fulfilled'){
                        await dispatch(login({
                            email: value.email,
                            password: value.password,
                        }))
                    }
                    resetForm()
                  } else {
                    console.log('не правильный пароль')
                  }
          }
    })
    return (
        <>
        <AuthContainer>
            <Title>Registration</Title>
            <Formik initialValues={{name: '', password: '', passwordConfirm: ''}} >
              <Form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: `${isDesktop && '20px' || isTablet && '16px' || isMobile && '24px'}`}}>
                <Label>
                    <Input name='email' type='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                </Label>
                {formik.touched.email && formik.errors.email ? <ErrorMessage name='email' component='p'>{formik.errors.email}</ErrorMessage> : null}
                <Label>
                    <Input name='password' type='password' placeholder='Password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
                </Label>
                {formik.touched.password && formik.errors.password ? <ErrorMessage name='email' component='p'>{formik.errors.password}</ErrorMessage> : null}
                <Label>
                    <Input name='passwordConfirm' type='password' placeholder='Confirm password' onChange={formik.handleChange} value={formik.values.passwordConfirm} onBlur={formik.handleBlur}/>
                </Label>
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <ErrorMessage name='email' component='p'>{formik.errors.passwordConfirm}</ErrorMessage> : null}
                <Button type="submit">
                    Registration
                </Button>
              </Form>
        </Formik>
        <Text>Already have an account? <LinkChange to={'/login'}>Login</LinkChange></Text>
        </AuthContainer>
        </>
    )
}

export default Register