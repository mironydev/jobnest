export const metadata = {
  title: "Terms and Conditions | JobNest",
  description:
    "Read the Terms and Conditions governing the use of JobNest, including job listings, applications, user accounts, and recruiter services.",
};

const TermsPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: (
        <p>
          By accessing or using JobNest, you agree to these Terms and
          Conditions. If you do not agree with these terms, you should not use
          JobNest.
        </p>
      ),
    },
    {
      title: "About JobNest",
      content: (
        <p>
          JobNest is an online platform that helps job seekers discover
          employment opportunities and allows recruiters and companies to
          publish and manage job listings. JobNest is not an employer and does
          not make employment decisions on behalf of companies or recruiters.
        </p>
      ),
    },
    {
      title: "User Accounts",
      content: (
        <>
          <p>
            Some features of JobNest require an account. You are responsible for
            providing accurate information and keeping your account credentials
            secure. You are also responsible for activity performed through your
            account.
          </p>
          <p className="mt-4">
            You must not create an account using false information, impersonate
            another person, or use another person&apos;s account without
            permission.
          </p>
        </>
      ),
    },
    {
      title: "Job Listings and Employers",
      content: (
        <>
          <p>
            Job listings may be submitted by recruiters, companies, or other
            authorized users. JobNest does not guarantee that a job listing is
            accurate, current, legitimate, available, or suitable for a
            particular user.
          </p>
          <p className="mt-4">
            Recruiters and companies are responsible for the accuracy and
            legality of the job listings and other information they publish on
            JobNest.
          </p>
        </>
      ),
    },
    {
      title: "Job Applications",
      content: (
        <>
          <p>
            JobNest may allow users to submit applications or application
            information to employers. Submitting an application does not
            guarantee an interview, offer, employment, or any other result.
          </p>
          <p className="mt-4">
            Employers are solely responsible for reviewing applications and
            making decisions regarding interviews and employment.
          </p>
        </>
      ),
    },
    {
      title: "User Content and Information",
      content: (
        <>
          <p>
            You are responsible for information and content you submit,
            including profile information, resumes, applications, job listings,
            company information, and other materials.
          </p>
          <p className="mt-4">
            You agree not to submit content that is false, misleading, unlawful,
            abusive, fraudulent, defamatory, or that infringes the rights of
            another person or organization.
          </p>
        </>
      ),
    },
    {
      title: "Prohibited Activities",
      content: (
        <>
          <p>You may not use JobNest to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Post fraudulent or misleading job opportunities.</li>
            <li>Impersonate another person or organization.</li>
            <li>Submit false or misleading application information.</li>
            <li>Attempt to access accounts or data without authorization.</li>
            <li>Interfere with or disrupt the operation of JobNest.</li>
            <li>Collect or misuse another user&apos;s personal information.</li>
            <li>Use JobNest for unlawful or fraudulent activities.</li>
            <li>Attempt to bypass security or access restrictions.</li>
          </ul>
        </>
      ),
    },
    {
      title: "JobNest Content and Intellectual Property",
      content: (
        <>
          <p>
            The JobNest name, branding, website design, software, interface, and
            original content provided by JobNest are owned by or licensed to
            JobNest and are protected by applicable intellectual property laws.
          </p>
          <p className="mt-4">
            You may use JobNest only for its intended purposes. You may not
            copy, reproduce, modify, distribute, or commercially exploit JobNest
            content or software without appropriate permission.
          </p>
        </>
      ),
    },
    {
      title: "Third Party Services and Links",
      content: (
        <>
          <p>
            JobNest may use third party services or contain links to third party
            websites. These services and websites are not controlled by JobNest,
            and their use may be subject to separate terms and privacy policies.
          </p>
          <p className="mt-4">
            JobNest is not responsible for the content, availability, security,
            or practices of third party services or websites.
          </p>
        </>
      ),
    },
    {
      title: "Privacy",
      content: (
        <>
          <p>
            Your use of JobNest is also subject to our Privacy Policy, which
            explains how information may be collected, used, and handled when
            you use the platform.
          </p>
          <p className="mt-4">
            By using JobNest, you acknowledge that you have reviewed our Privacy
            Policy.
          </p>
        </>
      ),
    },
    {
      title: "Account Suspension and Termination",
      content: (
        <>
          <p>
            JobNest may suspend, restrict, or terminate an account or remove
            content when necessary to protect the platform, its users, or third
            parties, including when these Terms are violated or when fraudulent,
            abusive, or unlawful activity is suspected.
          </p>
          <p className="mt-4">
            You may stop using JobNest at any time and may request account
            removal where applicable.
          </p>
        </>
      ),
    },
    {
      title: "Service Availability",
      content: (
        <>
          <p>
            We aim to keep JobNest available and reliable, but we do not
            guarantee that the platform will always be available, secure,
            uninterrupted, or free from errors.
          </p>
          <p className="mt-4">
            JobNest may temporarily modify, suspend, or discontinue features or
            services when necessary for maintenance, security, development, or
            other operational reasons.
          </p>
        </>
      ),
    },
    {
      title: "Disclaimers",
      content: (
        <>
          <p>
            JobNest provides the platform and its content on an as available
            basis. We do not guarantee employment, interviews, job offers,
            recruiter responses, or the accuracy of information submitted by
            third parties.
          </p>
          <p className="mt-4">
            Users are responsible for evaluating job opportunities, employers,
            recruiters, and other information before taking action based on
            them.
          </p>
        </>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <p>
          To the extent permitted by applicable law, JobNest will not be
          responsible for losses or damages resulting from reliance on job
          listings, interactions between users and employers, employment
          decisions, third party services, unauthorized activity, or temporary
          interruptions of the platform.
        </p>
      ),
    },
    {
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            We may update these Terms and Conditions from time to time. Changes
            will be posted on this page and the Last updated date will be
            revised accordingly.
          </p>
          <p className="mt-4">
            Your continued use of JobNest after updated terms are posted means
            that you accept the revised Terms and Conditions.
          </p>
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <p>
          If you have questions about these Terms and Conditions, please contact
          JobNest through the contact information provided on the website.
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
              Terms and Conditions
            </h1>

            <p className="mt-4 max-w-2xl text-muted leading-7">
              Please review the terms that govern your use of JobNest, including
              job listings, applications, accounts, and recruiter services.
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

export default TermsPage;
