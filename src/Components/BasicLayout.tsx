import React, { useState, useCallback, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import { StyledCanvas } from "../Styles/Canvas";

const ReactGridLayout = WidthProvider(RGL);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const BasicLayout = () => {
  const props = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };

  const generateLayout = (p) => {
    return _.map(new Array(p.items), (item, i) => {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  };
  const [layout, setLayout] = useState(generateLayout(props));

  const onLayoutChange = useCallback(
    (newLayout: any) => {
      setLayout(newLayout);
      props.onLayoutChange(newLayout);
    },
    [props]
  );

  const generateDOM = () => {
    return _.map(_.range(props.items), (i) => (
      <div style={{ backgroundColor: "grey" }} key={i}>
        <span className="text">{i}</span>
      </div>
    ));
  };

  useEffect(() => {
    console.log("layout", layout);
  }, [layout]);

  const onDrop = (layout1, layoutItem, _event) => {
    setLayout([...layout,layoutItem ]);
    // alert(`Dropped element props:\n${JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)}`);
  };

  return (
    <ResponsiveReactGridLayout onDrop={onDrop} isDroppable={true} layout={layout} {...props}>
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};

export default BasicLayout;
