import clickToPlay from "../script/clickToPlay.js"

export default function removeEvents() {
    document.getElementById('element1')?.removeEventListener('click', clickToPlay)
    document.getElementById('element2')?.removeEventListener('click', clickToPlay)
    document.getElementById('element3')?.removeEventListener('click', clickToPlay)
    document.getElementById('element4')?.removeEventListener('click', clickToPlay)
    document.getElementById('element5')?.removeEventListener('click', clickToPlay)
    document.getElementById('element6')?.removeEventListener('click', clickToPlay)
    document.getElementById('element7')?.removeEventListener('click', clickToPlay)
    document.getElementById('element8')?.removeEventListener('click', clickToPlay)
    document.getElementById('element9')?.removeEventListener('click', clickToPlay)
}