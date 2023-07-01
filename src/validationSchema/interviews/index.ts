import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  date: yup.date().required(),
  candidate_id: yup.string().nullable(),
  interviewer_id: yup.string().nullable(),
});
