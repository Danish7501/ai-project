import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import ExamForm from './components/ExamForm';
import StudyPlan from './components/StudyPlan';
import type { ExamDetails, StudyPlan as StudyPlanType } from './types';

function App() {
  const [studyPlan, setStudyPlan] = useState<StudyPlanType | null>(null);

  const generateStudyPlan = (examDetails: ExamDetails) => {
    const examDate = new Date(examDetails.date);
    const today = new Date();
    const daysUntilExam = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    const totalHours = examDetails.topics.reduce((acc, topic) => acc + topic.estimatedHours, 0);
    const dailyHours = Math.ceil(totalHours / daysUntilExam);

    setStudyPlan({
      dailyHours,
      topics: examDetails.topics,
      daysUntilExam,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <GraduationCap size={48} className="text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Virtual Exam Preparation Trainer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your personalized study plan by entering your exam details below.
            We'll help you organize your preparation and stay on track.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {!studyPlan ? (
            <ExamForm onSubmit={generateStudyPlan} />
          ) : (
            <StudyPlan plan={studyPlan} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;