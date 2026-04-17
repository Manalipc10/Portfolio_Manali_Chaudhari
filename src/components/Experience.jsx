import React from "react";

// Update these paths to match your actual image files
import Card1Image from "../assets/findkeep_logo.png";
import Card2Image from "../assets/syracuse_logo.png";
import Card3Image from "../assets/iconsult_logo.jpeg";
import Card4Image from "../assets/tam_logo.jpeg";
import Card5Image from "../assets/cp_logo.png";
import Card6Image from "../assets/Webminix_logo.jpg";
import Card7Image from "../assets/menstrupedia_logo.png";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - FindKeep.Love */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card1Image}
              alt="Data Scientist, FindKeep.Love"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Data Scientist, FindKeep.Love
              </h3>
              <p className="mb-4">
                Built automation pipelines for lead qualification, suppression,
                and validation across 100K+ B2B prospect records, improving data
                quality and reducing manual effort by 65% for marketing and
                campaign analytics workflows.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, Marketing Analytics, Attribution, Campaign
                Analytics, Data Pipelines
              </p>
            </div>
          </div>

          {/* Card 2 - Syracuse University */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card2Image}
              alt="Data Analyst, Syracuse University"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Data Analyst, Syracuse University
              </h3>
              <p className="mb-4">
                Analyzed Syracuse University basketball game data using Python,
                Pandas, and Polars to define player KPIs, uncover performance
                trends, and build reporting workflows with visualizations for
                stakeholder insights.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, Pandas, Polars, Statistical Analysis,
                Data Visualization, Reporting
              </p>
            </div>
          </div>

          {/* Card 3 - iConsult */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card3Image}
              alt="Data Analyst, iConsult Collaborative"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Data Analyst, iConsult Collaborative
              </h3>
              <p className="mb-4">
                Streamlined data workflows and unified 5+ sources into Power BI
                dashboards, enhancing data accuracy by 25% and boosting
                financial decision-making speed by 30%.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Data Modeling, ETL, Power BI, SQL, Python, Excel
              </p>
            </div>
          </div>

          {/* Card 4 - TAM */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card4Image}
              alt="Project Intern, TAM Media Research"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Project Intern, TAM Media Research
              </h3>
              <p className="mb-4">
                Devised and deployed automated real-time solutions with Google
                API and Streamlit, slashing manual article retrieval by 80% and
                boosting keyword-based media coverage speed and accuracy.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, API Integration, Streamlit
              </p>
            </div>
          </div>

          {/* Card 5 - Colgate */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card5Image}
              alt="Global Information Technology Intern, Colgate-Palmolive"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Global Information Technology Intern, Colgate-Palmolive
              </h3>
              <p className="mb-4">
                Executed over 500+ monthly regression tests, elevated supply
                chain efficiency by 20%, championed agile methods, and cut
                support tickets by 25% through clear documentation.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: UFT, ALM, Visual Basic Scripting, Technical
                Documentation
              </p>
            </div>
          </div>

          {/* Card 6 - Webminix */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card6Image}
              alt="Data Analyst, Webminix"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Data Analyst, Webminix
              </h3>
              <p className="mb-4">
                Analyzed multi-platform marketing data using Python and SQL,
                built real-time BI dashboards, and optimized ad spend and UX,
                boosting ROI by 25% and user retention by 15%.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: SQL, Python, BI Tools
              </p>
            </div>
          </div>

          {/* Card 7 - Menstrupedia */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card7Image}
              alt="Web Developer Intern, Menstrupedia"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">
                Web Developer Intern, Menstrupedia
              </h3>
              <p className="mb-4">
                Collaborated on user-friendly web designs, increasing
                engagement by 20%, reducing bounce rate by 15%, and achieving a
                95% bug-free launch with 50+ pre-production tests.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: HTML, CSS, Bootstrap, JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;