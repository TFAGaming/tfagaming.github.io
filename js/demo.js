/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgb(173, 173, 173, 0.3)',
    lineColor: 'rgb(173, 173, 173, 0.3)'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

console.warn('You can view the repository on GitHub instead of viewing the source of this site. https://github.com/TFAGaming/tfagaming.github.io');

function show() {
  document.getElementById('anotherFunction').classList.toggle('Active');
}


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
