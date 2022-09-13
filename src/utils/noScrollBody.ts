export const noScrollBody = (param?: boolean) => {
    param ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
}