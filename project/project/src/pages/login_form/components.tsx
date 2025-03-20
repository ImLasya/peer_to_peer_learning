// // import styled from 'styled-components';

// // // Define the type for the props used in the styled components
// // type SignInProps = {
// //   signinIn?: boolean;
// // };

// // export const Container = styled.div`
// //   background-color: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
// //   position: relative;
// //   overflow: hidden;
// //   width: 678px;
// //   max-width: 100%;
// //   min-height: 400px;
// // `;

// // export const SignUpContainer = styled.div<SignInProps>`
// //   position: absolute;
// //   top: 0;
// //   height: 100%;
// //   transition: all 0.6s ease-in-out;
// //   left: 0;
// //   width: 50%;
// //   opacity: 0;
// //   z-index: 1;
// //   ${(props: SignInProps) =>
// //     props.signinIn !== true
// //       ? `
// //         transform: translateX(100%);
// //         opacity: 1;
// //         z-index: 5;
// //       `
// //       : null}
// // `;

// // export const SignInContainer = styled.div<SignInProps>`
// //   position: absolute;
// //   top: 0;
// //   height: 100%;
// //   transition: all 0.6s ease-in-out;
// //   left: 0;
// //   width: 50%;
// //   z-index: 2;
// //   ${(props: SignInProps) => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
// // `;

// // export const Form = styled.form`
// //   background-color: #ffffff;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   flex-direction: column;
// //   padding: 0 50px;
// //   height: 100%;
// //   text-align: center;
// // `;

// // export const Title = styled.h1`
// //   font-weight: bold;
// //   margin: 0;
// // `;

// // export const Input = styled.input`
// //   background-color: #eee;
// //   border: none;
// //   padding: 12px 15px;
// //   margin: 8px 0;
// //   width: 100%;
// // `;

// // export const Button = styled.button`
// //   border-radius: 20px;
// //   border: 1px solid #1e40af;
// //   background-color: #1e40af;
// //   color: #ffffff;
// //   font-size: 12px;
// //   font-weight: bold;
// //   padding: 12px 45px;
// //   letter-spacing: 1px;
// //   text-transform: uppercase;
// //   transition: transform 80ms ease-in;
// //   &:active {
// //     transform: scale(0.95);
// //   }
// //   &:focus {
// //     outline: none;
// //   }
// // `;

// // export const GhostButton = styled(Button)`
// //   background-color: transparent;
// //   border-color: #ffffff;
// // `;

// // export const Anchor = styled.a`
// //   color: #333;
// //   font-size: 14px;
// //   text-decoration: none;
// //   margin: 15px 0;
// // `;

// // export const OverlayContainer = styled.div<SignInProps>`
// //   position: absolute;
// //   text-align: center;
// //   top: 0;
// //   left: 50%;
// //   width: 50%;
// //   height: 100%;
// //   overflow: hidden;
// //   transition: transform 0.6s ease-in-out;
// //   z-index: 100;
// //   ${(props: SignInProps) => (props.signinIn !== true ? `transform: translateX(-100%);` : null)}
// // `;

// // export const Overlay = styled.div<SignInProps>`
// //   background: #1e40af;
// //   background: -webkit-linear-gradient(to right, #1e40af, #3b82f6);
// //   background: linear-gradient(to right, #1e40af, #3b82f6);
// //   background-repeat: no-repeat;
// //   background-size: cover;
// //   background-position: 0 0;
// //   color: #ffffff;
// //   position: relative;
// //   left: -100%;
// //   height: 100%;
// //   width: 200%;
// //   transform: translateX(0);
// //   transition: transform 0.6s ease-in-out;
// //   ${(props: SignInProps) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
// // `;

// // export const OverlayPanel = styled.div`
// //   position: absolute;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   flex-direction: column;
// //   padding: 0 2rem;
// //   text-align: center;
// //   top: 0;
// //   height: 100%;
// //   width: 50%;
// //   transform: translateX(0);
// //   transition: transform 0.6s ease-in-out;
// // `;

