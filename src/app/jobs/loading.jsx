import {
  Checkbox,
  ListBox,
  SearchField,
  Select,
  Skeleton,
} from "@heroui/react";
import React from "react";

const Loading = () => {
  const selectStyle = "ring-0 rounded-sm ring-offset-0";

  return (
    <div className="mt-26 px-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center sm:py-5">
          Find Jobs
        </h1>
        <div className="my-5">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <SearchField
              aria-label="Search jobs"
              className="flex-1 border focus-within:border-foreground/40 rounded-sm duration-100 w-full"
            >
              <SearchField.Group className="shadow-none ring-0 rounded-sm py-5 sm:py-0 dark:bg-foreground/10 sm:dark:bg-foreground/7">
                <SearchField.SearchIcon />
                <SearchField.Input
                  placeholder="Search by company or job title..."
                  className=""
                />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>

            <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-4 w-full">
              <div className="flex flex-1 gap-4 w-full">
                <Select
                  aria-label="Job type"
                  placeholder="Select job type"
                  className="flex-1 rounded-md border bg-white dark:bg-foreground/10 sm:dark:bg-foreground/7 text-nowrap"
                  variant="secondary"
                >
                  <Select.Trigger className={`${selectStyle} bg-transparent`}>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover className="rounded-lg">
                    <ListBox>
                      <ListBox.Item
                        id="all"
                        textValue="All Job Types"
                        className={selectStyle}
                      >
                        All Job Types
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>

                <Select
                  aria-label="Job category"
                  placeholder="Select category"
                  className="flex-1 rounded-md border bg-white dark:bg-foreground/10 sm:dark:bg-foreground/7 text-nowrap"
                  variant="secondary"
                >
                  <Select.Trigger className={`${selectStyle} bg-transparent`}>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover className="rounded-lg">
                    <ListBox>
                      <ListBox.Item
                        id="all"
                        textValue="All Categories"
                        className={selectStyle}
                      >
                        All Categories
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              <div className="w-fit">
                <Checkbox>
                  <Checkbox.Content className="flex flex-row items-center gap-1">
                    <Checkbox.Control
                      className="bg-white dark:bg-foreground/10 border border-foreground/20 dark:border-foreground/10 ring-0 rounded-xl"
                      style={{
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    Remote
                  </Checkbox.Content>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-13">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-foreground/10 border"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <Skeleton className="h-4 w-24 rounded" />
                </div>
                <Skeleton className="h-9 w-3/4 rounded" />
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-2/3 rounded" />
                  <Skeleton className="h-4 w-1/3 rounded sm:hidden" />
                </div>
                <div className="space-y-1.5 my-6">
                  <div className="flex gap-1">
                    <Skeleton className="h-7 w-26 rounded-full" />
                    <Skeleton className="h-7 w-20 rounded-full" />
                    <Skeleton className="h-7 w-20 rounded-full" />
                  </div>
                  <div className="flex gap-1">
                    <Skeleton className="h-7 w-28 rounded-full" />
                  </div>
                </div>
              </div>
              <Skeleton className="h-6 w-26 ml-2 mt-2 mb-1 rounded-full " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
