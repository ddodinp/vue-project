<template>
  <div class="container">
    <!-- :class="$attrs.class" 클래스 상속 -->
    <div class="banner-wrap" :class="$attrs.class" :style="bannerStyle">
      <!-- 메인 배너 텍스트 -->
      <em class="main-text text-white">{{ bannerOpt.tit }}</em>
      <button class="btn text-white" type="button">{{ bannerOpt.btnMsg }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  components: {
  },
  inheritAttrs: false, // 속성 자동 상속 방지
  props: {
    bannerOpt : {
      type: Object,
    },
  },
  data() {
    return {
      bannerStyle: {
        // backgroundImage: `background: url(images/${this.bannerOpt.bgImg}) center / cover`,
        background: 'url(/images/bg_main_banner.jpg) center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
  width: 100%;
  height: 350px;
  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .main-text {
    position: relative;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
}

</style>