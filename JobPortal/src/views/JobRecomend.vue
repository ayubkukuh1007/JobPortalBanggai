<script>
import {defineComponent} from "vue";
import CardJobItemList from "../components/CardJobItemList.vue";
import RecomenditionL from "../components/RecomenditionL.vue";
export default defineComponent({
  components: {RecomenditionL, CardJobItemList}
})
</script>
<template>
  <div class="container mx-auto max-w-screen-phone">
    <RecomenditionL/>
    <!-- job items -->
    <div class="flex flex-col gap-4">
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
      <router-link to="/job-detail"><CardJobItemList/></router-link>
    </div>
  </div>
</template>