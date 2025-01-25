import type { Meta } from "@storybook/react";

import ImageCarousel from "./ImageCarousel";

export default {
  title: "Components/ImageCarousel",
  component: ImageCarousel,
  decorators: [
    (Story) => (
      <div className="grid items-center w-full justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
const sampleData = [
  { id: 1, uri: "https://unsplash.it/600/600/?image=1079" },
  { id: 2, uri: "https://unsplash.it/600/600/?image=1080" },
  { id: 3, uri: "https://unsplash.it/600/600/?image=1081" },
  { id: 4, uri: "https://unsplash.it/600/600/?image=1082" },
  { id: 5, uri: "https://unsplash.it/600/600/?image=1083" },
  { id: 6, uri: "https://unsplash.it/600/600/?image=1084" },
  { id: 7, uri: "https://unsplash.it/600/600/?image=1078" },
  { id: 8, uri: "https://unsplash.it/600/600/?image=1077" },
  { id: 9, uri: "https://unsplash.it/600/600/?image=1076" },
  { id: 10, uri: "https://unsplash.it/600/600/?image=1075" },
  { id: 11, uri: "https://unsplash.it/600/600/?image=1074" },
  { id: 12, uri: "https://unsplash.it/600/600/?image=1073" },
  { id: 13, uri: "https://unsplash.it/600/600/?image=1072" },
  { id: 14, uri: "https://unsplash.it/600/600/?image=1071" },
  { id: 15, uri: "https://unsplash.it/600/600/?image=1070" },
  { id: 16, uri: "https://unsplash.it/600/600/?image=1069" },
  { id: 17, uri: "https://unsplash.it/600/600/?image=1068" },
  { id: 18, uri: "https://unsplash.it/600/600/?image=1067" },
  { id: 19, uri: "https://unsplash.it/600/600/?image=1066" },
  { id: 20, uri: "https://unsplash.it/600/600/?image=1065" },
  { id: 21, uri: "https://unsplash.it/600/600/?image=1064" },
  { id: 22, uri: "https://unsplash.it/600/600/?image=1063" },
  { id: 23, uri: "https://unsplash.it/600/600/?image=1062" },
  { id: 24, uri: "https://unsplash.it/600/600/?image=1061" },
];
export const Default = () => {
  return <ImageCarousel urls={sampleData.map((s) => s.uri)} />;
};
