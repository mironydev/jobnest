const AdminHomepage = ({
  totalUsers,
  totalActiveJobs,
  totalCompanies,
  ongoingApplications,
}) => {
  const stats = [
    { text: "Total Users", number: totalUsers },
    { text: "Active Jobs", number: totalActiveJobs },
    { text: "Ongoing Applications", number: ongoingApplications },
    { text: "Total Companies", number: totalCompanies },
    { text: "Platform Revenue", number: 0 },
  ];

  return (
    <div className="min-h-screen">
      <div className="mb-4">
        <div>
          <p className="text-3xl font-semibold">Dashboard Overview</p>
          <p className="text-sm text-muted mt-1">
            Real-time platform performance and growth metrics.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-2">
        {stats.map((stat, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col justify-between bg-white dark:bg-foreground/5 border border-foreground/15 p-5 rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1 ${stat.text === "Total Companies" && "sm:col-span-3"} ${stat.text === "Platform Revenue" && "col-span-2 sm:col-span-3"}`}
            >
              <p className="text-xs opacity-70">{stat.text}</p>
              <div>
                <p className="text-3xl font-medium mt-1 mb-2">
                  {stat.text === "Platform Revenue" ? "$" : ""}
                  {stat.number}
                </p>
                <p className="text-xs text-emerald-500">+0%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminHomepage;
