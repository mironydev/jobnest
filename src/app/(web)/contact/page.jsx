import Link from "next/link";

export const metadata = {
  title: "Contact Us | JobNest",
  description:
    "Get in touch with the JobNest team for questions, feedback, or support.",
};

const ContactPage = () => {
  const sections = [
    {
      title: "Email",
      content: (
        <p>
          For general questions, feedback, support, or other inquiries, email me
          at{" "}
          <a href="mailto:mironydev@gmail.com" className="text-foreground">
            mironydev@gmail.com
          </a>
          .
        </p>
      ),
    },
    {
      title: "X (formerly Twitter)",
      content: (
        <p>
          You can also reach me on X at{" "}
          <span className="text-foreground">@</span>
          <Link
            href="https://x.com/mironydev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline decoration-1 decoration-muted"
          >
            mironydev
          </Link>
          .
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
              Contact Us
            </h1>

            <p className="mt-4 max-w-2xl text-muted leading-7">
              Have a question, feedback, or need help with JobNest? Reach out to
              the creator through email or X.
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

export default ContactPage;
