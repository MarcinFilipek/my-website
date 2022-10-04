import { getComponentByContentType } from "./common";

export const Content = ({ content }) => {
  return (
    <div>
      {content.map((item, i) => {
        const Component = getComponentByContentType(item.nodeType);
        return <Component {...item} />;
      })}
    </div>
  );
};
