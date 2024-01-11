export default function caseForWin(elements, xOrCircle) {
    if (elements[0] === xOrCircle && elements[1] === xOrCircle && elements[2] === xOrCircle
        || elements[3] === xOrCircle && elements[4] === xOrCircle && elements[5] === xOrCircle
        || elements[6] === xOrCircle && elements[7] === xOrCircle && elements[8] === xOrCircle
        || elements[0] === xOrCircle && elements[3] === xOrCircle && elements[6] === xOrCircle
        || elements[1] === xOrCircle && elements[4] === xOrCircle && elements[7] === xOrCircle
        || elements[2] === xOrCircle && elements[5] === xOrCircle && elements[8] === xOrCircle
        || elements[0] === xOrCircle && elements[4] === xOrCircle && elements[8] === xOrCircle
        || elements[2] === xOrCircle && elements[4] === xOrCircle && elements[6] === xOrCircle) {
        return true;
    }
}
