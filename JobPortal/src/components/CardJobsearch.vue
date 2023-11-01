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
    <div class="flex absolute w-full justify-center max-w-screen-phone mx-auto h-48 -translate-y-1/2">  
        <div class="flex flex-col justify-center w-10/12 bg-customColor9 rounded-xl shadow-md px-4 gap-2">
            <div class="flex flex-col">
                <input class="w-full outline-none" type="text" placeholder="Cari Kerjaan">
                <span class="h-1 w-full bg-customColor10 rounded-sm"></span>
            </div>
            <div class="flex flex-row justify-between gap-1">
                <div class="flex flex-col w-full">
                    <select class=" outline-none" name="lokasi">
                        <option value="toili">Toili</option>
                        <option value="luwuk">Luwuk</option>
                        <option value="Banggai">Banggai</option>
                    </select>
                    <span class="h-1 w-full bg-customColor10 rounded-sm"></span>
                </div>
                <div class="flex flex-col w-full">
                    <select class=" outline-none" name="Lulusan Optional">
                        <option value="toili">Toili</option>
                        <option value="luwuk">Luwuk</option>
                        <option value="Banggai">Banggai</option>
                    </select>
                    <span class="h-1 w-full bg-customColor10 rounded-sm"></span>
                </div>
            </div>
            <div class="flex flex-row justify-between">
                <div class="flex gap-2">
                    <input type="checkbox" name="" value="Full Time">
                    <label for="fulltime">Full Time</label>
                </div>
                <div class="flex gap-2">
                    <input type="checkbox" name="" value="Part Time">
                    <label for="parttime">Part Time</label>
                </div>
                <div class="flex gap-2">
                    <input type="checkbox" name="" value="Freelance">
                    <label for="freelance">Freelance</label>
                </div>
            </div>
            <div>
                <button class=" w-full p-2 rounded-md text-customColor9 bg-customColor6">Terapkan Pencarian</button>
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