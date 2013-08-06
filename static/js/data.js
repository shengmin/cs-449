'use strict';

var cs449 = {};
var CAT_PRIORITY = '1 - Priority';
var CAT_WAITING = '2 - Waiting on Others';
var CAT_EVERYTHING_ELSE = '3 - Everything Else';

(function () {

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
      if (!task.labels) {
        task.labels = [];
      }

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
      name: 'Whodunnit',
      contact: 'ShengMin Zhang',
      summary: 'Could you send people to fix fence?',
      timestamp: 1375629578449,
      labels: [{ color: '#00DB00', text: 'NEW MSG: ShengMin S.' }],
      messages: [
        {
          type: 'cell',
          fromName: '(Unknown)',
          fromId: '519-999-1234',
          timestamp: 1375629578449,
          title: 'Bench',
          content: 'James from 120 Lester st called about an interview...'
        },
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Bench',
          content: 'Hey Sue, Im writing to see if youve looked at my proposal yet'
        },
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Gutter',
          content: 'Hi Rob, thanks for addressing my concerns...'
        }
      ]
    },
    {
      category: CAT_WAITING,
      name: 'Redevelopment',
      contact: 'ShengMin Zhang',
      summary: 'Create a piece for the Record on Northfield redevelopment',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Bench',
          content: 'Hey Sue, Im writing to see if youve looked at my proposal yet'
        },
        {
          type: 'mail',
          fromName: 'ShengMin Zhang',
          timestamp: 1375629578449,
          fromId: 'me@shengmin.me',
          title: 'Gutter',
          content: 'Hi Rob, thanks for addressing my concerns...'
        }
      ]
    },
    {
      category: CAT_EVERYTHING_ELSE,
      name: 'Submit Zoning Application',
      contact: 'ShengMin Zhang',
      summary: 'Jennifer wants to build a housing slum downtown',
      timestamp: 1375666678449,
      messages: [
        {
          type: 'cell',
          fromName: 'Steve',
          fromId: '519-781-0000',
          timestamp: 1375600009999,
          title: 'Hi Linda',
          content: 'I need to book a business trip'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Break the bad news',
      contact: 'ShengMin Zhang',
      summary: 'Tell him his name is Edward',
      timestamp: 1375688888449,
      labels: [{ color: '#0F71D9', text: 'FWD: Jessica' }],
      messages: [
        {
          type: 'mail',
          timestamp: 1375688888449,
          fromName: 'ShengMin Zhang',
          fromId: 'me@shengmin.me',
          title: 'Going to France',
          content: 'Hi Shengmin, I am flying to France this weekend for business trip. I don\'t know where I could find people to take care of my children. Could you help me with this?'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Fix the chair at the Waterloo Park',
      contact: 'ShengMin Zhang',
      summary: 'It\'s reported that the chair at the Waterloo Park is broken, send people to fix it',
      timestamp: 1375629578449,
      labels: [{ color: '#00DB00', text: 'NEW MSG: ShengMin S.' }, { color: '#0F71D9', text: 'FWD: Jessica' }],
      messages: [
        {
          isNew: true,
          timestamp: 1375629578449,
          type: 'cell',
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
          content: 'Hi Brandy, the volunteer event is happening this Friday. There will be 50 people attending. Please make sure you organize it well.'
        },
        {
          type: 'phone',
          fromName: 'Linda',
          timestamp: 1375629578449,
          fromId: '519-781-0000',
          title: 'Event schedule',
          content: 'Hi Brandy, you can find the latest event schedule in the attached file. Please let me know if you hav any questions.'
        },
        {
          isNew: true,
          type: 'mail',
          fromName: 'Linda',
          timestamp: 1375629578449,
          fromId: 'linda@waterloo.ca',
          title: 'Wendy is not coming',
          content: 'Hi Brandy, Wendy said she wouldn\'t come to the event.'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Investigate Mel\'s Diner',
      contact: 'Edwin',
      summary: 'Find policemen to break into Ed\'s house',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'Linda',
          fromId: 'linda@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Edwin is locked',
          content: 'Hi Larry, Edward didn\'t do any work, can you teach him a lesson?'
        },
        {
          type: 'mail',
          fromName: 'Linda',
          fromId: 'linda@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Edwin is locked',
          content: 'Hi Larry, Edward didn\'t do any work, can you teach him a lesson?'
        },
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Summer Spectacular Gala Extravaganza',
      contact: 'Dan',
      summary: 'Plan a blowout party',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'mail',
          fromName: 'Brad',
          fromId: 'brad@waterloo.ca',
          timestamp: 1375629578449,
          title: 'Waterloo school district needs school buses',
          content: 'Waterloo is short on school buses, could you please arrange that for us?'
        }
      ]
    },
  ];

  addData(tasks);

  var contacts = [
    { name: 'Yuduo Zhang', title: 'Taste Tester', last: '2 days ago'},
    { name: 'Dan Li', title: 'Waterloo Student', last: '2 hours ago'},
    { name: 'ShengMin Zhang', title: 'Waterloo Student', last: '2 days ago'},
    { name: 'Edwin Zhang', title: 'Lego Stepper', last: '2 days ago'},
    { name: 'Steven Colbert', title: 'Consultant', last: '2 days ago'},
    { name: 'Bill O\'Riley', title: 'Manager', last: '2 days ago'},
    { name: 'Lily Wang', title: 'Councillor', last: '2 days ago'},
    { name: 'Terrence Zhang', title: 'Mayor of Cambridge', last: '2 days ago'},
    { name: 'Jack Ripley', title: 'Police Chief', last: '2 days ago'},
    { name: 'Robert McIntyre', title: 'Taxi driver', last: '2 days ago'},
  ];

  var newMessages = [];

  tasks.forEach(function(task) {
    task.messages.forEach(function(message) {
      if (message.isNew) {
        newMessages.push(message);
      }
    });
  });

  if (typeof exports !== 'undefined') {
    exports.tasks = tasks;
    exports.contacts = contacts;
    exports.newMessages = newMessages;
    exports.outdatedTasks = tasks.filter(function(task) {
      return task.category === CAT_PRIORITY;
    });
  }

})();

