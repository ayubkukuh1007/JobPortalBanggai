<script>
import {defineComponent} from "vue";
import Recomendition from "../components/Recomendition.vue";
import CardJobItemList from "../components/CardJobItemList.vue";
import CardJobItem from "../components/CardJobItem.vue";
import Latevacancies from "../components/Lastvacancies.vue";
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import DCardJobItem from "../components/Desktop/DCardJobItem.vue";
import DRecomendition from "../components/Desktop/DRecomendition.vue";
import DCardJobItemList from "../components/Desktop/DCardJobItemList.vue";
import DLastvacancies from "../components/Desktop/DLastvacancies.vue";

let items = document.querySelectorAll('.slider .list .item');
let slider = document.querySelector('.slider .list');
let lengthItems = items.length - 1;

export default defineComponent({

  components: {
    DLastvacancies,
    DCardJobItemList,
    DRecomendition,
    DCardJobItem,
    Latevacancies,
    CardJobItem,
    CardJobItemList,
    Recomendition,
    Carousel,
    Slide,
    Navigation,
  },
  // data: () => ({
  //   // carousel settings
  //   settings: {
  //     itemsToShow: 1,
  //     snapAlign: 'center',
  //   },
  //   // breakpoints are mobile first
  //   breakpoints: {
  //     // 280: {
  //     //   itemsToShow: 1,
  //     //   snapAlign: 'center',
  //     // },
  //     // 375: {
  //     //   itemsToShow: 1.8,
  //     //   snapAlign: 'center',
  //     // },
  //     // 412: {
  //     //   itemsToShow: 1,
  //     //   snapAlign: 'center',
  //     // },
  //     // 700px and up
  //     700: {
  //       itemsToShow: 2.7,
  //       snapAlign: 'center',
  //     },
  //     // 1024 and up
  //     1024: {
  //       itemsToShow:3.6,
  //       snapAlign: 'start',
  //     },
  //     1280: {
  //       itemsToShow:4.6,
  //       snapAlign: 'center',
  //     },
  //   },
  // }),
  data(){
    return {
      test : 0
    }
  },
  computed : {
    isMobile() {
      return screen.width <= 760;
    },
  },
  methods : {
    Slider() {

      let slider = document.querySelector('.slider .list');
      let items = document.querySelectorAll('.slider .list .item');
      let i = 0
      let offset = items[0].offsetWidth
      setInterval(function () {
        slider = document.querySelector('.slider .list');
        items = document.querySelectorAll('.slider .list .item');
        let node = items[i].cloneNode(true)
        slider.appendChild(node)
        if (i > 0) {
          offset = offset + 260;
          slider.style.left = -offset + 'px'
        }else {
          slider.style.left = -offset + 'px'
        }
        items[i].remove()
        slider.style.left = 0 + 'px'

      }, 4000);
    },
  },
  mounted() {
    this.Slider()
  }
})
</script>
<template>
    <div v-if="isMobile" class="container mx-auto tra max-w-screen-phone flex-none">
      <Recomendition/>
      <!-- job items -->
      <div class="flex w-full h-full overflow-hidden">
        <Carousel v-bind="settings" :autoplay="3000" :wrap-around="true" :breakpoints="breakpoints">
          <Slide v-for="slide in 1" :key="slide">
            <router-link to="/job-detail"><CardJobItem/></router-link>
            <router-link to="/job-detail"><CardJobItem/></router-link>
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

    <div v-else class="container mx-auto max-w-screen-desktop">
      <DRecomendition/>
      <div class="slider">
        <div class="list">
          <div class="item">1<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">2<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">3<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">4<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">5<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">6<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">7<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">8<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">9<router-link to="/job-detail"><DCardJobItem/></router-link></div>
          <div class="item">10<router-link to="/job-detail"><DCardJobItem/></router-link></div>
        </div>
      </div>
      <DLastvacancies/>
      <div class="flex flex-col gap-4">
        <router-link to="/job-detail"><DCardJobItemList/></router-link>
        <router-link to="/job-detail"><DCardJobItemList/></router-link>
        <router-link to="/job-detail"><DCardJobItemList/></router-link>
        <router-link to="/job-detail"><DCardJobItemList/></router-link>
        <router-link to="/job-detail"><DCardJobItemList/></router-link>
      </div>
    </div>

</template>
<style>
  .slider{
    width: 100%;
    height: 384px;
    position: relative;
    overflow: hidden;
  }
  .slider .list{
    position: absolute;
    width: 100%;
    left: 0;
    gap: 1.25rem;
    top: 0;
    display: flex;
    transition: 1s;
  }
</style>
