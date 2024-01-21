import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import urls from "@/data/urls";

interface SocialProps {
  icon: IconDefinition;
  href: string;
  className?: string;
}

function Social({ icon, href, className }: SocialProps) {
  return (
    <a href={href}>
      <FontAwesomeIcon
        icon={icon}
        className={
          className +
          " scale-150 text-stone-600 hover:text-stone-950 md:scale-100 dark:text-zinc-400 dark:hover:text-zinc-50"
        }
      />
    </a>
  );
}

export default function Socials() {
  return (
    <div className="flex justify-center gap-5 md:gap-2">
      <Social
        icon={faEnvelope}
        href={"mailto:" + urls.email}
        className="flex-none"
      />
      <Social icon={faGithub} href={urls.github} className="flex-none" />
      <Social icon={faLinkedin} href={urls.linkedin} className="flex-none" />
    </div>
  );
}