// // export const LeftOverlayPanel = styled(OverlayPanel)<SignInProps>`
// //   left: 0;
// //   transform: translateX(-20%);
// //   ${(props: SignInProps) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
// // `;

// // export const RightOverlayPanel = styled(OverlayPanel)<SignInProps>`
// //   right: 0;
// //   transform: translateX(0);
// //   padding: 0;
// //   ${(props: SignInProps) => (props.signinIn !== true ? 'transform: translateX(0);' : null)}
// // `;

// // export const Paragraph = styled.p`
// //   font-size: 14px;
// //   font-weight: 100;
// //   line-height: 20px;
// //   letter-spacing: 0.5px;
// //   margin: 20px 0 30px;
// // `;

// import styled from 'styled-components';

// type SignInProps = {
//   signinIn?: boolean;
// };

// export const Container = styled.div`
//   background-color: #0a0a12;
//   border-radius: 10px;
//   box-shadow: 0 14px 28px rgba(16, 255, 232, 0.2), 0 10px 10px rgba(16, 255, 232, 0.1);
//   position: relative;
//   overflow: hidden;
//   width: 678px;
//   max-width: 100%;
//   min-height: 400px;
//   border: 1px solid #10ffe8;
// `;

// export const SignUpContainer = styled.div<SignInProps>`
//   position: absolute;
//   top: 0;
//   height: 100%;
//   transition: all 0.6s ease-in-out;
//   left: 0;
//   width: 50%;
//   opacity: 0;
//   z-index: 1;
//   background: linear-gradient(45deg, #0a0a12 0%, #1a1a2d 100%);
//   ${(props) => props.signinIn !== true ? `
//     transform: translateX(100%);
//     opacity: 1;
//     z-index: 5;
//   ` : null}
// `;

// export const SignInContainer = styled.div<SignInProps>`
//   position: absolute;
//   top: 0;
//   height: 100%;
//   transition: all 0.6s ease-in-out;
//   left: 0;
//   width: 50%;
//   z-index: 2;
//   background: linear-gradient(45deg, #0a0a12 0%, #1a1a2d 100%);
//   ${(props) => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
// `;

// export const Form = styled.form`
//   background-color: rgba(10, 10, 18, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0 50px;
//   height: 100%;
//   text-align: center;
// `;

// export const Title = styled.h1`
//   font-weight: bold;
//   margin: 0;
//   color: #10ffe8;
//   text-shadow: 0 0 10px rgba(16, 255, 232, 0.5);
//   font-family: 'Orbitron', sans-serif;
// `;

// export const Input = styled.input`
//   background-color: rgba(16, 255, 232, 0.1);
//   border: 1px solid #10ffe8;
//   color: #10ffe8;
//   padding: 12px 15px;
//   margin: 8px 0;
//   width: 100%;
//   &::placeholder {
//     color: rgba(16, 255, 232, 0.6);
//   }
// `;

// export const Button = styled.button`
//   border-radius: 4px;
//   border: 1px solid #10ffe8;
//   background: linear-gradient(45deg, #10ffe8 0%, #7a0bc0 100%);
//   color: #0a0a12;
//   font-size: 12px;
//   font-weight: bold;
//   padding: 12px 45px;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   transition: all 0.3s ease;
//   &:hover {
//     box-shadow: 0 0 15px rgba(16, 255, 232, 0.5);
//   }
//   &:active {
//     transform: scale(0.95);
//   }
//   &:focus {
//     outline: none;
//   }
// `;

// export const GhostButton = styled(Button)`
//   background: transparent;
//   border: 2px solid #10ffe8;
//   color: #10ffe8;
//   &:hover {
//     background: rgba(16, 255, 232, 0.1);
//   }
// `;

