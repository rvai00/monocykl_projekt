import styled from "styled-components";
import {Name} from  "../atoms/Name"
import { Badges} from "../atoms/Badges"
import { Goal } from "../atoms/Goal";

export const Profile = ({user}) => {
    return (
      <StyledWrapper>
        <Name name={user.name}/> 
        <StyledDetails>
          <Goal goal={user.goal} />
          <Badges badges={user.badges}/>
        </StyledDetails>
      </StyledWrapper>
    )
  }

const StyledWrapper = styled("div")(
()=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingInline: "16px",
    paddingBlock: "20px",
    margin: "16px",
})
);

const StyledDetails = styled("div")(
  ()=>({
    background: "#FFFFFF",
    border: "1px solid #000000",
    borderRadius: "22px",
    padding: "46px 51px",
    width: "811px",
    boxSizing: "border-box"
  })
  );