import playerWin from "./playerWin.js";

let value = 'X';

export default function clickToPlay(ev: Event): void {
    const element = (ev.target as HTMLInputElement);
    const message = document.getElementById('message');
    const player1 = (document.getElementById('player1') as HTMLInputElement).value;
    const player2 = (document.getElementById('player2') as HTMLInputElement).value;

    if (!player1 || !player2) {
        return alert('Insira o nome dos jogadores para poder jogar!')
    }

    if (!element.textContent && value === 'X') {
        element.textContent = value;
        element.classList.add('Xcolor');
        (message as HTMLParagraphElement).textContent = `É a vez do jogador ${player2} (O)`;
        value = 'O';

        if (playerWin()) {
            value = 'X'
        }
    };

    if (!element.textContent && value === 'O') {
        element.textContent = value;
        element.classList.add('Ocolor');
        (message as HTMLParagraphElement).textContent = `É a vez do jogador ${player1} (X)`
        value = 'X';

        playerWin();
    };
};