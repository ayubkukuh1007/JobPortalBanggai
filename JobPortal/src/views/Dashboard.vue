<script>
import {defineComponent} from "vue";
import Recomendition from "../components/Recomendition.vue";
import CardJobItemList from "../components/CardJobItemList.vue";
import CardJobItem from "../components/CardJobItem.vue";
import Latevacancies from "../components/Lastvacancies.vue";

export default defineComponent({
  components: {
    Latevacancies,
    CardJobItem,
    CardJobItemList,
    Recomendition
  }
})
</script>
<template>
    <div class="container mx-auto max-w-screen-phone">
      <Recomendition/>
      <!-- job items -->
      <div class="flex flex-row items-center h-96 overflow-x-auto gap-4 ">
        <router-link to="/job-detail"><CardJobItem/></router-link>
        <router-link to="/job-detail"><CardJobItem/></router-link>
        <router-link to="/job-detail"><CardJobItem/></router-link>
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