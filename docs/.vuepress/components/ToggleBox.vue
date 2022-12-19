<template>
  <slot></slot>
  <div @click="handleToggle" @mouseover='() => handleToggleIcon(true)' @mouseout='() => handleToggleIcon(false)' >
    <span>点击可slideToggle标题</span>
    <HomeOutlined v-show='showIcon' />
  </div>
  
  <div v-show="showContent">
    <div class="content">
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
      <p>这是展示的内容</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { HomeOutlined } from "@ant-design/icons-vue";
import { throttle } from 'lodash-es'
export default defineComponent({
  name: "ToggleBox",
  components: {
    HomeOutlined,
  },
  setup() {
    const showContent = ref(true);
    const showIcon = ref(false);
    const handleToggle = () => {
      showContent.value = !showContent.value;
    };
    const handleToggleIcon = throttle(
      (val) => showIcon.value = val,
      100
    );
    return {
      showContent,
      handleToggle,
      showIcon,
      handleToggleIcon,
    };
  },
});
</script>
<style lang="scss" scoped></style>
