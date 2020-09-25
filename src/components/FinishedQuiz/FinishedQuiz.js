import './FinishedQuiz.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          console.log(props.results[quizItem.id]);
          const color = props.results[quizItem.id];
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            color,
          ];

          return (
            <li key={index}>
              <strong>{index + 1}.</strong>
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="success" to="">
            Перейти в список тестов
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default FinishedQuiz;
