<template>
  <div class="container">
    <div class="search">
      <input class='search-input' :placeholder="subtitle" focus @change="handleSearch" />
    </div>
    <div class="list">
      <div class="tips" v-if="loading">
        <div>
          <img class='tips-img' src="/static/images/loading.gif" mode="aspectFill"/>
          <span>刷新中...</span>
        </div>
      </div>
      <navigator v-for="item in list" :key="item.id" :url="'../item/main?id=' + item.id"  >
        <product :item="item"></product>
      </navigator>
      <div class="tips" v-if="list.length>0">
        <div v-if="hasMore">
          <img class='tips-img' :src="'/static/images/loading.gif'" mode="aspectFill"/>
          <span class="span">玩命加载中...</span>
        </div>
        <div v-else>
          <span>没有更多内容了</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import douban from '../../utils/douban.js';
import product from '../../components/product';

export default {
  data () {
    return {
      page: 1,
      size: 20,
      subtitle: '输入想要搜索的内容',
      list: [],
      search: '搜索',
      loading: false,
      hasMore: false
    }
  },

  components: {
    product
  },

  methods: {
    loadList(){
      this.subtitle='加载中...';
      this.hasMore=true
      this.loading=true
      // this.setData({ subtitle: '标题...', hasMore: true, loading: true })
      let start = (this.page - 1) * this.size;//??????
      this.page=this.page + 1;
      /* this.setData({
        page: this.page + 1
      }); */
      // console.log('https://douban.uieee.com/v2/movie/search?q=' + this.search + '&start=' + start + '&count=' + this.size);
      douban({
        url: '/v2/movie/search',
        data: {
          tag: this.search,
          start: start,
          count: this.size
        }
      }).then(
        res => {
          this.loading=false
          this.hasMore=false
          this.subtitle=res.data.title
          // this.setData({ loading: false, hasMore: false, subtitle: res.data.title });
          console.log('????', res.data.subjects)
          if (!res.data.subjects.length) {
            return;
          }

          let result = [];
          res.data.subjects.map((item) => {
            result.push({
              image: item.images.small,
              id: item.id,
              title: item.title,
              average: item.rating.average,
              original_title: item.original_title,
              year: item.year,
              directors: (item.directors.length && item.directors[0].name) || '-'
            })
          });
          this.list = this.list.concat(result)
          /* this.setData({
            list: this.list.concat(result),
          }); */

          console.log(res.data.total, res.data.count,this.list.length)
          
          mpvue.stopPullDownRefresh(); //??????UI
        }
      )
    },
    handleSearch(e) {
      if (!e.target.value) return
      this.list=[]
      this.page=1
      this.subtitle='加载中...';
      this.hasMore=true;
      this.loading=true;
      this.search=e.target.value ;
      // this.setData({ list: [], page: 1 })//?????????
      // this.setData({ subtitle: '???...', hasMore: true, loading: true, search: e.detail.value });
      this.loadList()
    }
  },

  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    this.list = [];
    this.page = 1;
    this.loadList();
      // app.wechat.original.stopPullDownRefresh(); //??????UI
  },

  /**
   * ?????????????
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    this.loadList(); //????
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

.search {
  display: flex;
  justify-content: center;
  border-bottom: 1rpx solid #ccc;
}

.search .search-input {
  padding: 20rpx 40rpx;
  color: #999;
  font-size: 38rpx;
  span-align: center;
}

.list {
  display: flex;
  flex: 1;
  flex-direction: column;
}


.list .tips {
  font-size: 28rpx;
  span-align: center;
  padding: 50rpx;
  color: #ccc;
}

.list .tips .tips-img,
.list .tips .span {
  vertical-align: middle;
}

.list .tips .tips-img {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
}

</style>
