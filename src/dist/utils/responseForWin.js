import removeEvents from "../utils/removeEvents.js";
import playAgain from "../script/playAgain.js";
export default function response(winOrTie, player) {
    const message = document.getElementById('message');
    message === null || message === void 0 ? void 0 : message.classList.add(winOrTie);
    if (winOrTie === 'win') {
        document.getElementById('message').textContent = `O jogador ${player} venceu!`;
    }
    ;
    if (winOrTie === 'tie') {
        document.getElementById('message').textContent = `Empate!`;
    }
    ;
    playAgain();
    return removeEvents();
}
