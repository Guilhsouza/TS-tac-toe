import clickToPlay from "../script/clickToPlay.js";
export default function removeEvents() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    (_a = document.getElementById('element1')) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', clickToPlay);
    (_b = document.getElementById('element2')) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', clickToPlay);
    (_c = document.getElementById('element3')) === null || _c === void 0 ? void 0 : _c.removeEventListener('click', clickToPlay);
    (_d = document.getElementById('element4')) === null || _d === void 0 ? void 0 : _d.removeEventListener('click', clickToPlay);
    (_e = document.getElementById('element5')) === null || _e === void 0 ? void 0 : _e.removeEventListener('click', clickToPlay);
    (_f = document.getElementById('element6')) === null || _f === void 0 ? void 0 : _f.removeEventListener('click', clickToPlay);
    (_g = document.getElementById('element7')) === null || _g === void 0 ? void 0 : _g.removeEventListener('click', clickToPlay);
    (_h = document.getElementById('element8')) === null || _h === void 0 ? void 0 : _h.removeEventListener('click', clickToPlay);
    (_j = document.getElementById('element9')) === null || _j === void 0 ? void 0 : _j.removeEventListener('click', clickToPlay);
}
