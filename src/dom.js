const body = document.querySelector('body')

const addStyle = () => {
    body.style.backgroundColor = 'blue'
}

const addText = text => {
    const title = document.createElement('h1')
    title.textContent = text
    title.style.color = 'white'
    body.appendChild(title)
}

export {addStyle, addText}