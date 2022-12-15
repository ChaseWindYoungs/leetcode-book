<template>
  <div>
    <div>测试一下</div>
    <p>{{ text }}</p>
    <button @click="test">点击</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "ToggleBox",
  setup() {
    const text = ref('aaa');
    const test = () => {
      text.value = 'bbb'
    }
    return {
      text,
      test,
    }
  },
})
</script>


