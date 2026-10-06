export const metadata = {
  title: "Privacy Policy | JobNest",
  description:
    "Learn how JobNest collects, uses, and protects your personal information when you use our job search and recruitment platform.",
};

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <>
          <p>
            When you use JobNest, we may collect information that you provide
            directly, including your name, email address, profile image, account
            information, job applications, saved jobs, and company information
            submitted by recruiters.
          </p>
          <p className="mt-4">
            We may also collect information about how you interact with JobNest,
            such as pages visited, features used, and basic information about
            your device and browser.
          </p>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <p>
          We may use your information to create and manage your account, provide
          job search and application features, allow users to save jobs, allow
          recruiters to manage job listings, process applications, improve
          JobNest, communicate with you, analyze website usage, prevent abuse,
          and maintain the security and reliability of the platform.
        </p>
      ),
    },
    {
      title: "Job Applications",
      content: (
        <>
          <p>
            When you apply for a job through JobNest, information associated
            with your application may be made available to the relevant
            recruiter or company so they can review and process your
            application.
          </p>
          <p className="mt-4">
            Recruiters and companies are responsible for how they use
            application information they receive through JobNest.
          </p>
        </>
      ),
    },
    {
      title: "Information Sharing",
      content: (
        <p>
          We do not sell your personal information. We may share information
          when necessary to provide JobNest services, process your requests,
          provide services through third party providers, comply with legal
          obligations, prevent fraud or abuse, or protect the rights, property,
          and security of JobNest and its users.
        </p>
      ),
    },
    {
      title: "Google Analytics",
      content: (
        <>
          <p>
            JobNest uses Google Analytics to understand how visitors use the
            website and to help us measure and improve website performance.
            Google Analytics may collect information such as pages visited,
            interactions with the website, device information, browser
            information, and approximate location information.
          </p>
          <p className="mt-4">
            Google may process this information according to its own privacy
            policies and terms. JobNest does not use Google Analytics to
            identify individual users by name.
          </p>
        </>
      ),
    },
    {
      title: "Data Security",
      content: (
        <p>
          We take reasonable measures to protect information stored and
          processed through JobNest. However, no internet service, transmission
          method, or storage system can guarantee complete security.
        </p>
      ),
    },
    {
      title: "Cookies and Similar Technologies",
      content: (
        <>
          <p>
            JobNest may use cookies and similar technologies to maintain user
            sessions, remember preferences, provide website functionality,
            improve security, and understand how the website is used.
          </p>
          <p className="mt-4">
            Some third party services used by JobNest may also use cookies or
            similar technologies according to their own policies.
          </p>
        </>
      ),
    },
    {
      title: "Third Party Services",
      content: (
        <>
          <p>
            JobNest may use third party services for functionality such as
            authentication, database hosting, email delivery, analytics, and
            website hosting.
          </p>
          <p className="mt-4">
            These providers may process information on our behalf or
            independently according to their own privacy policies and terms.
            JobNest does not control the privacy practices of third party
            services.
          </p>
        </>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <p>
          We retain information for as long as reasonably necessary to provide
          JobNest services, maintain accounts and records, comply with legal
          obligations, resolve disputes, prevent abuse, and enforce our
          agreements.
        </p>
      ),
    },
    {
      title: "Your Privacy Rights",
      content: (
        <>
          <p>
            Depending on your location and applicable law, you may have certain
            rights regarding your personal information, including the right to
            request access, correction, or deletion of your information.
          </p>
          <p className="mt-4">
            To make a privacy related request, please contact JobNest through
            the contact information provided on the website.
          </p>
        </>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <p>
          JobNest is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13.
        </p>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. When changes are
          made, the updated policy will be posted on this page and the Last
          updated date will be revised accordingly.
        </p>
      ),
    },
    {
      title: "Contact",
      content: (
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact JobNest through the contact
          information provided on the website.
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
              Privacy Policy
            </h1>

            <p className="mt-4 max-w-2xl text-muted leading-7">
              Your privacy matters. Here is how JobNest collects, uses, and
              protects information when you use the platform.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border bg-white dark:bg-black px-4 py-2 text-sm text-muted">
              Last updated: October 4, 2026
            </div>
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

export default PrivacyPolicyPage;
