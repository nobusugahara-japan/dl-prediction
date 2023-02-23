/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OtherPredictionCreateFormInputValues = {
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
export declare type OtherPredictionCreateFormValidationValues = {
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
export declare type OtherPredictionCreateFormOverridesProps = {
    OtherPredictionCreateFormGrid?: FormProps<GridProps>;
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
export declare type OtherPredictionCreateFormProps = React.PropsWithChildren<{
    overrides?: OtherPredictionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OtherPredictionCreateFormInputValues) => OtherPredictionCreateFormInputValues;
    onSuccess?: (fields: OtherPredictionCreateFormInputValues) => void;
    onError?: (fields: OtherPredictionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OtherPredictionCreateFormInputValues) => OtherPredictionCreateFormInputValues;
    onValidate?: OtherPredictionCreateFormValidationValues;
}>;
export default function OtherPredictionCreateForm(props: OtherPredictionCreateFormProps): React.ReactElement;
