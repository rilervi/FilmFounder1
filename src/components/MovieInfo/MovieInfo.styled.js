import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackDrop = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 92vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 66px;
  padding-top: 125px;

  /* padding-left: 400px;
  padding-right: 400px; */
`;

export const PosterWrapper = styled.div`
  display: block;
  border-radius: 8px;
  width: 250px;
  height: 375;
  overflow: hidden;
  .poster-image {
    width: 100%;
  }
`;

export const MovieData = styled.div`
  width: 600px;
  max-height: 375px;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Text = styled.span`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Shorts = styled.p`
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
  height: 108px;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #ef4234;
  border: none;
  padding: 8px;
  border-radius: 10px;
  color: white;
  font-size: 16px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  .button-icon {
    margin-left: 8px;
  }
`;

export const CastWrapper = styled.div`
  margin-bottom: 60px;
`;

export const CastBtn = styled(Link)`
  display: inline-block;
  padding: 6px;

  font-size: 16px;
  color: white;
  background-color: transparent;

  border-bottom: 2px solid white;

  &:hover {
    border-bottom: 2px solid yellow;
    color: #ad9236;
  }
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;
  padding: 6px;
  margin-left: 24px;
  margin-top: 24px;

  font-size: 16px;
  color: white;
  background-color: transparent;

  border: 2px solid yellow;
  border-radius: 10px;

  &:hover {
    border: 2px solid #ad9236;
    color: yellow;
  }
`;
