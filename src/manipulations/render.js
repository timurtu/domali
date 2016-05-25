/**
 * Created by timur on 5/24/16.
 */

export function render(element) {
  document.body.appendChild(element)
}

export function clear() {
  document.removeChild(document.documentElement)
}
