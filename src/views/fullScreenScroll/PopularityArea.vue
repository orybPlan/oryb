<template>
  <div id="popularityArea">
    <div class="popularityContainer">
      <div class="title">
        <p>人气爆款区</p>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="橱柜定制" name="cupboard">
          <ul class="cupboard paneItem">
            <li v-for="item in cupboardList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="客餐厅" name="restaurant">
          <ul class="restaurant paneItem">
            <li v-for="item in restaurantList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="卧室" name="bedroom">
          <ul class="bedroom paneItem">
            <li v-for="item in bedroomList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="移门" name="slide">
          <ul class="slide paneItem">
            <li v-for="item in slideList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="卫生间" name="toilet">
          <ul class="toilet paneItem">
            <li v-for="item in toiletList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="多功能房" name="multifunctional">
          <ul class="multifunctional paneItem">
            <li v-for="item in multifunctionalList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="阳台" name="balcony">
          <ul class="balcony paneItem">
            <li v-for="item in balconyList" :key="item">
              <!-- <img v-lazy="item" > -->
              <el-image :src="item" />
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popularityArea',
  data() {
    return {
      activeName: 'cupboard',
      cupboardList: [
        '/static/popularityArea/cupboard/cupboard1.jpg',
        '/static/popularityArea/cupboard/cupboard2.jpg',
        '/static/popularityArea/cupboard/cupboard3.jpg',
        '/static/popularityArea/cupboard/cupboard4.jpg',
        '/static/popularityArea/cupboard/cupboard5.jpg',
        '/static/popularityArea/cupboard/cupboard6.jpg',
        '/static/popularityArea/cupboard/cupboard7.jpg',
        '/static/popularityArea/cupboard/cupboard8.jpg',
      ],
      restaurantList: [
        '/static/popularityArea/restaurant/restaurant1.jpg',
        '/static/popularityArea/restaurant/restaurant2.jpg',
        '/static/popularityArea/restaurant/restaurant3.jpg',
        '/static/popularityArea/restaurant/restaurant4.jpg',
      ],
      bedroomList: [
        '/static/popularityArea/bedroom/bedroom1.jpg',
        '/static/popularityArea/bedroom/bedroom2.jpg',
        '/static/popularityArea/bedroom/bedroom3.jpg',
        '/static/popularityArea/bedroom/bedroom4.jpg',
        '/static/popularityArea/bedroom/bedroom5.jpg',
        '/static/popularityArea/bedroom/bedroom6.jpg',
        '/static/popularityArea/bedroom/bedroom7.jpg',
        '/static/popularityArea/bedroom/bedroom8.jpg',
      ],
      slideList: [
        '/static/popularityArea/slide/slide1.jpg',
      ],
      toiletList: [
        '/static/popularityArea/toilet/toilet1.jpg',
        '/static/popularityArea/toilet/toilet2.jpg',
      ],
      multifunctionalList: [
        '/static/popularityArea/multifunctional/multifunctional1.jpg',
        '/static/popularityArea/multifunctional/multifunctional2.jpg',
        '/static/popularityArea/multifunctional/multifunctional3.jpg',
      ],
      balconyList: [
        '/static/popularityArea/balcony/balcony1.jpg',
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
#popularityArea {
  height: 480px;
  .popularityContainer {
    width: 1200px;
    margin: 0 auto;
    .title {
      display: flex;
      justify-content: flex-end;
      height: 55px;
      p {
        width: 200px;
        height: 54px;
        text-align: right;
        border-bottom: 1px solid #505050;
        line-height: 54px;
        color: #505050;
        font-size: 30px;
      }
    }
    .el-tabs__content {
      .el-tab-pane {
        height: 360px;
        .paneItem {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          li {
            transition: all 2s linear;
            &:hover {
              img{
                transform: scale(1.1);
              }
            }
            .el-image {
              img {
                width: 250px;
                height: 160px;
              }
            }
          }
        }
      }
    }
    .el-tabs__nav-wrap::after {
      background-color: white;
    }
  }
}
</style>
