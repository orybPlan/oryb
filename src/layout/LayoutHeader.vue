/* eslint-disable vue/valid-v-bind */
/* eslint-disable vue/no-unused-vars */
<template>
  <div id="header">
    <div class="container">
      <div class="logo fl">
        <img v-lazy="logoUrl" alt="欧瑞宇邦">
      </div>
      <section class="menu fl">
        <nav>
          <a href="javascript:void(0);"
            v-for="(item, index) in menuList"
            :key="item"
            :class="{ active:currentIdx==index }"
            @click="changeIndex(index)"
            @mouseenter="showDetail(index)"
            @mouseleave="hideDetail">{{ item }}</a>
        </nav>
      </section>
      <div class="navContainer">
        <div class="art"
          v-show="hoverIdx === 0"
          @mouseenter="showDetail(0)"
          @mouseleave="hideDetail">
          <ul class="art_left fl">
            <li class="style_item" v-for="item in styleList" :key="item.styleName">
              <a href="javascipt:void(0)">
                <div class="imgBox">
                  <img :src="item.stylePic" alt="item.styleDes">
                </div>
                <span class="name">{{ item.styleName }}</span>
                <span class="des">{{ item.styleDes }}</span>
              </a>
            </li>
          </ul>
          <ul class="art_right fl">
            <li v-for="(item,index2) in spaceList"
              :key="item.spaceName"
              :class="{hover2:currentIdx2 == index2}"
              @mouseenter="addHover(index2)"
              @mouseleave="removeHover"
            >
              <div class="spaceContainer">
                <div class="title fl">{{ item.spaceName }}</div>
                <ul class="spaceDetail fl">
                  <li v-for="(child,index1) in item.children" :key="child.childName"
                    :class="{hover1:currentIdx1 == index1}"
                    @mouseenter="addClassName(index1)"
                    @mouseleave="removeClassName"
                  >
                    <a href="javascript:void(0)">
                      <img v-if="!(currentIdx1==index1&&currentIdx2==index2)||currentIdx1===''||currentIdx2===''" :src="child.childUrl" alt="">
                      <img v-if="currentIdx1==index1&&currentIdx2==index2&&currentIdx1!==''&&currentIdx2!==''" :src="child.childUrl_hover" alt="">
                      <p v-if="!(currentIdx1==index1&&currentIdx2==index2)||currentIdx1===''||currentIdx2===''">{{ child.childName }}</p>
                      <p v-if="currentIdx1==index1&&currentIdx2==index2&&currentIdx1!==''&&currentIdx2!==''" class="HoverG">{{ child.childName }}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="design" v-show="hoverIdx === 1"></div>
        <div class="case" v-show="hoverIdx === 2"></div>
        <div class="video" v-show="hoverIdx === 3"></div>
        <div class="customMade" v-show="hoverIdx === 4"></div>
        <div class="activity" v-show="hoverIdx === 5"></div>
        <div class="oryb" v-show="hoverIdx === 6"></div>
      </div>
      <div class="searchInput fl">
        <el-input
          placeholder="输入搜索内容"
          maxlength="120"
          prefix-icon="el-icon-search"
          v-model="searchContent"
          @keyup.native.enter="onSearch">
        </el-input>
        <el-button
          size="mini"
          class="search"
          @contextmenu.native.prevent="showMenu">
          搜索
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-header',
  data() {
    return {
      menuList: [
        '臻·美学',
        '品·设计',
        '阅·案例',
        '看·视频',
        '懂·定制',
        '享·活动',
        '知·宇邦'
      ],
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
      spaceList: [
        {
          spaceName: '客餐厅',
          children: [
            { childName: '餐边柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '酒柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '电视柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '玄关柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '鞋柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }]
        },
        {
          spaceName: '橱柜定制',
          children: [
            { childName: '橱柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
        {
          spaceName: '卧室',
          children: [
            { childName: '儿童房', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '儿童床', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '衣帽间', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '衣柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '书柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '书桌', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
        {
          spaceName: '多功能房',
          children: [
            { childName: '榻榻米', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '书柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' },
            { childName: '飘窗柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
        {
          spaceName: '阳台',
          children: [
            { childName: '阳台柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
        {
          spaceName: '卫生间',
          children: [
            { childName: '浴室柜', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
        {
          spaceName: '移门',
          children: [
            { childName: '移门', childUrl: '/static/brand/restaurant.png', childUrl_hover: '/static/brand/restaurant1.png' }
          ]
        },
      ],
      currentIdx1: '',
      currentIdx2: '',
      currentIdx: 0,
      hoverIdx: '',
      searchContent: '',
      logoUrl: '/static/logo.png'
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIdx = index;
    },
    showDetail(index) {
      this.hoverIdx = index;
    },
    hideDetail() {
      this.hoverIdx = '';
    },
    addClassName(index1) {
      this.currentIdx1 = index1;
    },
    removeClassName() {
      this.currentIdx1 = '';
    },
    addHover(index2) {
      this.currentIdx2 = index2;
    },
    removeHover() {
      this.currentIdx2 = '';
    },
  }
};
</script>

<style lang="scss">
#header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 9999;
  background: #fff;
  padding: 0 50px;
  .container {
    min-width: 1200px;
    height: 60px;
    margin: 0 auto;
    .logo {
      width: 150px;
      height: 60px;
      margin-top: 16px;
    }
    .menu {
      height: 60px;
      margin-left: 50px;
      a {
        padding: 10px;
        text-shadow: none;
        transition: color 0.3s;
      }
      nav {
        height: 60px;
        a {
          position: relative;
          display: inline-block;
          margin: 5px 8px;
          padding: 14px 15px;
          color: #000;
          letter-spacing: 2px;
          font-size: 16px;
          &:hover {
            border-bottom: 2px solid #0972b4;
          }
        }
        .active {
          border-bottom: 2px solid #0972b4;
        }
      }
    }
    .navContainer {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      .art {
        height: 635px;
        background: #F0F0F0;
        box-sizing: border-box;
        padding: 30px 30px 40px;
        .art_left {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 50%;
          padding-left: 30px;
          li {
            position: relative;
            width: 114px;
            height: 80px;
            margin: 10px;
            border-radius: 5px;
            overflow: hidden;
            &:hover {
              .name {
                display: none;
              }
              .des {
                display: none;
              }
            }
            .imgBox {
              width: 100%;
              height: 100%;
              background: #000;
              img {
                opacity:0.6;
                width: 100%;
                height: 100%;
              }
              &:hover {
                background: none;
                img {
                  opacity: 1;
                }
              }
            }
            .name {
              width: 100%;
              position: absolute;
              top: 5px;
              left: 0;
              text-align: center;
              font-size: 14px;
              color: #fff;
              letter-spacing: 2px;
              text-align: center;
              display: block;
              margin-top: 10px;
            }
            .des {
              width: 100%;
              text-align: center;
              position: absolute;
              top: 35px;
              left: 0;
              color: #fff;
              text-align: center;
              display: block;
              padding-top: 10px;
            }
          }
        }
        .art_right {
          width: 50%;
          li {
            .spaceContainer {
              position: relative;
              border-bottom: 1px solid #d1d1d1;
              overflow: hidden;
              .title {
                position: absolute;
                top: 10px;
                left: 10px;
                text-align: left;
                font-size: 16px;
                font-family: SourceHanSansCN;
                color: #727171;
                font-weight: 700;
              }
              .spaceDetail {
                margin-left: 80px;
                width: 600px;
                padding-top: 15px;
                text-align: left;
                overflow: hidden;
                li {
                  display: inline-block;
                  width: 60px;
                  height: 70px;
                  line-height: 40px;
                  margin: 0 17.5px;
                  font-size: 12px;
                  text-align: center;
                  img {
                    max-width: 60px;
                    max-height: 60px;
                  }
                  p {
                     color: #505050;
                  }
                  p.HoverG{
                    color: #008000;
                  }
                }
              }
            }
          }
        }
      }
      .design {
        height: 300px;
        background:#F0F0F0;
      }
      .case {
        height: 300px;
        background:#F0F0F0;
      }
      .video {
        height: 300px;
        background:#F0F0F0;
      }
      .customMade {
        height: 300px;
        background:#F0F0F0;
      }
      .design {
        height: 300px;
        background:#F0F0F0;
      }
      .activity {
        height: 300px;
        background:#F0F0F0;
      }
      .oryb {
        height: 300px;
        background:#F0F0F0;
      }
    }
    .searchInput {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      width: 80%;
      padding-top: 15px;
      .el-input {
        min-width: 120px;
        .el-input__inner {
          border-radius: 5px 0 0 5px;
          padding-left: 28px;
        }
      }
      .el-input__prefix {
        .el-input__icon {
          line-height: 30px;
        }
      }
      .el-button {
        border-radius: 0 5px 5px 0;
      }
    }
  }
}
</style>
