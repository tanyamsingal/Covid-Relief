import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const DailyData = () => {
  const [state, setState] = useState({});
  const [rows, setRows] = useState([]);

  const fetchData = fetch(
    "https://api.covid19india.org/v4/min/data.min.json"
  ).then((res) => {
    return res.json();
  });

  // const printData = async () => {
  //   const data = await fetchData;
  //   setState(data);
  //   // callback(data);
  //   console.log(data);
  //   for (var key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       // console.log(key + " -> " + data[key].);
  //       console.log(key);
  //       console.log(data[key].total.confirmed);
  //       console.log(data[key].total.deceased);
  //       console.log(data[key].total.recovered);
  //       console.log(data[key].total.tested);
  //       console.log(data[key].total.vaccinated);
  //     }
  //   }
  //   // console.log(state);
  // };

  useEffect(() => {
    // console.log(state);
    const printData = async () => {
      const data = await fetchData;
      // setState(data);
      // callback(data);
      console.log(data);
      var arr = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var obj = (
            <tr>
              <td>{key}</td>
              <td>{data[key].total.confirmed}</td>
              <td>{data[key].total.deceased}</td>
              <td>{data[key].total.recovered}</td>
              <td>{data[key].total.tested}</td>
              <td>{data[key].total.vaccinated}</td>
            </tr>
          );
          arr.push(obj);
        }
      }
      // console.log(arr);
      setRows(arr);
      // console.log(state);
    };
    printData();
  }, []);

  // printData();

  return (
    <div className="datatable">
      <Table className="table" striped bordered hover variant="dark">
        <thead className="table-head">
          <tr>
            <th>State/UT</th>
            <th>Confirmed</th>
            <th>Deceased</th>
            <th>Recovered</th>
            <th>Tested</th>
            <th>Vaccinated</th>
          </tr>
        </thead>

        <tbody>
          {/* {state !== {} &&
            state.map(function (temp, index) {
              return (
                <tr>
                  <td>{temp.key.name}</td>
                  <td>{temp.key.confirmed}</td>
                  <td>{temp.key.deceased}</td>
                  <td>{temp.key.recovered}</td>
                  <td>{temp.key.tested}</td>
                  <td>{temp.key.vaccinated}</td>
                </tr>
              );
            })} */}
          {rows}
        </tbody>
      </Table>
    </div>
  );
};

export default DailyData;
