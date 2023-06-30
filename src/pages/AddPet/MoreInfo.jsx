import { Field, Form, Formik, useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Avatar from '../../components/Avatar/Avatar';
import { ButtonSex, ContFirst, ContSecond, ContThird, DopelCont, Female, FormMore, Input, Label, LabelImage, Male, TextTitleImg } from './MoreInfo.styled';
import { useResponce } from '../../components/hooks/response/response'

export const InputHidden = styled(Field)`
    display: none;
`
export const InputAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 112px;
    width: 112px;
    overflow: hidden;
    background-color: #CCE4FB;
    background-image: ${(props) => (props.preview ? `url(${props.preview})` : 'none')};
  background-size: cover;
  background-position: center;
  
   
  
  
`
export const Window = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 16px;
    background-color: #00000080;
    padding: 2px 3px;
`

const MoreInfo = ({handleMoreInfo, handleBack}) => {
    const [gender, setGender] = useState('');
    const {isDesktop, isTablet, isMobile} = useResponce()


    const formik = useFormik({
        initialValues: {
        image: '',
        location: '',
        price: '',
        comment: '',
        sex: '',
        },
        onSubmit: (value, {resetForm}) =>  {
            handleMoreInfo(value)
            console.log('==================')
            

            resetForm()
        }

    })

    const handleGenderChange = (gender) => {
        formik.setFieldValue('sex', gender);
        setGender(gender)
      };

      
    return (
        <>
        <Formik initialValues={formik.values}>
            <FormMore isMobile={isMobile} onSubmit={formik.handleSubmit}>
            
        <DopelCont>
        <ContFirst>
            <Label>
                <p style={{marginBottom: `${isMobile && '8px' || isTablet && '16px'}`}}>The sex</p>
            <ul style={{display: 'flex'}}>
                <li>
                <ButtonSex gender={'Female'} active={gender === 'Female'}  type='button'  onClick={() => handleGenderChange('Female')}><Female active={gender === 'Female'}/> Female</ButtonSex>
                </li>
                <li style={{marginLeft: '16px'}}>
                <ButtonSex gender={'Male'} active={gender === 'Male'} type='button' onClick={() => handleGenderChange('Male')}><Male active={gender === 'Male'}/> Male</ButtonSex>
                </li>
            </ul>
            </Label>
            
            <LabelImage>
            <TextTitleImg>Load the pet’s image:</TextTitleImg>
                <Avatar formik={formik}/>
            </LabelImage>
            
        </ContFirst>

        <ContSecond >
            <Label>
            <p>Location</p>
                <Input name="location" type="text" value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </Label>
            <Label>
                <p>Price</p>
                <Input name="price" type="number" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </Label>
            <Label>
                <p>Comments</p>
                <Input comment={'comment'} name="comment" as="textarea" value={formik.values.comment} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </Label>
        </ContSecond>
        </DopelCont>
        <ContThird>
        <button type="button" onClick={handleBack}>back</button>
        <button type="submit">Done</button>
        </ContThird>
    
            </FormMore>
        </Formik>
        </>
    )
}

export default MoreInfo







// const [mainPhoto, setMainPhoto] = useState(null);
//   const [additionalPhotos, setAdditionalPhotos] = useState([]);

// const handleMainPhotoUpload = (event) => {
//     const file = event.target.files[0];
//     setMainPhoto(file);
//   };

//   const handleAdditionalPhotoUpload = (event) => {
//     const files = event.target.files;
//     const newPhotos = Array.from(files);
//     setAdditionalPhotos([...additionalPhotos, ...newPhotos]);
//   };

//   const handleRemoveAdditionalPhoto = (index) => {
//     const updatedPhotos = [...additionalPhotos];
//     updatedPhotos.splice(index, 1);
//     setAdditionalPhotos(updatedPhotos);
//   };

//   const handleSubmit = () => {
//     // Отправка фотографий
//     // Можно вызвать соответствующую функцию для отправки данных на сервер или выполнять другие действия
//     // Здесь вы можете использовать `mainPhoto` и `additionalPhotos` для отправки данных

//     // Вызываем переданную функцию onSubmit, передавая ей фотографии
//     onSubmit(mainPhoto, additionalPhotos);
//   };