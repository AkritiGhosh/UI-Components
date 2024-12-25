import GradientBorder1 from "../components/buttons/colorful_border/GradientBorder1";
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
    nextId: null,
  },
];

export default data;
