<!--
 * @Module:
 * @FileName:
 * @Description:
 * @Author: flq
 * @Date: 2020-02-29 21:09:35
 * @LastEditors: flq
 * @LastEditTime: 2020-03-04 21:36:36
 -->
<template>
  <div>
    <!-- 头部 -->
    <layout-header class="layout-header" />
	  <!-- 主体 -->
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
    </div>
    <div class="B_box">
      <div class="filter-item category_choice">
        <div class="alllist">
          <span class="filter-title">生活方式</span>
          <div>
            <!-- 风格分类名 -->
            <div v-for="(item,index) in stylelist" :key='index' class="style">
              <div class="styleName"
                :class="{hover:index==isHover}"
                @mouseenter="addHover(index)"
                @mouseleave="removeHover()"
              >
                {{item.stylename}}
              </div>
              <div class="showOrhide">
                <div class="icon">
                  <img :src=item.styleUrl alt="" ref="img" :num=item.value
                  @click="clickIcon(item, index)"
                  />
                </div>
              </div>
              <ul class="styleul">
                <li v-for="(item,index) in spaceList" :key='item.spaceName'
                  :class="{hover:index==isHoverstyle,click:index==isClickstyle}"
                  @mouseenter="addHoverstyle(index)"
                  @mouseleave="removeHoverstyle()"
                  @click="clickLi(index)"
                >
                  {{item.spaceName}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="goodslist">
          <div class="goodsdiv">
            <ul v-for="(item,index) in spaceList" :key="item.spaceName"
              :class="{showli:index!=isShowLi}"
            >
              <li v-for="(itemdetail,index) in item.children" :key="index" class="goodsli"
                :class="{active:itemdetail==isActive}"
                @mouseenter="addboxHover(itemdetail)"
                @mouseleave="removeboxHover()"
              >
                <div>
                  <img :src="itemdetail.childUrl" alt=""><br />
                  <div>{{itemdetail.childName}}</div>
                  <div>{{itemdetail.price}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  data() {
    return {
      isShowLi: true,
      clickicon: false,
      isHover: false,
      isHoverstyle: false,
      isClickstyle: false,
      isActive: false,
      bannerItems: [
        {
          des: '1',
          url: '/static/banner/banner1.jpg'
        },
        {
          des: '2',
          url: '/static/banner/banner2.jpg'
        },
        {
          des: '3',
          url: '/static/banner/banner3.jpg'
        }
      ],
      stylelist: [
        {
          stylename: '北欧',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '混搭',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '简欧',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '美式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '欧式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '日式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '新中式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '混搭',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '简欧',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '美式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '欧式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '日式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '现代',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
        {
          stylename: '新中式',
          styleUrl: '/static/icon/jiahao.png',
          value: 0
        },
      ],
      spaceList: [
        {
          spaceName: '客餐厅',
          children: [
            { price: '¥1111', childName: '餐边柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '酒柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '电视柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '玄关柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '鞋柜', childUrl: '/static/brand/restaurant.png'}
          ]
        },
        {
          spaceName: '橱柜定制',
          children: [
            { price: '¥1111', childName: '橱柜', childUrl: '/static/brand/restaurant.png' }
          ]
        },
        {
          spaceName: '卧室',
          children: [
            { price: '¥1111', childName: '儿童房', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '儿童床', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '衣帽间', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '衣柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '书柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '书桌', childUrl: '/static/brand/restaurant.png' }
          ]
        },
        {
          spaceName: '多功能房',
          children: [
            { price: '¥1111', childName: '榻榻米', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '书柜', childUrl: '/static/brand/restaurant.png' },
            { price: '¥1111', childName: '飘窗柜', childUrl: '/static/brand/restaurant.png' }
          ]
        },
        {
          spaceName: '阳台',
          children: [
            { price: '¥1111', childName: '阳台柜', childUrl: '/static/brand/restaurant.png' }
          ]
        },
        {
          spaceName: '卫生间',
          children: [
            { price: '¥1111', childName: '浴室柜', childUrl: '/static/brand/restaurant.png' }
          ]
        },
        {
          spaceName: '移门',
          children: [
            { price: '¥1111', childName: '移门', childUrl: '/static/brand/restaurant.png' }
          ]
        },
      ],
    }
  },
  methods: {
    addHover(index) {
      this.isHover = index;
    },
    removeHover() {
      this.isHover = null;
    },
    addHoverstyle(item) {
      this.isHoverstyle = item;
    },
    removeHoverstyle() {
      this.isHoverstyle = null;
    },
    addboxHover(itemdetail) {
      this.isActive = itemdetail;
    },
    removeboxHover() {
      this.isActive = null;
    },
    clickIcon(item, index) {
      item.value += 1;
      if (item.value % 2 < 1) {
        this.$refs.img[index].src = '/static/icon/jiahao.png';
        this.$refs.img[index].parentNode.parentNode.nextSibling.style.display = 'none';
      } else {
        this.$refs.img[index].src = '/static/icon/jianhao.png';
        this.$refs.img[index].parentNode.parentNode.nextSibling.style.display = 'block';
      }
    },
    clickLi(index) {
      this.isShowLi = index;
      this.isClickstyle = index;
    }
  },
};
</script>

<style scoped lang="scss">
/* .filter-item.category_choice{
  width: 322px;
  min-height: 100px;
  float: left;
} */
.B_box {
  margin-top: 100px;
  display: block;
  height: 666px;
  padding: 0 50px;
  box-sizing: border-box;
  width: 100%;
  .filter-item {
    height: 523px;
    .alllist {
      float: left;
      width: 20%;
      .filter-title {
        text-align: left;
        font-size: 16px;
        display: block;
        height: 30px;
        border-bottom: 1px solid #d2d2d2;
        width: 100%;
        margin-bottom: 18px;
        }
      }
    }
    .goodslist {
      float: right;
      width: 80%;
      .goodsdiv{
        height: 390px;
        margin-left: 50px;
        margin-top: 50px;
      }
      ul {
        height:14.7%;
      }
      .goodsli {
        float:left;
        width:25%;
        cursor: pointer;
        height: 90px;
      }
      .active{
        box-shadow: 0 0 2px #d7d4d4;
        border: 1px solid #d7d4d4;
      }
      .showli{
        display:none;
      }
    }
  }
.showOrhide {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}
.style {
  position: relative;
  .styleName {
    text-align: left;
    font-size: 14px;
    line-height: 39px;
    cursor: pointer;
    &.hover{
      color: #7adfa9;
    }
  }
  .showOrhide {
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
    .icon {
      // display: block;
      width: 22px;
      height: 22px;
    }
  }
  ul {
    display: none;
    .hover{
      color: #7adfa9;
    }
    .click{
      color: #7adfa9;
    }
    li {
      text-align: left;
      margin-left: 16px;
      cursor: pointer;
      line-height: 24px;
    }
  }
}
.layout-header {
    height: 60px;
    border-bottom: 1px solid #e1e1e1;
  }
.layout-footer {
  width: 100%;
  background: #3e3a39;
}
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
