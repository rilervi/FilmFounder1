import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 24px;
  padding-top: 32px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const CastItem = styled.li`
  width: 200px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ActorWrapper = styled.div`
  width: 120px;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const ActorImg = styled.img`
  width: 100%;
`;
