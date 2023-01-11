<template>
  <div class="banner-wrap">
    <!-- 메인 배너 텍스트 -->
    <em class="main-text" >
      {{ bannerText }}
    </em>

    <!-- 검색필드 -->
    <SearchComponent/>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
export default {
  name: 'BannerInput',
  components: {
    SearchComponent
  },
  data() {
    return {
      msg: '돈 주고 별 사는 서비스는 그만! 후기들이 만드는 찐 별맛집',
      bannerText: '돈 주고 별 사는 서비스는 그만! 후기들이 만드는 찐 별맛집',
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
  gap: 20px;
  width: 100%;
  height: 300px;
  background-color: #b2ccff;
  .main-text {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
}


</style>