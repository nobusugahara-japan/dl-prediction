import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type OtherPredictionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DLPredictionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerOtherPrediction = {
  readonly id: string;
  readonly Owner?: string | null;
  readonly Category?: string | null;
  readonly ProductGroup?: string | null;
  readonly BookingDate?: string | null;
  readonly BookingValue?: number | null;
  readonly BookingProbability?: number | null;
  readonly BookingExpectedValue?: number | null;
  readonly ShippingProbability?: number | null;
  readonly ShippingExpectedValue?: string | null;
  readonly ShippingDate?: string | null;
  readonly key?: string | null;
  readonly Comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOtherPrediction = {
  readonly id: string;
  readonly Owner?: string | null;
  readonly Category?: string | null;
  readonly ProductGroup?: string | null;
  readonly BookingDate?: string | null;
  readonly BookingValue?: number | null;
  readonly BookingProbability?: number | null;
  readonly BookingExpectedValue?: number | null;
  readonly ShippingProbability?: number | null;
  readonly ShippingExpectedValue?: string | null;
  readonly ShippingDate?: string | null;
  readonly key?: string | null;
  readonly Comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OtherPrediction = LazyLoading extends LazyLoadingDisabled ? EagerOtherPrediction : LazyOtherPrediction

export declare const OtherPrediction: (new (init: ModelInit<OtherPrediction, OtherPredictionMetaData>) => OtherPrediction) & {
  copyOf(source: OtherPrediction, mutator: (draft: MutableModel<OtherPrediction, OtherPredictionMetaData>) => MutableModel<OtherPrediction, OtherPredictionMetaData> | void): OtherPrediction;
}

type EagerDLPrediction = {
  readonly id: string;
  readonly Owner?: string | null;
  readonly OpportunityID?: string | null;
  readonly Opportunity?: string | null;
  readonly ProductGroup?: string | null;
  readonly BookingStatus?: string | null;
  readonly BookingDate?: string | null;
  readonly BookingValue?: number | null;
  readonly BookingProbability?: number | null;
  readonly BookingExpectedValue?: number | null;
  readonly Comment?: string | null;
  readonly SamePEinSAP?: boolean | null;
  readonly key?: string | null;
  readonly ShippingProbability?: number | null;
  readonly ShippingExpectedValue?: number | null;
  readonly ShippingDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDLPrediction = {
  readonly id: string;
  readonly Owner?: string | null;
  readonly OpportunityID?: string | null;
  readonly Opportunity?: string | null;
  readonly ProductGroup?: string | null;
  readonly BookingStatus?: string | null;
  readonly BookingDate?: string | null;
  readonly BookingValue?: number | null;
  readonly BookingProbability?: number | null;
  readonly BookingExpectedValue?: number | null;
  readonly Comment?: string | null;
  readonly SamePEinSAP?: boolean | null;
  readonly key?: string | null;
  readonly ShippingProbability?: number | null;
  readonly ShippingExpectedValue?: number | null;
  readonly ShippingDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DLPrediction = LazyLoading extends LazyLoadingDisabled ? EagerDLPrediction : LazyDLPrediction

export declare const DLPrediction: (new (init: ModelInit<DLPrediction, DLPredictionMetaData>) => DLPrediction) & {
  copyOf(source: DLPrediction, mutator: (draft: MutableModel<DLPrediction, DLPredictionMetaData>) => MutableModel<DLPrediction, DLPredictionMetaData> | void): DLPrediction;
}