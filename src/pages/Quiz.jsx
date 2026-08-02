import { useMemo, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { quizApi } from '../services/api';

const questions = [
  {
    question: 'How many guardians are sworn to protect Elarion?',
    options: ['Five', 'Seven', 'Nine', 'Three'],
    answer: 'Seven',
  },
  {
    question: 'Which core governs prophecy and cosmic alignment?',
    options: ['Fire', 'Light', 'Star', 'Earth'],
    answer: 'Star',
  },
  {
    question: 'What is the capital of Aureth?',
    options: ['Skyhaven', 'Tideglass', 'Sunspire', 'Obsidian Keep'],
    answer: 'Sunspire',
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [resultKingdom, setResultKingdom] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const progress = useMemo(() => ((current + 1) / questions.length) * 100, [current]);

  const handleAnswer = (option) => {
    setSelected(option);
  };

  const getResultKingdom = (selectedAnswers) => {
    const correct = selectedAnswers.reduce((count, answer, index) => count + (answer === questions[index].answer ? 1 : 0), 0);

    if (correct === questions.length) return 'Aureth';
    if (correct >= 2) return 'Celestis';
    if (correct === 1) return 'Nyxmar';
    return 'Thalor';
  };

  const handleNext = async () => {
    const nextAnswers = [...answers];
    nextAnswers[current] = selected;
    setAnswers(nextAnswers);

    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current === questions.length - 1) {
      const finalResult = getResultKingdom(nextAnswers);
      setResultKingdom(finalResult);
      setSubmitting(true);
      setError('');

      try {
        await quizApi.submit({
          answers: nextAnswers,
          resultKingdom: finalResult,
        });
        setSubmitted(true);
      } catch (err) {
        setError('The quiz result could not be saved, but your score is still recorded.');
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setSubmitted(false);
    setAnswers([]);
    setResultKingdom('');
    setError('');
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Knowledge Trial</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Fantasy quiz</h1>
        </div>
        <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
          Score: {score}/{questions.length}
        </div>
      </div>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <Card className="p-8">
        {!submitted ? (
          <>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Question {current + 1}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{questions[current].question}</h2>
            <div className="mt-8 grid gap-4">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${selected === option ? 'border-cyan-400/40 bg-cyan-400/15 text-cyan-100' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-slate-400">Choose carefully, guardian.</p>
              <Button onClick={handleNext} disabled={!selected} className="disabled:cursor-not-allowed disabled:opacity-50">
                {current === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Quest complete</h2>
            <p className="mt-4 text-lg text-slate-400">You scored {score} out of {questions.length}.</p>
            {resultKingdom ? <p className="mt-2 text-sm text-cyan-200">Result Kingdom: {resultKingdom}</p> : null}
            {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
            {submitting ? <p className="mt-3 text-sm text-slate-400">Saving your result...</p> : null}
            <Button onClick={resetQuiz} className="mt-6">
              Try again
            </Button>
          </div>
        )}
      </Card>
    </main>
  );
}

export default Quiz;
