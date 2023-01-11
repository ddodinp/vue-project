<template>
  <div class="wrap">
    <HeaderView />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from '@/components/header/HeaderView.vue'
export default {
  name: 'App',
  components: {
    HeaderView
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.wrap {
  margin: 60px 0;
  &-text{
    margin:50px;
    // color: $color-main;                                                                                                                                                                                                                     
  }
}
</style>
