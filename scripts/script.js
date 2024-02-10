// const hamMenu = document.querySelector('.ham-menu');
// const offScreenMenu = document.querySelector('.off-screen-menu')

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active')
// })
const navBarList = document.getElementById('navbar-list')


function hamMenuActivate(){
    console.log("fuck you");
    if(navBarList.classList.contains('toggled')){
        navBarList.classList.remove('toggled')
        navBarList.classList.add('untoggled')
    }
    else{
        navBarList.classList.remove('untoggled')
        navBarList.classList.add('toggled')
    }
}