/**
 *
 * @param {strign} text string content
 * @returns {number} amount of time to read
 */
export const getReadTime = (text) => {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
