import * as React from "react";

interface IVoteButtonProps {
  handleVote: () => void;
  hasVoted: boolean;
  imageSrc: any;
  testId:string;
}

const VoteButton = (props: IVoteButtonProps) => {
  const { handleVote, hasVoted, imageSrc, testId } = props;
  return (
    <button onClick={handleVote} disabled={hasVoted}  data-testid={testId}>
      {imageSrc}
    </button>
  );
};

export default VoteButton;
