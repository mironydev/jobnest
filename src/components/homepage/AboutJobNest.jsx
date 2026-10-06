import React from "react";

const AboutJobNest = () => {
  return (
    <div>
      <section className="mt-28 sm:mt-36 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs"></span>

            <p className="text-sm font-semibold uppercase tracking-widest text-foreground/70">
              About JobNest
            </p>

            <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A Simpler Way to Find Your Next Job
          </h2>

          <p className="mt-5 mb-12 text-muted leading-7">
            JobNest is a modern job search platform built to make finding your
            next career opportunity simpler. Search job opportunities, explore
            companies, compare positions, save jobs you are interested in, and
            apply from one place.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-foreground/10 bg-white dark:bg-foreground/5 p-6 outline outline-indigo-500/10 outline-offset-4 shadow-[0_0_6px_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-semibold">For Job Seekers</h3>

            <p className="mt-3 text-muted leading-7">
              Find opportunities based on job title, company, location, job
              type, salary, and other preferences. Save interesting jobs and
              manage your applications from one place.
            </p>
          </div>

          <div className="rounded-2xl border border-foreground/10 bg-white dark:bg-foreground/5 p-6 outline outline-indigo-500/10 outline-offset-4 shadow-[0_0_6px_rgba(0,0,0,0.1)]">
            <h3 className="text-xl font-semibold">
              For Companies and Recruiters
            </h3>

            <p className="mt-3 text-muted leading-7">
              Publish job opportunities, reach people actively looking for their
              next role, and manage job listings and applications through
              JobNest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutJobNest;
