'use strict';

var pad = document.querySelectorAll('.pad');

for (var i = 0; i < pad.length; i++) {
    var p = pad[i];
    var soundName = p.attributes['data-sound'].value;
    prepareButton(p, soundName);
}

function prepareButton(buttonEl, soundName) {
    var audio = new Audio('./wav/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    });
}
