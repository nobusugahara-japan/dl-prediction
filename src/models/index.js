// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OtherPrediction, DLPrediction } = initSchema(schema);

export {
  OtherPrediction,
  DLPrediction
};