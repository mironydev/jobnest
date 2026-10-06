export const metadata = {
  title: "About Us | JobNest",
  description:
    "Learn more about JobNest and our mission to make finding and discovering job opportunities easier.",
};

const AboutPage = () => {
  const sections = [
    {
      title: "Connecting People With Opportunities",
      content: (
        <p>
          JobNest is a job platform designed to make it easier for people to
          discover job opportunities and for companies to find potential
          candidates.
        </p>
      ),
    },
    {
      title: "What We Do",
      content: (
        <p>
          JobNest brings job listings, companies, and job seekers together in
          one place. Users can search for jobs, explore companies, save
          opportunities, and apply for positions that match their interests and
          experience.
        </p>
      ),
    },
    {
      title: "Our Goal",
      content: (
        <p>
          Our goal is to provide a simple and accessible job search experience
          while giving companies the tools they need to share opportunities with
          potential candidates.
        </p>
      ),
    },
    {
      title: "For Job Seekers",
      content: (
        <p>
          JobNest helps job seekers discover opportunities, explore companies,
          save interesting positions, and manage their applications in one
          place.
        </p>
      ),
    },
    {
      title: "For Companies",
      content: (
        <p>
          Companies and recruiters can use JobNest to publish job opportunities
          and connect with people who are looking for their next career
          opportunity.
        </p>
      ),
    },
  ];

  return (
    <main className="mt-28 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border bg-white dark:bg-foreground/5 px-6 py-10 md:px-10 md:py-12">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              JobNest
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Us
            </h1>

            <p className="mt-4 max-w-2xl text-muted leading-7">
              JobNest brings job seekers, companies, and opportunities together
              in one simple and accessible platform.
            </p>
          </div>
        </div>

        <div className="mt-10 divide-y divide-divider rounded-2xl border bg-white dark:bg-foreground/5">
          {sections.map((section, index) => (
            <section key={section.title} className="px-6 py-8 md:px-10 md:py-9">
              <div className="flex gap-5">
                <div className="hidden sm:flex shrink-0 items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>

                  <div className="mt-4 text-muted leading-7">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
