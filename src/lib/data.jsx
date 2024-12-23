import FloatingLabelTextfield from "../components/form_elements/FloatingLabelInputField";
import ImageToggleSwitch from "../components/form_elements/ImageSwitch";

const data = [
  {
    heading: "Floating Label for Input",
    id: "floating_label_textfield",
    file: <FloatingLabelTextfield />,
    code: null,
    article: null,
    backId: null,
    nextId: "image_switch",
  },
  {
    heading: "Toggle switch with image background",
    id: "image_switch",
    file: <ImageToggleSwitch />,
    code: null,
    article: null,
    backId: "floating_label_textfield",
    nextId: null,
  },
];

export default data;
