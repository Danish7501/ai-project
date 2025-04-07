import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import type { StudyPlan as StudyPlanType } from '../types';

interface StudyPlanProps {
  plan: StudyPlanType;
}

export default function StudyPlan({ plan }: StudyPlanProps) {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Study Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-md">
            <p className="text-indigo-700 font-medium">Days until exam</p>
            <p className="text-3xl font-bold text-indigo-900">{plan.daysUntilExam}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-700 font-medium">Daily study hours</p>
            <p className="text-3xl font-bold text-green-900">{plan.dailyHours}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Topics to Cover</h3>
          {plan.topics.map((topic) => (
            <div
              key={topic.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3">
                {topic.completed ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Circle className="text-gray-400" size={20} />
                )}
                <div>
                  <p className="font-medium">{topic.name}</p>
                  <p className="text-sm text-gray-500">
                    Difficulty: {topic.difficulty}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>{topic.estimatedHours}h</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}