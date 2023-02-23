import {useState} from "react";

export function ResultPg(props) {

  function getPgTable(){

    const makeWeekNum = (data,column) => {
        const splitDate = data[column].split("/");
        const splitDate2= new Date(splitDate[0], splitDate[1], splitDate[2]);
        const oneJan = new Date(splitDate2.getFullYear(), 0, 1);
        const numberOfDays = Math.floor((splitDate2 - oneJan) / (24 * 60 * 60 * 1000));
        const weekNum = Math.ceil((splitDate2.getDay() + 1 + numberOfDays) / 7);
        return weekNum
    }

    const forResultData = [];
    if (props.masterData.length!==0){
      for (let i = 0; i < props.masterData.length; i++) {
          console.log(i)
          forResultData.push({
              ProductGroup : props.masterData[i].ProductGroup, 
              BookingExpectedValue : props.masterData[i].BookingExpectedValue, 
              WeekNum: makeWeekNum(props.masterData[i], "BookingDate")
              })
          }
      }

      if (props.otherData[0].BookingDate!==null){
        for (let i = 0; i < props.otherData.length; i++) {
            console.log(i)
            forResultData.push({
                ProductGroup : props.otherData[i].ProductGroup, 
                BookingExpectedValue : props.otherData[i].BookingExpectedValue, 
                WeekNum: makeWeekNum(props.otherData[i], "BookingDate")
                })
            }
        }
        
    console.log("ResultData",forResultData)
    const pgList = ["FRS", "HHS", "SIS", "SE"];
    const byPgList = [0, 0, 0, 0];
    
    for (let i = 0; i < forResultData.length; i++) {
        for (let j = 0; j < pgList.length; j++) {
        if (forResultData[i].ProductGroup === pgList[j]) {
            byPgList[j] += forResultData[i].BookingExpectedValue;
        }
        }
    }
    console.log(byPgList);
      
        const byPgTable = [];
        for (let l = 0; l < byPgList.length; l++) {
          byPgTable.push({
            ProductGroup: pgList[l],
            BookingValue: byPgList[l]
          });
        }
        console.log(byPgTable);
        props.setByPgTable(byPgTable)
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <input 
                    type="button" 
                    value="ProductGroup 結果表示" 
                    style={{margin:"30px"}}
                    onClick={getPgTable}/>
            </div>
             <div className="App" style={{paddingBottom:"20px"}}>
              <table border="1" cellSpacing="0" style={{margin:"auto"}}>
                <tr bgcolor="lightgreen">
                  <th>Product Group</th>
                  <th>Booking Value</th>
                </tr>
                {props.byPgTable.map((element,index)=>{
                  return(
                      <tr key={index}>
                          <td>{element.ProductGroup}</td>
                          <td>{element.BookingValue}</td>
                      </tr>
                    )
                  })}
              </table>
            </div>
          </>
    )
}