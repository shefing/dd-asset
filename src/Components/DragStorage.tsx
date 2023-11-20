import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

 const DragStorage = () => {
  // const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);
  const [layouts, setLayouts] = useState({ lg: generateLayout() });

  const props = {
    className: "layout",
    rowHeight: 3,
    onLayoutChange: function () {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };
  

  useEffect(() => {
    setMounted(true);
  }, []);

  const generateDOM = () => {
    return _.map(layouts.lg, function (l, i) {
      return (
       i<3 && 
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  // const onBreakpointChange = (breakpoint) => {
  //   setCurrentBreakpoint(breakpoint);
  // };

  const onCompactTypeChange = () => {
    const oldCompactType = compactType;
    const newCompactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    setCompactType(newCompactType);
  };

  // const onLayoutChange = (layout, layouts) => {
  //   // props .onLayoutChange(layout, layouts);
  // };

  const onNewLayout = () => {
    setLayouts({ lg: generateLayout() });
  };

  const onDrop = (layout, layoutItem, _event) => {
    alert(
      `Dropped element props:\n${JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)}`
    );
  };

  return (
    <div>

      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>
      <ResponsiveReactGridLayout
        {...props}
        layouts={layouts}
        // onBreakpointChange={onBreakpointChange}
        // onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        WidthProvider option
        measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        // useCSSTransforms={mounted}
        // preventCollision={!compactType}
        isDroppable={true}
      >
        {/* {generateDOM()} */}
      </ResponsiveReactGridLayout>
    </div>
  );
};

function generateLayout() {
  return _.map(_.range(0, 5), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: Math.round(Math.random() * 5) * 2,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
}

export default DragStorage;
