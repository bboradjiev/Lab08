export interface Thread {
  subject_id: number;
  question_id: number;
  thread_id: string;
  text: string;
  created_at: string;
  subject: string;
  question: string;
  team: string;
  id: string;
  reply_to?: string;
  score?: number;
  acknowledged?: boolean;
  expanded?: boolean;
}
