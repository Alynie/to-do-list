"use client";

import { useReportWebVitals } from "next/web-vitals";

function reportWebVitals(metric: Parameters<typeof useReportWebVitals>[0]) {
  console.log(metric);
}

export function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}
