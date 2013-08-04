'use strict';

var cs449 = {};

(function () {
  var CAT_PRIORITY = '1 - Priority';
  var CAT_WAITING = '2 - Waiting on Others';
  var CAT_EVERYTHING_ELSE = '3 - Everything Else';

  function addId(tasks) {
    for (var i = 0, len = tasks.length; i < len; i++) {
      tasks[i].id = i;
    }
    return tasks;
  }

  function addDate(tasks) {
    for (var i = 0, len = tasks.length; i < len; i++) {
      var task = tasks[i];
      var date = new Date(task.timestamp);
      tasks[i].date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
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
      category: CAT_WAITING,
      name: 'Task 2',
      contact: 'ShengMin Zhang',
      summary: 'summary2',
      date: 'July 19, 2013',
      timestamp: 1375629578449,
      messages: [
        {
          iconClass: 'icon-phone',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
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
          iconClass: 'icon-phone',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
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
          iconClass: 'icon-phone',
          actionClass: 'actionClass',
          fromName: 'fromName',
          fromId: 'fromId',
          content: 'content'
        }
      ]
    }
  ];

  addId(addDate(tasks));

})();


