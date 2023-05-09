import React from "react";

const MatchInfo = ({ date, time, venue, umpires }) => {
  return (
    <div className="match-info-container">
      <table>
        <tbody>
          <tr>
            <td className="text-black text-lg title-font  mb-3 font-bold md:text-lg "style={{ textShadow: "0px 0px 2px #000" }}>Date</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td className="text-black text-lg title-font  mb-3 font-bold md:text-lg " style={{ textShadow: "0px 0px 2px #000" }}>Time</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td className="text-black text-lg title-font  mb-3 font-bold md:text-lg "style={{ textShadow: "0px 0px 2px #000" }}>Venue</td>
            <td>{venue.name}</td>
            <td>{venue.city}</td>
          </tr>
          <tr>
            <td className="text-black text-lg title-font  mb-3 font-bold md:text-lg "style={{ textShadow: "0px 0px 2px #000" }}>On Field Umpires</td>
            <td colSpan="2">{umpires.field}</td>
          </tr>
          <tr>
            <td className="text-black text-lg title-font  mb-3 font-bold md:text-lg "style={{ textShadow: "0px 0px 2px #000" }}>Third Umpire</td>
            <td colSpan="2">{umpires.third}</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .match-info-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f2f2f2;
          border-radius: 5px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        td,
        th {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          font-weight: bold;
          border-top: 2px solid #555;
        }

        td:first-child,
        th:first-child {
          border-left: none;
        }

        td:last-child,
        th:last-child {
          border-right: none;
        }
      `}</style>
    </div>
  );
};

export default MatchInfo;
