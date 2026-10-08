import {
  Magnifier,
  ChartLineArrowUp,
  Factory,
  Bookmark,
  LayoutHeaderCursor,
  FileText,
  PersonMagnifier,
  SquareChartColumn,
} from "@gravity-ui/icons";
import { BuildingComplex } from "lucide-react";

const tools = [
  {
    icon: Magnifier,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: BuildingComplex,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: LayoutHeaderCursor,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: PersonMagnifier,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: ChartLineArrowUp,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

const Careertools = () => {
  return (
    <div className="mt-28 sm:mt-36 bg-white dark:bg-white/5 rounded-lg mx-4 px-4 pt-8 pb-4 sm:px-8 sm:py-14 border">
      <div className="relative text-center space-y-2">
        {/* Left illustration */}
        <div className="absolute left-2 xl:left-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-25">
          <div className="relative w-28 h-20">
            <div className="absolute left-2 top-2 -rotate-12">
              <Magnifier className="size-12 text-indigo-500/50" />
            </div>

            <div className="absolute right-2 bottom-1 rotate-6">
              <Bookmark className="size-6 text-foreground/30" />
            </div>

            <div className="absolute left-10 bottom-0 size-1.5 rounded-full bg-indigo-500/40" />
          </div>
        </div>

        {/* Right illustration */}
        <div className="absolute right-2 xl:right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-25">
          <div className="relative w-28 h-20">
            <div className="absolute right-2 top-2 rotate-12">
              <ChartLineArrowUp className="size-12 text-indigo-500/50" />
            </div>

            <div className="absolute left-2 bottom-1 -rotate-6">
              <BuildingComplex className="size-6 text-foreground/30" />
            </div>

            <div className="absolute right-10 bottom-0 size-1.5 rounded-full bg-indigo-500/40" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mb-3 relative z-10">
          <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs" />

          <p className="text-sm font-semibold tracking-widest text-foreground/70">
            CAREER TOOLS
          </p>

          <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs" />
        </div>

        <h2 className="text-4xl font-semibold max-w-2xl mx-auto relative z-10">
          Tools to Help You Find the Right Job
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
        {tools.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <div className="p-3 bg-linear-to-b bg-foreground/2 dark:bg-foreground/4 text-foreground border rounded-md">
              <Icon className="size-8 opacity-80" strokeWidth={1.8} />
            </div>

            <div>
              <p className="font-medium">{title}</p>
              <p className="text-sm opacity-70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careertools;
