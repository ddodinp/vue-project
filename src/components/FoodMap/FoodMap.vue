<template>
  <div class="food-content">
    <!-- 배너 -->
    <BannerComponent :bannerOpt="bannerOpt"/> <!-- props 데이터-->
    <BannerInput :bannerOpt="bannerOpt"/> <!-- input style-->
    <!-- <BannerInput class="cm-food__banner-visual" /> -->
  </div>
</template>

<script>
import BannerInput from '@/components/FoodMap/BannerInput.vue'
import BannerComponent from '@/components/FoodMap/BannerComponent.vue'

export default {
  name: 'FoodMap',
  components: {
    BannerInput,
    BannerComponent,
  },
  data() {
    return {
      // 부모: 데이터 저장 -> 자식: props 데이터 내려받기
      bannerOpt: {
        tit: '돈 주고 별 사는 서비스는 그만! 후기들이 만드는 찐 별맛집',
        btnMsg: '지금 둘러보기',
        bgImg: 'bg_main_banner.jpg'
      },
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

// common button
.btn {
  position: relative;
  background-color: $color-main;
  text-align: center;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.15);
  padding: 15px 32px 15px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: $color-sub;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .2)
  }
}

// font
.text-white {
  color: $colorBg1;
}
</style>