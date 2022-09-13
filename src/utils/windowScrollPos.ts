export const windowScrollPos = () => {
  const elem = document.querySelector('.MainLayout_container__y86U5') as HTMLElement | null
  let height = 0
  if(elem !== null) {
    height = elem.offsetTop - 120
  }
  if(window.scrollY < 150){
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    })
  } 
}