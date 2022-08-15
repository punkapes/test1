(function() {
  var blurImgs, ct, layers, xFactor, yFactor;

  ct = document.querySelector('.container');

  layers = document.querySelectorAll('.container .layer');

  // squirrel = document.querySelector('.squirrel')
  xFactor = 1.25;

  yFactor = 2;

  blurImgs = function(evt) {
    var offsetX, offsetY, xRatio, yRatio;
    layers = document.querySelectorAll('.container .layer');
    xRatio = evt.screenX / window.outerWidth - 0.5;
    yRatio = evt.screenY / window.outerHeight - 1;
    layers.forEach(function(el, i) {
      var offsetX, offsetY;
      offsetX = -50 + (xRatio * xFactor * (i + 1));
      offsetY = -50 + (yRatio * yFactor * (i + 1));
      el.style.transform = 'translateX(' + offsetX + '%) translateY(' + offsetY + '%)';
      el.style.filter = 'blur(' + (4 - i) + 'px)';
    });
    offsetX = xRatio * xFactor * 10;
    return offsetY = yRatio * yFactor * 10;
  };

  // squirrel.style.transform = 'translateX(' + offsetX + '%) translateY(' + offsetY + '%)'
  // squirrel.style.filter = 'blur(' + (4-i) + 'px)'
  window.onload = function() {
    blurImgs;
    return setTimeout((function() {
      layers = document.querySelectorAll('.container .layer');
      return layers.forEach(function(el, i) {
        el.style.transition = 'none';
      });
    }), 2000);
  };

  window.onmousemove = function(evt) {
    return blurImgs(evt);
  };

  // document.onmousedown = (e) ->
//   e.preventDefault
//   squirrel.style.animationName = 'none'
//   setTimeout ( ->
//     squirrel.style.animationName = 'bounce'
//   ), 100

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQTs7RUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkI7O0VBQ0wsTUFBQSxHQUFTLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixtQkFBMUIsRUFEVDs7O0VBR0EsT0FBQSxHQUFVOztFQUNWLE9BQUEsR0FBVTs7RUFFVixRQUFBLEdBQVcsUUFBQSxDQUFDLEdBQUQsQ0FBQTtBQUNYLFFBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUE7SUFBRSxNQUFBLEdBQVMsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1CQUExQjtJQUNULE1BQUEsR0FBUyxHQUFHLENBQUMsT0FBSixHQUFjLE1BQU0sQ0FBQyxVQUFyQixHQUFrQztJQUMzQyxNQUFBLEdBQVMsR0FBRyxDQUFDLE9BQUosR0FBYyxNQUFNLENBQUMsV0FBckIsR0FBbUM7SUFDNUMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFBLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBQTtBQUNqQixVQUFBLE9BQUEsRUFBQTtNQUFJLE9BQUEsR0FBVSxDQUFDLEVBQUQsR0FBTSxDQUFDLE1BQUEsR0FBUyxPQUFULEdBQW1CLENBQUMsQ0FBQSxHQUFFLENBQUgsQ0FBcEI7TUFDaEIsT0FBQSxHQUFVLENBQUMsRUFBRCxHQUFNLENBQUMsTUFBQSxHQUFTLE9BQVQsR0FBbUIsQ0FBQyxDQUFBLEdBQUUsQ0FBSCxDQUFwQjtNQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVQsR0FBcUIsYUFBQSxHQUFnQixPQUFoQixHQUEwQixnQkFBMUIsR0FBNkMsT0FBN0MsR0FBdUQ7TUFDNUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFULEdBQWtCLE9BQUEsR0FBVSxDQUFDLENBQUEsR0FBRSxDQUFILENBQVYsR0FBa0I7SUFKdkIsQ0FBZjtJQU9BLE9BQUEsR0FBVSxNQUFBLEdBQVMsT0FBVCxHQUFtQjtXQUM3QixPQUFBLEdBQVUsTUFBQSxHQUFTLE9BQVQsR0FBbUI7RUFacEIsRUFOWDs7OztFQXFCQSxNQUFNLENBQUMsTUFBUCxHQUFnQixRQUFBLENBQUEsQ0FBQTtJQUNkO1dBQ0EsVUFBQSxDQUFXLENBQUUsUUFBQSxDQUFBLENBQUE7TUFDWCxNQUFBLEdBQVMsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1CQUExQjthQUNULE1BQU0sQ0FBQyxPQUFQLENBQWUsUUFBQSxDQUFDLEVBQUQsRUFBSyxDQUFMLENBQUE7UUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVQsR0FBc0I7TUFEVCxDQUFmO0lBRlcsQ0FBRixDQUFYLEVBS0csSUFMSDtFQUZjOztFQVNoQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsR0FBRCxDQUFBO1dBQ25CLFFBQUEsQ0FBUyxHQUFUO0VBRG1COztFQTlCckI7Ozs7OztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbmxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIgLmxheWVyJylcbiMgc3F1aXJyZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1aXJyZWwnKVxueEZhY3RvciA9IDEuMjVcbnlGYWN0b3IgPSAyXG5cbmJsdXJJbWdzID0gKGV2dCkgLT5cbiAgbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lciAubGF5ZXInKVxuICB4UmF0aW8gPSBldnQuc2NyZWVuWCAvIHdpbmRvdy5vdXRlcldpZHRoIC0gMC41XG4gIHlSYXRpbyA9IGV2dC5zY3JlZW5ZIC8gd2luZG93Lm91dGVySGVpZ2h0IC0gMVxuICBsYXllcnMuZm9yRWFjaCAoZWwsIGkpIC0+XG4gICAgb2Zmc2V0WCA9IC01MCArICh4UmF0aW8gKiB4RmFjdG9yICogKGkrMSkpXG4gICAgb2Zmc2V0WSA9IC01MCArICh5UmF0aW8gKiB5RmFjdG9yICogKGkrMSkpXG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIG9mZnNldFggKyAnJSkgdHJhbnNsYXRlWSgnICsgb2Zmc2V0WSArICclKSdcbiAgICBlbC5zdHlsZS5maWx0ZXIgPSAnYmx1cignICsgKDQtaSkgKyAncHgpJ1xuICAgIHJldHVyblxuICBcbiAgb2Zmc2V0WCA9IHhSYXRpbyAqIHhGYWN0b3IgKiAxMFxuICBvZmZzZXRZID0geVJhdGlvICogeUZhY3RvciAqIDEwXG4gICMgc3F1aXJyZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIG9mZnNldFggKyAnJSkgdHJhbnNsYXRlWSgnICsgb2Zmc2V0WSArICclKSdcbiAgIyBzcXVpcnJlbC5zdHlsZS5maWx0ZXIgPSAnYmx1cignICsgKDQtaSkgKyAncHgpJ1xud2luZG93Lm9ubG9hZCA9ICgpIC0+XG4gIGJsdXJJbWdzXG4gIHNldFRpbWVvdXQgKCAtPlxuICAgIGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIgLmxheWVyJylcbiAgICBsYXllcnMuZm9yRWFjaCAoZWwsIGkpIC0+XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICByZXR1cm5cbiAgKSwgMjAwMFxuICAgIFxud2luZG93Lm9ubW91c2Vtb3ZlID0gKGV2dCkgLT5cbiAgYmx1ckltZ3MoZXZ0KVxuXG5cbiMgZG9jdW1lbnQub25tb3VzZWRvd24gPSAoZSkgLT5cbiMgICBlLnByZXZlbnREZWZhdWx0XG4jICAgc3F1aXJyZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICdub25lJ1xuIyAgIHNldFRpbWVvdXQgKCAtPlxuIyAgICAgc3F1aXJyZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICdib3VuY2UnXG4jICAgKSwgMTAwXG4gICAiXX0=
//# sourceURL=coffeescript