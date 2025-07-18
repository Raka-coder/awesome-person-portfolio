"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { experiences, Experience } from "./../data/experience"; // import experience data
import { motion } from "framer-motion";

function formatPeriod(start: Experience["start"], end: Experience["end"]) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr =
    end === "Present" ? "Present" : `${monthNames[end.month - 1]} ${end.year}`;
  return `${startStr} - ${endStr}`;
}

export default function TabsExperience() {
  // Sort experiences by start date descending (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aYear = a.end === "Present" ? 9999 : a.end.year;
    const bYear = b.end === "Present" ? 9999 : b.end.year;
    if (aYear !== bYear) return bYear - aYear;
    if (a.end === "Present" && b.end !== "Present") return -1;
    if (b.end === "Present" && a.end !== "Present") return 1;
    return 0;
  });

  return (
    <Tabs
      defaultValue={sortedExperiences[0]?.company || ""}
      className="flex md:px-24 gap-6 max-w-5xl"
    >
      {/* Tab Triggers - Vertikal */}
      <TabsList className="flex flex-col items-start min-w-[140px] border-r pr-4">
        {sortedExperiences.map(({ company }) => (
          <TabsTrigger
            key={company}
            value={company}
            className={cn(
              "py-2 px-4 w-full text-left text-sm md:text-base rounded-md cursor-pointer",
              "data-[state=active]:border-l-4 data-[state=active]:border-purple-500",
              "data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600",
            )}
          >
            {company}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      <div className="flex-1">
        {sortedExperiences.map(
          ({ company, position, start, end, description }) => (
            <TabsContent key={company} value={company} className="pr-4 pb-4">
              <motion.div
                key={company}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-base md:text-xl font-semibold mb-1">
                  {position}
                </h2>
                <p className="mb-2 text-sm text-gray-600">
                  {formatPeriod(start, end)}
                </p>

                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="list-disc list-inside space-y-1 text-sm md:text-base"
                >
                  {description.map((desc, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </TabsContent>
          ),
        )}
      </div>
    </Tabs>
  );
}
