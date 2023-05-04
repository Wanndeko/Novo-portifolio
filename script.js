const btnUp = document.querySelector('#btn-up')

btnUp.addEventListener('click', ()=>{
    window.scrollTo(0,0)
    document.removeEventListener('scroll', ocult)
})

const ocult = ()=>{
    if(window.scrollY > 10){
        btnUp.style.display = 'flex'
    }else{
        btnUp.style.display = 'none'
    }
}

document.addEventListener('scroll', ()=>{
    ocult()
    document.removeEventListener('scroll', ocult)
})

ocult()