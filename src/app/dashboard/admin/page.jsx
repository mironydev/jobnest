import AdminHomepage from "@/components/dashboard/admin/AdminHomepage";
import { getAdminStats, listAllUsers } from "@/lib/fetch/fetchJobs";

export const metadata = {
  title: "Dashboard | JobNest",
};

const AdminPage = async () => {
  const { totalActiveJobs, totalCompanies, ongoingApplications } =
    await getAdminStats();
  const { users } = await listAllUsers();
  const totalUsers = users.filter((u) => u.role !== "admin").length;

  return (
    <div>
      <AdminHomepage
        totalActiveJobs={totalActiveJobs}
        totalCompanies={totalCompanies}
        totalUsers={totalUsers}
        ongoingApplications={ongoingApplications}
      />
    </div>
  );
};

export default AdminPage;
