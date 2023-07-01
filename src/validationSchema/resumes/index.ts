import * as yup from 'yup';

export const resumeValidationSchema = yup.object().shape({
  content: yup.string().required(),
  candidate_id: yup.string().nullable(),
});
