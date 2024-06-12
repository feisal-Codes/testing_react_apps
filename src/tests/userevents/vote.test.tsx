import { fireEvent, render, screen } from "@testing-library/react";
import VoteButton from "../../components/userevents/voteButton";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import userEvent from "@testing-library/user-event";
import Vote from "../../components/userevents/vote";

describe("vote button", () => {
  it("a user can vote", () => {
    const hasVoted = false;
    const handleVote = jest.fn();
    render(
      <VoteButton
        handleVote={handleVote}
        hasVoted={false}
        imageSrc={<AiOutlineLike />}
        testId="vote-up"
      />
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleVote).toBeCalledTimes(1);
  });

  it("increases the global vote count by 1", async() => {
    render(<Vote globalVoteCount={10} />);

    const button = screen.getByTestId("vote-up");
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    //wait for the count to update
    const counter = await screen.findByText(/11/i);

    expect(counter).toHaveTextContent('11');
  });

  it("thumbs down button decreases the count by 1",async()=>{
         render(<Vote globalVoteCount={10} />)
         const button = screen.getByTestId("vote-down")
         expect(button).toBeInTheDocument()
         userEvent.click(button);

         //wait the state to update

         const count = await screen.findByText(/9/i)
         expect(count).toBeInTheDocument()
    })
});
