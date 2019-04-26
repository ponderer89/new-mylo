import _get from 'lodash.get'

export function constructOptions({ dictionary, path }) {
  const options = _get(dictionary, path)

  return Object.keys(options).reduce((arr, k) => {
    arr.push({ label: options[k], value: k })
    return arr
  }, [])
}
