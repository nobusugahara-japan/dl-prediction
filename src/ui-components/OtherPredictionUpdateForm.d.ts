/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { OtherPrediction } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OtherPredictionUpdateFormInputValues = {
    Owner?: string;
    Category?: string;
    ProductGroup?: string;
    BookingDate?: string;
    BookingValue?: number;
    BookingProbability?: number;
    BookingExpectedValue?: number;
    ShippingProbability?: number;
    ShippingExpectedValue?: string;
    ShippingDate?: string;
    key?: string;
    Comment?: string;
};
export declare type OtherPredictionUpdateFormValidationValues = {
    Owner?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    ProductGroup?: ValidationFunction<string>;
    BookingDate?: ValidationFunction<string>;
    BookingValue?: ValidationFunction<number>;
    BookingProbability?: ValidationFunction<number>;
    BookingExpectedValue?: ValidationFunction<number>;
    ShippingProbability?: ValidationFunction<number>;
    ShippingExpectedValue?: ValidationFunction<string>;
    ShippingDate?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
    Comment?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OtherPredictionUpdateFormOverridesProps = {
    OtherPredictionUpdateFormGrid?: FormProps<GridProps>;
    Owner?: FormProps<TextFieldProps>;
    Category?: FormProps<TextFieldProps>;
    ProductGroup?: FormProps<TextFieldProps>;
    BookingDate?: FormProps<TextFieldProps>;
    BookingValue?: FormProps<TextFieldProps>;
    BookingProbability?: FormProps<TextFieldProps>;
    BookingExpectedValue?: FormProps<TextFieldProps>;
    ShippingProbability?: FormProps<TextFieldProps>;
    ShippingExpectedValue?: FormProps<TextFieldProps>;
    ShippingDate?: FormProps<TextFieldProps>;
    key?: FormProps<TextFieldProps>;
    Comment?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OtherPredictionUpdateFormProps = React.PropsWithChildren<{
    overrides?: OtherPredictionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    otherPrediction?: OtherPrediction;
    onSubmit?: (fields: OtherPredictionUpdateFormInputValues) => OtherPredictionUpdateFormInputValues;
    onSuccess?: (fields: OtherPredictionUpdateFormInputValues) => void;
    onError?: (fields: OtherPredictionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OtherPredictionUpdateFormInputValues) => OtherPredictionUpdateFormInputValues;
    onValidate?: OtherPredictionUpdateFormValidationValues;
}>;
export default function OtherPredictionUpdateForm(props: OtherPredictionUpdateFormProps): React.ReactElement;
