const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-list');
const items = document.querySelectorAll(".item")

let initialScroll = window.pageYOffset;
        window.onscroll = () => {
            let currentScroll = window.pageYOffset;

            if(initialScroll > currentScroll) {
                document.getElementById("navbar").style.top = "0";
            }else {
                if(links.classList.contains('show-links')){
                    links.classList.remove('show-links');
                    toggle.children[0].classList.toggle('fa-bars');
                    toggle.childNodes[1].classList.toggle('fa-bars-staggered')
                }
                document.getElementById("navbar").style.top = "-90px";
            }
            initialScroll = currentScroll;
        }

toggle.onclick = ()=>{
    links.classList.toggle('show-links');
    toggle.children[0].classList.toggle('fa-bars');
    toggle.childNodes[1].classList.toggle('fa-bars-staggered') // childNodes also lists \n elements before and after elements.
}

items.forEach(el => {
    el.onclick = ()=> {
        links.classList.toggle('show-links');
        toggle.children[0].classList.toggle('fa-bars');
        toggle.childNodes[1].classList.toggle('fa-bars-staggered')
    }
})