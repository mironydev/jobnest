import SeekerSavedJobs from "@/components/dashboard/seeker/SeekerSavedJobs";
import { auth } from "@/lib/auth";
import { getSavedJobs } from "@/lib/fetch/fetchJobs";
import { headers } from "next/headers";

export const metadata = {
  title: "Saved Jobs | JobNest",
};

const SavedJobsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const { result, total, applied } = await getSavedJobs(user?.id);

  return (
    <div>
      <SeekerSavedJobs savedJobs={result} total={total} applied={applied} />
    </div>
  );
};

export default SavedJobsPage;
