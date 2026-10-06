import JobDetails from "@/components/jobs/JobDetails";
import { auth } from "@/lib/auth";
import { getJobDetails } from "@/lib/fetch/fetchJobs";
import { getApplications } from "@/lib/fetch/fetchApplications";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const job = await getJobDetails(id);

  return {
    title: `${job.jobTitle} | JobNest`,
    description: `Apply for the ${job.jobTitle} position at ${job.company?.companyName || "JobNest"}.`,
  };
}

const JobsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const job = await getJobDetails(id);

  let hasApplied = false;
  let applicationId;

  if (user) {
    const applications = await getApplications(user.id);
    const application = applications.find((a) => a.job.id === id);

    hasApplied = !!application;
    applicationId = application?._id;
  }

  return (
    <div className="mt-26 px-4">
      <JobDetails
        job={job}
        hasApplied={hasApplied}
        applicationId={applicationId}
        userRole={user?.accountType}
      />
    </div>
  );
};

export default JobsDetailsPage;
