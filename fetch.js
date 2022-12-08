// google image
// all image/data are downloaded from server (backend) to your local

// through protocols: such as http, https(s:security), ftp
// https is a protocal to fetch resourses (html, doc/img, video/audio)

// More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

// how? API --> application programme interface
// 1. XHLHttp Request API (core of AJAX)
// 2. fetch API (ES2015): return a promise in response to request
// 3. axios: 3rd party API: https://www.npmjs.com/package/axios

// what is promise? example: pre-marriage/post-marriage

// sync nv async
// synchronous vs async
// synchronous
// |-----A-----|
//               |-------B------|

// Async
// |----A----|
//     |----B----|

// how do we deal with async?
// 1. promise --> A promise has the following status:
// pending: initial state
// fulfilled: the operation was completed successfully
// rejected: operation failed
// settled

// 2. try/catch combined with async/await //todo: will talk/learn it in backend
console.log('a')
// fetch('https://jsonplaceholder.typicode.com/users')
//     // need to format file to json format, handle files
//     .then(response => response.json())
//     .then(
//         results => console.log(results)
//     )
//     .catch(error => console.log(error))
//     .finally(() => console.log('finish'))

console.log('c')
// print a, c, response, finish

// line1: promise pending
// line2: error function
// line3: error function
// line4: can be deleted

// JSON file
// {
//     'car' : "ford",
//
// }
const eleBody = document.querySelector('body')

fetch('https://jsonplaceholder.typicode.com/users')
    // need to format file to json format, handle files
    .then(response => response.json())
    .then(
        results => {
            results.forEach(item => {
                const eleP = document.createElement('p')
                eleP.innerText = item.name
                eleBody.appendChild(eleP)
            })
        }
    )
    .catch(error => console.log(error))
    .finally(() => console.log('finish'))



