var score = 0
var last = 0
const score_box = document.querySelector('#score')
const patty = document.querySelectorAll('.patty')
const grill = document.querySelector('#grill')
patty.forEach(function(elm){
  elm.addEventListener('click', function(){
    if(elm.classList.contains('burn')){
      elm.classList.toggle('burn')  
      score++
      score_box.innerHTML = score
    }
    elm.classList.toggle('flip')

    setTimeout(function(){
      elm.classList.add('flipped')
    },250)
    setTimeout(function(){
      elm.classList.toggle('flip')
    },500)
  })  
})

function burnPatty() {
  var pat = Math.floor(Math.random()*patty.length)
  if(pat == last) {
    var pat = Math.floor(Math.random()*patty.length)
    patty[pat].classList.add('burn')
  } else {
    patty[pat].classList.add('burn')
  }  
  last = pat
}

var meat = 1
function cookPatty(){
  meat++
  grill.classList.add('meat'+meat)
}

var cook = setInterval(cookPatty,2500)
var play = setInterval(burnPatty,1000)
setTimeout(function(){
  grill.style.pointerEvents = 'none'
  clearInterval(play)
  clearInterval(cook)
  patty.forEach(function(elm){
    if(elm.classList.contains('burn')){
      elm.classList.toggle('burn')
      elm.style.backgroundColor = '#333'
    }
  })
},10000)

const sp = document.querySelector('#spatula')
window.addEventListener('mousemove',function(e){
  var x = e.clientX
  var y = e.clientY
  var body_loc = document.body.getBoundingClientRect()
  sp.style.left = x - body_loc.left - 20 + 'px'
  sp.style.top = y - body_loc.top - 20 + 'px'
})