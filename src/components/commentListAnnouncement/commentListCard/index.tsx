import { StyledCommentListCard } from "./StyledCommentListCard";
import Photo from "../../../assets/Photo.svg";

export const CommentListCard = () => {
  return (
    <StyledCommentListCard>
      <div className="top_comment">
        <img src={Photo} alt="teste" />
        <h2>Júlia Lima</h2>
        <p>· há 7 dias</p>
      </div>

      <div className="bottom_comment">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </StyledCommentListCard>
  );
};
