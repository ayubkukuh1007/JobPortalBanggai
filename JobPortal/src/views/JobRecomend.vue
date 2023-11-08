<script>
import {defineComponent} from "vue";
import CardJobItemList from "../components/CardJobItemList.vue";
import RecomenditionL from "../components/RecomenditionL.vue";
import Latevacancies from "../components/Lastvacancies.vue";
import Recomendition from "../components/Recomendition.vue";
import DCardJobItem from "../components/Desktop/DCardJobItem.vue";
import DRecomendition from "../components/Desktop/DRecomendition.vue";
import DCardJobItemList from "../components/Desktop/DCardJobItemList.vue";
import DLastvacancies from "../components/Desktop/DLastvacancies.vue";
export default defineComponent({
  components: {
    DLastvacancies,
    DCardJobItemList,
    DRecomendition, DCardJobItem, Recomendition, Latevacancies, RecomenditionL, CardJobItemList},
  computed : {
    isMobile() {
      return screen.width <= 760;
    },
  },
})
</script>
<template>
  <div v-if="isMobile" class="container mx-auto tra max-w-screen-phone flex-none">
    <Recomendition/>
    <div class="flex flex-col gap-4">
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
    </div>
  </div>
  <!-- Display For DESKTOP,LAPTOP -->
  <div v-else class="container mx-auto max-w-screen-desktop">
    <div class="mx-20">
      <DRecomendition/>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col w-2/3 gap-4">
          <router-link to="/job-detail"><DCardJobItemList/></router-link>
          <router-link to="/job-detail"><DCardJobItemList/></router-link>
          <router-link to="/job-detail"><DCardJobItemList/></router-link>
          <router-link to="/job-detail"><DCardJobItemList/></router-link>
          <router-link to="/job-detail"><DCardJobItemList/></router-link>
        </div>
        <div class="flex flex-col w-1/3 shadow-md p-2">
          <div>
            <img src="/images/ads.svg" alt="">
          </div>
          <span class="h-2 w-full bg-customColor10 rounded-sm mt-4 mb-4"></span>
          <div class="flex flex-col w-full">
            <h4 class="font-semibold text-2xl">Profesi</h4>
            <ul class="text-xl font-thin">
              <li>Administarasi</li>
              <li>Sales</li>
              <li>Pelayan Toko</li>
              <li>Barista</li>
              <li class="font-semibold">+ Profesi Lainnya</li>
            </ul>
          </div>
          <div class="flex flex-col w-full">
            <h4 class="font-semibold text-2xl">Pendidikan</h4>
            <ul class="text-xl font-thin">
              <li>SMP</li>
              <li>SMK</li>
              <li>SMA</li>
              <li>S1</li>
              <li>PROFESI</li>
            </ul>
          </div>
          <div class="flex flex-col w-full">
            <h4 class="font-semibold text-2xl">Status Kerja</h4>
            <ul class="text-xl font-thin">
              <li>Full Time</li>
              <li>Part Time</li>
              <li>Freelance</li>
              <li>Magang</li>
            </ul>
          </div>
          <div class="flex flex-col w-full">
            <h4 class="font-semibold text-2xl">Lokasi</h4>
            <ul class="text-xl font-thin">
              <li>Luwuk</li>
              <li>Banggai</li>
              <li>Toili</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.slider{
  width: 100%;
  height: 340px;
  position: relative;
  overflow: hidden;
}
.slider .list{
  position: absolute;
  width: 100%;
  padding: 4px;
  left: 0;
  gap: 1.25rem;
  overflow-x: scroll;
  top: 0;
  display: flex;
  transition: 1s;
}
.disable-scrollbars::-webkit-scrollbar {
  background: transparent; /* Chrome/Safari/Webkit */
  width: 0;
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
}
</style>