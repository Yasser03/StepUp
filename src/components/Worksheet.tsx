import { useState, useEffect } from 'react';
import { useLearningStore } from '../store/learningStore';
import { generateMathProblem, generateReadingExercise } from '../services/groq';
import type { Problem } from '../services/groq';
import { CheckCircle, XCircle, Info, ArrowRight, Star } from 'lucide-react';

export const Worksheet: React.FC = () => {
  const { subject, level, step, incrementProblems, advanceLevel, streak } = useLearningStore();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showHint, setShowHint] = useState(false);

  const fetchNewProblem = async () => {
    setLoading(true);
    setFeedback(null);
    setUserAnswer('');
    setShowHint(false);
    
    const newProblem = subject === 'Math' 
      ? await generateMathProblem(level, step)
      : await generateReadingExercise(level);
      
    setProblem(newProblem);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewProblem();
  }, [level, step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem) return;

    const isCorrect = userAnswer.trim().toLowerCase() === String(problem.answer).toLowerCase();
    incrementProblems(isCorrect);
    
    if (isCorrect && streak >= 4) {
        advanceLevel();
        setFeedback({
          isCorrect: true,
          message: 'Mastery Achieved! Leveling up...'
        });
    } else {
        setFeedback({
          isCorrect,
          message: isCorrect ? 'Fantastic work!' : 'Keep trying, you can do this!'
        });
    }
  };

  if (loading) return <div className="loading">Generating your next challenge...</div>;

  return (
    <div className="worksheet-container glass-card">
      <div className="header">
        <span className="badge">Level {level}</span>
        <span className="badge">Step {step}/10</span>
        <div className="streak">
            <Star color={streak > 0 ? "#F59E0B" : "#94A3B8"} fill={streak > 0 ? "#F59E0B" : "none"} />
            <span>Streak: {streak}</span>
        </div>
      </div>

      <div className="problem-area">
        <h1 className="problem-text">{problem?.content}</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={!!feedback}
            placeholder="Type your answer..."
            autoFocus
          />
          {!feedback && (
            <button type="submit" className="btn-primary">Check Answer</button>
          )}
        </form>
      </div>

      {feedback && (
        <div className={`feedback-area ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          {feedback.isCorrect ? <CheckCircle size={48} /> : <XCircle size={48} />}
          <div className="feedback-content">
            <h3>{feedback.message}</h3>
            <p>{problem?.explanation}</p>
            <button onClick={fetchNewProblem} className="btn-primary">Next Problem <ArrowRight size={18} /></button>
          </div>
        </div>
      )}

      {!feedback && !showHint && (
        <button className="hint-btn" onClick={() => setShowHint(true)}>
          <Info size={16} /> Need a hint?
        </button>
      )}

      {showHint && (
        <div className="hint-box">
          <p>💡 {problem?.hint}</p>
        </div>
      )}
    </div>
  );
};
