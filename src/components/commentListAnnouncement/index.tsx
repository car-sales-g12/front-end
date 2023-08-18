import { StyledCommentList } from "./StyledCommentList";
import { CommentListCard } from "./commentListCard";



export const CommentList = () => {
  return (
    <StyledCommentList>
      <h2 className="ul-title">Comentários</h2>
      <CommentListCard
      />
      <CommentListCard
      />
      <CommentListCard
      />
      <CommentListCard
      />
      <CommentListCard
      />
    </StyledCommentList>
  );
};
