import { FlexCarousel, FlexMessage } from "@line/bot-sdk/dist/types";

export function buildCarouselContent(contents: any): FlexCarousel {
  return {
    type: "carousel",
    contents: contents,
  };
}
export function buildFlexContent(altText: string, contents: any): FlexMessage {
  return {
    type: "flex",
    altText,
    contents,
  };
}
