
export function ResultWeek(props) {

    function getResult(){

        console.log("まずここ")
        console.log(props.masterData[0]["BookingDate"])

        const makeWeekNum = (data,column) => {
            const splitDate = data[column].split("/");
            const splitDate2= new Date(splitDate[0], splitDate[1], splitDate[2]);
            const oneJan = new Date(splitDate2.getFullYear(), 0, 1);
            const numberOfDays = Math.floor((splitDate2 - oneJan) / (24 * 60 * 60 * 1000));
            const weekNum = Math.ceil((splitDate2.getDay() + 1 + numberOfDays) / 7);
            return weekNum
        }

        // const testdata = makeWeekNum(props.masterData[0], "BookingDate")
        // console.log("test",props.masterData[0].ProductGroup)
        console.log(props.masterData.length)

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
          console.log(forResultData)
          }

        const arrWeek = forResultData.map((el) => el.WeekNum);
        console.log(arrWeek);
        const minNum = arrWeek.reduce(function (a, b) {
          return Math.min(a, b);
        });
        const maxNum = arrWeek.reduce(function (a, b) {
          return Math.max(a, b);
        });
        console.log(minNum);
        const wkNums = [];
        for (let i = minNum; i <= maxNum; i++) {
          wkNums.push(i);
        }
      
        const byWeekList = [];
        for (let i = minNum; i <= maxNum; i++) {
          byWeekList.push(0);
        }
      
        for (let i = 0; i < forResultData.length; i++) {
          for (let j = 0; j < wkNums.length; j++) {
            if (forResultData[i].WeekNum === wkNums[j]) {
              byWeekList[j] += forResultData[i].BookingExpectedValue;
            }
          }
        }
        console.log(byWeekList);

        const byWeekTable = [];
        for (let k = 0; k < byWeekList.length; k++) {
            byWeekTable.push({
                Week: wkNums[k],
                BookingValue: byWeekList[k]
            });
        }
        console.log("WEEK",byWeekTable);

        props.setByWeekTable(byWeekTable)
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <input 
                    type="button" 
                    value="No of Week 結果表示" 
                    style={{margin:"30px"}}
                    onClick={getResult}/>
            </div>
             <div className="App">
              <table border="1" cellSpacing="0" style={{margin:"auto"}}>
                <tr bgcolor="lightgreen">
                  <th>Num of Week</th>
                  <th>Booking Value</th>
                </tr>
                {props.byWeekTable.map((element,index)=>{
                  return(
                      <tr key={index}>
                          <td>{element.Week}</td>
                          <td>{element.BookingValue}</td>
                      </tr>
                    )
                  })}
              </table>
            </div>
          </>
    )
}



  