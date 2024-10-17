interface AnchorPropsBase {
  href?: string;
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

interface AnchorPropHRef extends AnchorPropsBase {
  href: string;
  email?: never;
}

interface AnchorPropEmail extends AnchorPropsBase {
  href?: never;
  email: string;
}

type AnchorProps = AnchorPropHRef | AnchorPropEmail;

export default function Anchor({
  href,
  email,
  className,
  children,
}: Readonly<AnchorProps>) {
  return (
    <a
      href={email ? "mailto:" + email : href}
      className={
        className + " underline-offset-3 underline subpixel-antialiased"
      }
    >
      {children ? children : email ? email : href}
    </a>
  );
}
