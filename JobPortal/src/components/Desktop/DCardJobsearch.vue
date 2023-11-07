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
    <div class="flex absolute justify-center max-w-screen-desktop mx-auto h-32 w-full -translate-y-1/2">
        <div class="flex flex-col justify-center w-2/3 bg-customColor9 rounded-xl shadow-md px-4 gap-2">
          
          <div class="flex flex-row items-center justify-center gap-4">
            <div class="flex flex-col w-full">
              <input class="w-full outline-none text text-lg" type="text" placeholder="Cari Kerjaan">
              <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            </div>

            <div class="flex flex-col w-full">
              <select class=" outline-none text-lg" name="lokasi">
                <option value="toili">Toili</option>
                <option value="luwuk">Luwuk</option>
                <option value="Banggai">Banggai</option>
              </select>
              <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            </div>

            <div class="flex flex-col w-full">
              <select class=" outline-none text-lg" name="lokasi">
                <option value="toili">Toili</option>
                <option value="luwuk">Luwuk</option>
                <option value="Banggai">Banggai</option>
              </select>
              <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            </div>

          </div>
          <div class="flex flex-row justify-between items-center">
              <div class="flex w-full gap-1">
                  <input type="checkbox" name="" value="Full Time">
                  <label class="text-lg" for="fulltime">Full Time</label>
              </div>
              <div class="flex w-full gap-1">
                  <input type="checkbox" name="" value="Part Time">
                  <label class="text-lg" for="parttime">Part Time</label>
              </div>
              <div class="flex w-full gap-1">
                  <input type="checkbox" name="" value="Freelance">
                  <label class="text-lg" for="freelance">Freelance</label>
              </div>
               <div class="flex w-full">
                 <button class="p-2 whitespace-nowrap rounded-md text-customColor9 bg-customColor13">Cari Sekarang</button>
               </div>
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