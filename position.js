// 获取元素的绝对位置坐标（像对于页面左上角）
function getElementPagePosition(element){
  //计算x坐标
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  //计算y坐标
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null){
    actualTop += (current.offsetTop+current.clientTop);
    current = current.offsetParent;
  }
  //返回结果
  return {x: actualLeft, y: actualTop}
}

// 获取元素的相对位置坐标（像对于浏览器视区左上角）
function getElementViewPosition(element){
  //计算x坐标
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
    actualLeft +=  (current.offsetLeft+current.clientLeft);
    current = current.offsetParent;
  }
  if (document.compatMode == "BackCompat"){
    var elementScrollLeft=document.body.scrollLeft;
  } else {
    var elementScrollLeft=document.documentElement.scrollLeft;
  }
  var left = actualLeft - elementScrollLeft;
  //计算y坐标
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null){
    actualTop += (current.offsetTop+current.clientTop);
    current = current.offsetParent;
  }
  if (document.compatMode == "BackCompat"){
    var elementScrollTop=document.body.scrollTop;
  } else {
    var elementScrollTop=document.documentElement.scrollTop;
  }
  var right = actualTop-elementScrollTop;
  //返回结果
  return {x: left, y: right}
}