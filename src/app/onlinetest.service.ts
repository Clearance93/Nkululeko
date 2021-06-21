import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  quizzes: Quiz[] = [
    {
      question: 'Which of the following languages does a full stack web development must adhere to?',
      answer: [
        {option: 'JavaScript', correct: false},
        {option: 'Sql', correct: false},
        {option: 'mongoBD', correct: false},
        {option: 'All the above and more', correct: true},
        
      ]
    },
    {
      question: 'Which term can be described by a file which describes how to build an application?',
      answer: [
        {option: 'Image', correct: true},
        {option: 'Layer', correct: false},
        {option: 'Kernel', correct: false},
        {option: 'container', correct: false},

      ]
    },
    {
      question: 'What is NPX?',
      answer: [
        {option: 'it is a deployment tool', correct: false},
        {option: 'it is an NPM package runner', correct: true},
        {option: 'it is a package manager', correct: false},
        {option: 'it is an NPM uninstaller', correct: false},

      ]
    },
    {
      question: ' Full Stack Web Developers work with a multitude of languages',
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false},
        {option: 'Optional', correct: false},
        {option: 'Unrecomended', correct: false},

      ]
    },
    {
      question: 'What does XML stand for?',
      answer: [
        {option: 'eXtensible Multiple Langauge', correct: false},
        {option: 'eXtensible Makeup Language', correct: false},
        {option: 'eXtansible Mult Lingo', correct: false},
        {option: 'eXtensible Markup langauge', correct: true},
      ]
    },
    {
      question: 'A full stack developer is also known as an amalgation of langauges?', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    },
    {
      question: 'What is the purpose of webpack?',
      answer: [
        {option: 'to be a central repository of web packages', correct: false},
        {option: 'to manage web packages versions', correct: false},
        {option: 'to manage web code and resource bundling', correct: true},
        {option: 'to be a central repository of web packages', correct: false},
      ]
    },
    {
      question: 'What is the main primary role of Data Base To store data in the background',
      answer: [
        {option: 'false', correct: false},
        {option: 'true', correct: true},
        {option: 'Neither true nor false', correct: true},
        {option: 'optional', correct: true},
      ]
    },
    {
      question: "Full stack web development doesn't have to know the hardware of the computer?",
      answer: [
        {option: 'true', correct: false},
        {option: 'False', correct: true},
      ]
    },
    {
      question: 'Pair Programming is one of the core elements of extreme programming which involves two developers to work on the same terminal', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
