const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const html = document.querySelector("html");
const distance = banner.getBoundingClientRect().height/4;

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const portalinks = document.querySelectorAll(".portfolio__link");
const gallerylis = document.querySelectorAll(".gallery li")

window.addEventListener('scroll', ()=> {
  if(html.scrollTop > distance){
      header.classList.add("header--dark");
  }
  else {
    header.classList.remove("header--dark");
  }
})


portalinks.forEach((ele)=>{
  ele.addEventListener("click",(e)=>{
    e.preventDefault();
    portalinks.forEach((ele2)=>{
        if(ele == ele2) {
          ele2.classList.add("portfolio__link__active");
        }else {
          ele2.classList.remove("portfolio__link__active");
        }
    });
    showCategory(ele.getAttribute('href'));
  } )
})

// portalinks[0].click();

function showCategory(param){
  if(param=="all") {
    gallerylis.forEach((ele)=>{
      ele.style.display="block"
    })
  }else {
    gallerylis.forEach((ele)=>{
      if(ele.dataset.category==param){
        ele.style.display="block";
      }else {
        ele.style.display="none";
      }
    })
  }
}

burger.addEventListener('click', ()=>{
  menu.classList.toggle("menu--visible")
  console.log("Hola")
})