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
    
    const newNode = this.cloneNode(true)
    
    Array.prototype.map.call(newNode.childNodes, node => newNode.replaceChild(callback(node), node))
    
    return newNode
  }
}
