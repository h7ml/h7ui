<template>
  <div class="main-skeleton">
    <h7-skeleton height="80px"></h7-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <h7-skeleton height="300px"></h7-skeleton>
        </div>
        <h7-skeleton height="45px"></h7-skeleton>
      </div>
      <div class="skeleton-bottom">
        <h7-skeleton height="45px"></h7-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
