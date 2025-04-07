import React, { useState } from 'react';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import type { ExamDetails } from '../types';

interface ExamFormProps {
  onSubmit: (examDetails: ExamDetails) => void;
}

export default function ExamForm({ onSubmit }: ExamFormProps) {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [currentTopic, setCurrentTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const examTopics = topics.map((topic, index) => ({
      id: `topic-${index}`,
      name: topic,
      difficulty: 'medium',
      estimatedHours: 2,
      completed: false,
    }));
    
    onSubmit({
      subject,
      date,
      topics: examTopics,
    });
  };

  const addTopic = () => {
    if (currentTopic.trim()) {
      setTopics([...topics, currentTopic.trim()]);
      setCurrentTopic('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Subject</label>
        <div className="mt-1 relative">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Exam Date</label>
        <div className="mt-1 relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Topics</label>
        <div className="mt-1 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter a topic"
            />
            <button
              type="button"
              onClick={addTopic}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
                <Clock size={16} className="text-gray-400" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Generate Study Plan
      </button>
    </form>
  );
}