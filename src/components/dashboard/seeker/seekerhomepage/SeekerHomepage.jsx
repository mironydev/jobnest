"use client";

import Stats from "./Stats";
import Profile from "./Profile";
import ApplicationStatus from "./ApplicationStatus";
import RecentApplications from "./RecentApplications";
import RecentActivity from "./RecentActivity";

const SeekerHomepage = ({ applications, savedJobsCount, user }) => {
  return (
    <div>
      <h1 className="text-3xl font-medium">
        Hey there, {user?.name?.split(" ")[0]}!
      </h1>
      <p className="text-muted mb-4 mt-1">
        View and manage everything from your dashboard
      </p>
      <Stats savedJobsCount={savedJobsCount} applications={applications} />
      <div className="flex flex-wrap justify-between gap-5 sm:gap-3 my-5">
        <RecentApplications applications={applications} />
        <Profile user={user} />
        <ApplicationStatus applications={applications} />
      </div>
      <RecentActivity />
    </div>
  );
};

export default SeekerHomepage;
