const i=0;
if (i===0){
    window.addEventListener('load',()=>{
        const bignav = document.querySelector('.bignav')
        const nav = document.querySelector('.navbar')
        bignav.classList.add('active')
        nav.classList.add('active')
        i=1
    })
}