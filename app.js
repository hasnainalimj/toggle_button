let state = true

function toggle() {
    const top = document.getElementById('top')
    const middle = document.getElementById('middle')
    const bottom = document.getElementById('bottom')

    if(state){
        state = false
        top.style.transform = 'rotate(50deg)'
        top.style.marginBottom = '-4px'
        middle.style.display = 'none'
        bottom.style.transform = 'rotate(-50deg)'
    } else {
        state = true
        top.style.transform = 'rotate(0deg)'
        top.style.marginBottom = '0px'
        middle.style.display = 'block'
        bottom.style.transform = 'rotate(0deg)'
    }
}
