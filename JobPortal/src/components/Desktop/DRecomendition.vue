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
    <div class="max-w-screen-desktop bg-customColor9 p-2">
      <div class="flex flex-col mx-5 justify-between">
        <div class="flex self-center">
          <router-link to="/job-recommendation">
            <span class=" font-thin text-customColor8 text-md">Rekomendasi Lainnya > </span>
          </router-link>
        </div>
        <div class="flex self-center">
          <span class=" font-semibold text-customColor8 text-2xl">Rekomendasi Lowongan </span>
        </div>
      </div>
    </div>
</template>
<style>
</style>