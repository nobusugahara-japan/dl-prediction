/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOtherPrediction = /* GraphQL */ `
  mutation CreateOtherPrediction(
    $input: CreateOtherPredictionInput!
    $condition: ModelOtherPredictionConditionInput
  ) {
    createOtherPrediction(input: $input, condition: $condition) {
      id
      Owner
      Category
      ProductGroup
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      key
      Comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOtherPrediction = /* GraphQL */ `
  mutation UpdateOtherPrediction(
    $input: UpdateOtherPredictionInput!
    $condition: ModelOtherPredictionConditionInput
  ) {
    updateOtherPrediction(input: $input, condition: $condition) {
      id
      Owner
      Category
      ProductGroup
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      key
      Comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOtherPrediction = /* GraphQL */ `
  mutation DeleteOtherPrediction(
    $input: DeleteOtherPredictionInput!
    $condition: ModelOtherPredictionConditionInput
  ) {
    deleteOtherPrediction(input: $input, condition: $condition) {
      id
      Owner
      Category
      ProductGroup
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      key
      Comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDLPrediction = /* GraphQL */ `
  mutation CreateDLPrediction(
    $input: CreateDLPredictionInput!
    $condition: ModelDLPredictionConditionInput
  ) {
    createDLPrediction(input: $input, condition: $condition) {
      id
      Owner
      OpportunityID
      Opportunity
      ProductGroup
      BookingStatus
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      Comment
      SamePEinSAP
      key
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDLPrediction = /* GraphQL */ `
  mutation UpdateDLPrediction(
    $input: UpdateDLPredictionInput!
    $condition: ModelDLPredictionConditionInput
  ) {
    updateDLPrediction(input: $input, condition: $condition) {
      id
      Owner
      OpportunityID
      Opportunity
      ProductGroup
      BookingStatus
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      Comment
      SamePEinSAP
      key
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDLPrediction = /* GraphQL */ `
  mutation DeleteDLPrediction(
    $input: DeleteDLPredictionInput!
    $condition: ModelDLPredictionConditionInput
  ) {
    deleteDLPrediction(input: $input, condition: $condition) {
      id
      Owner
      OpportunityID
      Opportunity
      ProductGroup
      BookingStatus
      BookingDate
      BookingValue
      BookingProbability
      BookingExpectedValue
      Comment
      SamePEinSAP
      key
      ShippingProbability
      ShippingExpectedValue
      ShippingDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
