import React from 'react';
import { useLearningStore } from '../store/learningStore';
import { Trophy, Book, Calculator, Target, Zap } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { subject, accuracy, problemsSolved, streak, setSubject } = useLearningStore();

  return (
    <div className="dashboard-container">
      <div className="stats-grid">
        <div className="stat-card glass-card">
          <Target className="icon blue" />
          <div className="stat-info">
            <span className="label">Accuracy</span>
            <span className="value">{accuracy.toFixed(1)}%</span>
          </div>
        </div>
        <div className="stat-card glass-card">
          <Trophy className="icon gold" />
          <div className="stat-info">
            <span className="label">Solved</span>
            <span className="value">{problemsSolved}</span>
          </div>
        </div>
        <div className="stat-card glass-card">
          <Zap className="icon purple" />
          <div className="stat-info">
            <span className="label">Streak</span>
            <span className="value">{streak}</span>
          </div>
        </div>
      </div>

      <div className="subject-selector">
        <button 
          className={`subject-btn glass-card ${subject === 'Math' ? 'active' : ''}`}
          onClick={() => setSubject('Math')}
        >
          <Calculator size={32} />
          <span>Mathematics</span>
        </button>
        <button 
          className={`subject-btn glass-card ${subject === 'Reading' ? 'active' : ''}`}
          onClick={() => setSubject('Reading')}
        >
          <Book size={32} />
          <span>Reading</span>
        </button>
      </div>
    </div>
  );
};
