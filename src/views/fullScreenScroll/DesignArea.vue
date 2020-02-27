<template>
  <div id="designArea">
    <div class="designContainer">
      <div class="title">
        <p>设计方案区</p>
      </div>
      <div class="content">
        <div class="designItem" v-for="item in designList" :key="item.url">
          <!-- <img v-lazy="item.url"> -->
          <el-image :src="item.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'designArea',
  data() {
    return {
      designList: [
        {
          url: '/static/design/design1.jpg'
        },
        {
          url: '/static/design/design2.jpg'
        },
        {
          url: '/static/design/design3.jpg'
        },
        {
          url: '/static/design/design4.jpg'
        },
        {
          url: '/static/design/design5.jpg'
        },
        {
          url: '/static/design/design6.jpg'
        },
        {
          url: '/static/design/design7.jpg'
        },
        {
          url: '/static/design/design8.jpg'
        }
      ]
    };
  },
};
</script>

<style lang="scss">
#designArea {
  height: 500px;
  .designContainer {
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
    .content {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .designItem {
        transition: all .3 linear;
        &:hover {
          img {
            transform: scale(1.2);
          }
        }
        .el-image {
          img {
            width: 280px;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
