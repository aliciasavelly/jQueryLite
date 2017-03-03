class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach( (el) => {
      cb(el);
    })
  }

  html(html) {
    if (typeof html === "string") {
      this.each( (node) => node.innerHTML = html);
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(stuff) {
    if (typeof stuff === "string") {
      this.each( (node) => node.innerHTML += stuff );
    }
  }

  attr(attrName, value) {
    if (typeof value === "string") {
      this.each ( node => node.setAttribute(attrName, value));
    } else {
      return this.nodes[0].getAttribute(attrName);
    }
  }

  addClass(newClass) {
    this.each( node => node.classList.add(newClass));
  }

  removeClass(oldClass) {
    this.each( node => node.classList.remove(oldClass));
  }

  children() {
    let allChildren = [];
    this.each( node => {
      allChildren = allChildren.concat(Array.from(node.children));
    });
    return new DomNodeCollection(allChildren);
  }

  parents() {
    let allParents = [];
    this.each( node => {
      allParents.push(node.parentNode);
    })

    return new DomNodeCollection(allParents);
  }

  find(selector) {
    let matchingNodes = [];



    return new DomNodeCollection(matchingNodes);
  }

  remove() {

  }
}

module.exports = DomNodeCollection;
