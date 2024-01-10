let value = 'X';

const clickToPlay = (ev: Event): void => {
    const element = (ev.target as HTMLInputElement);
    const player1 = (document.getElementById('player1') as HTMLInputElement).value;
    const player2 = (document.getElementById('player2') as HTMLInputElement).value;
    const namePlayer = document.getElementById('message');

    if (!player1 || !player2) {
        return alert('Insira o nome dos jogadores para poder jogar!')
    }

    if (!element.textContent && value === 'X') {
        element.textContent = value;
        (namePlayer as HTMLParagraphElement).textContent = `É a vez do jogador ${player2} (O)`;
        value = 'O';
        return
    }

    if (!element.textContent && value === 'O') {
        element.textContent = value;
        (namePlayer as HTMLParagraphElement).textContent = `É a vez do jogador ${player1} (X)`
        value = 'X'
        return
    }
}

document.getElementById('element1')?.addEventListener('click', clickToPlay)
document.getElementById('element2')?.addEventListener('click', clickToPlay)
document.getElementById('element3')?.addEventListener('click', clickToPlay)
document.getElementById('element4')?.addEventListener('click', clickToPlay)
document.getElementById('element5')?.addEventListener('click', clickToPlay)
document.getElementById('element6')?.addEventListener('click', clickToPlay)
document.getElementById('element7')?.addEventListener('click', clickToPlay)
document.getElementById('element8')?.addEventListener('click', clickToPlay)
document.getElementById('element9')?.addEventListener('click', clickToPlay)

