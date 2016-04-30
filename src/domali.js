/**
 * Created by timur on 4/27/16.
 */
export default {

  getId(...ids) {
    if (ids.length > 1) {
      return ids.map(id => document.getElementById(id))
    } else {
      return document.getElementById(ids[0])
    }
  }

}