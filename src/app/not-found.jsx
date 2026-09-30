"use client";

import Link from "next/link";
import { useSessionClient } from "@/lib/helpers";

const GlobalNotFoundPage = () => {
  const { user } = useSessionClient();
  return (
    <div className=" flex items-center justify-center px-4 mt-28 md:mt-36">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon & Number */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-red-400 dark:text-red-500 mb-4">
            404
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-muted mb-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-sm text-muted mb-10">
          It might have been moved or deleted. Let&apos;s get you back on track.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`${user?.accountType === "recruiter" ? "/dashboard/recruiter" : user?.accountType === "seeker" ? "/dashboard/seeker" : user?.accountType === "admin" ? "/dashboard/admin" : "/"}`}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg active:scale-95 duration-100"
          >
            Go Home
          </Link>

          {user?.accountType === "seeker" && (
            <Link
              href="/jobs?page=1"
              className="flex items-center justify-center gap-2 border dark:border-0 bg-white dark:bg-foreground/10 dark:hover:bg-foreground/15 text-foreground font-semibold px-8 py-3 rounded-lg active:scale-95 duration-75"
            >
              Browse Jobs
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalNotFoundPage;
