/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOtherPrediction = /* GraphQL */ `
  query GetOtherPrediction($id: ID!) {
    getOtherPrediction(id: $id) {
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
export const listOtherPredictions = /* GraphQL */ `
  query ListOtherPredictions(
    $filter: ModelOtherPredictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOtherPredictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOtherPredictions = /* GraphQL */ `
  query SyncOtherPredictions(
    $filter: ModelOtherPredictionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOtherPredictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDLPrediction = /* GraphQL */ `
  query GetDLPrediction($id: ID!) {
    getDLPrediction(id: $id) {
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
export const listDLPredictions = /* GraphQL */ `
  query ListDLPredictions(
    $filter: ModelDLPredictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDLPredictions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDLPredictions = /* GraphQL */ `
  query SyncDLPredictions(
    $filter: ModelDLPredictionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDLPredictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
