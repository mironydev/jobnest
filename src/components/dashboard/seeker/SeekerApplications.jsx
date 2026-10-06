"use client";

import { capitalize, formatDate } from "@/lib/helpers";
import {
  FileLetterX,
  ArrowRight,
  Clock,
  CircleCheckFill,
  PersonPencil,
  Xmark,
} from "@gravity-ui/icons";
import { Chip, ListBox, SearchField, Select } from "@heroui/react";
import Link from "next/link";
import { ArrowDownUp, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { getApplications } from "@/lib/fetch/fetchApplications";

const SeekerApplications = ({ applications, user }) => {
  const [applicationsList, setApplicationsList] = useState(applications);
  const [searchQuery, setSearchQuery] = useState("");

  const statusMap = {
    applied: {
      color: "default",
      icon: null,
    },
    reviewing: {
      color: "warning",
      icon: <Clock width={12} />,
    },
    shortlisted: {
      color: "default",
      icon: <CircleCheckFill width={12} />,
    },
    interviewing: {
      color: "accent",
      icon: <PersonPencil width={12} />,
    },
    offered: {
      color: "success",
      icon: <CircleCheckFill width={12} />,
    },
    rejected: {
      color: "danger",
      icon: <Xmark width={12} />,
    },
  };

  const stats = [
    {
      label: "Total Applications",
      value: applications.length,
    },
    {
      label: "Pending",
      value: applications.filter(
        (app) => app.status !== "rejected" && app.status !== "offered",
      ).length,
    },
    {
      label: "Rejected",
      value: applications.filter((app) => app.status === "rejected").length,
    },
    {
      label: "Offered",
      value: applications.filter((app) => app.status === "offered").length,
    },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
  ];

  const handleSearchChange = async (value) => {
    setSearchQuery(value);

    const res = await getApplications(user?.id, value);
    setApplicationsList(res);
  };

  const handleSortChange = async (newSort) => {
    const res = await getApplications(user?.id, searchQuery, newSort);
    setApplicationsList(res);
  };

  return (
    <div className="min-h-[50vh]">
      <div>
        <h1 className="text-3xl font-semibold">My Applications</h1>
        <p className="text-muted mt-1 mb-4">
          Track your job applications and their status
        </p>
      </div>

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
        {/* search */}
        <div className="flex items-center justify-center gap-5">
          <SearchField
            aria-label="Search"
            name="search"
            className="relative sm:w-full sm:max-w-72"
            value={searchQuery}
            onChange={handleSearchChange}
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
              `${applicationsList.length} result${applicationsList.length > 1 ? "s" : ""}`}
          </div>
        </div>

        {/* sort */}
        <Select
          className="sm:min-w-32"
          placeholder="Sort by"
          aria-label="Sort jobs"
          onChange={handleSortChange}
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
              {sortOptions.map((option) => (
                <ListBox.Item
                  className="rounded-md text-nowrap pr-7"
                  style={{ boxShadow: "none" }}
                  key={option.value}
                  id={option.value}
                  textValue={option.label}
                >
                  {option.label}
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
                Applied
              </th>
              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Status
              </th>
              <th className="px-4 py-4 text-left font-medium text-xs text-muted">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applicationsList.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="flex flex-col items-center justify-center text-center py-10 bg-white dark:bg-foreground/3 border-t">
                    <FileLetterX className="scale-150" />

                    <span className="text-xl text-muted mt-3 mb-1">
                      No results found
                    </span>

                    <Link
                      href="/jobs"
                      className="text-base bg-foreground/90 text-background px-4 py-2 rounded-lg flex items-center gap-2 mt-2 active:scale-95 duration-100 font-semibold"
                    >
                      Apply to a Job <ArrowRight />
                    </Link>
                  </div>
                </td>
              </tr>
            ) : (
              applicationsList.map((app, i) => {
                const status = statusMap[app.status.toLowerCase()] || {
                  color: "default",
                  icon: null,
                };

                return (
                  <tr
                    key={app._id}
                    className="border-t border-foreground/10 bg-white dark:border-white/10 dark:bg-foreground/3 hover:bg-gray-50 dark:hover:bg-foreground/5 transition-colors text-sm"
                  >
                    <td className="px-4 py-3 text-muted">{i + 1}</td>

                    <td className="px-4 py-3 text-nowrap">
                      <p className="text-base">
                        {app.job.title || "Not found"}
                      </p>

                      <p className="font-light text-xs dark:text-foreground/70">
                        {capitalize(app.job.type) || "Not found"}{" "}
                        <span className="opacity-60">•</span>{" "}
                        {app.job.isRemote ? "Remote" : "On-site"}
                      </p>
                    </td>

                    <td className="px-4 py-3 text-foreground/80">
                      {app.companyName || "Not found"}
                    </td>

                    <td className="px-4 py-3 text-nowrap">
                      {formatDate(app.createdAt) || "Not found"}
                    </td>

                    <td className="px-4 py-3">
                      <Chip color={status.color}>
                        {status.icon}

                        <Chip.Label>
                          {capitalize(app.status) || "Not found"}
                        </Chip.Label>
                      </Chip>
                    </td>

                    <td className="px-4 py-3">
                      <Link
                        href={`/dashboard/seeker/applications/${app._id}`}
                        className="font-medium hover:underline active:underline flex items-center gap-1"
                      >
                        <span>Details</span>
                        <MoveUpRight size={10} />
                      </Link>
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

export default SeekerApplications;
