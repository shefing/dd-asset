import React, { useState, useEffect } from "react";
import _ from "lodash";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
// import { StyledCanvas } from "../Styles/Canvas";

// const ReactGridLayout = WidthProvider(RGL);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const BasicLayout: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);

  const props: any = {
    isDraggable: true,
    isResizable: true,
    rowHeight: 30,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };

  const generateLayout = (p: any) => {
    return _.map(items, (item, i) => {
      const y: any = _.result(p, "y");
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

  const onLayoutChange = (newLayout: Layout[]) => {
    console.log("onLayoutChange", newLayout);

    // setLayout(newLayout);
  };

  const generateDOM = (): React.ReactNode => {
    return layout.map((item, i) => (
      <div key={i} style={{ backgroundColor: "grey" }}>
        <span className="text">{item.i}</span>
      </div>
    ));
  };

  useEffect(() => {
    console.log("layout", layout);
  }, [layout]);

  const onDrop = (layout1: Layout[], layoutItem: Layout, _event: Event) => {
    setLayout([...layout, layoutItem]);
    setItems([...items, layoutItem.x]);
  };

  return (
    <ResponsiveReactGridLayout onLayoutChange={onLayoutChange} onDrop={onDrop} isDroppable={true} layout={layout} {...props}>
      {generateDOM()}
    </ResponsiveReactGridLayout>
  );
};

export default BasicLayout;
