<template>
  <span class="link-title-box" @click="handleClick" @mouseenter='handleToggleIcon' @mouseleave='handleToggleIcon'>
    <span >
      <slot></slot>
    </span>
    <HomeOutlined v-show='showIcon' class="icon" />
  </span>
  <Badge v-show="type" :type="type" :text="badgeText" vertical="top" class="badge" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { HomeOutlined } from "@ant-design/icons-vue";
import { throttle } from 'lodash-es'
enum BadgeTextEnum {
  tip = '简单',
  warning = '中等',
  danger = '困难',
}
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
    type: {
      type: String,
    },
    vertical: {
      type: String,
    },
  },
  setup(props) {
    const showIcon = ref(false);
    const badgeText = ref('');
    
    const handleToggle = () => {
      showIcon.value = !showIcon.value;
    };
    const handleToggleIcon = throttle(
      () => {
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
    const setBadgeText = () => {
      console.log(2222)
      badgeText.value = BadgeTextEnum[props.type];
    }
    setBadgeText();
      
    return {
      handleToggle,
      showIcon,
      handleToggleIcon,
      handleClick,
      badgeText
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
.badge{
  margin-left: 10px;
}
</style>
