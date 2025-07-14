import React from "react";
// Replace these imports with your own project images and correct file paths
import Project1Image from "../assets/Project_LA.png";
import Project2Image from "../assets/Project_R.png";
import Project3Image from "../assets/Project_DBMS.png";
import Project4Image from "../assets/Project_HR.png";
import Project5Image from "../assets/Project_comments.png";
import Project6Image from "../assets/Project_Kafka.png";
import Project7Image from "../assets/Project_Tableau.png";
import Project8Image from "../assets/Project_BookFinderX.png";


const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
        <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

         {/* Card 1 */}
         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project6Image}
              alt="Project 1"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">StockFlow: Kafka-Powered Market Stream </h3>
              <p className="mb-4">
              Deployed a real-time stock data pipeline using Kafka, AWS S3, Glue, and Athena, enabling low-latency analytics and improving data availability and insight delivery.              </p>
              <p className="text-sm font-semibold">
              Key Technologies: Kafka, Zookeeper, AWS EC2, S3, Glue, Athena</p>
            </div>
          </div>



          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project7Image}
              alt="Project 2"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Customer Insights Dashboard</h3>
              <p className="mb-4">
              Designed an interactive Tableau dashboard analyzing 1,200+ British Airways reviews over 7 years, uncovering service gaps and driving a 15% improvement through data-driven insights              </p>
              <p className="text-sm font-semibold">
                Key Technologies: Data Cleaning, Tableau
              </p>
            </div>
          </div>

           {/* Card 3 */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project1Image}
              alt="Project 3"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Crime Hotspots in LA</h3>
              <p className="mb-4">
              Led a data-driven analysis of LA crime hotspots using Python, pinpointing peak hours and tourist-attraction overlaps to inform targeted safety strategies.
              </p>
              <p className="text-sm font-semibold">
                Key Technologies: Python[Numpy, Pandas, Folium, Matplotlib], Data Processing, EDA, Data Visualization
              </p>
            </div>
          </div>


          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project8Image}
              alt="Project 4"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">BookFinderX</h3>
              <p className="mb-4">
              Built BookFinderX, a real-time book recommendation system using NLP and vector search to deliver personalized suggestions with an interactive Streamlit interface              </p>
              <p className="text-sm font-semibold">
                Key Technologies: SentenceTransformers, ChromaDB, OpenLibrary API, Streamlit, Python, Cosine Similarity, Vector Embeddings
              </p>
            </div>
          </div>


          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project2Image}
              alt="Project 2"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Energy Consumption Analysis</h3>
              <p className="mb-4">
              Developed a decision tree-based predictive model with 91.3% and 94.8% accuracy for heating and cooling data, delivering actionable energy insights via an interactive Shiny app.
              </p>
              <p className="text-sm font-semibold">
                Key Technologies: R[ggplot2, shiny, rplot, dplyr], ML model[Regression, Decision Tree]
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project3Image}
              alt="Project 3"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> Dining Hall Management System
              </h3>
              <p className="mb-4">
              Developed an automated task assignment system for 70+ student employees, enhancing dining hall operations by 30% through optimized SQL views and collaborative design.
              </p>
              <p className="text-sm font-semibold">
                Key Technologies: SQL, Excel, PowerApps
              </p>
            </div>
          </div>

              {/* Card 7 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project4Image}
              alt="Project 4"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> HR Analytics Dashboard
              </h3>
              <p className="mb-4">
              Developed an HR Analytics Dashboard in PowerBI, improving employee performance by 20% and reducing turnover by 15% through data-driven insights and interactive visualizations.
              </p>
              <p className="text-sm font-semibold">
                Key Technologies: Excel, PowerBI
              </p>
            </div>
          </div>

            {/* Card 8 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project5Image}
              alt="Project 5"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> Toxic Comment Detector
              </h3>
              <p className="mb-4">
              Developed a Chrome Extension, to implement Linear Regression model to detect toxic comments with a 93.5% ROC AUC score.
              </p>
              <p className="text-sm font-semibold">
                Key Technologies: Python[Pandas, Numpy, Matplotlib, Pickle], NLP [NLTK, TF-IDF], scikit-learn
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
