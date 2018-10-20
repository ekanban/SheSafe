import React from 'react';
import states from './states';

import Login, { PinVerify,PinVerifyNew }  from './Login';

const statesOptions = states.map((i) => ({value: i, label: i, trigger: '100'}))
const steps = [
    {
      id: '0',
      message: 'Hello, my name is Alica. Welcome to SheSafe. Are you new to the site? ',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Please click on an option.',
      trigger: '2',
    },
    {
      id: '2',

      options: [
        { value: 1, label: 'TravelSafe', trigger: '100' },
        { value: 2, label: "Report misconduct", trigger: '100' },
          { value: 3, label: "Stay informed", trigger: '100' }
      ],

    },

    {
        id: '100',
        message: "With our expert team , feel free to report any incident that you faced in your day to day life.We will make sure to support you both legally and mentally.Would you like to proceed?",
        trigger: '4',
      },
      {
        id: '4',

        options: [
          { value: 1, label: 'Yes', trigger: '5' },
        ],

      },
      {
        id: '5',
        message: 'We would like some of your details before you could contact the team',
        trigger: '7'

      },
      {
        id: '6',
        message: 'What is your full name? Please type.',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: '8',
      },
      {
        id: '7',
        message: 'Hi your phone number please?',
        trigger: 'phone',
      },
      {
        id: 'phone',
        user: true,
       trigger: '100'
      },
      {
        id: '8',
        message: 'What is your gender?',
        trigger: 'gender',
      },
      {
        id: 'gender',
        options: [
          { value: 'male', label: 'Male', trigger: '9' },
          { value: 'female', label: 'Female', trigger: '9' },
        ],
      },
      {
        id: '9',
        message: 'How old are you?',
        trigger: 'age',
      },
      {
        id: 'age',
        user: true,
        trigger: '10',
        validator: (value) => {
          if (isNaN(value)) {
            return 'value must be a number';
          } else if (value < 0) {
            return 'value must be positive';
          } else if (value > 120) {
            return `${value}? Come on!`;
          }

          return true;
        },
      },
      {
        id: '10',
        message: 'Which state do you belong to ?',
        trigger: 'loading',
      },
      {
        id: 'loading',
        message: '..',
        trigger: 'state',
      },
      {
        id: 'state',
        options: statesOptions
      },

    {
        id: 'bye',
        trigger: 'final',
        message: 'Processing all your info and sending it to the team'
    },
    {
        id: 'final',
        message: 'When the team responds, we will notify you via message.',
        trigger: 'goodbye'
    },
    {
        id: 'goodbye',
        message: 'Thank you. You coud contact us at blahblah anytime if you have an issue.',
        end: true
    }

  ];

  export default () => steps;
