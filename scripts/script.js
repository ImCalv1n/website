const navBarList = document.getElementById('navbar-list')
const scrollers = document.querySelectorAll('.scroller')

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

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner= scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}