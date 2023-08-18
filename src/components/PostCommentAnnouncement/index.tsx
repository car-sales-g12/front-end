import { StyledPostComment } from "./StyledPostCommentAnnouncement";
import Photo from "../../assets/Photo.svg";
export const PostCommentAnnouncement = () => {
  return (
    <StyledPostComment>
      <div className="top_comment">
        <img src={Photo} alt="teste" />
        <h2>Júlia Lima</h2>
      </div>
      <div className="commentArea">
        <textarea id="" rows="10" placeholder="Escreva um comentário" />
        <button>Comentar</button>
      </div>
      <div className="labelsComment">
        <span>Gostei muito!</span>
        <span >Incrível</span>
        <span >Recomendarei para meus amigos!</span>
      </div>
    </StyledPostComment>
  );
};
