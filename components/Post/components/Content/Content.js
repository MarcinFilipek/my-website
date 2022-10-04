import React from "react";
import { getComponentByContentType } from "./common";

export const Content = ({ content }) => {
  return (
    <div>
      {React.Children.toArray(
        content.map((item, i) => {
          const Component = getComponentByContentType(item.nodeType);
          return <Component {...item} />;
        })
      )}
    </div>
  );
};