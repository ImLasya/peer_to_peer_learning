// import styled from 'styled-components';

// export const PageWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;  /* Vertical centering */
//   justify-content: center; /* Horizontal centering */
//   background-color: #f0f0f0; /* Optional page background color */
// `;



import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #000 0%, #0a0a12 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        0deg,
        rgba(16, 255, 232, 0.05) 0px,
        rgba(16, 255, 232, 0.05) 1px,
        transparent 1px,
        transparent 5px
      );
    pointer-events: none;
  }
`;