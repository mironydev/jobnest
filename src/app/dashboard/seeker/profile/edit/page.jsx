import SeekerAdditional from "@/components/dashboard/seeker/seekerProfile/edit/Additional";
import SeekerProfile from "@/components/dashboard/seeker/seekerProfile/edit/Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Edit Profile | WorkSphere",
};

const EditProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <div className="flex flex-col gap-5 max-w-xl mx-auto">
      <SeekerProfile user={user} />
      <SeekerAdditional user={user} />
    </div>
  );
};

export default EditProfilePage;
