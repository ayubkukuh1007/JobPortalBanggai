<script>
import { MapIcon, MapPinIcon } from '@heroicons/vue/24/solid';
export default {
  components: { MapPinIcon, MapIcon },
  data(){
    return {

    }
  },
}

</script>

<template>
    <!-- tablet -->
    <div class=" max-w-screen-desktop portalBanner h-60">
        <div class="flex flex-col mx-20">
            <div class=" mt-4 font-bold">
                <span class=" font-light text-xs text-customColor8">Toili Luwuk Banggai</span>
                <span class=" text-xl block text-customColor8">Portal Lowongan Kerja Area Toili Luwuk & Banggai</span>
                <span class=" text-sm block font-normal text-customColor8">Temukan loker Terbaru Dibulan [month] [year] dengan mudah. Selengkapnya</span>
            </div>
        </div>
    </div>
</template>
<style>

.portalBanner {
    background: url("/images/PortalBener.svg") no-repeat center center;
    font-family: "Roboto", sans-serif;
}
</style>