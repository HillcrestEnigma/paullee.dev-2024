import Image from "next/image";
import urls from "@/data/urls";
import A from "@/components/A";
import Socials from "@/components/Social";


export default function About() {
  return (
    <div className="flex gap-8">
      <div className="flex-initial">
        <div className="inline-block">
          <p className="mb-2 pt-2 text-4xl font-semibold">
            Hey, I&apos;m Paul! 👋
          </p>
          <p className="mb-3 block text-lg lg:text-nowrap">
            Software Engineering student @ UWaterloo, class of 2028
          </p>
          <div className="mb-3 w-0 min-w-full">
            <p className="mb-3">
              I&apos;m currently looking for <b>Summer 2024</b> internships. You
              may be interested in looking at my{" "}
              <A href={urls.resume}>résumé</A>.
            </p>
            <p className="mb-3">
              Most of my experiences are in full-stack web development /
              sysadmin with Python, Django, Docker, and Kubernetes, but I have
              varied experiences with other languages and technologies as well.
            </p>
            <p className="mb-3">
              I also have an active interest in cybersecurity, specifically in
              the areas of Web Security and Linux Hardening. I am proud to have
              placed <b>3rd out of 7794 teams</b> with team Parity in the 2022{" "}
              <A href="https://picoctf.org/">picoCTF</A> competition.
            </p>
            <p className="mb-8">
              If you would like to get in touch for any reason, please email me
              at <A email={urls.email} />.
            </p>
            <div className="inline md:hidden">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto mt-3 hidden flex-none md:inline">
        <Image
          src="/img/hs640.jpg"
          width={192}
          height={192}
          className="mb-3 aspect-square h-48 w-48 rounded-lg"
          alt="A headshot of Paul Lee"
        />
        <Socials />
      </div>
    </div>
  );
}
