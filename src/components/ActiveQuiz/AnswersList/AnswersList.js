import React from 'react';
import './AnswersList.css';
import { AnswerItem } from './AnswerItem/AnswerItem';

export const AnswersList = (props) => (
  <ul className="AnswersList">
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          state={props.state ? props.state[answer.id] : null}
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
        />
      );
    })}
  </ul>
);
