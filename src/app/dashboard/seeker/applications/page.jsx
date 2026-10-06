import SeekerApplications from "@/components/dashboard/seeker/SeekerApplications";
import { getApplications } from "@/lib/fetch/fetchApplications";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Applications | JobNest",
};

const ApplicationsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const applications = await getApplications(user?.id);

  return (
    <div>
      <SeekerApplications applications={applications} user={user} />
    </div>
  );
};

export default ApplicationsPage;
