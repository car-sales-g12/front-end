import jwtDecode from "jwt-decode";
import { api } from "../../../services/api";
import { StyledCommentListCard } from "./StyledCommentListCard";
import { useState } from "react";

interface CommentListCardProps {
  comment: string | undefined;
  name: string | undefined;
  urlImg: string | undefined;
  updatedAt: string;
  idComment: number | undefined;
  commentUser: number | undefined;
}
 interface DecodedToken {
  id?: string;
}
export const CommentListCard = ({
  comment,
  name,
  urlImg,
  updatedAt,
  idComment,
  commentUser,
}: CommentListCardProps) => {
  const [showTextArea,setShowTextArea]=useState(false)
const [commentText, setCommentText] = useState<string>(comment || "");
  const token = localStorage.getItem('Token');
let LoggedId: string | null = null;
  
if (token !== null) {
  const decoded = jwtDecode(token) as DecodedToken;
  LoggedId = decoded.id || null;
}




  function timeSince(date:string) {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set the time to midnight for today's date

    const [year, month, day] = date.split("-").map(Number);
    const postedDate = new Date(year, month - 1, day);
    postedDate.setHours(0, 0, 0, 0);

    if (now.getTime() === postedDate.getTime()) {
      return "Today";
    }
    const seconds = Math.floor((now - postedDate) / 1000);
    let interval = Math.floor(seconds / 31536000); // 1 year

    if (interval >= 1)
      return interval + " year" + (interval > 1 ? "s" : "") + " ago";

    interval = Math.floor(seconds / 2592000); // 1 month
    if (interval >= 1)
      return interval + " month" + (interval > 1 ? "s" : "") + " ago";

    interval = Math.floor(seconds / 86400); // 1 day
    if (interval >= 1)
      return interval + " day" + (interval > 1 ? "s" : "") + " ago";

    // /*If upgradedAt comes with time uncomment the code below*/
    // interval = Math.floor(seconds / 3600); // 1 hour
    // if (interval >= 1) return interval + " hour" + (interval > 1 ? "s" : "") + " ago";

    // interval = Math.floor(seconds / 60); // 1 minute
    // if (interval >= 1) return interval + " minute" + (interval > 1 ? "s" : "") + " ago";

    // return "Just now";
  }

  const handleDelete = () => {
    api.delete(`/comment/${idComment}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  const hadnleUpdate=()=>{

    try {
      api.patch(`/comment/${idComment}`,{
        comment:commentText
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
    } catch (error:unknown) {
      console.log(error)
    }


    setShowTextArea(!showTextArea)
  }

  // const testeData ="2023-09-02"

  return (
    <StyledCommentListCard>
      <div className="top_comment">
        <img src={urlImg} alt={name} />
        <h2>{name}</h2>
        <p>· {timeSince(updatedAt)}</p>
      </div>

      {!showTextArea && <div className="bottom_comment">
        <p>{comment}</p>
      </div>}

     {showTextArea && ( <textarea name="" id="" cols={30} onChange={e => setCommentText(e.target.value)} value={commentText}></textarea>)}
      <div className="commmentSetUp">
      {LoggedId == commentUser && (
        <span className="deleteSpan"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </span>
        
      )}
          {LoggedId == commentUser && !showTextArea && (<span className="editSpan" onClick={()=>{
              setShowTextArea(!showTextArea)
          }}>Edit</span>)}
      {showTextArea && <button onClick={()=>{
              setShowTextArea(!showTextArea)
          }}>Cancel edit</button>}

       { showTextArea&&   <button onClick={()=>{
hadnleUpdate()
       }}>Ok</button>}
      </div>
    

    </StyledCommentListCard>
  );
};
