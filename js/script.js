UpdateLocation();
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

function UpdateLocation(){
  //var elem1 = document.getElementById("buy-tablets-description-bullet1");
  //var arrowElem = document.getElementById("image-arrows");
  //var ofSet1 = getOffset(elem1);
  //arrowElem.style.top = (ofSet1.top + 60) + "px";
  //arrowElem.style.left = (ofSet1.left + 20) + "px";
}

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    return { top: Math.round(box.top +  scrollTop - clientTop), left: Math.round(box.left + scrollLeft - clientLeft) }
    } else {
         var top=0, left=0
    while(elem) {
        top = top + parseFloat(elem.offsetTop);
        left = left + parseFloat(elem.offsetLeft);
        elem = elem.offsetParent ;
       }
       return {top: top, left: left};
       }
}

addEvent(window, "resize", UpdateLocation);
