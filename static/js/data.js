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
      name: 'Task 1',
      contact: 'ShengMin Zhang',
      summary: 'summary1',
      timestamp: 1375629578449,
      date: 'July 19, 2013',
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'ShengMin Zhang',
          fromId: 'me@shengmin.me',
          date: 'July 19, 2013',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'Hi Linda, I want to talk about blah blah blah blah'
        },
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          date: 'July 19, 2013',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        },
        {
          type: 'mail',
          actionClass: 'actionClass',
          fromName: 'fromName',
          date: 'July 19, 2013',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        }
      ]
    },
    {
      category: CAT_WAITING,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        }
      ]
    },
    {
      category: CAT_EVERYTHING_ELSE,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375629578449,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          timestamp: 1375600009999,
          title: 'Title',
          content: 'content'
        }
      ]
    },
    {
      category: CAT_PRIORITY,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375600009999,
      messages: [
        {
          type: 'cell',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          content: 'content',
          title: 'Title',
          timestamp: 1375600009999
        }
      ]
    }
  ];

  addData(tasks);

  if (typeof exports !== 'undefined') {
    exports.tasks = tasks;
  }

})();


