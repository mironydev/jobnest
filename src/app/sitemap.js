import { getAllJobs } from "@/lib/fetch/fetchJobs";

const baseUrl = process.env.BASE_URL;

export default async function sitemap() {
  const jobsData = await getAllJobs("itemsPerPage=1000");
  const jobs = jobsData.jobs || [];

  const staticPages = ["", "/jobs", "/pricing"];

  const jobPages = jobs.map((job) => `/jobs/${job._id}`);

  return [...staticPages, ...jobPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
