function mousedown()
{ if (browserid == "Microsoft Internet Explorer" && browserversion >= 4) { document.all.sound.src = '/img/click.wav'} }
function mouseout(o) { o.style.backgroundColor='#E9BE97' }
function mouseover(o) { o.style.backgroundColor='#fffaaa';
if (browserid == "Microsoft Internet Explorer" && browserversion >= 4)
{ document.all.sound.src = '/img/over.wav' } }
