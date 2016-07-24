/**
 * Created by timur on 5/22/16.
 */

/**
 * Return one or many elements by getting them by id.
 *
 * @param ids Any number of id strings
 * @returns elements as an array
 */
export const getId = (...ids) => (ids.length > 1) ?
	ids.map(id => document.getElementById(id)) :
	document.getElementById(ids[0])

export const getClass = className => document.getElementsByClassName(className)
export const getTags = tagName => document.getElementsByTagName(tagName)
