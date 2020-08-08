<template>
  <div class="about">
    <div id="message"></div>
  </div>
</template>
<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AboutVue extends Vue {
  childWindow = null

  created() {
    /*window.addEventListener('message',function(event){
      console.log(event);
      document.getElementById('message').innerHTML = "收到"
          + event.origin + "消息：" + event.data;
    }, false);*/
  }
}
</script>
