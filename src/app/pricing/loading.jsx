import { Skeleton } from "@heroui/react";

const Loading = () => {
  return (
    <div className="px-4 mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted">
            Choose the plan that fits your job search needs
          </p>
        </div>
        <div className="w-full max-w-xs mx-auto mb-5 md:mb-10 mt-6">
          <div className="flex items-center rounded-xl border bg-white dark:bg-foreground/5 p-1">
            <div className="flex-1 rounded-lg bg-foreground text-background py-1.5 text-base text-center font-medium">
              Monthly
            </div>

            <div className="flex-1 flex items-center justify-center gap-2 py-1.5 text-base text-foreground/70">
              Yearly
              <span className="text-xs font-semibold bg-foreground/10 px-2 py-0.5 rounded-full">
                20% off
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-wrap justify-center gap-6 lg:gap-8 pt-3 pb-2">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className={`skeleton--shimmer relative w-xs rounded-2xl px-5 py-6 overflow-hidden ${
                card === 2
                  ? "bg-indigo-500 dark:bg-indigo-600/30 xl:scale-105"
                  : "border dark:border-0 bg-white dark:bg-foreground/10"
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-3 justify-between mb-6">
                    <div className="flex items-end gap-3 mt-px">
                      <Skeleton
                        animationType="none"
                        className="size-8 rounded-md"
                      />

                      <Skeleton
                        animationType="none"
                        className={`h-7 w-24 rounded-md ${
                          card === 1 ? "w-20" : card === 2 ? "w-10" : "w-24"
                        }`}
                      />
                    </div>

                    <div className="flex items-end gap-1">
                      <Skeleton
                        animationType="none"
                        className="h-8 w-10 rounded-md"
                      />

                      <Skeleton
                        animationType="none"
                        className="h-5 w-5 rounded-md"
                      />
                    </div>
                  </div>

                  <Skeleton
                    animationType="none"
                    className="h-5 w-56 rounded-md mb-4 mt-7"
                  />

                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Skeleton
                          animationType="none"
                          className="size-5 rounded-full"
                        />

                        <Skeleton
                          animationType="none"
                          className={`h-4 rounded-md ${
                            feature === 2
                              ? "w-48"
                              : feature === 3
                                ? "w-40"
                                : "w-52"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Skeleton
                  animationType="none"
                  className="h-13 w-full rounded-lg mt-8"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted">
            All plans include basic features. Cancel anytime. No credit card
            required for Starter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
