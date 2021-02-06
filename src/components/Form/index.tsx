import React,{useRef} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/ducks/Users/types';


const Form  = () => {

  let inputImg = useRef<HTMLInputElement>(null)
  let inputDescription = useRef<HTMLInputElement>(null)

  const {name, userPicture} = useSelector((state:UserState)=>state.user)

  const submitForm = () => {

    
    const imgUrl = inputImg.current?.value
    const descricao = inputDescription.current?.value

    
    let formData = {
      user:name,
      userPicture: userPicture,
      postPicture: imgUrl,
      description: descricao,
      likes:0
    }

    axios.post('http://localhost:4000/posts', formData)

  }

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" ref={inputImg} placeholder="Cole a url da imagem" />
        <input type="text" ref={inputDescription} placeholder="Digite uma descrição" />
        <button onClick={submitForm}>Postar!</button>
      </div>
  );
}

export default Form;