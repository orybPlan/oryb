<template>
  <div id="header">
    <div class="container">
      <div class="logo fl">
        <img v-lazy="logoUrl" alt="欧瑞宇邦">
      </div>
      <section class="menu fl">
        <nav>
          <a href="javascript:void(0);" v-for="item in menuList" :key="item" :data-hover="item">{{ item }}</a>
        </nav>
        </section>
        <div class="art">
          <div class="art_left"></div>
          <div class="art_right"></div>
        </div>
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
      activeIndex: '1',
      searchContent: '',
      logoUrl: '/static/logo.png'
    };
  },
};
</script>

<style lang="scss">
#header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 999;
  padding: 0 50px;
  background: #435a6b;
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
      nav {
        height: 60px;
        a {
          color: #fff;
          position: relative;
          display: inline-block;
          margin: 10px 8px;
          padding: 10px 15px;
          text-shadow: 0 0 1px rgba(255,255,255,0.3);
          outline: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Raleway', sans-serif;
          cursor: pointer;
          &::before, &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 3px solid #354856;
            content: '';
            transition: transform 0.3s, opacity 0.3s;
          }
          &::after {
            border-color: #fff;
            transform: translateY(-7px) translateX(6px);
            opacity: 0;
          }
          &:hover::before {
            opacity: 0;
            transform: translateY(5px) translateX(-5px);
          }
          &:hover::after {
            opacity: 1;
            transform: translateY(0px) translateX(0px);
          }
        }
      }
      .art {
        display: none;
        width: 100%;
        height: 60px;
        background: pink;
        position: fixed;
        top: 60px;
        left: 0;
        z-index: 9999;
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
