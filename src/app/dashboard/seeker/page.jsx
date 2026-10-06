import SeekerHomepage from "@/components/dashboard/seeker/seekerHomepage/SeekerHomepage";
import { auth } from "@/lib/auth";
import { getApplications } from "@/lib/fetch/fetchApplications";
import { getSavedJobs } from "@/lib/fetch/fetchJobs";
import { headers } from "next/headers";

export const metadata = {
  title: "Dashboard | JobNest",
};

const SeekerPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const applications = await getApplications(session?.user?.id);
  const { total } = await getSavedJobs(session?.user?.id);

  return (
    <div>
      <SeekerHomepage
        applications={applications}
        savedJobsCount={total}
        user={session?.user}
      />
    </div>
  );
};

export default SeekerPage;
