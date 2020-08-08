export default class Observer {
  constructor(data: any) {
    this.walk(data)
  }

  walk(data: any) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(obj: any, key: any, val: any) {
    this.walk(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      // set(newValue){
      set: newValue => {
        if (newValue === val) {
          return
        }
        val = newValue
        console.log(this)
        this.walk(newValue)
      }
    })
  }
}
