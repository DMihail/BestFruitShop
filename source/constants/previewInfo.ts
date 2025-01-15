import { ImageSourcePropType } from "react-native";

import { Preview1, Preview2, Preview3 } from "~/assets";

export type PreviewInfo = {
  text: string;
  image: ImageSourcePropType;
};

export const previewInfo = [
  {
    image: Preview1,
    text: "sell and buy fruit from\n different places",
  },
  {
    image: Preview2,
    text: "get fresh and healthy fruit \nfor you",
  },
  {
    image: Preview3,
    text: "organic fruit that can be \nenjoyed by everyone",
  },
];
