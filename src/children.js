/**
 * Created by timur on 8/17/16.
 */

Node.prototype.push = function (child) {
  this.appendChild(child)
  return this
}

Node.prototype.unshift = function (child) {
  this.insertBefore(child, this.firstChild)
  return this
}

Node.prototype.map = function (callback) {
  if (this.hasChildNodes()) {
    Array.prototype.forEach.call(this.childNodes, node =>
      this.replaceChild(callback(node), node))
  }
  return this
}
