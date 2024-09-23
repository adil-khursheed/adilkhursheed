import React from "react";
import { Timeline } from "./ui/timeline";
import LeadllyDashboard from "../images/leadlly-dashboard.png";
import LeadllyPlanner from "../images/leadlly-planner.png";
import LeadllyTracker from "../images/leadlly-tracker.png";
import LeadllyQuizzes from "../images/leadlly-quizzes.png";

const WorkExperience = () => {
  return (
    <Timeline
      data={[
        {
          title: "Frontend Developer",
          subtitle: "Leadlly | April 2024 - Present",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Built the student portal all from scratch which will help in
                assisting students in managing their self-studies through
                personalized Planning, Tracking, and Mentoring.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <img src={LeadllyDashboard} width={500} height={500} alt="" />
                <img src={LeadllyPlanner} width={500} height={500} alt="" />
                <img src={LeadllyTracker} width={500} height={500} alt="" />
                <img src={LeadllyQuizzes} width={500} height={500} alt="" />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default WorkExperience;
