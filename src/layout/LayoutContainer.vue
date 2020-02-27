<template>
  <div id="container">
    <!-- banner -->
    <div class="banner">
      <el-carousel
        :interval="5000"
        :autoplay="true">
        <el-carousel-item v-for="item in bannerItems" :key="item.url">
          <img v-lazy="item.url" :alt="item.des">
          <!-- <el-image :src="item.url" :alt="item.des" /> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 品牌理念区 -->
    <brand-concept-area />
    <!-- 整屏滚动区 -->
    <full-screen-scroll />
  </div>
</template>

<script>
import BrandConceptArea from '@/views/brandConceptArea';
import FullScreenScroll from '@/views/fullScreenScroll';

export default {
  name: 'layout-header',
  components: {
    BrandConceptArea,
    FullScreenScroll
  },
  data() {
    return {
      bannerItems: [
        {
          des: '1',
          url: '/static/banner/banner1.jpg'
          // url: 'http://image.zeststore.com/tmp/20200103/tmp_1578034367790090_1903-750.jpg'
        },
        {
          des: '2',
          url: '/static/banner/banner2.jpg'
          // url: 'http://image.zeststore.com/tmp/20191220/tmp_1576811127953994_1903.750.jpg'
        },
        {
          des: '3',
          url: '/static/banner/banner3.jpg'
          // url: 'http://image.zeststore.com/tmp/20191225/tmp_1577260909424533_1.jpg'
        }
      ]
    };
  },
};
</script>

<style lang="scss">
#container {
  width: 100%;
  margin-top: 60px;
  .banner {
    .el-carousel__container {
      height: 600px;
      .el-carousel__arrow {
        width: 60px;
        height: 60px;
        font-size: 40px;
        i {
          color: #fff;
          font-weight: 500;
        }
      }
      .el-carousel__item {
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .el-carousel__indicators {
      .el-carousel__indicator {
        .el-carousel__button {
          width: 64px;
          height: 3px;
          background-color: #d3d3d3;
        }
        &.is-active {
          button {
            background-color: #4fadec;
          }
        }
      }
    }
  }
}
</style>
