import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 14rem;
  margin-right: 5%;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/MOODECHO.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
