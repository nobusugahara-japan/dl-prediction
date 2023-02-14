import './App.css';
import list from "./list";
import {useEffect, useState, useRef} from "react";
import * as XLSX from 'xlsx';
// import {css} from "@emotion/react";
// import { ToggleButton } from '@aws-amplify/ui-react';

function App () {

    const fileInput = useRef(null);
    const [fileName, setFileName] = useState('');
    const [bookingProbabilities, setBookingProbabilities] = useState([]);
    const [bookingExpectedValues,setBookingExpectedValues] = useState([]);
    const [excelData, setExcelData] = useState([])
    const [uniqueOwners, setUniqueOwners] = useState([])
    const [selectedOwnerId, setSelectedOwnerId] = useState()
  
    const handleTriggerReadFile = () => {
      if (fileInput.current) {
        fileInput.current.click()
      }
    }
    const handleReadFile = (fileObj) => {
      if (fileObj) {
        setFileName(fileObj.name)
        fileObj.arrayBuffer().then((buffer) => {
          const workbook = XLSX.read(buffer, { type: 'buffer', bookVBA: true })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const data = XLSX.utils.sheet_to_json(worksheet)
          const bookingProbabilityUpdate = [];
          for (let i=0; i<data.length; i++) {
            excelData.push(data[i])
            bookingProbabilityUpdate.push(data[i]["Booking Probability"])
            // 実際にはdatabaseからも取るので気をつけること
            bookingExpectedValues.push(Math.round(data[i]["Booking Value (Base)"]*data[i]["Booking Probability"]*0.01))
            if (uniqueOwners.includes(data[i]["Owner"])) {
              } else {
              uniqueOwners.push(data[i]["Owner"])
              }
            }
            for (let i=0; i<data.length; i++) {
                excelData[i].key = excelData[i]["Opportunity"]+"-"+excelData[i]["Booking Date"];
              }
          setExcelData(excelData);
          setBookingProbabilities(bookingProbabilityUpdate);
          setUniqueOwners(uniqueOwners);
        })
      }
    }
    console.log("excel", excelData);
    console.log("expected",bookingExpectedValues);
 
  function editBooking (num, value) {
    setBookingProbabilities(
      bookingProbabilities.map((bookingProability, index) => (index === num ? Number(value) : bookingProability)));
    setBookingExpectedValues(
      bookingExpectedValues.map((bookingExpectedValue, index) => (index === num ? Math.round(Number(excelData[num]["Booking Value"]) * Number(bookingProbabilities[num]*0.01)) : bookingExpectedValue)));
    }
  
  function PullDown(){
    const pulldownList = [];
    console.log("pulldown時",uniqueOwners)
    for (let i = 0; i < uniqueOwners.length; i++) {
      pulldownList.push(<option value={i}>{uniqueOwners[i]}</option>);
    }
    const handleChange = (e) => {
      setSelectedOwnerId(e.target.value)
    }
    return (
    <div className="App">
      <select onChange={(e) => handleChange(e)} title="サンプル">{pulldownList}</select>
      <p>{uniqueOwners[selectedOwnerId]}</p>
    </div>
    )
  } 

  function Child(props) {
    return (
      <div className="App">
        <table border="1" cellSpacing="0">
          <tr key={list.firstName} bgcolor="skyblue">
            <th>Owner</th>
            <th>Opportunity</th>
            <th>Booking Value</th>
            <th>Probability</th>
            <th>Expected Booking Value</th>
          </tr>
          {excelData.map((el, index) => {
            console.log(el["Owner"]);
            const handleChange = () => {
              if (el["Owner"]===props.selectedOwner){
                return "visible"
              } else {
                return "collapse"
                }
            };
            return (
              <tr key={index} style={{ visibility: handleChange() }}>
                <td>{el["Owner"]}</td>
                <td>{el["Opportunity"]}</td>
                <td>{el["Booking Value (Base)"]}</td>
                <td>
                  <input
                    type="text"
                    onChange={e => editBooking(index, e.target.value)}
                    value={bookingProbabilities[index]} />
                </td>
                <td>{bookingExpectedValues[index]}</td>
              </tr>
            );
          }
          )}
        </table>
      </div>
    );
  }

  const ExcelImport = () => {
    return(
    <div className="App" style={{ padding: '20px' }}>
      <p style={{ paddingBottom: '20px' }}>Excelファイルをアップロードする</p>
      <button onClick={() => handleTriggerReadFile()}>ファイル選択</button>
      {!!fileName && <span>ファイル名：{fileName}</span>}
      <form style={{ display: 'none' }}>
        <input
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ref={fileInput}
          onChange={(e) => {
            e.preventDefault()
            handleReadFile(e.currentTarget.files[0])
          }}
        />
      </form>
    </div>
    )
   }

    return (
      <>
      <PullDown/>
      <Child selectedOwner={uniqueOwners[selectedOwnerId]}/>    
      <ExcelImport/>
      </>
    )}

export default App;
