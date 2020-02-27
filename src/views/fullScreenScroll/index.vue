<template>
  <div id="fullScreen">
    <!-- 风格选择区 -->
    <style-area />
    <!-- 人气爆款器区 -->
    <popularity-area />
    <!-- 设计方案区 -->
    <design-area />
  </div>
</template>

<script>
import StyleArea from './StyleArea';
import PopularityArea from './PopularityArea';
import DesignArea from './DesignArea';


export default {
  name: 'fullScreen',
  components: {
    StyleArea,
    PopularityArea,
    DesignArea
  }
};
</script>

<style lang="scss">
#fullScreen {
}
</style>
