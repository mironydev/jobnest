import ApplicationDetails from "@/components/dashboard/seeker/ApplicationDetails";
import { getApplicationDetails } from "@/lib/fetch/fetchApplications";

export const metadata = {
  title: "Application Details | JobNest",
};

const RecruiterApplicationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const application = await getApplicationDetails(id);
  return (
    <div>
      <ApplicationDetails application={application} />
    </div>
  );
};

export default RecruiterApplicationDetailsPage;
