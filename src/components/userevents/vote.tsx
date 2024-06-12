import { useState } from "react";
import VoteButton from "./voteButton";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

interface IVoteProps {
  globalVoteCount: number;
//   setGlobalVoteCount: (updater: (count: number) => number) => void;
}

const Vote = (props: IVoteProps) => {
  const [hasVoted, setHasVoted] = useState(false);
  let { globalVoteCount } = props;

  const [globalCount, setGlobalCount]= useState(globalVoteCount)

  const handleThumbsUp=()=>{
    if(!hasVoted){
        setGlobalCount(globalCount+1)
        setHasVoted(true)
    }
  }

  const handleThumbsDown=()=>{
    if(!hasVoted){
        setGlobalCount(globalCount-1)
        setHasVoted(true);
    }
  }


  return (
    <>
      <h5>Note: You are not allowed to change your vote once selected!</h5>
      <div>
        <VoteButton
          hasVoted={hasVoted}
          testId="vote-up"
          imageSrc={<AiOutlineLike size={20} color="green" />}
        //   handleVote={() => handleVote("up")}
          handleVote={handleThumbsUp}

        
        />
      </div>
      <p data-testid="vote-count">{globalCount}</p>
      <div>
        <VoteButton
          testId="vote-down"
          hasVoted={hasVoted}
          imageSrc={<AiOutlineDislike size={20} color="red" />}
          handleVote={handleThumbsDown}
        />
      </div>
    </>
  );
};

export default Vote;
