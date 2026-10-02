import Jobs from "@/components/jobs/Jobs";
import { getAllJobs, getSavedJobs } from "@/lib/fetch/fetchJobs";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Find Jobs | WorkSphere",
  description: "Search and discover jobs from companies hiring on WorkSphere.",
};

const JobsPage = async ({ searchParams }) => {
  const searchQuery = await searchParams;
  const query = new URLSearchParams(searchQuery);

  const [jobsData, session] = await Promise.all([
    getAllJobs(query.toString()),
    auth.api.getSession({
      headers: await headers(),
    }),
  ]);

  const { jobs, total } = jobsData;
  const user = session?.user;

  const savedJobs = user?.id ? await getSavedJobs(user.id) : { result: [] };

  return (
    <div className="mt-26 px-4">
      <Jobs
        jobs={jobs}
        total={total}
        searchQuery={searchQuery}
        savedJobs={savedJobs.result}
        user={user}
      />
    </div>
  );
};

export default JobsPage;
