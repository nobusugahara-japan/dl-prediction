export function TableOthers(props) {

  const addRow = () => {
    props.otherData.push(props.otherDataElement);
    props.forceUpdate();
  };

  const editCell = (num, value, category) => {
    props.otherData[num][category] = value;
    // props.setOtherData(props.otherData);
    props.forceUpdate();
  };

  function editCategory(num, value) {
    editCell(num, value, "Category");
    // props.setOtherData(props.otherData);
    props.forceUpdate();
  }

  function editProductGroup(num, value) {
    editCell(num, value, "ProductGroup");
    props.setOtherData(props.otherData);
    props.forceUpdate();
  }

  function editBookingDate(num, value) {
    editCell(num, value, "BookingDate");
    props.setOtherData(props.otherData);
    props.forceUpdate();
  }

  function editBookingValue(num, value) {
    console.log("Value",num, value)
    props.otherData[num].BookingValue = value;
    console.log("otherData", props.otherData[1].BookingValue,props.otherData[2].BookingValue)
    props.otherData[num].BookingExpectedValue = Math.round(
      props.otherData[num]["BookingProbability"] * value * 0.01
    );
    props.otherData[num].ShippingExpectedValue = Math.round(
      props.otherData[num]["ShippingProbability"] * value * 0.01
    );
    props.setOtherData(props.otherData);
    props.forceUpdate();
  }
  // console.log(props.otherData)
  function editBooking(num, value) {
    props.otherData[num].BookingProbability = value;
    props.otherData[num].BookingExpectedValue = Math.round(
      props.otherData[num]["BookingValue"] * value * 0.01
    );
    props.setOtherData(props.otherData);
    props.forceUpdate();
  }

  function editShippingDate(num, value) {
    editCell(num, value, "ShippingDate");
    props.forceUpdate();
    props.setOtherData(props.otherData);
  }

  function editShipping(num, value) {
    // console.log(props.otherData[num].BookingValue);
    props.otherData[num].ShippingProbability = value;
    props.otherData[num].ShippingExpectedValue = Math.round(
      props.otherData[num].BookingValue * value * 0.01
    );
    props.setOtherData(props.otherData);
    props.forceUpdate();
  }

  const ownerSelect = (num, value) => {
    console.log("Owner", value);
    props.otherData[num].Owner = props.uniqueOwners[value];
   props.setOtherData(props.otherData);
   props.forceUpdate();
  };

  const deleteData = (num) => {
    console.log("delete",num)
    console.log("delete2",props.otherData[num]._version)
    const tempOtherData = [];
    for (let i = 0; i < props.otherData.length; i++) {
      if (i !== num) {
        tempOtherData.push(props.otherData[i]);
      } else {
      }
    }
    props.API.graphql(props.graphqlOperation(props.deleteOtherPrediction, 
      {input:{
        id:props.otherData[num].id,
        _version:props.otherData[num]._version,
        // _deleted:props.otherData[num]._deleted,
        // _ttl:props.otherData[num]._ttl,
        }
      })).then(props.setDeleteData("削除済み"))
    props.setOtherData(tempOtherData);
  }

  return (
    <div className="App">
      <div style={{textAlign:"center",paddingBottom:"10px"}}>
        <button onClick={addRow}>行の追加</button>
      </div>
      {/* <p>{props.otherData[1].BookingValue}</p>
      <p>{props.otherData[2].BookingValue}</p> */}
      <div className="App" style={{marginLeft:"40px",marginRight:"40px"}}>
        <table border="1" cellSpacing="0">
          <tr bgcolor="wheat">
            <th>Owner</th>
            <th>OwnerCheck</th>
            <th>Category</th>
            <th>Product Group</th>
            <th>Booking Date</th>
            <th>Booking Value</th>
            <th>Booking Probability</th>
            <th>Expected Booking Value</th>
            <th>Shipping Date</th>
            <th>Shipping Probability</th>
            <th>Expected Shipping Value</th>
            <th>削除</th>
          </tr>
          {props.otherData.map((el, index) => {
            return (
              <tr key={index}>
                <td>
                  <select onChange={(e) => ownerSelect(index, e.target.value)}>
                    {props.uniqueOwners.map((element, key)=>{
                        return(
                            <option value={key}>{element}</option>
                        )
                    })}
                  </select>
                </td>
                <td>{props.otherData[index].Owner}</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editCategory(index, e.target.value)}
                    value={props.otherData[index].Category}
                    placeholder=""
                    autoFocus={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editProductGroup(index, e.target.value)}
                    value={props.otherData[index].ProductGroup}
                    placeholder=""
                    autoFocus={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editBookingDate(index, e.target.value)}
                    value={props.otherData[index].BookingDate}
                    placeholder=""
                    autoFocus={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editBookingValue(index, e.target.value)}
                    value={props.otherData[index].BookingValue}
                    placeholder=""
                    autoFocus={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editBooking(index, e.target.value)}
                    value={props.otherData[index].BookingProbability}
                    placeholder=""
                    autoFocus={true}
                    stype={{width:"50%"}}
                  />
                </td>
                <td>{props.otherData[index].BookingExpectedValue}</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editShippingDate(index, e.target.value)}
                    value={props.otherData[index].ShippingDate}
                    placeholder=""
                    autoFocus={true}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => editShipping(index, e.target.value)}
                    value={props.otherData[index].ShippingProbability}
                  />
                </td>
                <td>{props.otherData[index].ShippingExpectedValue}</td>
                <td>
                  <input
                    type="button"
                    onClick={(e) => deleteData(index)}
                    value="削除"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
