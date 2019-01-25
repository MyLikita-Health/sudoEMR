import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Navigation = styled.div`
  width: 15em;
  flex-shrink: 0;
  background: #fff;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;
export const Body = styled.div`
  padding: 2rem;
  height: 100vh;
  width:100%
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ExampleContainer = styled.div`
  background: #fff;
  border: .5em solid #e5e5e5;
  height: calc(100vh - 40px);
`;

export const ExampleNavigation = styled(Navigation)`
  height: 100%;
  margin-right: .5em;
  border: .5em solid rgba(0, 0, 0, 0.125);  
`;

export const ExampleBody = styled.div`  
  background: #fff;
  padding: 2rem;
  border: .5em solid rgba(0, 0, 0, 0.125);
`;
