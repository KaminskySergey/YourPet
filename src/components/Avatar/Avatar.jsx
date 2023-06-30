import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PlusByAddPet } from '../../assets/PlusByAddPet.svg';
import { Field } from 'formik';

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
    border-radius: 20px;
    background-image: ${(props) => (props.preview ? `url(${props.preview})` : 'none')};
  background-size: cover;
  background-position: center;
  @media (min-width: 321px){
    width: 182px;
    height: 182px;
  }
   
  
  
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





const Avatar = ({formik}) => {
    
    const [imagePreview, setImagePreview] = useState([]);
  
    const handleImageChange = e => {
      const selectedFile = e.target.files[0];
      if (!selectedFile) {
        return;
      }
  
      const imageUrl = URL.createObjectURL(selectedFile);
      setImagePreview(imageUrl);
  
      formik.setFieldValue('image', selectedFile);

    };
    
    return (
        <>
      <InputAvatar preview={imagePreview}>
                {imagePreview ? null : <div>
                    <PlusByAddPet />
                </div>}
                {!imagePreview ? null : <Window>
                    <p>change Image</p>
                </Window>}
                <InputHidden name="image" type="file" accept="image/*" onChange={handleImageChange}/>

                </InputAvatar>
    </>
    );
  };

  export default Avatar;