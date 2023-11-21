import { StyledAssetContainer, StyledCanvas } from "../Styles/Canvas";
import { Row } from "../Styles/FlexDisplay";
import BasicLayout from "./BasicLayout";
import DragStorage from "./DragStorage";

export default function Canvas() {
  return (
    <StyledAssetContainer>
      <Row>
        <div style={{ background: "red" }}>storage</div>
        <StyledCanvas>
          canvas
          <BasicLayout />
        </StyledCanvas>
        <div style={{ background: "red" }}>storage</div>
      </Row>
      <div style={{ background: "red" }}>
        storage
        <DragStorage />
      </div>
    </StyledAssetContainer>
  );
}
