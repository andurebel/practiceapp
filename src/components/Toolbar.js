import React from "react";
import { toolbarData } from "../utils/toolbarData";

const Toolbar = () => {
  return (
    <div>
      <div>
        {toolbarData.map((item, idx) => {
          return (
            <div className="toolbar-item" key={idx}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toolbar;
