import styled from 'styled-components';

export const StyledPage = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, var(--color-brand-1) 0%, var(--color-brand-1) 300px, var(--color-grey-8) 300px);
  background-attachment: fixed; 

`;

export const CentralizedContainer = styled.div`
  margin-top: 80px;
  width: 1025px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  border-radius: 8px;
  z-index: 1; 
  position: relative; 
`;