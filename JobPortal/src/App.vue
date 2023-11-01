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
</script>

<template>
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
      <CardJobItem/>
      <CardJobItem/>
      <CardJobItem/>
    </div>
    <Latevacancies/>
    <div class="flex flex-col gap-4">
      <CardJobItemList/>
      <CardJobItemList/>
      <CardJobItemList/>
    </div>
    <Footer/>
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

