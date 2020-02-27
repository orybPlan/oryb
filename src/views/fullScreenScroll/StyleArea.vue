<template>
  <div id="styleArea">
    <div class="styleContainer">
      <div class="title">
        <p>自在风格区</p>
      </div>
      <ul class="styleList">
        <li v-for="item in styleList" :key="item.url">
          <a href="javascript:void(0)">
            <img v-lazy="item.url" alt="item.zhTitle">
            <!-- <el-image :src="item.url" /> -->
            <p class="en_title">{{ item.enTitle }}</p>
            <p class="zh_title">{{ item.zhTitle }}</p>
            <p class="desc" v-html="item.desc"></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'styleArea',
  data() {
    return {
      styleList: [
        {
          url: '/static/style/style1.jpg',
          enTitle: 'Fresh French',
          zhTitle: '清新法式',
          desc: '与浪漫约会<br>优雅就是你的保护色<br>精致的消磨时间<br>让人身处其中时自得其乐<br>正是这份自在让生活更多姿<br>生命更绚丽'
        },
        {
          url: '/static/style/style2.jpg',
          enTitle: 'Urban Chic',
          zhTitle: '现代都市',
          desc: '忙碌的人群中，眼神不期而遇<br>美好即刻定格<br>处于快节奏下的都市人<br>愈发珍惜那份独处的安宁<br>享受内心的静谧空间'
        },
        {
          url: '/static/style/style3.jpg',
          enTitle: 'Natural Casual',
          zhTitle: '田园休闲',
          desc: '宁静与繁华<br>就是一转身的距离<br>回归淳朴<br>编制梦中闪烁家的样子'
        },
        {
          url: '/static/style/style4.jpg',
          enTitle: 'Simple American',
          zhTitle: '简约美式',
          desc: '生活中最重要的是找回那些流失的情愫<br>让精彩的细节与氛围<br>带我们重新步入经典<br>复古与现代兼收<br>凝练出独特气质'
        },
      ]
    };
  },
};
</script>

<style lang="scss">
#styleArea {
  height: 800px;
  .styleContainer {
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
    .styleList {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      li {
        text-align: left;
        &:nth-child(even) {
          margin-top: 90px;
        }
        &:hover {
          .en_title {
            color: #5EDF9A;
          }
          .zh_title {
            color: #5EDF9A;
          }
        }
        img {
          width: 250px;
          height: 412px;
        }
        .en_title {
          font-size: 18px;
          color: #9e9e9e;
          line-height: 30px;
          margin-top: 22px;
        }
        .zh_title {
          font-size: 24px;
          color: #505050;
          line-height: 28px;
        }
        .desc {
          font-size: 12px;
          color: #9e9e9e;
          line-height: 20px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
