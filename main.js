// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);





/*const imgs=document.querySelectorAll('.img');
const wrapper=document.querySelector('#about');

 let tl = gsap.timeline({
   scrollTrigger:{
     trigger: wrapper,
     start:'top top',
    
     markers: true,
     srub: true 
       }
 });
imgs.forEach(img=>{

   const speed = img.getAttribute('data-speed')
   tl.to(img,{
    y:20 * speed,
    duration: 2
  },0);
  console.log(speed)

 });*/
console.log(1)

const titles = document.querySelectorAll('h1');
console.log(titles)
const paragraphs = document.querySelectorAll('#about p');
console.log(paragraphs)

titles.forEach(title => {
  document.fonts.ready.then(() => {
  let splitTitle = SplitText.create(title, { type: 'words' });
  
  gsap.from(splitTitle.words, {
    scrollTrigger: {
      trigger: title,
      start: 'top center'
     
    },
    yPercent: 20,
    opacity: 0,
    delay: .1,
    stagger: 0.05
  }, 0);
})
});

paragraphs.forEach(paragraph => {
  document.fonts.ready.then(() => {
  let splitParagraph = SplitText.create(paragraph, { type: 'lines' });

  gsap.from(splitParagraph.lines, {
    scrollTrigger: {
      trigger: paragraph,
      start: 'top center',
      
    },
    yPercent: 20,
    opacity: 0,
    delay: .1,
    stagger: 0.05
  }, 0);
})
})


