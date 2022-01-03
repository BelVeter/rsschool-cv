//adaptive nav
function navToggle(){
  let nav=document.querySelector('.nav');
  let navList=document.querySelector('.nav-list');
  if(nav.style.display==='' || nav.style.display==='none') {
    nav.style.display='flex';
    nav.style.alignSelf='center';
    navList.style.flexDirection='column';
  }
  else {
    nav.style.display='';
    nav.style.alignSelf='';
    navList.style.flexDirection='row';
  }

}
