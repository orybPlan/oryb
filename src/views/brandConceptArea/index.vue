<template>
  <div id="brandConcept">
    <ul class="brandContainer">
      <li class="brandItem" v-for="item in brandInfo" :key="item.conceptName">
        <a href="javascript:void(0)" >
          <div class="brand_bg">
            <el-image :src="item.url" :alt="item.des"/>
          </div>
          <div class="brand_text">
            <h5 class="brand_title">{{ item.conceptName }}</h5>
            <p class="brand_desc">{{ item.des }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'brandConcept',
  data() {
    return {
      brandInfo: [
        {
          conceptName: '大师设计',
          des: '专业第一 值得信赖',
          url: '/static/brand/brand1.jpg'
        },
        {
          conceptName: '德系工艺',
          des: '精益求精 品质至上',
          url: '/static/brand/brand2.jpg'
        },
        {
          conceptName: '变态环保',
          des: '绿色新生活',
          url: '/static/brand/brand3.jpg'
        },
        {
          conceptName: '品牌实力',
          des: '专注高端生活方式',
          url: '/static/brand/brand2.jpg'
        },
        {
          conceptName: '战略合作',
          des: '全球战略合作伙伴',
          url: '/static/brand/brand1.jpg'
        }
      ]
    };
  },
};
</script>

<style lang="scss">
#brandConcept {
  display: flex;
  padding: 30px 0 20px;
  .brandContainer {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: 0 auto;
    .brandItem {
      position: relative;
      .brand_bg {
        position: relative;
        width: 227px;
        height: 224px;
        .el-image__inner {
          transition: transform .3s linear;
          &:hover {
            transform: scale(1.1);
          }
        }
        p {
          width: 100%;
          position: absolute;
          bottom: 0;
          padding: 12px 0;
          font-size: 20px;
          text-align: center;
          background: #f3f3f3;
          opacity: .9;
          &:hover {
            padding-top: 30px;
          }
          span {
            display: block;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
      .brand_text {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 8px;
        background-color: rgba(230, 75, 78, 0.4);
        background-image: none;
        background-repeat: repeat;
        background-position: 0 0;
        transition: all linear .3s;
        .brand_title {
          padding: 0;
          font-size: 14px;
          text-align: center;
          font-family: 'Microsoft YaHei';
          line-height: 34px;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #fff;
          overflow: hidden;
        }
        .brand_desc {
          color: #fff;
        }
      }
      &:hover {
        .brand_text {
          height: 100%;
          background-position: 100% 100%;
          h5 {
            padding-top: 40px;
          }
        }
      }
    }
  }
}
</style>