// export const Anchor = styled.a`
//   color: #10ffe8;
//   font-size: 14px;
//   text-decoration: none;
//   margin: 15px 0;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export const OverlayContainer = styled.div<SignInProps>`
//   position: absolute;
//   text-align: center;
//   top: 0;
//   left: 50%;
//   width: 50%;
//   height: 100%;
//   overflow: hidden;
//   transition: transform 0.6s ease-in-out;
//   z-index: 100;
//   ${(props) => (props.signinIn !== true ? `transform: translateX(-100%);` : null)}
// `;

// export const Overlay = styled.div<SignInProps>`
//   background: linear-gradient(to right, #7a0bc0, #10ffe8);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: 0 0;
//   color: #ffffff;
//   position: relative;
//   left: -100%;
//   height: 100%;
//   width: 200%;
//   transform: translateX(0);
//   transition: transform 0.6s ease-in-out;
//   ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
// `;

// export const OverlayPanel = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0 2rem;
//   text-align: center;
//   top: 0;
//   height: 100%;
//   width: 50%;
//   transform: translateX(0);
//   transition: transform 0.6s ease-in-out;
// `;

// export const LeftOverlayPanel = styled(OverlayPanel)<SignInProps>`
//   left: 0;
//   transform: translateX(-20%);
//   ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
// `;

// export const RightOverlayPanel = styled(OverlayPanel)<SignInProps>`
//   right: 0;
//   transform: translateX(0);
//   padding: 0;
//   ${(props) => (props.signinIn !== true ? 'transform: translateX(0);' : null)}
// `;

// export const Paragraph = styled.p`
//   font-size: 14px;
//   font-weight: 100;
//   line-height: 20px;
//   letter-spacing: 0.5px;
//   margin: 20px 0 30px;
//   color: #10ffe8;
// `;

// components.tsx
import styled from 'styled-components';

type SignInProps = {
  signinIn?: boolean;
};

export const Container = styled.div`
  background-color: #0a0a1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
  border: 2px solid #00ffff;
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2),
             0 0 80px rgba(255, 0, 255, 0.1);
`;

export const SignUpContainer = styled.div<SignInProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` : null}
`;

export const SignInContainer = styled.div<SignInProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) => props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background: rgba(15, 15, 30, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  border: 1px solid rgba(0, 255, 255, 0.3);
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
`;

export const Input = styled.input`
  background-color: rgba(15, 15, 30, 0.8);
  border: 1px solid #00ffff;
  color: #ffffff;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 2px solid #00ffff;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      transparent, 
      rgba(0, 255, 255, 0.15), 
      transparent);
    transform: rotate(45deg);
    animation: shine 2s infinite;
  }
  
  @keyframes shine {
    0% { left: -50%; }
    100% { left: 150%; }
  }
`;

export const GhostButton = styled(Button)`
  border-color: #ff00ff;
  color: #ff00ff;
  background: rgba(255, 0, 255, 0.1);
  
  &:hover {
    background: rgba(255, 0, 255, 0.2);
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
  }
`;

export const Anchor = styled.a`
  color: #d0d0f0;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ffff;
  }
`;

export const OverlayContainer = styled.div<SignInProps>`
  position: absolute;
  text-align: center;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div<SignInProps>`
  background: linear-gradient(45deg, #0a0a1a, #1a1a2a);
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => props.signinIn !== true ? `transform: translateX(50%);` : null}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  background: rgba(15, 15, 30, 0.9);
  backdrop-filter: blur(5px);
`;

export const LeftOverlayPanel = styled(OverlayPanel)<SignInProps>`
  left: 0;
  transform: translateX(-20%);
  ${(props) => props.signinIn !== true ? `transform: translateX(0);` : null}
  border-right: 1px solid rgba(0, 255, 255, 0.2);
`;

export const RightOverlayPanel = styled(OverlayPanel)<SignInProps>`
  right: 0;
  transform: translateX(0);
  padding: 0;
  ${(props) => props.signinIn !== true ? 'transform: translateX(0);' : null}
  border-left: 1px solid rgba(255, 0, 255, 0.2);
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #d0d0f0;
`;


