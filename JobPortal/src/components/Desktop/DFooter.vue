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
    <div class=" max-w-screen-desktop bg-customColor12 mt-4">
        <div class=" flex w-full justify-center items-center">
            <!-- lef logo -->
            <div class="flex flex-col justify-center">
                <div class="flex flex-col w-full justify-center text-customColor9">
                    <span class=" block w-full self-center text-center">Artikel</span>
                    <span class=" block w-full self-center text-center">Tentang Kami</span>
                    <span class=" block w-full self-center text-center">Kontak Kami</span>
                    <span class=" block w-full self-center text-center">Pasang Lowongan</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

.customfont {
  font-family: "Roboto", sans-serif;
}
</style>