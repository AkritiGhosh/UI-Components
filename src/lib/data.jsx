import GradientBorder1 from "../components/buttons/colorful_border/GradientBorder1";
import GradientBorder2 from "../components/buttons/colorful_border/GradientBorder2";
import GradientBorder3 from "../components/buttons/colorful_border/GradientBorder3";
import FloatingLabelTextfield from "../components/form_elements/FloatingLabelInputField";
import ImageToggleSwitch from "../components/form_elements/ImageSwitch";

const data = [
  {
    heading: "Floating Label for Input",
    id: "floating_label_textfield",
    file: <FloatingLabelTextfield />,
    code: "https://github.com/AkritiGhosh/UI-Components/blob/main/src/components/form_elements/FloatingLabelInputField.jsx",
    article: null,
    backId: null,
    nextId: "image_switch",
  },
  {
    heading: "Toggle switch with image background",
    id: "image_switch",
    file: <ImageToggleSwitch />,
    code: "https://github.com/AkritiGhosh/UI-Components/blob/main/src/components/form_elements/ImageSwitch.jsx",
    article: null,
    backId: "floating_label_textfield",
    nextId: "gradient_border1",
  },
  {
    heading: "Gradient Border - Method 1",
    id: "gradient_border1",
    file: <GradientBorder1 />,
    code: "https://github.com/AkritiGhosh/UI-Components/blob/main/src/components/form_elements/ImageSwitch.jsx",
    article: null,
    backId: "image_switch",
    nextId: "gradient_border2",
  },
  {
    heading: "Gradient Border - Method 2",
    id: "gradient_border2",
    file: <GradientBorder2 />,
    code: "https://github.com/AkritiGhosh/UI-Components/blob/main/src/components/form_elements/ImageSwitch.jsx",
    article: null,
    backId: "gradient_border1",
    nextId: "gradient_border3",
  },
  ,
  {
    heading: "Gradient Border - Method 3",
    id: "gradient_border3",
    file: <GradientBorder3 />,
    code: "https://github.com/AkritiGhosh/UI-Components/blob/main/src/components/form_elements/ImageSwitch.jsx",
    article: null,
    backId: "gradient_border2",
    nextId: null,
  },
];

export default data;
