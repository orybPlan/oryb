<!--
 * @Module:
 * @FileName:
 * @Description:
 * @Author: flq
 * @Date: 2020-02-28 18:26:47
 * @LastEditors: flq
 * @LastEditTime: 2020-02-29 17:42:38
 -->
<template>
  <div id="layout">
    <!-- 头部 -->
    <layout-header class="layout-header" />
	  <!-- 主体 -->
		<layout-container class="layout-container" />
    <!-- 底部 -->
    <layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader';
import LayoutContainer from '@/layout/LayoutContainer';
import LayoutFooter from '@/layout/LayoutFooter';

export default {
  name: 'home',
  components: {
    LayoutHeader,
    LayoutContainer,
    LayoutFooter,
  },
  data() {
    return {
      msg: '欧瑞宇邦',
    };
  },
};
</script>

<style lang="scss">
#layout {
  display: flex;
  flex-direction: column;
  .layout-header {
    height: 60px;
    border-bottom: 1px solid #e1e1e1;
  }
  .layout-footer {
    width: 100%;
    background: #3e3a39;
  }
}
</style>
