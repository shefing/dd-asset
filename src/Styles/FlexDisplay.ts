import styled from 'styled-components';

export const RowBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ColumnBetween = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexRowGap = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FlexColumnGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RowCenterItems = styled(Row)`
  align-items: center;
`;
export const CenterRowGapWrap = styled(FlexRowGap)`
  align-items: center;
  flex-wrap: wrap;
`;
