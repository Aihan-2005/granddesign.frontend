"use client";

import React, { use } from "react";
import Resume1 from "./Resume1";
import Resume2 from "./Resume2";
import Resume3 from "./Resume3";

const resumes = {
  1: Resume1,
  2: Resume2,
  3: Resume3,
};

export default function ResumeDetailPage({ params }) {
  const resolvedParams = use(params);
  const resumeId = Number(resolvedParams.id);

  const ResumeComponent = resumes[resumeId];

  return ResumeComponent ? (
    <ResumeComponent />
  ) : (
    <p className="text-white text-center mt-12">صفحه پیدا نشد</p>
  );
}
