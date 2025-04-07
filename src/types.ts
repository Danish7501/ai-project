export interface Topic {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedHours: number;
  completed: boolean;
}

export interface ExamDetails {
  subject: string;
  date: string;
  topics: Topic[];
}

export interface StudyPlan {
  dailyHours: number;
  topics: Topic[];
  daysUntilExam: number;
}