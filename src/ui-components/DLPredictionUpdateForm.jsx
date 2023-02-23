/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { DLPrediction } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function DLPredictionUpdateForm(props) {
  const {
    id,
    dLPrediction,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Owner: undefined,
    OpportunityID: undefined,
    Opportunity: undefined,
    ProductGroup: undefined,
    BookingStatus: undefined,
    BookingDate: undefined,
    BookingValue: undefined,
    BookingProbability: undefined,
    BookingExpectedValue: undefined,
    Comment: undefined,
    SamePEinSAP: false,
    key: undefined,
    ShippingProbability: undefined,
    ShippingExpectedValue: undefined,
    ShippingDate: undefined,
  };
  const [Owner, setOwner] = React.useState(initialValues.Owner);
  const [OpportunityID, setOpportunityID] = React.useState(
    initialValues.OpportunityID
  );
  const [Opportunity, setOpportunity] = React.useState(
    initialValues.Opportunity
  );
  const [ProductGroup, setProductGroup] = React.useState(
    initialValues.ProductGroup
  );
  const [BookingStatus, setBookingStatus] = React.useState(
    initialValues.BookingStatus
  );
  const [BookingDate, setBookingDate] = React.useState(
    initialValues.BookingDate
  );
  const [BookingValue, setBookingValue] = React.useState(
    initialValues.BookingValue
  );
  const [BookingProbability, setBookingProbability] = React.useState(
    initialValues.BookingProbability
  );
  const [BookingExpectedValue, setBookingExpectedValue] = React.useState(
    initialValues.BookingExpectedValue
  );
  const [Comment, setComment] = React.useState(initialValues.Comment);
  const [SamePEinSAP, setSamePEinSAP] = React.useState(
    initialValues.SamePEinSAP
  );
  const [key, setKey] = React.useState(initialValues.key);
  const [ShippingProbability, setShippingProbability] = React.useState(
    initialValues.ShippingProbability
  );
  const [ShippingExpectedValue, setShippingExpectedValue] = React.useState(
    initialValues.ShippingExpectedValue
  );
  const [ShippingDate, setShippingDate] = React.useState(
    initialValues.ShippingDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...dLPredictionRecord };
    setOwner(cleanValues.Owner);
    setOpportunityID(cleanValues.OpportunityID);
    setOpportunity(cleanValues.Opportunity);
    setProductGroup(cleanValues.ProductGroup);
    setBookingStatus(cleanValues.BookingStatus);
    setBookingDate(cleanValues.BookingDate);
    setBookingValue(cleanValues.BookingValue);
    setBookingProbability(cleanValues.BookingProbability);
    setBookingExpectedValue(cleanValues.BookingExpectedValue);
    setComment(cleanValues.Comment);
    setSamePEinSAP(cleanValues.SamePEinSAP);
    setKey(cleanValues.key);
    setShippingProbability(cleanValues.ShippingProbability);
    setShippingExpectedValue(cleanValues.ShippingExpectedValue);
    setShippingDate(cleanValues.ShippingDate);
    setErrors({});
  };
  const [dLPredictionRecord, setDLPredictionRecord] =
    React.useState(dLPrediction);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(DLPrediction, id)
        : dLPrediction;
      setDLPredictionRecord(record);
    };
    queryData();
  }, [id, dLPrediction]);
  React.useEffect(resetStateValues, [dLPredictionRecord]);
  const validations = {
    Owner: [],
    OpportunityID: [],
    Opportunity: [],
    ProductGroup: [],
    BookingStatus: [],
    BookingDate: [],
    BookingValue: [],
    BookingProbability: [],
    BookingExpectedValue: [],
    Comment: [],
    SamePEinSAP: [],
    key: [],
    ShippingProbability: [],
    ShippingExpectedValue: [],
    ShippingDate: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Owner,
          OpportunityID,
          Opportunity,
          ProductGroup,
          BookingStatus,
          BookingDate,
          BookingValue,
          BookingProbability,
          BookingExpectedValue,
          Comment,
          SamePEinSAP,
          key,
          ShippingProbability,
          ShippingExpectedValue,
          ShippingDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            DLPrediction.copyOf(dLPredictionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "DLPredictionUpdateForm")}
    >
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner: value,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.Owner ?? value;
          }
          if (errors.Owner?.hasError) {
            runValidationTasks("Owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("Owner", Owner)}
        errorMessage={errors.Owner?.errorMessage}
        hasError={errors.Owner?.hasError}
        {...getOverrideProps(overrides, "Owner")}
      ></TextField>
      <TextField
        label="Opportunity id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={OpportunityID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID: value,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.OpportunityID ?? value;
          }
          if (errors.OpportunityID?.hasError) {
            runValidationTasks("OpportunityID", value);
          }
          setOpportunityID(value);
        }}
        onBlur={() => runValidationTasks("OpportunityID", OpportunityID)}
        errorMessage={errors.OpportunityID?.errorMessage}
        hasError={errors.OpportunityID?.hasError}
        {...getOverrideProps(overrides, "OpportunityID")}
      ></TextField>
      <TextField
        label="Opportunity"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Opportunity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity: value,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.Opportunity ?? value;
          }
          if (errors.Opportunity?.hasError) {
            runValidationTasks("Opportunity", value);
          }
          setOpportunity(value);
        }}
        onBlur={() => runValidationTasks("Opportunity", Opportunity)}
        errorMessage={errors.Opportunity?.errorMessage}
        hasError={errors.Opportunity?.hasError}
        {...getOverrideProps(overrides, "Opportunity")}
      ></TextField>
      <TextField
        label="Product group"
        isRequired={false}
        isReadOnly={false}
        defaultValue={ProductGroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup: value,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.ProductGroup ?? value;
          }
          if (errors.ProductGroup?.hasError) {
            runValidationTasks("ProductGroup", value);
          }
          setProductGroup(value);
        }}
        onBlur={() => runValidationTasks("ProductGroup", ProductGroup)}
        errorMessage={errors.ProductGroup?.errorMessage}
        hasError={errors.ProductGroup?.hasError}
        {...getOverrideProps(overrides, "ProductGroup")}
      ></TextField>
      <TextField
        label="Booking status"
        isRequired={false}
        isReadOnly={false}
        defaultValue={BookingStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus: value,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.BookingStatus ?? value;
          }
          if (errors.BookingStatus?.hasError) {
            runValidationTasks("BookingStatus", value);
          }
          setBookingStatus(value);
        }}
        onBlur={() => runValidationTasks("BookingStatus", BookingStatus)}
        errorMessage={errors.BookingStatus?.errorMessage}
        hasError={errors.BookingStatus?.hasError}
        {...getOverrideProps(overrides, "BookingStatus")}
      ></TextField>
      <TextField
        label="Booking date"
        isRequired={false}
        isReadOnly={false}
        defaultValue={BookingDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate: value,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.BookingDate ?? value;
          }
          if (errors.BookingDate?.hasError) {
            runValidationTasks("BookingDate", value);
          }
          setBookingDate(value);
        }}
        onBlur={() => runValidationTasks("BookingDate", BookingDate)}
        errorMessage={errors.BookingDate?.errorMessage}
        hasError={errors.BookingDate?.hasError}
        {...getOverrideProps(overrides, "BookingDate")}
      ></TextField>
      <TextField
        label="Booking value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={BookingValue}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              BookingValue: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue: value,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.BookingValue ?? value;
          }
          if (errors.BookingValue?.hasError) {
            runValidationTasks("BookingValue", value);
          }
          setBookingValue(value);
        }}
        onBlur={() => runValidationTasks("BookingValue", BookingValue)}
        errorMessage={errors.BookingValue?.errorMessage}
        hasError={errors.BookingValue?.hasError}
        {...getOverrideProps(overrides, "BookingValue")}
      ></TextField>
      <TextField
        label="Booking probability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={BookingProbability}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              BookingProbability: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability: value,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.BookingProbability ?? value;
          }
          if (errors.BookingProbability?.hasError) {
            runValidationTasks("BookingProbability", value);
          }
          setBookingProbability(value);
        }}
        onBlur={() =>
          runValidationTasks("BookingProbability", BookingProbability)
        }
        errorMessage={errors.BookingProbability?.errorMessage}
        hasError={errors.BookingProbability?.hasError}
        {...getOverrideProps(overrides, "BookingProbability")}
      ></TextField>
      <TextField
        label="Booking expected value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={BookingExpectedValue}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              BookingExpectedValue: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue: value,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.BookingExpectedValue ?? value;
          }
          if (errors.BookingExpectedValue?.hasError) {
            runValidationTasks("BookingExpectedValue", value);
          }
          setBookingExpectedValue(value);
        }}
        onBlur={() =>
          runValidationTasks("BookingExpectedValue", BookingExpectedValue)
        }
        errorMessage={errors.BookingExpectedValue?.errorMessage}
        hasError={errors.BookingExpectedValue?.hasError}
        {...getOverrideProps(overrides, "BookingExpectedValue")}
      ></TextField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment: value,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.Comment ?? value;
          }
          if (errors.Comment?.hasError) {
            runValidationTasks("Comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("Comment", Comment)}
        errorMessage={errors.Comment?.errorMessage}
        hasError={errors.Comment?.hasError}
        {...getOverrideProps(overrides, "Comment")}
      ></TextField>
      <SwitchField
        label="Same p ein sap"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SamePEinSAP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP: value,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.SamePEinSAP ?? value;
          }
          if (errors.SamePEinSAP?.hasError) {
            runValidationTasks("SamePEinSAP", value);
          }
          setSamePEinSAP(value);
        }}
        onBlur={() => runValidationTasks("SamePEinSAP", SamePEinSAP)}
        errorMessage={errors.SamePEinSAP?.errorMessage}
        hasError={errors.SamePEinSAP?.hasError}
        {...getOverrideProps(overrides, "SamePEinSAP")}
      ></SwitchField>
      <TextField
        label="Key"
        isRequired={false}
        isReadOnly={false}
        defaultValue={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key: value,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
      <TextField
        label="Shipping probability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={ShippingProbability}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              ShippingProbability: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability: value,
              ShippingExpectedValue,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.ShippingProbability ?? value;
          }
          if (errors.ShippingProbability?.hasError) {
            runValidationTasks("ShippingProbability", value);
          }
          setShippingProbability(value);
        }}
        onBlur={() =>
          runValidationTasks("ShippingProbability", ShippingProbability)
        }
        errorMessage={errors.ShippingProbability?.errorMessage}
        hasError={errors.ShippingProbability?.hasError}
        {...getOverrideProps(overrides, "ShippingProbability")}
      ></TextField>
      <TextField
        label="Shipping expected value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={ShippingExpectedValue}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              ShippingExpectedValue: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue: value,
              ShippingDate,
            };
            const result = onChange(modelFields);
            value = result?.ShippingExpectedValue ?? value;
          }
          if (errors.ShippingExpectedValue?.hasError) {
            runValidationTasks("ShippingExpectedValue", value);
          }
          setShippingExpectedValue(value);
        }}
        onBlur={() =>
          runValidationTasks("ShippingExpectedValue", ShippingExpectedValue)
        }
        errorMessage={errors.ShippingExpectedValue?.errorMessage}
        hasError={errors.ShippingExpectedValue?.hasError}
        {...getOverrideProps(overrides, "ShippingExpectedValue")}
      ></TextField>
      <TextField
        label="Shipping date"
        isRequired={false}
        isReadOnly={false}
        defaultValue={ShippingDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              OpportunityID,
              Opportunity,
              ProductGroup,
              BookingStatus,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              Comment,
              SamePEinSAP,
              key,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate: value,
            };
            const result = onChange(modelFields);
            value = result?.ShippingDate ?? value;
          }
          if (errors.ShippingDate?.hasError) {
            runValidationTasks("ShippingDate", value);
          }
          setShippingDate(value);
        }}
        onBlur={() => runValidationTasks("ShippingDate", ShippingDate)}
        errorMessage={errors.ShippingDate?.errorMessage}
        hasError={errors.ShippingDate?.hasError}
        {...getOverrideProps(overrides, "ShippingDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
