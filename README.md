# Theory and C# version

https://github.com/Tilerphy/ConcurrentTaskSplitor

# Envrionment
ES6

`for..of`
`Map`
`Set`
`=>` function


# Node JS Version
nodejs version upper than `4.3.1`

# Requirement

nothing

# Notes

 In Node v4.3.1, I cannot use the `for(let [key,value] of <Map>)`, otherwise, the code could be less.

# Run

If you test in NodeJs, just to run `node test.js` or  `nodejs test.js`

If you test in Browsers, please copy the code from source files.


# From npm

Run `npm install xtask`

then like this : `test-npm.js` 

# Task Structure
```
var task = {
        key:"taskName",
        preActions: ["task1", "task3", "task4"],
        postActions: [],
};
```
