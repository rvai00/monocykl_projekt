import styled from "styled-components";
import {Name} from  "../atoms/Name"
import { Badges} from "../atoms/Badges"

export const Profile = (props) => {
    return <StyledWrapper>
      <Name name={props.user.name}/> 
      <StyledDetails>
    <Badges badges={props.user.badges}/></StyledDetails>
    </StyledWrapper>
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