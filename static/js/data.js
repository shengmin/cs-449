'use strict';

var cs449 = {};

(function () {
  var CAT_PRIORITY = '1 - Priority';
  var CAT_WAITING = '2 - Waiting on Others';
  var CAT_EVERYTHING_ELSE = '3 - Everything Else';
  var MONTHS = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

  function getDateString(timestamp) {
    var date = new Date(timestamp);
    return MONTHS[date.getMonth()]
      + ' '
      + date.getDate()
      + ', '
      + date.toLocaleTimeString();
  }

  function addData(tasks) {
    for (var i = 0, len = tasks.length; i < len; i++) {
      var task = tasks[i];
      task.date = getDateString(task.timestamp);
      task.id = i;

      var messages = task.messages;
      for (var j = 0, len2 = messages.length; j < len2; j++) {
        var message = messages[j];
        message.date = getDateString(message.timestamp);
        message.id = j;
      }
    }
    return tasks;
  }

  var tasks = cs449.tasks = [
    {
      category: CAT_PRIORITY,
      name: 'Fix fence at Dearborn',
      contact: 'ShengMin Zhang',
      summary: 'Could you send people to fix fence at Dearborn Blvd?',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          fromName: 'ShengMin Zhang',
          fromId: '519-999-1234',
          timestamp: 1375629578449,
          title: 'Fence',
          content: 'Hi Linda, could you send people to fix the fence at Dearborn Blvd?'
        },
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Fence',
          content: 'Hi Linda, the fence at Dearborn is still broken. Could you send people to fix it?'
        },
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Fence',
          content: 'Hi Linda, Thanks for fixing the fence.'
        }
      ]
    },
    {
      category: CAT_WAITING,
      name: 'Help Lucy fix her roof',
      contact: 'ShengMin Zhang',
      summary: 'The roof of Rucy is broken, she doesn\' know where to find people fo fix it. So find some people to help her',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'Lucy Wang',
          fromId: '519-888-0000',
          title: 'Need to fix roof',
          content: 'Hi Linda, could you tell me where I can find people to fix the roof of my house?'
        }
      ]
    },
    {
      category: CAT_EVERYTHING_ELSE,
      name: 'Send people to take care of Shengmin\'s children',
      contact: 'ShengMin Zhang',
      summary: 'Shengmin is going for a business trip this weekend to France, he is asking for help where he can find people to take care of his kids',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          fromName: 'fromName',
          fromId: '519-781-0000',
          timestamp: 1375600009999,
          title: 'Hi Linda',
          content: 'I need to book a business trip'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'ShengMin\'s business trip',
      contact: 'ShengMin Zhang',
      summary: 'ShengMin is going to Franch',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          actionClass: 'actionClass',
          fromName: 'Shengming Zhang',
          fromId: 'me@shengmin.me',
          title: 'Going to Franch',
          content: 'Hi Linda, I am flying to France this weekend for business trip. I don\'t know where I could find people to take care of my children. Could you help me with this?'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Fix the chair at the Waterloo Park',
      contact: 'ShengMin Zhang',
      summary: 'It\'s reported that the chair at the Waterloo Park is broken, send people to fix it',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'anonymous',
          fromId: 'unknown',
          title: 'No title',
          content: 'Hi, I found the chairs at the Waterloo Park have been broken for several months. I think it\'s better that theya re replaced. Regards.'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Organize local volunteer events',
      contact: 'Linda',
      summary: 'The Volunteer event is happening this Friday. Make sure you organize it well',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'Linda',
          fromId: 'linda@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Volunteer',
          content: 'Hi Angela, the volunteer event is happening this Friday. There will be 50 people attending. Please make sure you organize it well.'
        },
        {
          type: 'phone',
          fromName: 'Linda',
          timestamp: 1375629578449,
          fromId: '519-781-0000',
          title: 'Event schedule',
          content: 'Hi Angela, you can find the latest event schedule in the attached file. Please let me know if you hav any questions.'
        },
        {
          type: 'mail',
          fromName: 'Linda',
          timestamp: 1375629578449,
          fromId: 'linda@waterloo.ca',
          title: 'Wendy is not coming',
          content: 'Hi Angela, Wendy said she wouldn\'t come to the event.'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Find policemen to break into Edwin\'s house',
      contact: 'Edwin',
      summary: 'Find policemen to break into Edwin\'s house',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'Linda',
          fromId: 'linda@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Edwin is locked',
          content: 'Hi Angela, Edwin\'s house is locked, could you send some policemen to break into his house.'
        },
        {
          type: 'mail',
          fromName: 'Linda',
          timestamp: 1375629578449,
          fromId: 'linda@waterloo.ca',
          title: 'New issue',
          content: 'Hi Angela, Edwin just called that his house is still locked.'
        },
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Arragen school buses for Waterloo school',
      contact: 'Edwin',
      summary: 'Waterloo school needs school buses',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'Linda',
          fromId: 'linda@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Waterloo school needs school buses',
          content: 'Waterloo school is short for school buses, could you please arragen that for us?'
        }
      ]
    },
  ];

  addData(tasks);

  var contacts = [
    { name: 'Yuduo Zhang', title: 'Mayor', last: '2 days ago'},
    { name: 'Dan Li', title: 'Waterloo Student', last: '2 hours ago'},
    { name: 'ShengMin Zhang', title: 'Waterloo Student', last: '2 days ago'},
    { name: 'Edwin Zhang', title: 'Staff', last: '2 days ago'},
    { name: 'Linda Wang', title: 'Waterloo student', last: '2 days ago'},
    { name: 'Lucy Wang', title: 'Manager', last: '2 days ago'},
    { name: 'Wang', title: 'Waterloo president', last: '2 days ago'},
    { name: 'Lily Wang', title: 'Councillor', last: '2 days ago'},
    { name: 'Angela Zhang', title: 'London Mayor', last: '2 days ago'},
    { name: 'Jack Huang', title: 'Policemen Head', last: '2 days ago'},
    { name: 'Robert Wang', title: 'Taxi driver', last: '2 days ago'},
  ];

  if (typeof exports !== 'undefined') {
    exports.tasks = tasks;
    exports.contacts = contacts;
  }

})();

