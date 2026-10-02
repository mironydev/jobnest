import SeekerProfileView from "@/components/dashboard/seeker/seekerProfile/SeekerProfileView";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "My Profile | WorkSphere",
};

const SeekerProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div>
      <SeekerProfileView user={user} />
    </div>
  );
};

export default SeekerProfilePage;
