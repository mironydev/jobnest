import SeekerApplications from "@/components/dashboard/seeker/SeekerApplications";
import { getApplications } from "@/lib/fetch/fetchApplications";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const ApplicationsPage = async () => {
  console.time("applications: session");
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.timeEnd("applications: session");
  const user = session?.user;
  console.time("applications: fetch");
  const applications = await getApplications(user?.id);
  console.timeEnd("applications: fetch");

  return (
    <div>
      <SeekerApplications applications={applications} />
    </div>
  );
};

export default ApplicationsPage;
