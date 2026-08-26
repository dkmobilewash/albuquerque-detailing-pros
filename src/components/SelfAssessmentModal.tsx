import { useState, type FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackLeadSubmit } from '../utils/analytics';

interface SelfAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = 'https://calendly.com/albuquerquedetailingpros/booking';

const QUESTIONS = [
  'Do you notice odors (pet, food, smoke, or musty smells) inside the vehicle?',
  'Are there visible stains on the carpet, seats, or floor mats?',
  'Has water stopped beading on the hood or roof when it rains?',
  'Is the vehicle used daily for commuting, rideshare, deliveries, or work?',
];

type Step = 'intro' | 'questions' | 'contact' | 'confirmation';

export default function SelfAssessmentModal({ isOpen, onClose }: SelfAssessmentModalProps) {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false]);
  const [contact, setContact] = useState({ firstName: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const yesCount = answers.filter(Boolean).length;
  const result = yesCount >= 3 ? 'Overdue' : yesCount >= 1 ? 'Maintenance' : 'Good';

  const handleClose = () => {
    onClose();
    setStep('intro');
    setAnswers([false, false, false, false]);
    setContact({ firstName: '', phone: '' });
  };

  const handleAnswer = (index: number, value: boolean) => {
    setAnswers((prev) => prev.map((a, i) => (i === index ? value : a)));
  };

  const handleContactSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('self_assessment_submissions').insert({
      first_name: contact.firstName,
      phone: contact.phone,
      question_1: answers[0],
      question_2: answers[1],
      question_3: answers[2],
      question_4: answers[3],
      yes_count: yesCount,
      assessment_result: result,
    });

    setSubmitting(false);

    if (error) return;

    trackLeadSubmit('self_assessment_modal', { result });
    setStep('confirmation');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
        <button onClick={handleClose} aria-label="Close" className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-6 h-6" />
        </button>

        {step === 'intro' && (
          <div className="text-center py-4">
            <h2 className="text-xl font-bold mb-3">How Overdue Is Your Detail?</h2>
            <p className="text-gray-600 mb-6">
              Answer 4 quick questions and we'll tell you exactly what your vehicle needs.
            </p>
            <button
              onClick={() => setStep('questions')}
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Start the Quiz
            </button>
          </div>
        )}

        {step === 'questions' && (
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Vehicle Check</h2>
            <div className="space-y-5">
              {QUESTIONS.map((question, index) => (
                <div key={question}>
                  <p className="text-sm font-medium mb-2">{question}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAnswer(index, true)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold border ${
                        answers[index] ? 'bg-black text-white border-black' : 'border-gray-300'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(index, false)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold border ${
                        !answers[index] ? 'bg-black text-white border-black' : 'border-gray-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep('contact')}
              className="mt-6 w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              See My Results
            </button>
          </div>
        )}

        {step === 'contact' && (
          <div>
            <h2 className="text-lg font-bold mb-1">Your Result: {result}</h2>
            <p className="text-gray-600 text-sm mb-4">
              Enter your info and we'll send your full assessment with a recommended package.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="First Name"
                value={contact.firstName}
                onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="tel"
                placeholder="Mobile Phone"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Get My Results'}
              </button>
            </form>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="text-center py-4">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              {result === 'Overdue' && "Your Vehicle Is Overdue for a Detail"}
              {result === 'Maintenance' && 'A Maintenance Detail Would Help'}
              {result === 'Good' && 'Your Vehicle Is in Good Shape'}
            </h2>
            <p className="text-gray-600 mb-6">
              {result === 'Overdue' &&
                "Based on your answers, we recommend our Gold Standard or Masterpiece Detail package."}
              {result === 'Maintenance' &&
                'A Full Refresh or targeted interior/exterior package should get you back on track.'}
              {result === 'Good' &&
                'A routine maintenance detail every 8-12 weeks will keep it that way.'}
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Book My Recommended Package
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
