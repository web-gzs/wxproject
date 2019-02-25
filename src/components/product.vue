<template>
  <div class="item">
    <img class="poster" :src="item.image"/>
    <div class="meta">
      <span class="title">{{item.title}}</span>
      <span class="sub-title">{{item.original_title}} ({{item.year}})</span>
      <div class="artists">导演<block> {{item.directors}} </block></div>
    </div>
    <div>
      <span class='rating'>{{item.average}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
    .item {
    display: flex;
    padding: 20rpx 40rpx;
    border-bottom: 1rpx solid #eee;
    cursor: pointer;
    }

    .item .poster {
    width: 128rpx;
    height: 168rpx;
    margin-right: 20rpx;
    }

    .item .meta {
    flex: 1;
    }

    .item .meta .title,
    .item .meta .sub-title {
    display: block;
    margin-bottom: 15rpx;
    }

    .item .meta .title {
    font-size: 32rpx;
    }

    .item .meta .sub-title {
    font-size: 22rpx;
    color: #c0c0c0;
    }

    .item .meta .artists {
    font-size: 24rpx;
    color: #999;
    }

    .item .rating {
    display: inline-block;
    width: 40rpx;
    font-size: 28rpx;
    font-weight: bold;
    span-align: center;
    background-color: rgba(247, 76, 49, 0.8);
    color: #fff;
    padding: 10rpx;
    border-radius: 20rpx;
    }
</style>
