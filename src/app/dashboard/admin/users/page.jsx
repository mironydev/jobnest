import Users from "@/components/dashboard/admin/users/Users";
import { getPlans, listAllUsers } from "@/lib/fetch/fetchJobs";

export const metadata = {
  title: "Users | WorkSphere",
};

const UsersPage = async () => {
  const { users } = await listAllUsers();
  const allPlans = await getPlans();
  return (
    <div>
      <Users allUsers={users} allPlans={allPlans} />
    </div>
  );
};

export default UsersPage;
