var setDomElement = function (domStr, testFunc) {
  var div = document.createElement('div');
  div.innerHTML = domStr;
  div.style.display = 'block';
  document.body.appendChild(div);
  var p = div.firstChild;
  testFunc.call(p);
  document.body.removeChild(div);
};

var setStylusClass = function (className, testFunc) {
  return setDomElement('<p class="stylus-' + className + '"></p>', testFunc);
};

Tinytest.add("stylus - jeet", function(test) {
  setStylusClass('jeet-center', function () {
    test.equal(getStyleProperty(this, 'max-width'), "1337px");
  });
});
