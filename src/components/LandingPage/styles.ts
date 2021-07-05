import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 90%;

  width: 100vw;
  height: 100vh;

  max-width: 100%;

  padding: 2rem;

  @media(max-width: 1024px) {
    position: inherit;

    padding: 0;
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 3s;

  border-bottom: 1px solid #cfcfcc;
  padding-bottom: 2.4rem;

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const PresentationDescription = styled.div`
  max-width: 996px;

  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.12rem;

  text-align: center;
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  align-items: center;
  justify-content: center;

  margin: auto 0.4rem;
  margin-top: 1.5rem;

  @media(max-width: 1024px) {
    display: block;
    margin: 0;
  }

  @media only screen and (min-device-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    margin-top: 2rem;
  }
`;

export const CoverImageContainer = styled.div`
  width: 100%;
  height: 90vh;

  animation: ${appearFromTop} 2s;

  background: url('images/wallpapers-do-star-wars-02.jpg') no-repeat fixed;
  background-size: cover;
  background-position: center top;

  @media(max-width: 1024px) {
    width: 28rem;

    background-size: cover;
  }

  @media only screen and (min-device-width: 768px) {
    width: 100%;
  }
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background: transparent;

  @media(max-width: 1024px) {
    width: 28rem;

    animation: none;

    img {
      width: 28rem;
    }
  }

  @media only screen and (min-device-width: 768px) {
    width: 100%;

    animation: none;

    img {
      width: 100%;
    }
  }
`;
