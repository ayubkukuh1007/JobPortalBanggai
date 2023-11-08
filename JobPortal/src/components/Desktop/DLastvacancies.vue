<script>
export default {
  data(){
    return {

    }
  },
}

</script>

<template>
    <!-- tablet -->
    <div class="max-w-screen-desktop bg-customColor9 ">
        <div class="flex flex-col justify-between">
          <div class="flex self-center">
            <router-link to="/job-recommendation">
              <span class=" font-thin text-customColor8 text-md">Rekomendasi Lainnya > </span>
            </router-link>
          </div>
          <div class="flex self-start">
            <span class="RecFont font-semibold text-customColor8 text-2xl">Rekomendasi Lowongan </span>
          </div>
        </div>
    </div>
</template>
<style scoped>
.RecFont {
  font-family: "Roboto", sans-serif;
}
</style>