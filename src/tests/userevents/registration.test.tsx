import { render,screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Registration from "../../components/userevents/registration";

describe("registration",()=>{

    it("allows users to submit a form",()=>{
        const mockFunction= jest.fn();
        const mockValues = {
            name:"feisal",
            email:"feisalmib@gmail.com"
        }
        render(<Registration handleRegister={()=>mockFunction(mockValues)}/>)
        const button = screen.getByPlaceholderText("submit");
        userEvent.click(button)
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith({
            name:"feisal",
            email:"feisalmib@gmail.com"
        })
    })

    



})