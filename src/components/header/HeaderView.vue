<template>
  <div class="cm-header">
    <div class="cm-header__container">
      <div class="cm-header__logo">
        <router-link
          :to="logo.href"
          class="cm-header__logo-icon"
        >
          <h1 class="logo">{{logo.name}}</h1>
        </router-link>
      </div>
      <div class="cm-header__nav">
        <ul class="cm-header__nav-list">
          <li 
            v-for="item in navigations"
            :key="item.name"
            class="cm-header__nav-item">
            <router-link
              :to="item.href"
              active-class="active"
              class="cm-header__nav-link">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="cm-header__more">
        <button type="button" class="cm-header__more-btn">
          <span>더보기</span>
        </button>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  components: {
    
  },
  data() {
    return {
      logo: {
        name:'Logo',
        href:'/'
      },
      navigations: [
        // {
        //   name:'메인',
        //   href:'/'
        // },
        {
          name: '프로필',
          href: '/AboutMe'
        },
        {
          name: '맛지도',
          href: '/FoodMap'
        },
        {
          name: '연락처',
          href: '/ContactMe'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cm-header{ 
  position:fixed;
  z-index:999;
  top:0;
  left:0;
  width:100%;
  padding:14px 30px;
  background: #fff;
  border-bottom: 1px solid $color-gray-4;
  &__container{
    margin: 0 auto;
    max-width: 1600px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo{
    flex-shrink: 0; 
    width: 100px;
    &-icon {
      
    }
    .logo {
      width:32px;
      height:32px;
      background:url('@/../public/favicon.ico');
      text-indent:-9999px;
    }
  }
  &__nav{
    flex-grow:1;
    &-list{
      display: flex;
      gap: 32px;
      &-item{
      }
    }
    &-link{
      font-size: $font-size-standard;
      font-weight: 550;
      transition: all 0.3s;
    }
  }
  &__more {
    width:100px;
    &-btn {
      position:relative;
    }
  }
}
  
</style>