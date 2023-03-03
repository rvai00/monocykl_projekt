import styled from "styled-components"

export const Goal = ({ goal }) => {
    return (
      <StyledWrapper>
        <StyledHead>
          Cel osobisty
        </StyledHead>
        {goal}
      </StyledWrapper>
    )
}

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}))

const StyledHead  = styled("h2")(() => ({
  fontSize: "20px",
  fontWeight: "800",
  margin: "0px",
}))