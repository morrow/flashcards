export const capitalize = (input)=> input[0].toUpperCase() + input.slice(1)

_flatten = (obj, seperator, keys=[]) => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign(acc, (()=>{
      if(typeof obj[key] === 'object'){
        return _flatten(obj[key], seperator, keys.concat(key))
      } else {
        return { [keys.concat(key).join(seperator)]: obj[key] }
      }
    })()
    )
  }, {})
}

export const flattenObject = (obj, seperator='.') => {
  let result = {}
  let flatObject = _flatten(obj, seperator)
  Object.keys(flatObject).forEach(key=>{
    let new_key = key.split(seperator).slice(0, -1).join(seperator)
    let css_property = key.split(seperator).slice(-1).join('')
    result[ new_key ] = {
      ...result[new_key],
      [css_property]: flatObject[key]
    }
  })
  return result
}

export const getDiff = (a, b)=>{
  let result = {}
  for(let key in a){
    if(a[key] != b[key]){
      result[key] = a[key]
    }
  }
  for(let key in b){
    if(a[key] != b[key]){
      result[key] = b[key]
    }
  }
  return result
}