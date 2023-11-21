import styled from "styled-components";
import { Column } from "./FlexDisplay";

export const StyledCanvas = styled.div`
  padding: 3rem;
  width: 85%;
  height: 24rem;
  overflow-x: scroll;
  overflow-y: scroll;
  background-color: blue
`;

export const StyledSideStorage = styled.div`
  width: 20%;
  margin-top: 3rem;
  background: gainsboro;
  margin: 2rem;
`;

export const StyledBottomStorage = styled.div`
  background: gainsboro;
  margin: 2rem;

`;

export const StyleContainer = styled.div`
 
`;
export const StyledAssetContainer = styled(Column)`
  width: 1000px;
  background: linear-gradient(90deg, gainsboro 1px, transparent 0px), linear-gradient(gainsboro 1px, transparent 0px);
  background-size: 20px 20px;
`;
