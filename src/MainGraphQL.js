// import { ComponentClassObject } from "@aws-amplify/ui-react";
import {useState} from "react";

export function MainGraphQL(props) {

    const [tempSendData,setTempSendData] = useState()

 // サーバーデータの読み込み--(1) delted trueを外す、(2) uniqueOwnerListを作る
    const fetchData = async () => {
        console.log("fetchData実行確認")
        await props.API.graphql(props.graphqlOperation(props.listDLPredictions))
        .then(values=> {
            const tempMasterData = values.data.listDLPredictions.items
            console.log("tempMasterData",tempMasterData)
            // filterでdeleted trueでないものを取得
            const eliminateDeleteMasterData = tempMasterData.filter((object)=> object._deleted !== true)
            console.log("MasterData in fetch before", eliminateDeleteMasterData)
            props.setMasterData(eliminateDeleteMasterData)
            // uniqueOwnerListを作成
            const tempUniqueOwnerList = [...new Set(eliminateDeleteMasterData.map(obj=>obj.Owner))]
            const tempUniqueOwnerList2 = [...props.uniqueOwners, ...tempUniqueOwnerList]
            const tempUniqueOwnerList3 = [...new Set(tempUniqueOwnerList2)]
            console.log("uniqueOwner in fetch",tempUniqueOwnerList3)
            props.setUniqueOwners(tempUniqueOwnerList3);
            props.setGetConfirm("  取得済み")
            props.forceUpdate()
            console.log("MasterData in fetch after", props.masterData)
    })}

    //データの追加
    function createFunction () {
      const allMasterDataKeys = props.masterData.map((x)=>x.key)
      console.log("keys",allMasterDataKeys)

      props.API.graphql(props.graphqlOperation(props.listDLPredictions))
      .then(values=>{
        console.log("01",values)
        const tempMasterData2 = values.data.listDLPredictions.items
        console.log("02",tempMasterData2)
        const eliminateDeleteMasterData2 = tempMasterData2.filter((object)=> object._deleted !== true)
        console.log("022",eliminateDeleteMasterData2)
        const tempMasterDataKeys = eliminateDeleteMasterData2.map(k=>k.key)
        console.log("03",tempMasterDataKeys)
        const newCreateDataKeys = allMasterDataKeys.filter((x) => tempMasterDataKeys.indexOf(x) === -1)
        console.log("04",newCreateDataKeys)
        const forCreateMasterList = props.masterData.filter(obj=>newCreateDataKeys.includes(obj.key))
        console.log("05",forCreateMasterList)
        for (let k=0; k<forCreateMasterList.length; k++){
          console.log("for文", k)
            if (tempMasterDataKeys.includes(forCreateMasterList[k])){
            } else {
            props.API.graphql(props.graphqlOperation(props.createDLPrediction, 
                {input:{
                  Owner:forCreateMasterList[k]["Owner"],
                  OpportunityID:forCreateMasterList[k]["OpportunityID"],
                  Opportunity:forCreateMasterList[k]["Opportunity"],
                  ProductGroup:forCreateMasterList[k]["ProductGroup"],
                  BookingStatus:forCreateMasterList[k]["BookingStatus"],
                  BookingDate:forCreateMasterList[k]["BookingDate"],
                  BookingValue:forCreateMasterList[k]["BookingValue"],
                  BookingProbability:forCreateMasterList[k]["BookingProbability"],
                  BookingExpectedValue:forCreateMasterList[k]["BookingExpectedValue"],
                  ShippingDate:forCreateMasterList[k]["ShippingDate"],
                  ShippingProbability:forCreateMasterList[k]["ShippingProbability"],
                  ShippingExpectedValue:forCreateMasterList[k]["ShippingExpectedValue"],
                  Comment:forCreateMasterList[k]["Comment"],
                  SamePEinSAP:forCreateMasterList[k]["SamePEinSAP"],
                  key:forCreateMasterList[k]["key"]
                }}))
                .then(()=>setTempSendData("済み"))
              }
          }})
        }
    
    // データのUpdate
    const updateFunction = async ()=>{

      const allMasterDataKeys = props.masterData.map((x)=>x.key)
      console.log("keys",allMasterDataKeys)
      console.log("Probability",props.masterData.map(x=>x.BookingProbability))

        for (let j=0; j < allMasterDataKeys.length; j++){
          const forUpdateBookingProbability = props.masterData.filter((obj) => obj.key === allMasterDataKeys[j])
                                              .map((el) => el.BookingProbability);
          const forUpdateBookingExpectedValue = props.masterData.filter((obj) => obj.key === allMasterDataKeys[j])
                                              .map((el) => el.BookingExpectedValue);
          const forUpdateShippingProbability = props.masterData.filter((obj) => obj.key === allMasterDataKeys[j])
                                              .map((el) => el.ShippingProbability);
          const forUpdateShippingExpectedValue = props.masterData.filter((obj) => obj.key === allMasterDataKeys[j])
                                              .map((el) => el.ShippingExpectedValue);
          console.log("BookProb",forUpdateBookingProbability[0])
          console.log("BookExpected",forUpdateBookingExpectedValue[0])
          console.log("ShipProb",forUpdateShippingProbability[0])
          console.log("ShipExpected",forUpdateShippingExpectedValue[0])
          await props.API.graphql({ 
          query: props.listDLPredictions, 
          variables: 
            {
              filter: {
                key: {
                  eq: allMasterDataKeys[j]
                }
              }
            }
          }).then(values => {
            console.log("アップデート用のFetchData",values);
            console.log("アップデート用のFetchData2",values.data.listDLPredictions.items[0].id);
            console.log("アップデート用のFetchData3",values.data.listDLPredictions.items[0]._version);
            const forUpdateId = values.data.listDLPredictions.items[0].id;
            console.log("updateID", forUpdateId)
            const forUpdateVersion = values.data.listDLPredictions.items[0]._version;

            props.API.graphql({
                query: props.updateDLPrediction,
                variables: {
                    input: {
                        id : forUpdateId,
                        _version : forUpdateVersion,
                        BookingProbability : Number(forUpdateBookingProbability[0]),
                        BookingExpectedValue : Number(forUpdateBookingExpectedValue[0]),
                        ShippingProbability : Number(forUpdateShippingProbability[0]),
                        ShippingExpectedValue : Number(forUpdateShippingExpectedValue[0]),
                    }}}).then(values=>
                      console.log("Update check- prob",values.data.updateDLPrediction.BookingProbability,
                       "value",values.data.updateDLPrediction.BookingExpectedValue)
                      )
                })
      }
    }
            
  function deleteDataFunc(){
      var forDeleteId="";
      var forDeleteVersion="";

      const allMasterDataKeys = props.masterData.map((x)=>x.key)
      console.log("masterDatakeys",allMasterDataKeys)

      props.API.graphql(props.graphqlOperation(props.listDLPredictions))
      .then(values=>{
        const tempDynamoData2 = values.data.listDLPredictions.items
        console.log("01",tempDynamoData2)
        const eliminateDeleteMasterData2 = tempDynamoData2.filter((object)=> object._deleted !== true)
        console.log("02",eliminateDeleteMasterData2)
        const tempDynamoDataKeys = eliminateDeleteMasterData2.map(k=>k.key)
        console.log("03",tempDynamoDataKeys)
        const deleteDataKeys = tempDynamoDataKeys.filter((x) => allMasterDataKeys.indexOf(x) === -1)
        console.log("04",deleteDataKeys)

      for (let n=0; n<deleteDataKeys.length; n++){
       if (deleteDataKeys === undefined){
       } else{
        console.log("削除Key", deleteDataKeys[n])
        props.API.graphql({ 
          query: props.listDLPredictions, 
          variables: 
            {
              filter: {
                key: {
                  eq: deleteDataKeys[n]
                }
              }
            }
          }).then(values => {
            console.log("削除のFetchData",values.data.listDLPredictions.items[0].id);
            forDeleteId = values.data.listDLPredictions.items[0].id;
            forDeleteVersion = values.data.listDLPredictions.items[0]._version;
            console.log("fordeleted",forDeleteId,typeof(forDeleteVersion))
          
              props.API.graphql({
              query: props.deleteDLPrediction, 
              variables:
              {input:{
                id : forDeleteId,
                _version : forDeleteVersion
                }
              }}).then(setTempSendData("済み"))
          })}
      }
    })}

        const excelMasterMerge = () => {
            console.log("excelData", props.excelData)
            const excelKeyNum = props.excelData.map(el=>el.key)
            console.log("元のExcel",excelKeyNum)
            const masterKeyNum = props.masterData.map(el=>el.key)
            console.log("元のMaster",masterKeyNum)

            //excelのkeyでmasterにあるものを選ぶ
            const tempOverlapNum = [...excelKeyNum, ...masterKeyNum].filter(
              (item)=>excelKeyNum.includes(item) && masterKeyNum.includes(item))
            const overlapNum = [...new Set(tempOverlapNum)]
            console.log("masterにある",overlapNum)

            //excelのkeyでmasterにないものを選ぶ
            console.log("excelKeyNum", excelKeyNum)
            const newExcelNum = excelKeyNum.filter((i)=> overlapNum.indexOf(i)=== -1)
            console.log("新しい",newExcelNum)

            //excelと元のmasterにあるkeyのデータオブジェクトを作成
            const overlapMasterData = props.masterData.filter((datum) => overlapNum.includes(datum.key))
            console.log("重複したマスター", overlapMasterData)

            //excelから新たに追加されたkeyのデータオブジェクトを作成
            const newMasterData = props.excelData.filter((datum) => newExcelNum.includes(datum.key))
            console.log("新しいエクセル", newMasterData)

            //元Masterにあったオブジェクトとエクセルから新たに追加されたものを合体
            const updateMasterData = overlapMasterData.concat(newMasterData);
            console.log("Updateされたマスターデータ",updateMasterData)

            //ExpectedValueを計算
            for (let i=0; i<updateMasterData.length; i++){
              updateMasterData[i].BookingExpectedValue = Math.round(updateMasterData[i].BookingProbability * updateMasterData[i].BookingValue * 0.01)
              updateMasterData[i].ShippingExpectedValue = Math.round(updateMasterData[i].ShippingProbability * updateMasterData[i].BookingValue * 0.01)
            }

            props.setMasterData(updateMasterData)

            /// uniqueOwnerListを作成
            const tempUniqueOwnerList = [...new Set(updateMasterData.map(obj=>obj.Owner))]
            const tempUniqueOwnerList2 = [...props.uniqueOwners, ...tempUniqueOwnerList].filter(
              (item) => props.uniqueOwners.includes(item) && tempUniqueOwnerList.includes(item));
            const tempUniqueOwnerList3 = ["担当を選択", "All", ...new Set(tempUniqueOwnerList2)]
            console.log("UUU",tempUniqueOwnerList3)
            props.setUniqueOwners(tempUniqueOwnerList3);

            createFunction()
            deleteDataFunc()
        }

    const handleTriggerReadFile = () => {
        if (props.fileInput.current) {
            props.fileInput.current.click()
        }
      }

    const ExcelImport = () => {

      const handleReadFile = (fileObj) => {
        console.log("Check")
        if (fileObj) {
            props.setFileName(fileObj.name)
          fileObj.arrayBuffer().then((buffer) => {
            const workbook = props.XLSX.read(buffer, { type: 'buffer', bookVBA: true})
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const data = props.XLSX.utils.sheet_to_json(worksheet)
            console.log("1",data)
            for (let i=0; i<data.length; i++) {
              data[i].key = data[i]["OpportunityID"]+"-"+data[i]["BookingDate"];}
            setTimeout(()=>100)
            props.setExcelData(data)
            props.forceUpdate()
          })
        }
      }
      return(
      <div className="App" style={{ paddingTop: '10px' }}>
        <p style={{ paddingBottom: '1px' }}>Excelアップロード</p>
        <button onClick={() => handleTriggerReadFile()}>ファイル選択</button>
        {!!props.fileName && <span>  {props.fileName}</span>}
        <form style={{ display: 'none' }}>
          <input
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            ref={props.fileInput}
            onChange={(e) => {
              e.preventDefault()
              handleReadFile(e.currentTarget.files[0])
            }}
          />
        </form>
      </div>
      )
    }


    return(
    <>
      <div style={{textAlign:"right", padding:"20px"}}>
        <button onClick={props.toggleBool} style={{margin:"10px"}}>設定の表示</button>
      </div>
      <div style={{textAlign:"right", padding:"20px"}}>
        <button onClick={fetchData} style={{margin:"10px"}}>データ再取得</button>
        <span>{props.getConfirm2}</span>
        <button onClick={updateFunction} style={{margin:"10px"}}>データアップデート</button>
      </div>
            <div style={{padding: '20px',textAlign: "center"}}>
            {props.boolState && (
            <>
            <p>前回までのデータを取得</p>
             <button onClick={fetchData}>前回データ取得</button>
             <span>{props.getConfirm}</span>
            <ExcelImport/>
            <div style={{padding:"20px"}}>
                <p> 前回と今回のデータの結合 </p>
                <button onClick={excelMasterMerge} style={{paddingRight:"10px"}}>データ結合</button>
            </div>
            <button onClick={createFunction} style={{margin:"10px"}}>データ追加</button>
            <button onClick={deleteDataFunc} style={{margin:"10px"}}>データ削除</button>
            <span>{tempSendData}</span>
            </>
            )}
        </div>
    </>
    )
}