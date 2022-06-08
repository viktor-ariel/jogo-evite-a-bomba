
const student = document.querySelector('.student');
const bomber = document.querySelector('.bomber');


const jump = () => {
    student.classList.add('jump');

    setTimeout ( () => {

        student.classList.remove('jump');
    }, 500 );
}

const loop = setInterval(() => {

    console.log('loop')

    const bomberPosition = bomber.offsetLeft;
    const studentPosition = +window.getComputedStyle(student).bottom.replace('px', '')

    console.log(studentPosition)
    
    if ( bomberPosition <= 120 && bomberPosition > 0 && studentPosition < 80){
        bomber.style.animation = 'none';
        bomber.style.left = `${bomberPosition}px`


        student.style.animation = 'none';
        student.style.bottom = `${studentPosition}px`

        student.src = "./images/reprovado.jpg"
        student.style.width = '250px'

        clearInterval(loop)
    }


},10);

document.addEventListener('keydown', jump);