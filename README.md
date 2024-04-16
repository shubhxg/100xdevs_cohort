# 100xdevs cohort 
Repo contains all the learnings from the cohort, assignments and other practice code.

## Week 0 and 1
- Basic foundations of JS
- Async JS and Promises

## Week 2
- **Async JS Revision**
  - callbacks, promises, async/await
  - map() and filter() methods
- **Nodejs**
  - importing modules using `require(””)` (CJS) and `import _ from “module”` (ESM) 
  - modules
  - npm initialization and package installation
  - reading and writing files with `fs` module
  - making http server using `http` module
  - nodemon
- **Express**
  - needs of express framework
  - making a basic http server
  - listening to the port -> `app.listen(port)`
  - request methods
  - status codes
  - `(request, response) => {}`
  - accessing data from the body -> `req.body`
  - need of `express.json()`
  - `res.send, res.json`
 
## Week 3
- mongoDB and postgress installation
- middlewares, working with middlewares
- `next()` and use of it
- error based middlewares
- making a rate limiter using custom middleware
- prechecks
  - Auth
  - Input validation
- global catch: `app.use((err, req, res, next))`
- [zod](https://zod.dev/) library for input validation
- fetch API => `fetch('URL', { method: 'POST', .... })`
- hashing, encryption, jwt, local storage
- using jwt for Auth
- database introduction

## Week 4
- DOM Manipulation
  - accessing the elements
  - manipulating the elements
  - creating and editing the values of the elements
- Debouncing and throttling: `delaying the execution of function for an event`
- React Intro and it's need
