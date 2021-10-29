import { useState } from 'react';
import './App.css';
const questions = [
  {
    questionText: 'What does HTML stand for?',
    answerOptions: [
      { answerText: 'Hypery Text Markup Language', isCorrect: false },
      { answerText: 'Hyperlink Text Markup Language', isCorrect: false },
      { answerText: 'Hyper Text Markup Language', isCorrect: true },
      { answerText: 'Home Tool Markup Language', isCorrect: false },
    ],
  },
  {
    questionText: 'Choose the correct HTML element for the largest heading?',
    answerOptions: [
      { answerText: '<head>', isCorrect: false },
      { answerText: '<h1>', isCorrect: true },
      { answerText: '<heading>', isCorrect: false },
      { answerText: '<h6>', isCorrect: false },
    ],
  },
  {
    questionText: 'What does CSS stand for?',
    answerOptions: [
      { answerText: 'Cascading style sheets', isCorrect: true },
      { answerText: 'Colorful style sheets', isCorrect: false },
      { answerText: 'Creative style sheets', isCorrect: false },
      { answerText: 'Cost style sheets', isCorrect: false },
    ],
  },
  {
    questionText: 'Which HTML tag is used to define an internal style sheet?',
    answerOptions: [
      { answerText: '<css>', isCorrect: false },
      { answerText: '<script>', isCorrect: false },
      { answerText: '<start>', isCorrect: false },
      { answerText: '<style>', isCorrect: true },
    ],
  },
  {
    questionText: 'Inside which HTML element do we put the JavaScript?',
    answerOptions: [
      { answerText: '<scripting>', isCorrect: false },
      { answerText: '<js>', isCorrect: false },
      { answerText: '<script>', isCorrect: true },
      { answerText: '<jsx>', isCorrect: false },
    ],
  },
  {
    questionText: 'How do you write "Hello World" in an alert box?',
    answerOptions: [
      { answerText: 'alertBox("hello world")', isCorrect: false },
      { answerText:  'message("hello world")', isCorrect: false },
      { answerText: 'alert("hello world")', isCorrect: true },
      { answerText: 'msgbox("hello world")', isCorrect: false },
    ],
  },
];

function App() 
{

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [scored, setScore] = useState(0);

	const OptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(scored + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='scoresection'>
					Your Quiz scored {scored} out of {questions.length}
				</div>
			) : (
				<>
					<div className='questionsection'>
						<div className='questioncount'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questiontext'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answersection'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => OptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default App;
