import { buildCarouselContent, buildFlexContent } from "../utils";
import { FlexCarousel, FlexMessage } from "@line/bot-sdk/dist/types";

test("It would build Carousel content", () => {
  let carousel = JSON.stringify(buildCarouselContent([{ type: "bubble" }]));
  const expected: FlexCarousel = {
    type: "carousel",
    contents: [{ type: "bubble" }],
  };
  expect(carousel).toBe(JSON.stringify(expected));
});

test("It would build FlexMessage content", () => {
  let carousel = JSON.stringify(
    buildFlexContent("alt text", { type: "bubble" })
  );
  const expected: FlexMessage = {
    type: "flex",
    altText: "alt text",
    contents: { type: "bubble" },
  };
  expect(carousel).toBe(JSON.stringify(expected));
});
