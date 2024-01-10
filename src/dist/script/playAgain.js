import addEvents from "../utils/addEvents.js";
export default function playAgain() {
    const message = document.getElementById('message');
    const playAgain = document.getElementById('play-again');
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Jogar Novamente';
    playAgainBtn.classList.add('play-again-btn');
    playAgain === null || playAgain === void 0 ? void 0 : playAgain.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () => {
        const theGame = document.querySelector('.the-game');
        theGame === null || theGame === void 0 ? void 0 : theGame.querySelectorAll('.elements').forEach((element) => {
            element.textContent = '';
            element.classList.remove('Xcolor');
            element.classList.remove('Ocolor');
        });
        message.classList.remove('win');
        message.classList.remove('tie');
        message.innerHTML = 'O jogador que selecionou o <b>X</b> começa!';
        addEvents();
        playAgain === null || playAgain === void 0 ? void 0 : playAgain.removeChild(playAgainBtn);
    });
}
