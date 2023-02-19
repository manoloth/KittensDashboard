// ==UserScript==
// @name        Kittens Dashboard
// @description Helper script for launching Kittens Dashboard
// @author      Tianhao Dong
// @include     https://kittensgame.com/web*
// @icon        https://kitten-science.github.io/kitten-scientists/assets/images/organization-logo64.png
// @grant       none
// @version     1
// ==/UserScript==

function isNil(subject) {
  return subject === null || subject === void 0;
}
function mustExist(subject) {
  if (isNil(subject)) {
    throw new Error(subject + ' is Nil!');
  }
  return subject;
}

const Helper = class {
  constructor(gamePage) {
    this.gamePage = gamePage;
  }

  static async waitForGame(timeout = 3e4) {
    const signals = [new Promise((r) => setTimeout(r, 2e3))];
    if (timeout < 0) {
      throw new Error('Timed out. Unable to find game page. Giving up.');
    }
    if (Helper.isGameLoaded()) {
      return mustExist(Helper.window);
    }
    console.log(`Waiting for game... (timeout: ${Math.round(timeout / 1e3)}s)`);
    await Promise.race(signals);
    return Helper.waitForGame(timeout - 2e3);
  }

  static isGameLoaded() {
    return !isNil(Helper.window.gamePage);
  }

  static get window() {
    try {
      return unsafeWindow;
    } catch (error) {
      return window;
    }
  }
};

let kdHelper = Helper;
(async () => {
  game = await kdHelper.waitForGame();
  console.log('Game page found');
  // sanity check - print craft ratio
  // console.log(game.gamePage.getCraftRatio());
  var mod = document.createElement('script');
  mod.src = 'https://cdn.jsdelivr.net/gh/Bioniclegenius/NummonCalc/NummonCalc.js';
  mod.id = 'kittens-dash';
  document.head.appendChild(mod);
  console.log('Main script loaded');
})().catch((error) => {
  console.error(error);
});
