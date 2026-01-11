gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector('.pin-container');
const wrapper= document.querySelector('.image-wrapper');
//const images = document.querySelectorAll('.parent-img');

let sections=gsap.utils.toArray('.parent-img');
gsap.to( sections,{
  xPercent:-100 *(sections.length-1),
  ease:'none',
scrollTrigger:{
    trigger: wrapper,
    start:'top top',
    pin:true,
    scrub: 1,
    /*pimSpacing:false,*/
    duration: 2,
    snap: 1/(sections.length-1),
    end:()=>"+=" + document.querySelector('.image-wrapper').offsetWidth
  }
});
  

/*let sections=gsap.utils.toArray('.parent-img');
sections.forEach(section=>{
  gsap.to( section,{
  xPercent:-100 *(sections.length-1),
  ease:'none',
scrollTrigger:{
    trigger: wrapper,
    start:'top top',
    pin:true,
    scrub: 1,
    snap: 1/(sections.length-1),
    end:()=>"+=" + document.querySelector('.image-wrapper').offsetWidth
  }
});
  

})*/


