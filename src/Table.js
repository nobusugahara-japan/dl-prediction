
export function Table(props) {

    function editBooking (num, value) {
        props.masterData[num].BookingProbability = value;
        props.masterData[num].BookingExpectedValue = Math.round(props.masterData[num]["BookingValue"] *  value * 0.01)
        props.forceUpdate()
        }

    function editShipping (num, value) {
        props.masterData[num].ShippingProbability = value;
        props.masterData[num].ShippingExpectedValue = Math.round(props.masterData[num]["BookingValue"] *  value * 0.01)
        props.forceUpdate()
          }

    return (
      <div className="App" style={{marginLeft:"40px",marginRight:"80px"}}>
        <table border="1" cellSpacing="0">
          <tr key={props.masterData.key} bgcolor="skyblue">
            <th>Owner</th>
            <th>Opportunity</th>
            <th>Opportunity ID</th>
            <th>Product Group</th>
            <th>Booking Status</th>
            <th>Booking Date</th>
            <th>Booking Value</th>
            <th>Booking Probability</th>
            <th>Expected Booking Value</th>
            <th>Shipping Date</th>
            <th>Shipping Probability</th>
            <th>Expected Shipping Value</th>
            <th>Key</th>
  
          </tr>
          {props.masterData.map((el, index) => {
            const handleChange = () => {
              if ("All"===props.selectedOwner){
                return "visible"
              }
              else if (el["Owner"]===props.selectedOwner||"All"===props.selectedOwner){
                return "visible"
              } else {
                return "collapse"
                }
            };
            return (
              <tr key={index} style={{ visibility: handleChange() }}>
                <td>{el["Owner"]}</td>
                <td>{el["Opportunity"]}</td>
                <td>{el["OpportunityID"]}</td>
                <td>{el["ProductGroup"]}</td>
                <td>{el["BookingStatus"]}</td>
                <td>{el["BookingDate"]}</td>
                <td>{el["BookingValue"]}</td>
                <td>
                  <input
                    type="text"
                    onChange={e => editBooking(index, e.target.value)}
                    value={props.masterData[index].BookingProbability}
                    placeholder=""
                    autoFocus={true}/>
                </td>
                <td>{props.masterData[index].BookingExpectedValue}</td>
                <td>{el["ShippingDate"]}</td>
                <td>
                  <input
                    type="text"
                    onChange = {(e)=> editShipping(index, e.target.value)}
                    value={props.masterData[index].ShippingProbability} />
                </td>
                <td>{props.masterData[index].ShippingExpectedValue}</td>
                <td>{props.masterData[index].key}</td>
              </tr>
            );
          }
          )}
        </table>
      </div>
    );
  }