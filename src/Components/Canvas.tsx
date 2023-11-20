import { StyledAssetContainer, StyledCanvas } from "../Styles/Canvas";
import { Row } from "../Styles/FlexDisplay";
import AddRemoveLayout from "./AddRemoveLayout";
import BasicLayout from "./BasicLayout";
import DragStorage from "./DragStorage";

export default function Canvas() {
  return (
    <StyledAssetContainer>
      <Row>
        <div>storage</div>
        {/* <StyledCanvas>
          canvas */}
          <BasicLayout />
        {/* </StyledCanvas> */}
        <div>storage</div>
      </Row>
      <DragStorage/>
      {/* storage */}
    </StyledAssetContainer>
  );
}
