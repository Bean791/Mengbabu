// navbarnya
window.onscroll=function(){
    const awal=document.querySelector('.navig');
    const yakin= awal.offsetTop
    if (window.pageYOffset>yakin){
      awal.classList.add('beku');
    }else
    {
      awal.classList.remove('beku');
    }
  }
  // kedua
  const wadah=document.querySelector('html');
  const pen=document.querySelector('#tam');
  const bu=document.querySelector('#mata');
  const men=document.querySelector('#Mood')
  pen.addEventListener('click', function(){
  men.classList.toggle('hidden')
  bu.classList.toggle('hidden')
  wadah.classList.toggle('dark')
  })
  // pilihan
  const navnya=document.querySelector('#Menuku');
  const a=document.querySelector("#pilihan");
  a.addEventListener('click',function(){
  a.classList.toggle('nyala')
  navnya.classList.toggle('hidden')
  })