"use client";

import SeekerAdditional from "@/components/dashboard/seeker/seekerProfile/edit/Additional";
import SeekerProfile from "@/components/dashboard/seeker/seekerProfile/edit/Profile";
import { useSessionClient } from "@/lib/helpers";
import React from "react";

const EditProfilePage = () => {
  const { user } = useSessionClient();

  return (
    <div className="flex flex-col gap-5 max-w-xl mx-auto">
      <SeekerProfile user={user} />
      <SeekerAdditional user={user} />
    </div>
  );
};

export default EditProfilePage;
