const btn = document.getElementById('btn')

const addText = () =>{
    document.body.append('It seems as if it has been clicked!')
}

const changeBackground = () => {
    document.body.classList.toggle('black')
}

btn.addEventListener('click', changeBackground)