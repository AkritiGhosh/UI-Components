import GradientBorder1 from "../components/buttons/colorful_border/GradientBorder1";
import GradientBorder2 from "../components/buttons/colorful_border/GradientBorder2";
import GradientBorder3 from "../components/buttons/colorful_border/GradientBorder3";
import FloatingLabelTextfield from "../components/form_elements/FloatingLabelInputField";
import ImageToggleSwitch from "../components/form_elements/ImageSwitch";
import BouncingCharacters from "../components/textBgImage/BouncingText";
import TextWithImageBg from "../components/textBgImage/Demo";
import PulsingText from "../components/textBgImage/PulsingText";
import TextWithImageBgAnimated from "../components/textBgImage/WithBgImg";

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
    code: null,
    article: null,
    backId: "image_switch",
    nextId: "gradient_border2",
  },
  {
    heading: "Gradient Border - Method 2",
    id: "gradient_border2",
    file: <GradientBorder2 />,
    code: null,
    article: null,
    backId: "gradient_border1",
    nextId: "gradient_border3",
  },
  {
    heading: "Gradient Border - Animated",
    id: "gradient_border3",
    file: <GradientBorder3 />,
    code: null,
    article: null,
    backId: "gradient_border2",
    nextId: "maskText1",
  },
  {
    heading: "Animated characters - Bouncing",
    id: "animText1",
    file: <BouncingCharacters />,
    code: null,
    article: null,
    backId: "animText2",
    nextId: "maskText2",
  },

  {
    heading: "Text masking on black/hidden background",
    id: "maskText1",
    file: <TextWithImageBg />,
    code: null,
    article: null,
    backId: "gradient_border2",
    nextId: "maskText2",
  },

  {
    heading: "Gradient Border - Animated",
    id: "animText2",
    file: <PulsingText />,
    code: null,
    article: null,
    backId: "animText1",
    nextId: null,
  },
  {
    heading: "Text masking on blurred/frosted background",
    id: "maskText2",
    file: <TextWithImageBgAnimated />,
    code: null,
    article: null,
    backId: "maskText1",
    nextId: "animText1",
  },
];

export default data;
