document.cookie = 'third_party_var=value; SameSite=None; Secure';
document.cookie = 'third_party_var=metriplica; SameSite=None; Secure';
const main = document.getElementById('main');
// ------------------------Header . Navbar---------------------
const header = document.querySelector('.header');
const btn_menu = document.querySelector('.btn_menu');
const overlay = document.querySelector('.overlay');
const nav_links = document.querySelectorAll('.nav_link');

var click = Array.from(nav_links);
click.push(overlay, btn_menu);
click.forEach(e =>{
  e.addEventListener('click', ()=>{
    header.classList.toggle('open');
  });
});

// ------------------------Intersection Observer---------------------
const options = { rootMargin: '0px 300px 350px 300px' };
var images = document.querySelectorAll('[data-src]');
const lazyLoad = (image)=>{
  image.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.src = entry.target.dataset.src;
      obsLoad.unobserve(entry.target);
    }})}
const obsLoad = new IntersectionObserver(lazyLoad, options);
images.forEach((img)=>{
  obsLoad.observe(img);
});

// ------------------------Cambiar el Url para sacar los #url---------------------
window.onhashchange = function () {
  window.history.replaceState('', document.title, window.location.pathname + window.location.search)
};

// ---------------------Slider / Carousel-----------------------

const slider_hero = document.getElementById('slider_hero');
const slide_hero = document.querySelectorAll('.slide_hero');
const slide_hero_length = slide_hero.length;
const slide_hero_next = document.getElementById('slide_hero_next');
const slide_hero_prev = document.getElementById('slide_hero_prev');
var slide_hero_count = 0;

const slider_test = document.getElementById('slider_test');
const slide_test = document.querySelectorAll('.slide_test');
const slide_test_length = slide_test.length;
const slide_test_next = document.getElementById('slide_test_next');
const slide_test_prev = document.getElementById('slide_test_prev');
var slide_test_count = 0;

function nextSlider(){

  // --------------Slider Hero----------------

  slide_hero.forEach(slide=>{
    slide.classList.remove('active');
  });
  slide_hero_count++;
  if (slide_hero_count > (slide_hero_length - 1)) {
    slide_hero_count = 0;
  }
  slide_hero[slide_hero_count].classList.add('active');

  // --------------Slider Testimonios----------------

  slide_test.forEach(slide=>{
    slide.classList.remove('active');
  });
  slide_test_count++;
  if (slide_test_count > (slide_test_length - 1)) {
    slide_test_count = 0;
  }
  slide_test[slide_test_count].classList.add('active');
}

slide_hero_next.addEventListener('click', ()=>{
  nextSlider();
});
slide_test_next.addEventListener('click', ()=>{
  nextSlider();
});


function prevSlider(){
  // --------------Slider Hero----------------
  slide_hero.forEach(slide=>{
    slide.classList.remove('active');
  });
  slide_hero_count--;
  if (slide_hero_count < 0) {
    slide_hero_count = slide_hero_length - 1;
  }
  slide_hero[slide_hero_count].classList.add('active');

  // --------------Slider Testimonios----------------

  slide_test.forEach(slide=>{
    slide.classList.remove('active');
  });
  slide_test_count--;
  if (slide_test_count < 0) {
    slide_test_count = slide_test_length - 1;
  }
  slide_test[slide_test_count].classList.add('active');
};

slide_hero_prev.addEventListener('click', ()=>{
  prevSlider();
});
slide_test_prev.addEventListener('click', ()=>{
  prevSlider();
});

// Automatic slider
var playSlider;
var repeater = ()=>{
  playSlider = setInterval(() => {
    nextSlider();
  }, 3000);
};
repeater();
slider_hero.addEventListener('mouseover', ()=>{
  clearInterval(playSlider);
});
slider_hero.addEventListener('mouseout', ()=>{
  repeater();
});
slider_test.addEventListener('mouseover', ()=>{
  clearInterval(playSlider);
});
slider_test.addEventListener('mouseout', ()=>{
  repeater();
});
// End Automatic slider