import styled from "styled-components";
import { flex } from "./css";

export const StyledFlex = styled.div`
  ${flex}
`;

export const StyledFlexCenter = styled.div`
  ${flex}
  justify-content: center;
  align-items: center;
`;

export const StyledFlexColumn = styled(StyledFlexCenter)`
  flex-direction: column;
`;
