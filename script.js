var c=0,n=document.getElementById('n'),cart=document.querySelector('.cart'),$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
$('.title,.sub,.cat,.card,.feat,#contact .btn').forEach(function(e,i){e.classList.add('rv');e.style.setProperty('--d',((i%4)*.1)+'s')});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){var e=x.target;e.classList.add('in');io.unobserve(e);setTimeout(function(){e.classList.remove('rv','in');e.style.transitionDelay=''},1700)}})},{threshold:.15});
$('.rv').forEach(function(e){io.observe(e)});
var L=document.querySelector('.lines');for(var k=0;k<22;k++){var t=document.createElement('b');t.className='tw';var z=2+Math.random()*3;t.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;--t:'+(4+Math.random()*5)+'s;--dl:-'+Math.random()*8+'s';L.appendChild(t)}
function ripple(e){var h=e.currentTarget,r=h.getBoundingClientRect(),s=document.createElement('span');s.className='rp';s.style.left=(e.clientX-r.left)+'px';s.style.top=(e.clientY-r.top)+'px';h.appendChild(s);setTimeout(function(){s.remove()},750)}
$('.card,.cat,.btn,.bar a,.banner').forEach(function(e){e.addEventListener('pointerdown',ripple)});
function burst(x,y){for(var i=0;i<14;i++){var p=document.createElement('i');p.className='sp';var a=Math.random()*6.28,d=40+Math.random()*60;p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--x',Math.cos(a)*d+'px');p.style.setProperty('--y',Math.sin(a)*d+'px');document.body.appendChild(p);setTimeout(function(q){q.remove()},950,p)}}
document.querySelector('.banner img').addEventListener('click',function(e){burst(e.clientX,e.clientY)});
function addCart(btn){var r=btn.getBoundingClientRect(),q=cart.getBoundingClientRect(),f=document.createElement('i');f.className='fly';f.style.left=(r.left+r.width/2)+'px';f.style.top=(r.top+r.height/2)+'px';document.body.appendChild(f);burst(r.left+r.width/2,r.top+r.height/2);var a=f.animate([{transform:'translate(0,0) scale(1)'},{transform:'translate('+(q.left+q.width/2-r.left-r.width/2)+'px,'+(q.top+q.height/2-r.top-r.height/2)+'px) scale(.3)'}],{duration:800,easing:'cubic-bezier(.5,0,.8,.4)'});a.onfinish=function(){f.remove();c++;n.textContent=c;cart.classList.remove('bump');void cart.offsetWidth;cart.classList.add('bump')};btn.textContent='تمت ✓';btn.classList.add('ok')}
$('.add').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();addCart(b)})});
var lb=document.getElementById('lb');
$('.card').forEach(function(cd){cd.addEventListener('click',function(){document.getElementById('li').src=cd.querySelector('img').src;document.getElementById('lt').textContent=cd.querySelector('h3').textContent;document.getElementById('ld').textContent=cd.querySelector('p').textContent;document.getElementById('lp').textContent=cd.querySelector('.price').textContent;var a=document.getElementById('la');a.classList.remove('ok');lb.classList.add('on')})});
document.getElementById('la').addEventListener('click',function(){addCart(this)});
document.getElementById('lx').addEventListener('click',function(){lb.classList.remove('on')});
lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('on')});
$('.bar a').forEach(function(a){a.addEventListener('click',function(){a.classList.remove('pop');void a.offsetWidth;a.classList.add('pop');setTimeout(function(){a.classList.remove('pop')},650)})});
$('.soc a').forEach(function(a){a.addEventListener('pointerdown',ripple);a.addEventListener('click',function(e){var r=a.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);a.classList.remove('pop');void a.offsetWidth;a.classList.add('pop');setTimeout(function(){a.classList.remove('pop')},750)})});
var mk=document.getElementById('mk');mk.addEventListener('pointerdown',ripple);mk.addEventListener('click',function(){var r=mk.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);mk.classList.remove('pop');void mk.offsetWidth;mk.classList.add('pop');setTimeout(function(){mk.classList.remove('pop')},750)});
var sup=document.querySelector('.sup');sup.addEventListener('pointerdown',ripple);sup.addEventListener('click',function(){var r=sup.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);sup.classList.remove('pop');void sup.offsetWidth;sup.classList.add('pop');setTimeout(function(){sup.classList.remove('pop')},750)});

