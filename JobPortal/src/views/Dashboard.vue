<script>
import {defineComponent} from "vue";
import Recomendition from "../components/Recomendition.vue";
import CardJobItemList from "../components/CardJobItemList.vue";
import CardJobItem from "../components/CardJobItem.vue";
import Latevacancies from "../components/Lastvacancies.vue";
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  components: {
    Latevacancies,
    CardJobItem,
    CardJobItemList,
    Recomendition,
    Carousel,
    Slide,
    Navigation,
  },data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    breakpoints: {
      280: {
        itemsToShow: 1.4,
        snapAlign: 'center',
      },
      375: {
        itemsToShow: 1.6,
        snapAlign: 'center',
      },
      412: {
        itemsToShow: 1.8,
        snapAlign: 'center',
      },
      // 700px and up
      700: {
        itemsToShow: 2.8,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow:2.8,
        snapAlign: 'center',
      },
    },
  }),
})
</script>
<template>
    <div class="container mx-auto max-w-screen-phone">
      <Recomendition/>
      <!-- job items -->
      <div class="w-full h-full">
        <Carousel v-bind="settings" :autoplay="3000" :wrap-around="true" :breakpoints="breakpoints">
          <Slide v-for="slide in 1" :key="slide">
            <router-link to="/job-detail"><CardJobItem/></router-link>
          </Slide>
        </Carousel>
      </div>
      <Latevacancies/>
      <div class="flex flex-col gap-4">
        <router-link to="/job-detail"><CardJobItemList/></router-link>
        <router-link to="/job-detail"><CardJobItemList/></router-link>
        <router-link to="/job-detail"><CardJobItemList/></router-link>
        <router-link to="/job-detail"><CardJobItemList/></router-link>
        <router-link to="/job-detail"><CardJobItemList/></router-link>
      </div>
    </div>
</template>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>