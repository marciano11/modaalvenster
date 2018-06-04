var grzag = document.createElement('div');
document.body.appendChild(grzag);
var sluitknop = document.createElement('span');
sluitknop.innerHTML = '&Cross;';
sluitknop.className = 'sluitknop';

var modaal = (function() {
  var modaalVenster = document.createElement('div');
  modaalVenster.className = 'modaal-venster';
  modaalVenster.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  var modaalInhoud = document.createElement('div');
  modaalInhoud.className = 'modaal-inhoud';

  return {
    centreren: function() {
      var boven = Math.max((grzag.offsetHeight - modaalVenster.offsetHeight)/2, 0);
      var links = Math.max((grzag.offsetWidth - modaalVenster.offsetWidth)/2, 0);
      modaalVenster.style.top = boven + 'px';
      modaalVenster.style.left = links + 'px';
    },
    open: function(parameter) {
      modaalInhoud.appendChild(parameter);
      modaalVenster.appendChild(modaalInhoud);
      modaalVenster.appendChild(sluitknop);
      grzag.className = 'grijze-achtergrond';
      grzag.appendChild(modaalVenster);
      modaal.centreren();
      window.addEventListener('resize', modaal.centreren, true);
    },
    sluiten: function() {
      modaalVenster.innerHTML = '';
      grzag.removeChild(modaalVenster);
      grzag.className = '';
    }
  }
}());

grzag.addEventListener('click', modaal.sluiten);
sluitknop.addEventListener('click', modaal.sluiten);
