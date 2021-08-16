import React from "react";
import "./timesheets.css";
import Candidate from "./Candidate"
import { ReactComponent as Filters } from "../../assets/filters.svg";
//Dummy Data
let candidates = [
  {
    id: "1",
    name: "Tomas Wellens",
    timesheetsNumber: "11114",
    hours: "16hrs",
    payment: "Standard Pay",
  },
  {
    id: "2",
    name: "Mahmoud Ali",
    timesheetsNumber: "11514",
    hours: "16hrs",
    payment: "Standard Pay",
  },
];

// useEffect(() => {
//   effect
//   return () => {
//     cleanup
//   }
// }, [input])
export default function Timesheets() {
  return (
    <div className="timesheetsView">
      <div className="filters">
        <h3 className="filtersHeader">Filters</h3>
        {/*TODO: implement the filter calender*/}
        <Filters />
      </div>
      <div className="candidates">
        <h1 className="candsHeader">Candidates</h1>
        <h2 className="candsHeader">Overview </h2>
        <p className="candsHeader">{candidates.length} Candidates </p>
        <div className="cadidateHolder">
          {candidates.map(candidate =><Candidate user={candidate}/>)}
        </div>
      </div>
    </div>
  );
}
