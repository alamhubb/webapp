import Observer from "@/minivue/Observer";

export default class QVue {
  $options = null
  $data = null
  $el = null

  constructor(options: any) {
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
    this.proxyData(this.$data)
    new Observer(this.$data)
  }

  private proxyData(data: any) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(newValue) {
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}
