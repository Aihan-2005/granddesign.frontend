"use client";

import React from "react";
import Resume1 from "./Resume1";
// import Resume2 from "../resume/Resume2";
// import Resume3 from "../resume/Resume3";
// import Resume4 from "../resume/Resume4";

const resumes = {
  1: Resume1,
//   2: Resume2,
//   3: Resume3,
//   4: Resume4,
};

export default function ResumeDetailPage({ params }) {
  const resumeId = Number(params.id);
  const ResumeComponent = resumes[resumeId];

  return ResumeComponent ? (
    <ResumeComponent />
  ) : (
    <p className="text-white text-center mt-12">صفحه پیدا نشد</p>
  );
}
