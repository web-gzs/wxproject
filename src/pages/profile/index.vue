<template>
  <p>你好啊</p>
 


</template>

<script>
    export default {
        mounted () {
               wx.getLocation({
                    type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
                    success(res) {
                    const latitude = res.latitude
                    const longitude = res.longitude
                    wx.openLocation({
                        latitude,
                        longitude,
                        scale: 18
                    })
                    }
                })
        }
    }
</script>

<style>
    p{height: 50px;line-height: 50px;text-align: center}
</style>
