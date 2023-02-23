import './App.css';
import {useEffect, useState, useRef,useReducer} from "react";
import * as XLSX from 'xlsx';
import {Amplify,  API, graphqlOperation } from "aws-amplify"
import { listDLPredictions,listOtherPredictions } from "./graphql/queries"
import { createDLPrediction,createOtherPrediction, deleteOtherPrediction } from './graphql/mutations';
import { updateDLPrediction,updateOtherPrediction,deleteDLPrediction } from './graphql/mutations';
import aws_exports from "./aws-exports";
import {Table} from "./Table";
import {TableOthers} from "./TableOthers";
import {ResultWeek} from "./ResultWeek";
import {ResultPg} from "./ResultPg";
import { ComponentClassObject } from '@aws-amplify/ui-react';
import { MainGraphQL } from './MainGraphQL';

Amplify.configure(aws_exports)


function App () {

    const fileInput = useRef(null);
    const [fileName, setFileName] = useState('');
    const [excelData, setExcelData] = useState([])
    const [uniqueOwners, setUniqueOwners] = useState(["担当営業を選ぶ","All"])
    const [selectedOwnerId, setSelectedOwnerId] = useState()
    const [masterData, setMasterData] = useState([])
    // const [dynamoData, setDynamoData] = useState([])
    const [dataId, setDataId] = useState([])
    const [boolState, setBoolState] = useState(true)
    const toggleBool = () => setBoolState(!boolState)
    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    const [sendData1,setSendData1] = useState("未送信")
    const [sendData2,setSendData2] = useState("未送信")
    const [getConfirm, setGetConfirm] = useState()
    const [getConfirm2, setGetConfirm2] = useState()

    const [otherDataId, setOtherDataId] = useState([])
    const [sendOtherData1,setSendOtherData1] = useState("未送信")
    const [sendOtherData2,setSendOtherData2] = useState("未送信")
    const [getOtherConfirm, setGetOtherConfirm] = useState()
    const [deleteData, setDeleteData] = useState()

    const [byPgTable, setByPgTable] = useState([]);
    const [byWeekTable, setByWeekTable] = useState([]);
    const [deleteId, setDeleteId] = useState([])


    const otherDataElement = {
      key: null,
      Owner: null,
      Category: null,
      ProductGroup: null,
      BookingDate:null,
      BookingValue: null,
      BookingProbability: null,
      BookingExpectedValue:null,
      ShippingDate: null,
      ShippingProbability: null,
      ShippingExpectedValue: null
    };
  
    const [otherData, setOtherData] = useState([
      {
        key: null,
        Owner: null,
        Category: null,
        ProductGroup: null,
        BookingDate:null,
        BookingValue: null,
        BookingProbability: null,
        BookingExpectedValue:null,
        ShippingDate: null,
        ShippingProbability: null,
        ShippingExpectedValue: null,
        comment:null
      }
    ]);

      // otheDataの取得
      const fetchOtherData = () => {
        API.graphql(graphqlOperation(listOtherPredictions)).then(values=> {
          // console.log("V",values.data.listOtherPredictions.items[0].id)       
          const tempOtherDynamoData = values.data.listOtherPredictions.items
          const tempOtherDynamoData2 = [];
          for (let j=0; j<tempOtherDynamoData.length;j++){
            if (tempOtherDynamoData[j]._deleted===true){
            }else{
              tempOtherDynamoData2.push(tempOtherDynamoData[j])
            }
          }
          setOtherData(tempOtherDynamoData2);
          const tempOtherDataId = [];
          for (let i=0; i<tempOtherDynamoData.length; i++){tempOtherDataId.push(tempOtherDynamoData[i].id)}
          setOtherDataId(tempOtherDataId)
          setGetOtherConfirm("  取得済み")
      })}

      // otherDateの送信
      function sendingOtherData () {
        for (let i=0; i<otherData.length; i++){
            if(otherDataId.includes(otherData[i].id)){
              API.graphql(graphqlOperation(updateOtherPrediction, 
                  {input:{
                    BookingProbability:otherData[i]["BookingProbability"],
                    BookingExpectedValue:otherData[i]["BookingExpectedValue"],
                    ShippingProbability:otherData[i]["ShippingProbability"],
                    ShippingExpectedValue:otherData[i]["ShippingExpectedValue"],
                    Comment:otherData[i]["Comment"],
                    id:otherData[i].id
                  }})).then(setSendOtherData1("改訂済み"))
            } else {
              otherData[i].key = otherData[i]["Category"]+"-"+otherData[i]["ProductGroup"];
              API.graphql(graphqlOperation(createOtherPrediction, 
                {input:{
                  Owner:otherData[i]["Owner"],
                  Category:otherData[i]["Category"],
                  ProductGroup:otherData[i]["ProductGroup"],
                  BookingDate:otherData[i]["BookingDate"],
                  BookingValue:otherData[i]["BookingValue"],
                  BookingProbability:otherData[i]["BookingProbability"],
                  BookingExpectedValue:otherData[i]["BookingExpectedValue"],
                  ShippingDate:otherData[i]["ShippingDate"],
                  ShippingProbability:otherData[i]["ShippingProbability"],
                  ShippingExpectedValue:otherData[i]["ShippingExpectedValue"],
                  Comment:otherData[i]["Comment"],
                  key:otherData[i]["key"]
                }})).then(setSendOtherData2("追加済み"))
            }
          }
        }

 

    // useEffect(()=>{
    //   setMasterData(masterData)
    // },[masterData])

    function PullDown(){
      const pulldownList = [];
      for (let i = 0; i < uniqueOwners.length; i++) {
        pulldownList.push(<option value={i}>{uniqueOwners[i]}</option>);
      }
      const handleChange = (e) => {
        setSelectedOwnerId(e.target.value)
      }
      return (
      <div className="App">
        <select onChange={(e) => handleChange(e)} title="サンプル" style={{padding:"6px",width:"150px"}}>{pulldownList}</select>
        <p>{uniqueOwners[selectedOwnerId]}</p>
      </div>
      )
    } 

    return (
      <>
      <MainGraphQL
        API = {API}
        graphqlOperation={graphqlOperation}
        listDLPredictions={listDLPredictions}
        setDataId={setDataId}
        setGetConfirm={setGetConfirm}
        uniqueOwners={uniqueOwners}
        setMasterData={setMasterData}
        setGetConfirm2={setGetConfirm2}
        setUniqueOwners={setUniqueOwners}
        updateDLPrediction={updateDLPrediction}
        masterData={masterData}
        setSendData1={setSendData1}
        createDLPrediction={createDLPrediction}
        sendData1={sendData1}
        sendData2={sendData2}
        toggleBool={toggleBool}
        fileInput={fileInput}
        setFileName={setFileName}
        XLSX={XLSX}
        excelData={excelData}
        setExcelData={setExcelData}
        boolState={boolState}
        fileName={fileName}
        dataId={dataId}
        getConfirm={getConfirm}
        getConfirm2={getConfirm2}
        ComponentClassObject={ComponentClassObject}
        setSendData2={setSendData2}
        forceUpdate={forceUpdate}
        deleteId = {deleteId}
        setDeleteId = {setDeleteId}
        deleteDLPrediction = {deleteDLPrediction}
        />
      <PullDown/>
      <Table
        selectedOwner={uniqueOwners[selectedOwnerId]}
        masterData = {masterData}
        setMasterData = {setMasterData}
        forceUpdate = {forceUpdate}
        />
      {/* <ExcelImport/> */}
      <div style={{textAlign:"right", padding:"20px"}}>
        <button onClick={sendingOtherData} style={{margin:"10px"}}>その他データ確定</button>
        <span>{sendOtherData1},{sendOtherData2}</span>
        <button onClick={fetchOtherData} style={{margin:"10px"}}>その他データ再取得</button>
        <span>{getOtherConfirm}</span>
        <span>{deleteData}</span>
      </div>
      <TableOthers
        otherData={otherData}
        otherDataElement={otherDataElement}
        uniqueOwners={uniqueOwners}
        setOtherData={setOtherData}
        forceUpdate={forceUpdate}
        API = {API}
        graphqlOperation = {graphqlOperation}
        deleteOtherPrediction = {deleteOtherPrediction}
        deleteData = {deleteData}
        setDeleteData = {setDeleteData}
        />
      <ResultWeek
        masterData={masterData}
        otherData={otherData}
        byWeekTable={byWeekTable}
        setByWeekTable={setByWeekTable}
      />
      <ResultPg
        masterData={masterData}
        otherData={otherData}
        byPgTable={byPgTable}
        setByPgTable={setByPgTable}
      />
      </>
    )}

export default App;
