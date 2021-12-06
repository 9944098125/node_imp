const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const node_imp = [
    {
        id:1,
        question:"What is node js ?",
        answer:"Node js is free, open-source, backend javscript runtime environment that runs on chrome's V8 engine. It executes the javascript code outside the browser. It is based on event-driven architecture that runs asynchronously making it more effecient and light weight. It is created by Ryen Dahl."
    },
    {
        id:2,
        question:"API functions in node js.",
        answer:"Asynchronous non-blocking function and Synchronous blocking function."
    },
    {
        id:3,
        question:"What is REPL ?",
        answer:"REPL in node js stands for Read, Evel, Print and Loop which further evaluates the code on the go."
    },
    {
        id:4,
        question:"What is an Anonymous function ?",
        answer:"A function without a name is called Anonymous function. It don't have an identity. They are generally used to be assigned to a variable and used as values."
    },
    {
        id:5,
        question:"What are function statement and function expression ?",
        answer:"If we write a function with a name that is called function statement. And, if a function is assigned to a variable is called function expression. Difference between these two is hoisting. For function statement we can call the function before or after defining it. But for function expression we should call the function after defining it only, since it is assigned to a variable. Function statement is also called function declaration."
    },
    {
        id:6,
        question:"Named function expression.",
        answer:"If a function statement (function with a name) is assigned to a variable, that function is called named function expression."
    },
    {
        id:7,
        question:"What do you mean by parameters and arguments ?",
        answer:"Parameters are used while we define the function and Arguments are used while calling the function."
    },
    {
        id:8,
        question:"What are first class functions ?",
        answer:"The ability of the function so that it can be used as values, or can be passed as arguments or can be returned from another functions, the functions that have this ability are called first class functions."
    },
    {
        id:9,
        question:"What are arrow functions ?",
        answer:"These arrow functions are the latest feature introduced in Es6 version of javascript. It allows us to write code in a cleaner way when compared to normal functions."
    },
    {
        id:10,
        question:"Why is node js single threaded ?",
        answer:"Since chrome's V8 engine on which the node js runs is single threaded, node js is also single threaded."
    },
    {
        id:11,
        question:"What is the advantage of promises ?",
        answer:"The main advantage of the promises is you get an object to decide task needed to be taken after an asynchronous task. It gives you more manageable code and avoids callback hell"
    },
    {
        id:12,
        question:"Callback hell.",
        answer:"It is a function that is called inside a callback function again and again. Like in setInterval again and again the same setInterval is called."
    },
];

app.get('/node', (request, response) => {
    response.send(node_imp);
});


const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`App is running at ${port}`));