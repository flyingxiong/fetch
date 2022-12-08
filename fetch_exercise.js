const eleBody = document.querySelector('body')
const requestInfo = ['name', 'email', 'phone']
// const eleInfo = document.querySelectorAll('.info')
const stylesheet = document.styleSheets[0]
const tableFirstLine = document.querySelector('ul')

tableFirstLine.style.fontSize = '20px'
// debugger
// method 1: use querySelectorAll and loop all the elements
// method 2: use stylesheet.insertRule --> does not work

const editCSS = document.createElement('style')
editCSS.innerHTML = `.info {width: ${Math.round(1/requestInfo.length * 100) / 100 *100}%;}`;
document.body.appendChild(editCSS);
console.log(editCSS)


const createInfoSection = (infoArray) => {
    let eleUl = document.createElement('ul')
    eleUl.classList.add('container')
    for (let i = 0; i < requestInfo.length; i++) {
        const eleLi = document.createElement('li')
        eleLi.classList.add('info')
        eleLi.innerText = infoArray[i]
        eleUl.appendChild(eleLi)
    }
    eleBody.appendChild(eleUl)
}


fetch('https://jsonplaceholder.typicode.com/users')
    // need to format file to json format, handle files
    .then(response => response.json())
    .then(
        results => {
            console.log(results)
            results.forEach(item => {
                let infoArray = []
                requestInfo.forEach(info => {
                    infoArray.push(item[info])
                    console.log(infoArray)
                })
                createInfoSection(infoArray)
            })
        }
    )
    .catch(error => console.log(error))
    .finally(() => console.log('finish'))

// eleInfo.style.width = 1/requestInfo.length*100 + '% !important;'
console.log(stylesheet)