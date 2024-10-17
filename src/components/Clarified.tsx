import { HTMLProps, forwardRef } from "react";

type ClarifiedProps = HTMLProps<HTMLParagraphElement>;

const Clarified = forwardRef<HTMLParagraphElement, ClarifiedProps>(
  (props, ref) => {
    props = {
      className: "underline decoration-dotted decoration-1",
      ...props,
    }

    return <span ref={ref} {...props} />
  },
);

export default Clarified;
