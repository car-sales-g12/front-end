import { StyledCommentList } from "./StyledCommentList";
import { CommentListCard } from "./commentListCard";

interface Comment {
  comment:string,
  createdAt:string,
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
        <CommentListCard key={index} comment={element.comment} name={element.user.name} urlImg={element.user.perfilImg}/>
      ))}
    </StyledCommentList>
  );
};
