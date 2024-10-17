"use client";

import { useSearchParams } from "next/navigation";
import data from "@/data.json";

const { job: { resume }, cdn, urls } = data;

function resumeUrl(resumeId: string | null) {
  if (!resumeId || !resume.id.allowed.includes(resumeId)) {
    resumeId = resume.id.default;
  }

  return (
    cdn.baseURL +
    `/files/resume/${resume.version}/${resumeId}/resume_paul-kyunghan-lee_${resume.version}_${resumeId}.pdf`
  );
}

export function useUrls() {
  const searchParams = useSearchParams();
  const resumeId = searchParams.get("resumeId");

  return {
    resume: resumeUrl(resumeId),
    ...urls,
  };
}
