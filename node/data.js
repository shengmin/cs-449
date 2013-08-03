'use strict';

exports.notifications = [
  { name: 'BBM' },
  { name: 'Email' },
  { name: 'Task Hub', count: 5, active: true },
  { name: 'Facebook' },
  { name: 'Twitter', count: 3 }
];

exports.tasks = [
  {
    name: 'Task 1',
    'for': 'ShengMin Zhang',
    messages: [
      {
        iconClass: 'icon-phone',
        actionClass: 'actionClass',
        fromName: 'ShengMin Zhang',
        fromId: 'me@shengmin.me',
        date: 'July 19, 2013',
        content: 'Hi Linda, I want to talk about blah blah blah blah'
      },
      {
        iconClass: 'icon-phone',
        actionClass: 'actionClass',
        fromName: 'fromName',
        date: 'July 19, 2013',
        fromId: 'fromId',
        content: 'content'
      },
      {
        iconClass: 'icon-mail',
        actionClass: 'actionClass',
        fromName: 'fromName',
        date: 'July 19, 2013',
        fromId: 'fromId',
        content: 'content'
      }
    ]
  },
  {
    name: 'Task 2',
    'for': 'ShengMin Zhang',
    messages: [
      {
        iconClass: 'icon-phone',
        actionClass: 'actionClass',
        fromName: 'fromName',
        fromId: 'fromId',
        content: 'content'
      }
    ]
  }
];
