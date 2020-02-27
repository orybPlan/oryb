<template>
  <div id="footer">
    <div class="footer-container">
      <div class="up">
        <div class="footer-left">
          <dl class="fl">
            <dt>产品<i></i></dt>
            <dd><a href="javascript:void(0)" target="_blank" title="集成灶">集成灶</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="分体灶">分体灶</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="油烟机 灶具">油烟机 灶具</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="水槽 洗碗机">水槽 洗碗机</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="蒸箱烤箱">蒸箱烤箱</a></dd>
          </dl>
          <dl class="fl">
            <dt>关于<i></i></dt>
            <dd><a href="javascript:void(0)" target="_blank" title="公司亮点">欧瑞宇邦简介</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="企业文化">企业文化</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="荣誉资质">荣誉资质</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="联系我们">联系我们</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="公司诠释">公司诠释</a></dd>
          </dl>
          <dl class="fl">
            <dt>专属服务<i></i></dt>
            <dd><a href="javascript:void(0)" target="_blank" title="日常使用">日常使用</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="服务体验">服务体验</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="关于服务">关于服务</a></dd>
          </dl>
          <dl class="fl">
            <dt>新闻动态<i></i></dt>
            <dd><a href="javascript:void(0)" target="_blank" title="促销活动">促销活动</a></dd>
            <dd><a href="javascript:void(0)" target="_blank" title="品牌视频">品牌视频</a></dd>
          </dl>
        </div>
        <div class="footer-center">
          <p>全国客服热线</p>
          <h4>0575-83109099</h4>
          <span>周一至周日 24小时服务热线</span>
        </div>
        <div class="footer-right">
          <span>
            <!-- <el-image src="/static/ercode.jpg" alt="欧瑞宇邦公众号二维码" /> -->
            <img v-lazy="ercodeUrl" alt="欧瑞宇邦公众号二维码">
            扫码关注欧瑞宇邦
          </span>
          <!-- <a href="javascript:void(0)" target="_blank"><i class="iconfont icon-tubiaozhizuo-"></i>关注微博</a> -->
        </div>
      </div>
      <div class="down">
        <div class="footer-bottom">
          Copyright © 2018 欧睿宇邦厨具有限公司<span>浙ICP备19012492-7号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layoutFooter',
  data() {
    return {
      ercodeUrl: '/static/ercode.jpg'
    };
  },
};
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: center;
  .footer-container {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    .up {
      display: flex;
      flex-direction: row;
      .footer-left {
        display: flex;
        flex-direction: row;
        dl {
          display: block;
          min-width: 100px;
          margin-right: 90px;
          dt {
            color: #fff;
            text-align: left;
            font-size: 16px;
            margin-bottom: 20px;
            i {
              width: 24px;
              border: 1px solid #464646;
              display: block;
              margin-top: 15px;
              font-style: normal;
              font-weight: normal;
            }
          }
          dd a {
            font-size: 14px;
            text-align: left;
            color: #b6b5b5;
            margin-bottom: 10px;
            display: block;
          }
        }
      }
      .footer-center {
        p {
          font-size: 16px;
          color: #f2f2f2;
          margin-bottom: 10px;
        }
        h4 {
          font-size: 30px;
          color: #fff;
          margin-bottom: 10px;
        }
        span {
          display: block;
          font-size: 14px;
          color: #919191;
          margin-bottom: 14px;
        }
      }
      .footer-right {
        display: flex;
        flex-direction: row;
        margin-left: 30px;
        span {
          width: 108px;
          height: 108px;
          margin: 0 24px;
          font-size: 13px;
          color: #fff;
          text-align: center;
          img {
            width: 100%;
            margin-bottom: 5px;
            display: block;
          }
        }
        a {
          width: 108px;
          height: 30px;
          background: #313131;
          display: block;
          color: #c8c8c8;
          font-size: 14px;
          line-height: 30px;
          i {
            font-size: 20px;
            display: inline-block;
            line-height: 30px;
            margin-left: 12px;
            margin-right: 5px;
          }
        }
      }
    }
    .down {
      .footer-bottom {
        margin-top: 20px;
        font-size: 14px;
        border-top: 1px solid #464646;
        color: #707070;
        text-align: center;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        width: 100%;
        span {
          margin-left: 20px;
          color: #707070;
        }
      }
    }
  }
}
</style>
