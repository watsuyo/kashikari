import Vue from 'vue'

Vue.filter('truncate', (
  value: string,
  length: number,
  omission: string
): string => {
  if (!value) {
    return ''
  }
  const _length = length || 14
  const ommision = omission ? omission.toString() : '..'

  if (value.length <= _length) {
    return value
  } else {
    return value.substring(0, _length) + ommision
  }
})

Vue.filter('notation', (price: string) => {
  if (price) {
    return '¥' + String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  }
})
