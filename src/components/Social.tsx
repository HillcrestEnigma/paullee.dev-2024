import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useUrls } from "@/hooks/url";
import type { PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";
import SEWebring from "@/components/icons/SEWebring";

interface SocialProps {
  href: string;
  className?: string;
}

interface SocialIconProps extends SocialProps {
  icon: IconDefinition;
}

interface SocialImageProps extends SocialProps, ImageProps {}

function Social({ href, className, children }: PropsWithChildren<SocialProps>) {
  return (
    <a
      href={href}
      className={
        (className ?? "") +
        " flex-none scale-150 text-stone-600 hover:text-stone-950 md:scale-100 dark:text-zinc-400 dark:hover:text-zinc-50"
      }
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <Social href={href}>
      <FontAwesomeIcon icon={icon} />
    </Social>
  );
}

function SocialImage({ href, ...props }: SocialImageProps) {
  return (
    <Social href={href}>
      <Image {...props} />
    </Social>
  );
}

export default function Socials() {
  const urls = useUrls();

  return (
    <div className="flex justify-center gap-5 md:gap-2">
      <SocialIcon icon={faEnvelope} href={"mailto:" + urls.email} />
      <SocialIcon icon={faGithub} href={urls.github} />
      <SocialIcon icon={faLinkedin} href={urls.linkedin} />
      {/* <Social href={urls.se_webring} className="-ml-2 md:-ml-0.5"> */}
      <Social href={urls.se_webring}>
        <SEWebring />
      </Social>
    </div>
  );
}