(function(){
var items={},cartEl=document.querySelector('.cart'),nEl=document.getElementById('n'),cp=document.getElementById('cp'),cl=document.getElementById('cl'),tt=document.getElementById('ctt');
function cnt(){var t=0;for(var k in items)t+=items[k].q;return t}
function fmt(x){return x.toLocaleString('en-US')}
function render(){var t=cnt(),sum=0,h='';nEl.textContent=t;nEl.classList.toggle('sm',t>9);
for(var k in items){var o=items[k];sum+=o.p*o.q;h+='<div class="ri" data-k="'+k+'"><img src="'+o.i+'" alt=""><div class="t"><b>'+o.n+'</b><span>'+fmt(o.p*o.q)+' ر.س</span></div><div class="q"><button data-a="m">−</button><i>'+o.q+'</i><button data-a="p">+</button></div><button class="rm" data-a="x" aria-label="حذف">✕</button></div>'}
cl.innerHTML=h||'<div class="em">السلة فارغة</div>';tt.innerHTML=t?'<span>المجموع</span><span>'+fmt(sum)+' ر.س</span>':'';}
function bump(){cartEl.classList.remove('bump');void cartEl.offsetWidth;cartEl.classList.add('bump')}
window.addCart=function(btn){
var card=btn.closest('.card'),n,p,i;
if(card){n=card.querySelector('h3').textContent;p=card.querySelector('.price').textContent;i=card.querySelector('img').src}else{n=document.getElementById('lt').textContent;p=document.getElementById('lp').textContent;i=document.getElementById('li').src}
var r=btn.getBoundingClientRect(),q=cartEl.getBoundingClientRect(),f=document.createElement('i');f.className='fly';f.style.left=(r.left+r.width/2)+'px';f.style.top=(r.top+r.height/2)+'px';document.body.appendChild(f);burst(r.left+r.width/2,r.top+r.height/2);
var a=f.animate([{transform:'translate(0,0) scale(1)'},{transform:'translate('+(q.left+q.width/2-r.left-r.width/2)+'px,'+(q.top+q.height/2-r.top-r.height/2)+'px) scale(.3)'}],{duration:800,easing:'cubic-bezier(.5,0,.8,.4)'});
a.onfinish=function(){f.remove();if(!items[n])items[n]={n:n,p:parseInt(p.replace(/\D/g,''),10)||0,i:i,q:0};items[n].q++;render();bump()};
var old=btn.innerHTML;btn.textContent='تمت ✓';btn.classList.add('ok');setTimeout(function(){btn.innerHTML=old;btn.classList.remove('ok')},1300)};
cartEl.addEventListener('click',function(e){e.preventDefault();render();cp.classList.add('on')});
document.getElementById('cx').addEventListener('click',function(){cp.classList.remove('on')});
cp.addEventListener('click',function(e){if(e.target===cp)cp.classList.remove('on')});
cl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var row=b.closest('.ri'),k=row.getAttribute('data-k'),a=b.getAttribute('data-a');
if(a==='p')items[k].q++;else if(a==='m'){items[k].q--;if(items[k].q<=0)delete items[k]}else delete items[k];render();bump()});
render();
})();
(function(){
function buy(n,p){window.open('https://wa.me/9647862525999?text='+encodeURIComponent('مرحبًا، أريد شراء: '+n+' ('+p+')'),'_blank','noopener')}
document.querySelectorAll('.card .buy').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();var c=b.closest('.card');burst(e.clientX,e.clientY);buy(c.querySelector('h3').textContent,c.querySelector('.price').textContent)})});
document.getElementById('lbuy').addEventListener('click',function(e){burst(e.clientX,e.clientY);buy(document.getElementById('lt').textContent,document.getElementById('lp').textContent)});
})();

(function(){
if(!window.gsap||!window.ScrollTrigger)return;
gsap.registerPlugin(ScrollTrigger);
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function words(el){var ws=[];(function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t))f.appendChild(document.createTextNode(t));else{var s=document.createElement('span');s.className='w';s.textContent=t;f.appendChild(s);ws.push(s)}});c.parentNode.replaceChild(f,c)}else if(c.nodeType===1)walk(c)})})(el);return ws}
document.querySelectorAll('.title,.sub').forEach(function(e){e.classList.remove('rv','in')});
var intro=document.querySelector('.cta p');
if(intro){intro.style.animation='none';var iw=words(intro);gsap.from(iw,{autoAlpha:0,y:26,duration:.8,ease:'power3.out',stagger:.07,delay:.3})}
document.querySelectorAll('.about .lead').forEach(function(p){
var w=words(p);
gsap.fromTo(w,{opacity:.12,y:22},{opacity:1,y:0,ease:'none',stagger:.1,scrollTrigger:{trigger:p,start:'top 90%',end:'bottom 55%',scrub:.6}})});
document.querySelectorAll('.title').forEach(function(t){
gsap.fromTo(t,{y:60,autoAlpha:0,scale:.9},{y:0,autoAlpha:1,scale:1,ease:'power2.out',scrollTrigger:{trigger:t,start:'top 92%',end:'top 55%',scrub:.6}})});
var ft=document.querySelector('footer');
if(ft)gsap.fromTo(ft,{y:30,autoAlpha:0},{y:0,autoAlpha:1,scrollTrigger:{trigger:ft,start:'top 100%',end:'top 80%',scrub:true}});
function rf(){ScrollTrigger.refresh()}
window.addEventListener('load',rf);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(rf);
})();
