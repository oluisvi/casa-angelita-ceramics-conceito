const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{
  const header=document.querySelector('.site-header');
  const open=menu.getAttribute('aria-expanded')==='true';
  menu.setAttribute('aria-expanded',String(!open));
  let panel=document.querySelector('.mobile-nav');
  if(!panel){panel=document.createElement('nav');panel.className='mobile-nav';panel.setAttribute('aria-label','Mobile navigation');panel.innerHTML='<a href="#studio">The studio</a><a href="#experiences">Experiences</a><a href="#visit">Find us</a><a href="https://www.meetup.com/casa-angelita-ceramics/" target="_blank" rel="noreferrer">Find a workshop ↗</a>';header.after(panel)}
  panel.hidden=open;
});
