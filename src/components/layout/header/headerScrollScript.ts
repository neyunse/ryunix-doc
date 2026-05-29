/** Runs once in the browser; scroll fade only on md+ (matches site header layout breakpoint). */
export const headerScrollScript = `(function(){
  var FADE=100;
  var ID='site-header';
  var MQ='(min-width: 768px)';
  var desktop=window.matchMedia(MQ);
  var ticking=false;
  function isDesktop(){return desktop.matches;}
  function scrollY(){
    return window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0;
  }
  function apply(){
    var el=document.getElementById(ID);
    if(!el)return false;
    if(!isDesktop()){
      el.style.setProperty('--header-opacity','1');
      return true;
    }
    var p=Math.min(scrollY()/FADE,1);
    el.style.setProperty('--header-opacity',String(p));
    return true;
  }
  function onScroll(){
    if(ticking)return;
    ticking=true;
    requestAnimationFrame(function(){
      apply();
      ticking=false;
    });
  }
  function onBreakpoint(){apply();}
  window.addEventListener('scroll',onScroll,{passive:true});
  document.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('popstate',apply);
  window.addEventListener('pageshow',function(){apply();});
  if(desktop.addEventListener){
    desktop.addEventListener('change',onBreakpoint);
  }else if(desktop.addListener){
    desktop.addListener(onBreakpoint);
  }
  function waitForHeader(n){
    if(apply()||n<=0)return;
    requestAnimationFrame(function(){waitForHeader(n-1);});
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){waitForHeader(120);});
  }else{
    waitForHeader(120);
  }
})();`;
