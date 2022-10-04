import { ContentType } from "./constants";
import { Paragraph } from "../Paragraph/Paragraph";

export const getComponentByContentType = (contentType) => {
  switch (contentType) {
    case ContentType.paragraph:
      return Paragraph;
    default:
      return null;
  }
};
