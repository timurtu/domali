/**
 * Created by timur on 5/24/16.
 */

export function set(element, props) {
  for (let key in props) {
    element.setAttribute(key, props[key])
  }
}

export function get(element, ...props) {

  return (props.length > 1) ?
    props.map(prop => element.getAttribute(prop)) :
    element.getAttribute(props[0])

}