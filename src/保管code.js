[
    {
    key:[],
    Owner :[],
    Opportunity:[],
    OpportunityID:[],
    BookingStatus :[],
    BookingValue:[],
    ShippngDate :[],
    BookingProbability:[],
    BookingExpectedValue:[],
    ShippingProbability:[],
    ShippingExpectedValue:[]
    }
]

const updateDataFunc = async () => {
    for (let i=0; i < props.masterData.length; i++){
      if (props.masterData[i].id){
        console.log("✔️", i,props.masterData[i].id,props.masterData[i].BookingProbability) 
        await props.API.graphql({
            query: props.updateDLPrediction,
            variables: {
                input: {
                    id : forUpdateId,
                    _version : forUpdateVersion,
                    BookingProbability : props.masterData[i].BookingProbability,
                    BookingExpectedValue : props.masterData[i].BookingExpectedValue
                }}}).then(values=>console.log("Update check",values))
            }}}