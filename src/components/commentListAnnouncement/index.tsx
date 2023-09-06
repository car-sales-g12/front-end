import { StyledCommentList } from "./StyledCommentList";
import { CommentListCard } from "./commentListCard";

interface Comment {
  id:number,
  comment:string,
  createdAt:string,
  updatedAt:string,
  user:{
      id:number,
      name:string,
      perfilImg:string
  }
}
interface CommentListProps {
  allComments: Comment[];
}

export const CommentList = ({ allComments }: CommentListProps) => {
  if (allComments.length === 0) {
    return    <StyledCommentList>
       <h2 className="ul-title">Não há comentários no momento.</h2>
       </StyledCommentList>
  }

  return (
    <StyledCommentList>
      <h2 className="ul-title">Comentários</h2>
      {allComments.map((element,index) => (
        <CommentListCard commentUser={element.user.id} updatedAt={element.updatedAt} key={index} comment={element.comment} name={element.user.name} urlImg={element.user.perfilImg} idComment={element.id}/>
      ))}
    </StyledCommentList>
  );
};
