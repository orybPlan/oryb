<!--
 * @Module:
 * @FileName:
 * @Description:
 * @Author: flq
 * @Date: 2020-02-29 16:34:41
 * @LastEditors: flq
 * @LastEditTime: 2020-02-29 19:42:51
 -->
<template>
  <div id="layout">
    <layout-header class="layout-header" />
	  <!-- 主体 -->
		<img :src=styleList[id].stylePic alt="">
    <div>
      <div class="left">left
      </div>
      <div class="right">right
      </div>
    </div>
    <!-- 底部 -->
    <layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader';
import LayoutFooter from '@/layout/LayoutFooter';

export default {
  name: 'headerdetail',
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  data() {
    return {
      id: 0,
      styleList: [
        { styleName: '北欧', styleDes: '轻松、时尚、简单', stylePic: '/static/brand/style1.jpg' },
        { styleName: '混搭', styleDes: '淳朴、宁静、生活感', stylePic: '/static/brand/style2.jpg' },
        { styleName: '简欧', styleDes: '轻奢、简练', stylePic: '/static/brand/style3.jpg' },
        { styleName: '美式', styleDes: '华丽、雍容', stylePic: '/static/brand/style4.jpg' },
        { styleName: '欧式', styleDes: '摩登、典雅、舒适', stylePic: '/static/brand/style5.jpg' },
        { styleName: '日式', styleDes: '混搭个性化、融合', stylePic: '/static/brand/style6.jpg' },
        { styleName: '现代', styleDes: '前卫、时尚', stylePic: '/static/brand/style7.jpg' },
        { styleName: '新中式', styleDes: '中式元素结合现代潮流', stylePic: '/static/brand/style1.jpg' },
        { styleName: '混搭', styleDes: '淳朴、宁静、生活感', stylePic: '/static/brand/style2.jpg' },
        { styleName: '简欧', styleDes: '轻奢、简练', stylePic: '/static/brand/style3.jpg' },
        { styleName: '美式', styleDes: '华丽、雍容', stylePic: '/static/brand/style4.jpg' },
        { styleName: '欧式', styleDes: '摩登、典雅、舒适', stylePic: '/static/brand/style5.jpg' },
        { styleName: '日式', styleDes: '混搭个性化、融合', stylePic: '/static/brand/style6.jpg' },
        { styleName: '现代', styleDes: '前卫、时尚', stylePic: '/static/brand/style7.jpg' },
        { styleName: '新中式', styleDes: '中式元素结合现代潮流', stylePic: '/static/brand/style1.jpg' },
      ],
    };
  },
  created() {
    // eslint-disable-next-line no-var
    // var id = this.$route.query.id;
  },
};
</script>

<style scoped lang="scss">
.left {
  float:left;
}
.right {
  float:right;
}
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
