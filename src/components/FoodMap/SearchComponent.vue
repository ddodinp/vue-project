<template>
  <!-- 검색필드 -->
  <fieldset class="main-search">
    <legend class="blind">검색</legend>
    <label class="search-word" for="main-search">
      <input class="search-area" maxlength="50" placeholder="지역, 식당 또는 음식">
    </label>
    <input class="btn-search" type="submit" value="검색">
  </fieldset>
</template>

<script>
export default {
  name: 'SearchComponent',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>



.main-search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // position: relative;
    width: 50%;
    height: 50px;
    // border: 2px solid #000;
    border-radius: 80px;
    background-color: #fff;
    overflow: hidden;
    .icon {
      // display: block;
    }
    .search-area{
      padding-left: 10px;
      // display: block;
      // width: 100%;
    }

    .btn-search{
      display: block;
      // position: absolute;
      // top: 0;
      // right: -1px;
      width: 110px;
      height: 100%;
      font-size: 18px;
      color: #ffffff;
      line-height: 48px;
      border-radius: 50px;
      background-color: #155eef;
      -webkit-appearance: none;
      &:hover{
        color: #000;
        background-color: #fedf89;
      }
    }
  }
</style>