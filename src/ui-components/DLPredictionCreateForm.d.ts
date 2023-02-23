/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DLPredictionCreateFormInputValues = {
    Owner?: string;
    OpportunityID?: string;
    Opportunity?: string;
    ProductGroup?: string;
    BookingStatus?: string;
    BookingDate?: string;
    BookingValue?: number;
    BookingProbability?: number;
    BookingExpectedValue?: number;
    Comment?: string;
    SamePEinSAP?: boolean;
    key?: string;
    ShippingProbability?: number;
    ShippingExpectedValue?: number;
    ShippingDate?: string;
};
export declare type DLPredictionCreateFormValidationValues = {
    Owner?: ValidationFunction<string>;
    OpportunityID?: ValidationFunction<string>;
    Opportunity?: ValidationFunction<string>;
    ProductGroup?: ValidationFunction<string>;
    BookingStatus?: ValidationFunction<string>;
    BookingDate?: ValidationFunction<string>;
    BookingValue?: ValidationFunction<number>;
    BookingProbability?: ValidationFunction<number>;
    BookingExpectedValue?: ValidationFunction<number>;
    Comment?: ValidationFunction<string>;
    SamePEinSAP?: ValidationFunction<boolean>;
    key?: ValidationFunction<string>;
    ShippingProbability?: ValidationFunction<number>;
    ShippingExpectedValue?: ValidationFunction<number>;
    ShippingDate?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DLPredictionCreateFormOverridesProps = {
    DLPredictionCreateFormGrid?: FormProps<GridProps>;
    Owner?: FormProps<TextFieldProps>;
    OpportunityID?: FormProps<TextFieldProps>;
    Opportunity?: FormProps<TextFieldProps>;
    ProductGroup?: FormProps<TextFieldProps>;
    BookingStatus?: FormProps<TextFieldProps>;
    BookingDate?: FormProps<TextFieldProps>;
    BookingValue?: FormProps<TextFieldProps>;
    BookingProbability?: FormProps<TextFieldProps>;
    BookingExpectedValue?: FormProps<TextFieldProps>;
    Comment?: FormProps<TextFieldProps>;
    SamePEinSAP?: FormProps<SwitchFieldProps>;
    key?: FormProps<TextFieldProps>;
    ShippingProbability?: FormProps<TextFieldProps>;
    ShippingExpectedValue?: FormProps<TextFieldProps>;
    ShippingDate?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DLPredictionCreateFormProps = React.PropsWithChildren<{
    overrides?: DLPredictionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DLPredictionCreateFormInputValues) => DLPredictionCreateFormInputValues;
    onSuccess?: (fields: DLPredictionCreateFormInputValues) => void;
    onError?: (fields: DLPredictionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DLPredictionCreateFormInputValues) => DLPredictionCreateFormInputValues;
    onValidate?: DLPredictionCreateFormValidationValues;
}>;
export default function DLPredictionCreateForm(props: DLPredictionCreateFormProps): React.ReactElement;
