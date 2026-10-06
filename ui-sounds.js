(()=>{
  let ctx=null, interacted=false,lastScrollSound=0,scrollTimer=0;
  const muted=()=>{try{return localStorage.getItem('f1hub_mute')==='1'}catch(_){return false}};
  function tone(kind='click'){
    if(!interacted||muted())return;
    const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
    try{
      ctx=ctx||new Audio();if(ctx.state==='suspended')ctx.resume();
      const now=ctx.currentTime,osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sine';osc.frequency.setValueAtTime(kind==='scroll'?620:940,now);
      osc.frequency.exponentialRampToValueAtTime(kind==='scroll'?470:660,now+(kind==='scroll'?.025:.035));
      gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(kind==='scroll'?.012:.018,now+.004);
      gain.gain.exponentialRampToValueAtTime(.0001,now+(kind==='scroll'?.045:.055));
      osc.connect(gain);gain.connect(ctx.destination);osc.start(now);osc.stop(now+.06);
    }catch(_){ }
  }
  const activate=()=>{interacted=true};
  document.addEventListener('pointerdown',activate,{passive:true,once:true,capture:true});
  document.addEventListener('keydown',activate,{once:true,capture:true});
  document.addEventListener('touchstart',activate,{passive:true,once:true,capture:true});
  document.addEventListener('click',e=>{
    if(!interacted||e.target.closest('#mtog'))return;
    if(e.target.closest('button,a[href],[role="button"],.row,[data-session]'))tone('click');
  },true);
  function scrolling(){
    interacted=true;const now=performance.now();
    if(now-lastScrollSound>420){lastScrollSound=now;tone('scroll')}
    clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{},160);
  }
  window.addEventListener('scroll',scrolling,{passive:true});
  window.addEventListener('wheel',()=>{interacted=true},{passive:true});
})();
