/**
 * Created by timur on 5/24/16.
 */

export const clone = node => node.cloneNode(true)

Node.prototype.set = function (props) {
  for (let key in props) {
    this.setAttribute(key, props[key])
  }
  return this
}

Node.prototype.get = function (...keys) {
  
  if (keys.length === 1) {
    return this.getAttribute(keys[0])
  }
  
  return keys.map(key => {
    return this.getAttribute(key)
  })
}

Node.prototype.text = function (msg) {
  
  this.textContent = msg
  return this
}
