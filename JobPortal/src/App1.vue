<script setup>
  import HeaderAtas from './components/HeaderAtas.vue';
  import HeaderSub from './components/HeaderSub.vue';
  import Cardjobsearch from './components/CardjobSearch.vue';
  import Recomendition from './components/Recomendition.vue';
  import CardHideefect from './components/CardHideeffect.vue';
  import CardJobItem from './components/CardJobItem.vue';
  import CardJobItemList from './components/CardJobItemList.vue';
  import Latevacancies from './components/Lastvacancies.vue';
  import Footer from './components/Footer.vue';
  import BurgerNav from "./components/BurgerNav.vue";
  import {computed} from "vue";

  const isMobile = computed(() => {
    return screen.width <= 760;
  });

</script>

<template>
<!--  <div v-if="!isMobile">-->
<!--    Desktop-->
<!--  </div>-->
  <!-- Display Moibel -->
  <div v-if="!isMobile">
    <div class="container mx-auto max-w-screen-phone">
      <HeaderAtas/>
      <HeaderSub/>
      <Cardjobsearch/>
      <!-- tricky position absolute -->
      <CardHideefect/>
      <!-- label Job recomendation -->
      <Recomendition/>
      <!-- job items -->
      <div class="flex flex-row items-center h-96 overflow-x-auto gap-4 ">
        <router-link to="/jobdetail"><CardJobItem/></router-link>
        <router-link to="/jobdetail"><CardJobItem/></router-link>
        <router-link to="/jobdetail"><CardJobItem/></router-link>
      </div>
      <Latevacancies/>
      <div class="flex flex-col gap-4">
        <router-link to="/jobdetail"><CardJobItemList/></router-link>
        <router-link to="/jobdetail"><CardJobItemList/></router-link>
        <router-link to="/jobdetail"><CardJobItemList/></router-link>
        <router-link to="/jobdetail"><CardJobItemList/></router-link>
        <router-link to="/jobdetail"><CardJobItemList/></router-link>
      </div>
<!--      <BurgerNav/>-->
      <Footer/>
    </div>
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

