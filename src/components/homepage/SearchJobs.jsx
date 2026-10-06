"use client";

import { Input } from "@heroui/react";
import React from "react";
import { Magnifier, Briefcase } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const SearchJobs = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("search");

    if (value) {
      router.push(`/jobs?search=${encodeURIComponent(value)}&page=1`);
    }
  };

  return (
    <div className="text-center px-4 space-y-5 mt-12 sm:mt-20 2xl:mt-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-b from-white via-white to-stone-100 dark:from-stone-900 dark:via-stone-950 dark:to-stone-950 rounded-full px-5 py-2 w-fit mx-auto border-b-2 dark:border-b-0 dark:border-t dark:border-foreground/25 text-xs select-none"
      >
        <p className="flex flex-wrap justify-center items-center gap-2">
          <span>
            <Briefcase />
          </span>
          <span className="font-bold">1,000+</span>
          <span className="opacity-70 font-medium">NEW JOBS THIS MONTH</span>
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold text-5xl/tight"
      >
        Search Jobs. <br className="sm:hidden" /> Apply Faster. <br />
        Get Hired.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        JobNest is a job search platform where you can find jobs, discover
        companies, save opportunities, and apply for your next career
        opportunity.
      </motion.p>

      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mt-8 w-full sm:w-96 relative mx-auto">
          <Magnifier className="absolute left-4 top-1/2 -translate-y-1/2" />

          <Input
            name="search"
            aria-label="Search jobs"
            className="w-full dark:bg-foreground/5 border border-black/20 dark:border-white/20 rounded-xl py-4 pr-15 pl-11 focus:ring-1 ring-indigo-500 shadow-none placeholder:text-foreground/40"
            placeholder="Enter job title or company name"
          />

          <motion.button
            type="submit"
            aria-label="Search"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-3 py-2.5 rounded-lg absolute right-2.5 top-1/2 -translate-y-1/2 bg-indigo-600 active:bg-indigo-700 text-white cursor-pointer duration-75"
          >
            <Magnifier />
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
      >
        <p className="opacity-60">Trending Position</p>

        <div className="space-y-2 sm:space-y-0 sm:flex flex-row items-center justify-center gap-1">
          {["UX Designer", "Marketing Coordinator", "DevOps Engineer"].map(
            (position, index) => (
              <motion.p
                key={position}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.08,
                }}
                whileHover={{
                  y: -2,
                }}
                className="bg-white dark:bg-foreground/5 py-1.5 px-4 rounded-full border-t border-foreground/5 text-sm sm:text-base dark:border dark:border-white/20 shadow-xs cursor-default"
              >
                {position}
              </motion.p>
            ),
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchJobs;
