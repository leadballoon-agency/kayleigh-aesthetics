'use client'

import { useState } from 'react'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<any>({})

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        { value: 'wrinkles', label: 'Fine lines & wrinkles', icon: '🔍' },
        { value: 'scars', label: 'Acne or surgical scars', icon: '✨' },
        { value: 'texture', label: 'Uneven skin texture', icon: '🌟' },
        { value: 'spots', label: 'Age spots & sun damage', icon: '☀️' }
      ]
    },
    {
      id: 2,
      question: "How would you describe your skin type?",
      options: [
        { value: 'normal', label: 'Normal', icon: '😊' },
        { value: 'dry', label: 'Dry', icon: '🏜️' },
        { value: 'oily', label: 'Oily', icon: '💧' },
        { value: 'combination', label: 'Combination', icon: '🔄' }
      ]
    },
    {
      id: 3,
      question: "What is your age range?",
      options: [
        { value: '20-30', label: '20-30', icon: '🌱' },
        { value: '31-40', label: '31-40', icon: '🌿' },
        { value: '41-50', label: '41-50', icon: '🌳' },
        { value: '50+', label: '50+', icon: '🌲' }
      ]
    }
  ]

  const currentQuestion = questions[step - 1]

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      // Show results and emit assessment completion
      const recommendation = getRecommendation(newAnswers)
      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: any = answers) => {
    if (assessmentAnswers[1] === 'wrinkles' || assessmentAnswers[3] === '50+') {
      return {
        treatment: 'Deep CO2 Resurfacing',
        price: 'From £1,200',
        description: 'Maximum results for deep wrinkles and skin laxity'
      }
    } else if (assessmentAnswers[1] === 'scars') {
      return {
        treatment: 'Medium CO2 Resurfacing',
        price: 'From £850',
        description: 'Ideal for acne scars and texture improvement'
      }
    } else {
      return {
        treatment: 'Light CO2 Resurfacing',
        price: 'From £650',
        description: 'Perfect for prevention and minor concerns'
      }
    }
  }

  return (
    <section id="assessment" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">AI-Powered Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect
            <span className="gradient-text"> Treatment</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Answer a few questions to receive personalized CO2 laser recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-premium p-8 md:p-12">
          {step <= questions.length ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral-600">Step {step} of {questions.length}</span>
                  <span className="text-sm text-neutral-600">{Math.round((step / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{currentQuestion.question}</h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <p className="font-medium text-neutral-700 group-hover:text-primary-600">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✨</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Your Personalized Recommendation</h3>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 mb-6">
                <h4 className="text-xl font-bold text-primary-600 mb-2">
                  {getRecommendation().treatment}
                </h4>
                <p className="text-3xl font-bold gradient-text mb-3">
                  {getRecommendation().price}
                </p>
                <p className="text-neutral-600">
                  {getRecommendation().description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onBookingClick}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}