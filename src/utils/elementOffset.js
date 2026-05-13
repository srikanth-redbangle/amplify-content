/**
 * Returns element offset position relative to the document.
 * @param {HTMLElement} element
 * @param {string} direction
 * @return {number} Offset value.
 */

export default (element, direction) => {
  let offset = 0

  if (!element) return offset

  if (element.offsetTop)
    while (element) {
      offset +=
        element[
          `offset${direction.charAt(0).toUpperCase()}${direction.substr(1)}`
        ]
      // eslint-disable-next-line no-param-reassign
      element = element.offsetParent
    }
  else
    offset =
      element.getBoundingClientRect()[direction.toLowerCase()] +
      element.ownerDocument.defaultView[
        direction === 'Top' ? 'pageYOffset' : 'pageXOffset'
      ]

  return offset
}
