<template>
  <div class="container">
    <!-- <header title="{{title}}"></header> -->
    <img class="background" :src="detail.images && detail.images.large" mode="aspectFill"/>
    <div>
      <div class="meta">
        <img class="poster" :src="detail.images && detail.images.large" mode="aspectFit" />
        <span class="title">{{detail.title}}({{detail.year}})</span>
        <span class="info">评分：{{detail.rating && detail.rating.average}}</span>
        <span class="info">导演：<block v-for="item in detail.directors" :key="item.id"> {{item.name}} </block></span>
        <span class="info">主演：<block v-for="item in detail.casts" :key="item.id"> {{item.name}} </block></span>
      </div>
      <div class="summary">
        <span class="label">摘要：</span>
        <span class="content">{{detail.summary}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import douban from '../../utils/douban.js';
export default {
  data () {
    return {
      title: '加载中',
      detail: {}
    }
  },

  components: {
  },

  methods: {
    
  },

  mounted() {
    douban({
      url: '/v2/movie/subject/' + this.$root.$mp.query.id,
      navLoading: true
    }).then(
      res => {
        if (res.data.msg) {
          console.log('detail ID有误');
          return;
        }
        this.detail=res.data;
        this.title=res.data.title;
       /*  this.setData({
          detail: res.data,
          title: res.data.title
        }); */
        mpvue.setNavigationBarTitle({ title: this.title + ' « 电影 « 豆瓣' }); //加载完了修改
        console.log(this.detail)
      }
    )
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50rpx 40rpx;
}

.poster {
  width: 100%;
  height: 800rpx;
  margin: 20rpx;
}

.title {
  font-style: 42rpx;
  color: #222;
}

.info {
  font-size: 18rpx;
  color: #444;
  margin-top: 20rpx;
  width: 80%;
}

.summary {
  width: 80%;
  margin: 30rpx auto;
}

.label {
  display: block;
  font-size: 30rpx;
  margin-bottom: 30rpx;
}

.content {
  color: #555;
  font-size: 20rpx;
  padding: 2em;
}

.background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
  opacity: .1;
}

</style>
