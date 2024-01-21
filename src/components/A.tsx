interface APropsBase {
  href?: string;
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

interface APropHRef extends APropsBase {
  href: string;
  email?: never;
}

interface APropEmail extends APropsBase {
  href?: never;
  email: string;
}

type AProps = APropHRef | APropEmail;

export default function A({ href, email, className, children }: Readonly<AProps>) {
  return (
    <a
      href={email ? "mailto:" + email : href}
      className={className + " underline-offset-3 underline subpixel-antialiased"}
    >
      {children ? children : email ? email : href}
    </a>
  );
}
