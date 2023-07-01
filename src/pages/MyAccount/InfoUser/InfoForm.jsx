import { Formik, Form, useFormik } from 'formik';
import { IconEdit, Input, Label } from './InfoForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUser } from '../../../redux/auth/selectorsAuth';
import { useState } from 'react';





const InfoForm = () => {
    const currentEmail = useSelector(selectedUser)
    const [activeInput, setActiveInput] = useState('');
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: currentEmail.user.email || '',
            birthday: '',
            phone: '',
            city: '',
        },
        
    })
    const handleToggle = (inputName) => {
        setActiveInput(inputName); // Устанавливаем имя активного инпута при клике на иконку
      };
    
      const handleBlur = (e) => {
        setActiveInput(''); // Сбрасываем имя активного инпута при потере фокуса
        const {name} = e.target;
        dispatch(formik.setFieldValue(name, formik.values[name], true))
    };
    return (
        <>
        <Formik initialValues={{name: ''}} >
              <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '21px'}}>
              <Label>
            <p style={{ width: '84px' }}>Name:</p>
            <Input
              name="name"
              disabled={activeInput !== 'name'} // Проверяем, является ли инпут с именем 'name' активным
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={handleBlur}
              type="text"
            />
            <IconEdit onClick={() => handleToggle('name')} />
          </Label>
          <Label>
            <p style={{ width: '84px' }}>Email:</p>
            <Input
              name="email"
              disabled={activeInput !== 'email'}
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={handleBlur}
              type="email"
            />
            <IconEdit onClick={() => handleToggle('email')} />
          </Label>
          <Label>
            <p style={{ width: '84px' }}>Birthday:</p>
            <Input
              name="birthday"
              disabled={activeInput !== 'birthday'}
              onChange={formik.handleChange}
              value={formik.values.birthday}
              onBlur={handleBlur}
              type="date"
            />
            <IconEdit onClick={() => handleToggle('birthday')} />
          </Label>
          <Label>
            <p style={{ width: '84px' }}>Phone:</p>
            <Input
              name="phone"
              disabled={activeInput !== 'phone'}
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={handleBlur}
              type="tel"
            />
            <IconEdit onClick={() => handleToggle('phone')} />
          </Label>
              </Form>
        </Formik>
        </>
    )
}

export default InfoForm;