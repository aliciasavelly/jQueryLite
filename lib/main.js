const DomNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector) {
  if (selector instanceof HTMLElement) {
    console.log(selector);
    arr = Array.from(document.querySelectorAll(selector));
    return new DomNodeCollection(arr);
  }
  // console.log(selector);

  let arr = Array.from(document.querySelectorAll(selector));
  return new DomNodeCollection(arr);
}
