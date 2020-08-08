<template>
  <div class="home">
    <div id="insert"></div>
    <div id="qky"></div>
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'
import {compile} from 'vue-template-compiler'

@Component
export default class LoginVue extends Vue {
  childWindow = null

  postMessage() {
    this.childWindow = document.getElementById('child')
    this.childWindow.contentWindow.postMessage('主页面消息', '*')
  }

  created() {
    /*const code = `return 'hello boy'`
    const hello = new Function(code)
    console.log(hello())*/

    /*console.log(compile)
    const result = compile(`
    <div>
      <p>{{name}}</p>
    </div>`
    )

    console.log(result)*/

    //以字母+下划线开头,任意的单个字符加-
    const ncname = '[a-zA-Z_][\\w\\-\\.]*'
    const qnameCapture = `((?:${ncname}\\:)?${ncname})`
    const startTagOpen = new RegExp(`^<${qnameCapture}`)

// 以开始标签开始的模板

    console.log('<div></div>'.match(startTagOpen))
// 以结束标签开始的模板
    // null
    console.log('</div><div>我是Berwin</div>'.match(startTagOpen))

// 以文本开始的模板
    // null

    console.log('我是Berwin</p>'.match(startTagOpen))

    const  str="1 plus 2 equal 3"
    document.write(str.match(/\d+/g))
  }

  mounted() {

    /*axios.get('api').then(res => {
      console.log(res)
      const insertDom = document.getElementById('insert')
      console.log(insertDom)
      insertDom.innerHTML = res
    })*/
  }
}
</script>
