"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertDialog,
  Button,
  Select,
  ListBox,
  toast,
  SearchField,
} from "@heroui/react";
import { FileLetterX, ArrowRight } from "@gravity-ui/icons";
import { ArrowDownUp, MoveUpRight, Trash2 } from "lucide-react";
import { formatDate, currencySymbol, useSessionClient } from "@/lib/helpers";
import { removeSavedJob } from "@/lib/actions/jobs";
import { getSavedJobs } from "@/lib/fetch/fetchJobs";

const SeekerSavedJobs = ({ savedJobs, total, applied }) => {
  const [jobs, setJobs] = useState(savedJobs);
  const [removingId, setRemovingId] = useState(null);
  const [openDialogId, setOpenDialogId] = useState(null);
  const { user } = useSessionClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-newest");

  const stats = [
    {
      label: "Saved Jobs",
      value: total,
    },
    {
      label: "Active Jobs",
      value: savedJobs.filter((saved) => saved.jobDetails.isActive).length,
    },
    {
      label: "Applied",
      value: applied,
    },
    {
      label: "Expiring Soon",
      value: savedJobs.filter((saved) => {
        const deadline = new Date(saved.jobDetails.deadline);
        const today = new Date();
        const thirtyDaysFromNow = new Date();

        thirtyDaysFromNow.setDate(today.getDate() + 30);

        return deadline >= today && deadline <= thirtyDaysFromNow;
      }).length,
    },
  ];

  const handleRemoveSavedJob = async (job) => {
    try {
      setRemovingId(job._id);

      await removeSavedJob({
        userId: user.id,
        jobId: job.jobId,
      });

      setJobs((prev) => prev.filter((item) => item._id !== job._id));
      setOpenDialogId(null);

      toast.success("Job removed from saved");
    } catch (error) {
      toast.danger("Failed to remove job");
    } finally {
      setRemovingId(null);
    }
  };

  const sort = [
    { id: "deadline", label: "Deadline" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "date-newest", label: "Newest" },
    { id: "date-oldest", label: "Oldest" },
  ];

  const handleSearchFilter = async (value) => {
    setSearchQuery(value);
    const res = await getSavedJobs(user?.id, sortBy, value);
    setJobs(res.result);
  };

  const handleSelectFilter = async (value) => {
    setSortBy(value);
    const res = await getSavedJobs(user?.id, value, searchQuery);
    setJobs(res.result);
  };

  return (
    <div className="min-h-[50vh]">
      <div>
        <h1 className="text-3xl font-semibold">Saved Jobs</h1>
        <p className="text-muted mt-1">
          Jobs you&apos;ve saved to review later
        </p>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-3 bg-white dark:bg-foreground/5 rounded-lg p-4 border"
          >
            <p className="text-xs opacity-70 overflow-hidden">{stat.label}</p>
            <p className="text-3xl font-medium overflow-hidden leading-none">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-2 mt-6 mb-4">
        <div className="flex items-center justify-center gap-5">
          <SearchField
            aria-label="Search"
            name="search"
            className="relative sm:w-full sm:max-w-72"
            value={searchQuery}
            onChange={handleSearchFilter}
          >
            <SearchField.Group
              className="h-10 rounded-sm border border-foreground/15 shadow-none focus-within:border-foreground/50 dark:border-transparent dark:bg-foreground/10 dark:focus-within:border-foreground/10"
              style={{ boxShadow: "none" }}
            >
              {" "}
              <SearchField.SearchIcon />
              <SearchField.Input
                placeholder="Search title or company..."
                className="w-full text-sm"
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <div className="hidden sm:block whitespace-nowrap text-sm text-muted">
            {searchQuery &&
              `${jobs.length} result${jobs.length > 1 ? "s" : ""}`}
          </div>
        </div>
        <Select
          className="sm:min-w-32"
          placeholder="Sort by"
          aria-label="Sort by"
          onChange={(value) => handleSelectFilter(value)}
        >
          <Select.Trigger
            className="group rounded-sm border border-foreground/15 focus-within:border-foreground/50 dark:border-transparent dark:bg-foreground/10 dark:focus-within:border-transparent"
            style={{ boxShadow: "none" }}
          >
            <span className="sm:hidden">
              <ArrowDownUp
                size={22}
                className="p-0.5 opacity-50 group-focus-within:opacity-100"
              />
            </span>

            <span className="hidden sm:block">
              <Select.Value className="data-[placeholder=true]:text-foreground/50" />
            </span>

            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover className="rounded-md">
            <ListBox>
              {sort.map((item, i) => (
                <ListBox.Item
                  key={i}
                  id={item.id}
                  textValue={item.label}
                  className="rounded-md text-nowrap pr-7"
                  style={{ boxShadow: "none" }}
                >
                  {item.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div className="overflow-x-auto rounded-lg border dark:bg-foreground/3">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-foreground/8">
              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                #
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted text-nowrap">
                Job Title
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Company
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Deadline
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Salary
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Location
              </th>

              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="flex flex-col items-center justify-center text-center py-10 bg-white dark:bg-foreground/3 border-t">
                    <FileLetterX className="scale-150" />

                    <span className="text-xl text-muted mt-3 mb-1">
                      No saved jobs yet
                    </span>

                    <Link
                      href="/jobs?page=1"
                      className="text-base bg-foreground/90 text-background px-4 py-2 rounded-lg flex items-center gap-2 mt-2 active:scale-95 duration-100 font-semibold"
                    >
                      Browse Jobs <ArrowRight />
                    </Link>
                  </div>
                </td>
              </tr>
            ) : (
              jobs.map((job, i) => {
                return (
                  <tr
                    key={job._id}
                    className="border-t border-foreground/10 bg-white dark:border-white/10 dark:bg-foreground/3 hover:bg-gray-50 dark:hover:bg-foreground/5 transition-colors text-sm"
                  >
                    <td
                      className={`px-4 py-3 ${
                        !job.jobDetails.isActive
                          ? "text-foreground/45"
                          : "text-muted"
                      }`}
                    >
                      {i + 1}
                    </td>

                    <td
                      className={`px-4 py-3 text-nowrap ${
                        !job.jobDetails.isActive ? "text-foreground/50" : ""
                      }`}
                    >
                      <p className="text-base">
                        {job?.jobDetails?.jobTitle || (
                          <span className="text-muted text-sm">Not found</span>
                        )}
                      </p>
                    </td>

                    <td
                      className={`px-4 py-3 text-nowrap ${
                        !job.jobDetails.isActive
                          ? "text-foreground/50"
                          : "text-foreground/80"
                      }`}
                    >
                      {job?.company?.companyName || (
                        <span className="text-muted">Not found</span>
                      )}
                    </td>

                    <td
                      className={`px-4 py-3 text-nowrap  ${
                        !job.jobDetails.isActive
                          ? "text-foreground/50"
                          : "text-foreground/80"
                      }`}
                    >
                      {job?.jobDetails?.deadline ? (
                        formatDate(job?.jobDetails?.deadline)
                      ) : (
                        <span className="text-muted">Not found</span>
                      )}
                    </td>

                    <td
                      className={`px-4 py-3 text-nowrap ${
                        !job.jobDetails.isActive ? "text-foreground/50" : ""
                      }`}
                    >
                      {job?.jobDetails?.salaryMin != null &&
                      job?.jobDetails?.salaryMax != null ? (
                        <>
                          {job?.jobDetails?.currency
                            ? currencySymbol(job?.jobDetails?.currency)
                            : ""}
                          {Math.round(job?.jobDetails?.salaryMin / 1000)}K{" "}
                          <span className="text-muted">-</span>{" "}
                          {job?.jobDetails?.currency
                            ? currencySymbol(job?.jobDetails?.currency)
                            : ""}
                          {Math.round(job?.jobDetails?.salaryMax / 1000)}K
                        </>
                      ) : (
                        <span className="text-muted">Not found</span>
                      )}
                    </td>

                    <td
                      className={`px-4 py-3 text-nowrap ${
                        !job.jobDetails.isActive
                          ? "text-foreground/50"
                          : "text-foreground/80"
                      }`}
                    >
                      {job?.jobDetails?.isRemote ? (
                        "Remote"
                      ) : job?.jobDetails?.city && job?.jobDetails?.country ? (
                        `${job?.jobDetails?.city}, ${job?.jobDetails?.country}`
                      ) : (
                        <span className="text-muted">Not found</span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-5">
                        {job.jobDetails.isActive ? (
                          <Link
                            href={`/jobs/${job?.jobId}`}
                            className="font-medium hover:underline active:underline flex items-center gap-1"
                          >
                            View
                            <MoveUpRight size={10} />
                          </Link>
                        ) : (
                          <button
                            onClick={() =>
                              toast.warning("This job is no longer active")
                            }
                            className={`font-medium hover:underline active:underline flex items-center gap-1 cursor-pointer ${
                              !job.jobDetails.isActive
                                ? "text-foreground/50"
                                : ""
                            }`}
                          >
                            View
                            <MoveUpRight size={10} />
                          </button>
                        )}

                        <AlertDialog
                          isOpen={openDialogId === job?._id}
                          onOpenChange={(isOpen) =>
                            setOpenDialogId(isOpen ? job?._id : null)
                          }
                        >
                          <AlertDialog.Trigger>
                            <button
                              className="text-rose-500 active:opacity-50 cursor-pointer"
                              disabled={removingId === job?._id}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </AlertDialog.Trigger>

                          <AlertDialog.Backdrop>
                            <AlertDialog.Container placement="center">
                              <AlertDialog.Dialog className="rounded-xl sm:max-w-96">
                                <AlertDialog.Header>
                                  <AlertDialog.Heading className="text-xl">
                                    Remove saved job?
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>

                                <AlertDialog.Body>
                                  <p className="text-sm leading-6 text-muted">
                                    This will remove{" "}
                                    <span className="font-medium text-foreground">
                                      {job?.jobDetails?.jobTitle}
                                    </span>{" "}
                                    from your saved jobs.
                                  </p>
                                </AlertDialog.Body>

                                <AlertDialog.Footer>
                                  <Button
                                    slot="close"
                                    variant="tertiary"
                                    className="w-full rounded-lg text-base"
                                    style={{
                                      outline: "none",
                                      boxShadow: "none",
                                    }}
                                  >
                                    Cancel
                                  </Button>

                                  <Button
                                    variant="danger"
                                    className="w-full rounded-lg text-base"
                                    style={{
                                      outline: "none",
                                      boxShadow: "none",
                                    }}
                                    onClick={() => handleRemoveSavedJob(job)}
                                  >
                                    {removingId === job?._id
                                      ? "Removing..."
                                      : "Remove Job"}
                                  </Button>
                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeekerSavedJobs;
