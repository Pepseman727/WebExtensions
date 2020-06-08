/*function ShowTooltip() {
    let tooltip = document.getElementById('tooltip');
    console.log('taken');
    console.log(tooltip);
    tooltip.setAttribute('style', 'display: block');
}*/

let switchButton = document.getElementById('switcher');

switchButton.onclick = function() {
    let button = document.getElementById('switcher');
    if (button.value === 'off') {
        img = document.getElementById('OnOff');
        img.setAttribute('src', '../buttons/play32.ico');
        button.setAttribute('value', 'on');
    }
    else {
        img = document.getElementById('OnOff');
        img.setAttribute('src', '../buttons/pause32.ico');
        button.setAttribute('value', 'off');
    }
     
}

