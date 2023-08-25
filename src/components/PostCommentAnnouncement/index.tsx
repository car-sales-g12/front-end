import { StyledPostComment } from "./StyledPostCommentAnnouncement";
import { useForm, SubmitHandler } from "react-hook-form"
import jwtDecode from "jwt-decode";


interface IFormInput {
  comment: string
}
interface incomingProps{
  name:string | undefined,
  profileimg:string | undefined
}

import { useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export const PostCommentAnnouncement = ({name,profileimg}:incomingProps) => {
  const token=localStorage.getItem('Token') || {}
  const userId=jwtDecode(token).id
  const [comment, setComment] = useState('');
  const { announceid } = useParams();
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
   
    api.post(`/comment/${userId}/${announceid}`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }
  const handleSpanClick = (text: string) => {
  setComment(prevComment => `${prevComment} ${text}`);
}
  

  return (
    <StyledPostComment onSubmit={handleSubmit(onSubmit)}>
      <div className="top_comment">
        <img src={profileimg} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="commentArea">
        <textarea
        {...register("comment")}
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows="10"
          placeholder="Escreva um comentário"
        />
        <button type="submit">Comentar</button>
      </div>
      <div className="labelsComment">
      <span onClick={() => handleSpanClick('Gostei muito!')}>Gostei muito!</span>
      <span onClick={() => handleSpanClick('Incrível')}>Incrível</span>
      <span onClick={() => handleSpanClick('Recomendarei para meus amigos!')}>Recomendarei para meus amigos!</span>
      </div>
    </StyledPostComment>
  );
};
