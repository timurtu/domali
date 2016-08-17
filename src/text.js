/**
 * Created by timur on 8/17/16.
 */

Node.prototype.text = function (msg) {
  
  if(this.currentTextNode) {
    this.removeChild(this.currentTextNode)
  }
  
  this.currentTextNode = document.createTextNode(msg)
  this.appendChild(this.currentTextNode)
  
  return this
}
