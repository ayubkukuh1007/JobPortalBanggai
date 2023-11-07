<script>
  import HeaderAtas from './components/HeaderAtas.vue';
  import HeaderSub from './components/HeaderSub.vue';
  import Cardjobsearch from './components/CardjobSearch.vue';
  import CardHideefect from './components/CardHideeffect.vue';
  import BurgerNav from "./components/BurgerNav.vue";
  import Footer from './components/Footer.vue';
  // Desktop
  import DCardJobsearch from "./components/Desktop/DCardJobsearch.vue";
  import DCardHideeffect from "./components/Desktop/DCardHideeffect.vue";
  import DHeaderAtas from "./components/Desktop/DHeaderAtas.vue";
  import DFooter from "./components/Desktop/DFooter.vue";
  import DBurgerNav from "./components/Desktop/DBurgerNav.vue";
  import DHeaderSub from "./components/Desktop/DHeaderSub.vue";


  export default {
    components: {
      DHeaderSub,
      DBurgerNav,
      DFooter,
      DCardHideeffect,
      DHeaderAtas,
      DCardJobsearch,
      HeaderAtas,
      HeaderSub,
      BurgerNav,
      Cardjobsearch,
      CardHideefect,
      Footer},

    data(){
      return {
        navBurger : false
      }
    },
    methods : {
      isNavBurger(){
        this.navBurger = !this.navBurger
      }
    },
    computed : {
      isMobile() {
        return screen.width <= 760;
      }
    }
  }

</script>

<template>
  <div v-if="isMobile" class="container mx-auto max-w-screen-phone">
      <HeaderAtas @is-nav-toggle="isNavBurger"/>
      <HeaderSub/>
      <Cardjobsearch/>
      <CardHideefect/>
      <router-view></router-view>
      <Footer/>
      <BurgerNav :is-burger-nav="navBurger" />
  </div>

  <div v-else class="container mx-auto max-w-screen-desktop">
    <DHeaderAtas @is-nav-toggle="isNavBurger"/>
    <DHeaderSub/>
    <DCardJobsearch/>
    <DCardHideeffect/>
    <router-view></router-view>
    <DFooter/>
    <!-- <DBurgerNav :is-burger-nav="navBurger" /> -->
  </div>
</template>

<style>
  @font-face {
    font-family: "Roboto";
    src:
      local("Montserrat"),
      url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
  }
</style>

