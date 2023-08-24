import { StyledCommentListCard } from "./StyledCommentListCard";

interface CommentListCardProps {
  comment: string | undefined;
  name: string | undefined;
  urlImg: string | undefined;
}

export const CommentListCard = ({
  comment,
  name,
  urlImg,
}: CommentListCardProps) => {
  return (
    <StyledCommentListCard>
      <div className="top_comment">
        <img src={urlImg} alt={name} />
        <h2>{name}</h2>
        <p>· há 7 dias</p>
      </div>

      <div className="bottom_comment">
        <p>{comment}</p>
      </div>
    </StyledCommentListCard>
  );
};
