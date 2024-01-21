import Image from "next/image";
import urls from "@/data/urls";
import A from "@/components/A";

export default function About() {
  return (
    <div className="flex gap-8 inline-block">
      <div className="flex-initial">
        <div className="inline-block">
          <p className="text-4xl font-semibold pt-2 mb-2">Hey, I&apos;m Paul! 👋</p>
          <p className="text-lg mb-3 lg:text-nowrap block">Software Engineering student @ UWaterloo, class of 2028</p>
          <div className="w-0 min-w-full mb-3 text-justify">
            <p className="mb-3">I&apos;m currently looking for <b>Summer 2024</b> internships. You may be interested in looking at my <A href={ urls.resume }>résumé</A>.</p>
            <p className="mb-3">
              Most of my experiences are in full-stack web development / sysadmin with Python, Django, Docker, and Kubernetes,
              but I have varied experiences with other languages and technologies as well.
            </p>
            <p className="mb-3">
              I also have an active interest in cybersecurity, specifically in the areas of Web Security and Linux Hardening.
              I am proud to have placed <b>3rd out of 7794 teams</b> with team Parity in the 2022 picoCTF competition.
            </p>
            <p className="mb-3">
              If you would like to get in touch for any reason, please email me at <A email={ urls.email }/>.
            </p>
          </div>
        </div>
      </div>
      <Image src="/img/hs640.jpg" width={192} height={192} className="w-48 h-48 aspect-square flex-none hidden md:inline ml-auto mt-3 mb-3 rounded-lg" alt="A headshot of Paul Lee" />
    </div>
  );
}
