import JobDetails from "@/components/jobs/JobDetails";
import { getJobDetails } from "@/lib/fetch/fetchJobs";

export const metadata = {
  title: "Job Details | JobNest",
};

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;
  const job = await getJobDetails(id);
  return (
    <div>
      <JobDetails job={job} userRole="recruiter" />
    </div>
  );
};

export default JobDetailsPage;
