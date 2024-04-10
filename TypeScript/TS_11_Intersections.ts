interface MyComponentProps {
  title: string;
  visible: boolean;
  handleHover?: () => void;
  handleClick: () => void;
  handleSubmit: () => void;
}

type AllTheHandlers = keyof MyComponentProps & `handle${string}`;
// ✅ type AllTheHandlers = "handleHover" | "handleClick" | "handleSubmit"
