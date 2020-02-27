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
          margin: 8px 0;
          outline: none;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 16px;
          text-shadow: 0 0 1px rgba(255,255,255,0.3);
          &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 100%;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #4C7C9C;
            transition: 0.2s all linear;
            z-index:-1;
          }
          &:hover::before {
            width: 100%;
            left: 0;
          }
          &:hover ~ a::before {
            left: 0;
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
