import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY || '',
  dangerouslyAllowBrowser: true, // For client-side demo purposes
});

export interface Problem {
  content: string;
  answer: string | number;
  hint: string;
  explanation: string;
}

export const generateMathProblem = async (level: string, step: number): Promise<Problem> => {
  const prompt = `
    Role: StepUp Math Instructor
    Task: Generate a single math problem for Level ${level}.
    Difficulty Step: ${step}/10 (1 is basic, 10 is advanced for this level).
    Format: Return ONLY a valid JSON object with the following keys:
    "content": The math problem (e.g., "125 + 36"),
    "answer": The numerical answer (e.g., 161),
    "hint": A small nudge to help the student solve it,
    "explanation": A brief, encouraging explanation of the concept for this level.
    Tone: Supportive and academic (Ages 7-11).
  `;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error('No content returned from Groq');
    return JSON.parse(content) as Problem;
  } catch (error) {
    console.error('Error generating problem:', error);
    // Fallback simple problem
    return {
      content: '10 + 5',
      answer: 15,
      hint: 'Try adding the ones first.',
      explanation: 'Addition is combining two numbers to make a sum.'
    };
  }
};

export const generateReadingExercise = async (level: string): Promise<Problem> => {
    const prompt = `
      Role: StepUp Literacy Coach
      Task: Generate a short reading exercise for level ${level}.
      Format: Return ONLY a valid JSON object with the following keys:
      "content": A short passage (2-3 sentences) and a question,
      "answer": The correct answer (string),
      "hint": A subtle clue from the text,
      "explanation": Encouraging feedback for when they get it right.
      KS2 Appropriate: Ages 7-11.
    `;
  
    try {
      const completion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama-3.3-70b-versatile',
        response_format: { type: 'json_object' },
      });
  
      const content = completion.choices[0]?.message?.content;
      if (!content) throw new Error('No content returned from Groq');
      return JSON.parse(content) as Problem;
    } catch (error) {
      console.error('Error generating reading exercise:', error);
      return {
        content: 'The cat jumped over the moon. What did the cat do?',
        answer: 'jumped over the moon',
        hint: 'Look for the action in the first sentence.',
        explanation: 'Excellent comprehension!'
      };
    }
  };
