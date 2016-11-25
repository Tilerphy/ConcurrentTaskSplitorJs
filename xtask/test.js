var task1 = {
        key:"task1",
        preActions: ["task2", "task3"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};

var task2 = {
        key:"task2",
        preActions: [],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};

var task3 = {
        key:"task3",
        preActions: ["task4"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};
var task4 = {
        key:"task4",
        preActions: ["task2"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};

var task5 = {
        key:"task5",
        preActions: ["task1", "task3", "task4"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};

var task6 = {
        key:"task6",
        preActions: ["task1", "task4"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};

var task7 = {
        key:"task7",
        preActions: ["task2", "task4"],
        postActions: [],
        preActionsSet: null,
        postActionsSet: null
};


var xtask = require("./xtask");
var x = new xtask();
x.pushTasks([task1,task2,task3,task4,task5,task6,task7]);
var m1 =x.fixRelationship().popXTasks();
m2 = x.popXTasks();
m3 = x.popXTasks();
m4 = x.popXTasks();
m5 =x.popXTasks();
m6 = x.popXTasks();
console.log(m1, m2,m3,m4,m5,m6);

