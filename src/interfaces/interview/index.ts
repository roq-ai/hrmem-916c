import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  date: any;
  candidate_id?: string;
  interviewer_id?: string;
  created_at?: any;
  updated_at?: any;

  user_interview_candidate_idTouser?: UserInterface;
  user_interview_interviewer_idTouser?: UserInterface;
  _count?: {};
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  candidate_id?: string;
  interviewer_id?: string;
}
