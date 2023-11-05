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
    <div class=" max-w-screen-phone portalBanner h-60">
        <div class="flex flex-col mx-5">
            <div class=" mt-4 text-customColor9 font-bold">
                <span class=" font-light text-xs text-customColor9">Toili Luwuk Banggai</span>
                <span class=" text-xl block">Portal Lowongan Kerja Area Toili Luwuk & Banggai</span>
                <span class=" text-sm block font-normal">Temukan loker Terbaru Dibulan [month] [year] dengan mudah. Selengkapnya</span>
            </div>
        </div>
    </div>
</template>
<style>

.portalBanner {
    background: url("/images/PortalBener.png") no-repeat center center;
    font-family: "Roboto", sans-serif;
}
</style>