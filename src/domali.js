/**
 * Created by timur on 4/27/16.
 */
export default {

  getId(...ids) {
    ids.forEach((id, i) => {
      ids[i] = document.getElementById(id)
    })
    return ids
  }
  
}