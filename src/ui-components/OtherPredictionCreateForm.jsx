/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { OtherPrediction } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function OtherPredictionCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    Category: undefined,
    ProductGroup: undefined,
    BookingDate: undefined,
    BookingValue: undefined,
    BookingProbability: undefined,
    BookingExpectedValue: undefined,
    ShippingProbability: undefined,
    ShippingExpectedValue: undefined,
    ShippingDate: undefined,
    key: undefined,
    Comment: undefined,
  };
  const [Owner, setOwner] = React.useState(initialValues.Owner);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [ProductGroup, setProductGroup] = React.useState(
    initialValues.ProductGroup
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
  const [ShippingProbability, setShippingProbability] = React.useState(
    initialValues.ShippingProbability
  );
  const [ShippingExpectedValue, setShippingExpectedValue] = React.useState(
    initialValues.ShippingExpectedValue
  );
  const [ShippingDate, setShippingDate] = React.useState(
    initialValues.ShippingDate
  );
  const [key, setKey] = React.useState(initialValues.key);
  const [Comment, setComment] = React.useState(initialValues.Comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwner(initialValues.Owner);
    setCategory(initialValues.Category);
    setProductGroup(initialValues.ProductGroup);
    setBookingDate(initialValues.BookingDate);
    setBookingValue(initialValues.BookingValue);
    setBookingProbability(initialValues.BookingProbability);
    setBookingExpectedValue(initialValues.BookingExpectedValue);
    setShippingProbability(initialValues.ShippingProbability);
    setShippingExpectedValue(initialValues.ShippingExpectedValue);
    setShippingDate(initialValues.ShippingDate);
    setKey(initialValues.key);
    setComment(initialValues.Comment);
    setErrors({});
  };
  const validations = {
    Owner: [],
    Category: [],
    ProductGroup: [],
    BookingDate: [],
    BookingValue: [],
    BookingProbability: [],
    BookingExpectedValue: [],
    ShippingProbability: [],
    ShippingExpectedValue: [],
    ShippingDate: [],
    key: [],
    Comment: [],
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
          Category,
          ProductGroup,
          BookingDate,
          BookingValue,
          BookingProbability,
          BookingExpectedValue,
          ShippingProbability,
          ShippingExpectedValue,
          ShippingDate,
          key,
          Comment,
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
          await DataStore.save(new OtherPrediction(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "OtherPredictionCreateForm")}
    >
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner: value,
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
        label="Category"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category: value,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Product group"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup: value,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
        label="Booking date"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup,
              BookingDate: value,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
              Category,
              ProductGroup,
              BookingDate,
              BookingValue: value,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability: value,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue: value,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
        label="Shipping probability"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
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
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability: value,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue: value,
              ShippingDate,
              key,
              Comment,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate: value,
              key,
              Comment,
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
      <TextField
        label="Key"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key: value,
              Comment,
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
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Owner,
              Category,
              ProductGroup,
              BookingDate,
              BookingValue,
              BookingProbability,
              BookingExpectedValue,
              ShippingProbability,
              ShippingExpectedValue,
              ShippingDate,
              key,
              Comment: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
