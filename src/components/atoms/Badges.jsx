import styled from "styled-components"

export const Badges = (props) => {
  console.log(props.badges)

    return <StyledWrapper> {props.badges?.map(badge => <div>{badge}</div> )}</StyledWrapper>
  }

  const StyledWrapper = styled("div")(()=>({
    display:"flex", 
    gap:"20px",
    alignItems:"flex-start",
      flexDirection:"column",
      
  }))