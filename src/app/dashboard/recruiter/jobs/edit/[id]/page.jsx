import RecruiterEditJob from "@/components/dashboard/recruiter/RecruiterEditJob";
import { getJobDetails } from "@/lib/fetch/fetchJobs";

export const metadata = {
  title: "Edit Job | JobNest",
};

const RecruiterEditJobPage = async ({ params }) => {
  const { id } = await params;
  const job = await getJobDetails(id);
  return (
    <div>
      <RecruiterEditJob job={job} />
    </div>
  );
};

export default RecruiterEditJobPage;
