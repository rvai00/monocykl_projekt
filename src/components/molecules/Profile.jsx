import styled from "styled-components";
import {Name} from  "../atoms/Name"
import { Badges} from "../atoms/Badges"

export const Profile = (props) => {
    return <StyledWrapper>
      <Name name={props.user.name}/> 
    <Badges badges={props.user.badges}/></StyledWrapper>
  }

const StyledWrapper = styled("div")(
()=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1ex solid black",
    paddingInline: "16px",
    paddingBlock: "20px",
    width: "300px", //;_;
    margin: "16x",
    borderRadius: "15px 20px"
})
);