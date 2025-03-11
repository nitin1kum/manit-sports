"use client";

import { ResultData } from "@/data/ResultData";
import { useParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const EventSchedule = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { sport, type } = useParams();
    const types = useMemo(() => ResultData.find(result => result.sport === sport).types);
    const data = useMemo(() => types[0]);
    return (
        <div className="min-h-screen mt-32 mx-auto p-6 rounded-lg">
            <h1 className='text-center text-primary text-4xl font-semibold'>{data.type}</h1>

            <div className="mt-10">
                <button className="bg-accent/50 w-full px-6 py-2 flex justify-between items-center font-semibold text-lg " onClick={() => { setIsOpen(!isOpen) }}>Match Timeline and Schedule <IoChevronDown className={`transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} /></button>
                {
                    data.schedule && data.schedule.length > 0 ? (
                        <div className={`w-full origin-top overflow-x-scroll overflow-y-hidden transition-all duration-200  ${isOpen ? " scale-y-100 h-full" : "scale-y-0 h-0"}`}>
                            <table className="bg-accent/20 mt-5 w-full min-w-4xl">
                                <thead>
                                    <tr className="bg-accent/50">
                                        <th className="py-2">Match Type</th>
                                        <th className="py-2">Participant</th>
                                        <th className="py-2">Date</th>
                                        <th className="py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.schedule.map((sch, index) => (
                                            <tr key={index} className="border-b border-b-border my-1 gap-3">
                                                <td className="text-center p-3">{sch.match_type}</td>
                                                <td className="p-3">
                                                    <ul>
                                                        {
                                                            sch.participants.map((college) => (
                                                                <li key={college} className="text-center">{college}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </td>
                                                <td className="text-center p-3">{sch.date}</td>
                                                <td className="text-center p-3">{sch.status}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center font-xl font-semibold h-48 px-10">
                            No Data to show
                        </div>
                    )
                }

            </div>

            {/* Results */}
            <div className="mt-10">
                <h2 className="bg-accent/50 font-semibold text-lg px-6 py-2 flex justify-between items-center">Results</h2>

                {
                    data && data.results?.length > 0 ? (
                        <div className="w-full overflow-x-scroll">
                            <table className="bg-accent/20 mt-5 w-full min-w-4xl">
                                <thead>
                                    <tr className="bg-accent/50">
                                        <th className="py-2">Rank</th>
                                        <th className="py-2">Institute Name</th>
                                        <th className="py-2">Distance/Time</th>
                                        <th className="py-2">Points Secured</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.results.map((result) => (
                                            <tr key={result.institute_name} className="border-b border-b-border my-1 gap-3">
                                                <td className="text-center p-3">{result.rank}</td>
                                                <td className="p-3 text-center">{result.institute_name}</td>
                                                <td className="text-center p-3">{result.distance_time}</td>
                                                <td className="text-center p-3">{result.score}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                        : (
                            <div className="flex items-center justify-center font-xl font-semibold h-48 px-10">
                                No Data to show
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default EventSchedule;
