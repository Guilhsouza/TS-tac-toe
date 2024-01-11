import removeEvents from "../utils/removeEvents.js";
import playAgain from "../script/playAgain.js";

export default function response(winOrTie: string, player?: string) {
    const message = document.getElementById('message');

    message?.classList.add(winOrTie);

    if (winOrTie === 'win') {
        (document.getElementById('message') as HTMLParagraphElement).textContent = `O jogador(a) ${player} venceu!`;
    };

    if (winOrTie === 'tie') {
        (document.getElementById('message') as HTMLParagraphElement).textContent = `Empate!`;
    };

    playAgain();
    return removeEvents();
}