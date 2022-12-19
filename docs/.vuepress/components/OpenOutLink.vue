<template>
  <div class="link-title-box" @click="handleClick" @mouseenter='handleToggleIcon' @mouseleave='handleToggleIcon'>
    <span >
      <slot></slot>
    </span>
    <HomeOutlined v-show='showIcon' class="icon" />
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
  props:{
    link: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const showIcon = ref(false);
    const handleToggle = () => {
      showIcon.value = !showIcon.value;
    };
    const handleToggleIcon = throttle(
      () => {
        console.log(222)
        handleToggle();
      },
      100
    );
    const handleClick = () => {
      console.log(props.link);
      if(props.link !== undefined || props.link !== null || props.link !== '' ) {
        window.open(props.link);
      }
    };
      
    return {
      handleToggle,
      showIcon,
      handleToggleIcon,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.link-title-box{
  &:hover{
    color:var(--c-brand);
    cursor: pointer;
  }
}

.icon{
  font-size: 20px;
  margin-left: 10px;
  color:var(--c-brand);
}
</style>
