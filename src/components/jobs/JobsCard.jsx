import { capitalize, currencySymbol, truncate } from "@/lib/helpers";
import {
  ArrowUpRight,
  Briefcase,
  CircleDollar,
  MapPin,
} from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { JobCardMenu } from "./JobCardMenu";

const JobsCard = ({ job, savedJobs }) => {
  const {
    _id,
    jobTitle,
    jobType,
    salaryMax,
    salaryMin,
    city,
    country,
    currency,
    responsibilities,
  } = job;

  return (
    <div className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-foreground/10 border">
      <div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 mb-3">
            <Avatar size="sm" className="rounded-lg bg-transparent">
              <Avatar.Image
                alt={job.company.companyName}
                src={job.company.logo}
              />
              <Avatar.Fallback className="rounded-lg">
                {job.company.companyName.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <p>{job.company.companyName}</p>
          </div>
          <JobCardMenu job={job} savedJobs={savedJobs} />
        </div>
        <p className="text-3xl">{jobTitle}</p>
        <p className="text-stone-600 dark:text-stone-300 mt-3">
          {truncate(responsibilities, 80)}
        </p>
        <div className="flex flex-wrap gap-1 space-y-0.5 my-6 text-xs">
          <div className="border dark:border-foreground/15 px-2.5 py-1.5 rounded-full flex items-center gap-1">
            <span>
              <MapPin />
            </span>
            {city ? (
              <p>
                {city}, {country}
              </p>
            ) : (
              "Remote"
            )}
          </div>
          <div className="border dark:border-foreground/15 px-2.5 py-1.5 rounded-full flex items-center gap-1">
            <span>
              <Briefcase />
            </span>
            <p>{capitalize(jobType)}</p>
          </div>
          <div className="border dark:border-foreground/15 px-2.5 py-1.5 rounded-full flex items-center gap-1">
            <span>
              <CircleDollar />
            </span>
            <p>
              {currencySymbol(currency)}
              {Math.round(salaryMin / 1000)}K - {currencySymbol(currency)}
              {Math.round(salaryMax / 1000)}K {currency.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      <Link
        href={`/jobs/${_id}`}
        className="w-fit flex items-center gap-1 hover:bg-foreground/5 active:bg-foreground/5 px-4 py-2 rounded-full text-sm active:scale-95 duration-100"
      >
        Apply Now <ArrowUpRight />
      </Link>
    </div>
  );
};

export default JobsCard;
