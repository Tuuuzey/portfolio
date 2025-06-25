import styled, { keyframes } from 'styled-components';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const scrollMove = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.4;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MouseContainer = styled.div`
  animation: ${moveUpDown} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
`;

const MouseBody = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8px;
  position: relative;
`;

const ScrollDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  animation: ${scrollMove} 2s ease-in-out infinite;
`;

export default function AnimatedMouse() {
  return (
    <MouseContainer>
      <MouseBody>
        <ScrollDot />
      </MouseBody>
    </MouseContainer>
  );
};
