import React from 'react';
import states from './states';

import Login, { PinVerify,PinVerifyNew }  from './Login';
import CustomComponent from './linktravel';
import Custom from './postdata';
const statesOptions = states.map((i) => ({value: i, label: i, trigger: '11'}))
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
        { value: 1, label: 'TravelSafe', trigger: '200' },
        { value: 2, label: "Report misconduct", trigger: '100' },
          { value: 3, label: "Stay informed", trigger: '100' }
      ],

    },
    {
        id: '200',

        component: (
        <CustomComponent/>
      ),
      end:true,
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
        id: '12',

        options: [
          { value: 1, label: 'Domestic Violence', trigger: '13' },
          { value: 2, label: 'Sexual harassement', trigger: '13' },
          { value: 3, label: 'Rape', trigger: '13' },
          { value: 4, label: 'Acid throwing', trigger: '13' },
          { value: 5, label: 'Stalking', trigger: '13' },
          { value: 6, label: 'Denial Of Medical Care', trigger: '13' },
          { value: 7, label: 'Dowry', trigger: '13' },
          { value: 8, label: 'Cyberbullying', trigger: '13' },
          { value: 9, label: 'Mob Violence', trigger: '13' },

        ],

      },

      {
        id: '13',
        message: 'Give a brief description of the crime',
        trigger: 'crimedes'

      },
      {
        id: 'crimedes',
        user:true,
        trigger: '14'

      },
      {
        id: '14',
      component:<Custom/>,
        trigger: '14'

      },

      {
        id: '5',
        message: 'We would like some of your details before we could contact the team',
        trigger: '6'

      },
      {
        id: '6',
        message: 'What is your full name? Please type.',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: '7',
      },
      {
        id: '7',
        message: 'Hi your phone number please?',
        trigger: 'phone',
      },
      {
        id: 'phone',
        user: true,
       trigger: '9'
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
          id: '11',
          trigger: 'email',
          message: 'Enter your email address.'
      },
      {
        id: 'email',
        user: true,
       trigger: '12'
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
