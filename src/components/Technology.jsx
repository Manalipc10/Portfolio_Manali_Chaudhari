import React from 'react';
import { RiReactjsLine } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import { BiLogoPython } from "react-icons/bi";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { PiFileSqlFill } from "react-icons/pi";
import { SiR } from 'react-icons/si';
import { SiTableau } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { SiGoogleanalytics } from "react-icons/si";




const Technology = () => {
  return (
    <div>
      <h2 className="my-20 text-4xl font-serif text-black text-center mb-8">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <p className="mt-2 text-center">Postgresql</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <BiLogoPython className="text-7xl text-yellow-400" />
          <p className="mt-2 text-center">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <PiMicrosoftExcelLogoLight className="text-7xl text-green-400" />
          <p className="mt-2 text-center">Excel</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <PiFileSqlFill className="text-7xl text-red-400" />
          <p className="mt-2 text-center">SQL</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <SiR className="text-7xl text-blue-400" />
          <p className="mt-2 text-center">R</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <SiTableau className="text-7xl text-orange-400" />
          <p className="mt-2 text-center">Tableau</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <VscAzure className="text-7xl text-lightblue-400" />
          <p className="mt-2 text-center">Azure</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <img
            src="/src/assets/powerbi-logo.png"
            alt="Power BI"
            className="h-20 w-20 mx-auto"
          />
          <p className="mt-2 text-center">Power BI</p>
        </div>

        <div className="flex flex-col items-center rounded-2xl border-4 border-gray-200 p-4">
            <SiGoogleanalytics className="text-7xl text-orange-400" />
            <p className="mt-2 text-center text-black">Google Analytics</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-2 text-center">Reactjs</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
