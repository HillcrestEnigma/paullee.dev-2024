"use client";

import { useSearchParams } from "next/navigation";

const resumeVersion = "2024-10-01";
const allowedResumeIds = [
  "default",
  "waterloo",
  "waterloo-py",
  "waterloo-js",
  "waterloo-ccpp",
  "waterloo-devops",
];

function resumeUrl(resumeId: string | null) {
  if (!resumeId || !allowedResumeIds.includes(resumeId)) {
    resumeId = "default";
  }
  return `https://cdn.paullee.dev/files/resume/${resumeVersion}/${resumeId}/resume_paul-kyunghan-lee_${resumeVersion}_${resumeId}.pdf`;
}

const urls = {
  email: "contact@paullee.dev",
  github: "https://github.com/HillcrestEnigma",
  linkedin: "https://www.linkedin.com/in/paul-lee-dev/",
};

export function useUrls() {
  const searchParams = useSearchParams();
  const resumeId = searchParams.get("resumeId");

  return {
    resume: resumeUrl(resumeId),
    ...urls,
  };
}
