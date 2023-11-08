<script>
 import {DocumentTextIcon,AtSymbolIcon,PhoneIcon, MapPinIcon} from "@heroicons/vue/24/outline";
 import {defineComponent} from "vue";

 export default defineComponent({
   components: {
    DocumentTextIcon,
    AtSymbolIcon,
    PhoneIcon,
    MapPinIcon
}
 })

</script>
<template>
  <div class="flex flex-col justify-between mx-20 gap-3">
    <h2 class=" text-xl font-semibold">Kirim Lamaran</h2>
    <!-- Formulir -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <DocumentTextIcon class="h-6 w-6" />
        <span>Formulir</span>
      </div>
      <div class=" flex flex-row gap-2 overflow-hidden">
        <span>:</span>
        <span><a href="https://www.jakartakerja.com/lowongan/sales-executive-di-pt-pionir-alfa-sejahtera/">https://www.jakartakerja.com/lowongan/sales-executive-di-pt-pionir-alfa-sejahtera/</a></span>
      </div>
    </div>
    <!-- Email -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <AtSymbolIcon class="h-6 w-6" />
        <span>Email</span>
      </div>
      <div class=" flex flex-row gap-2 overflow-hidden">
        <span>:</span>
        <span><a href="https://www.jakartakerja.com/lowongan/sales-executive-di-pt-pionir-alfa-sejahtera/x">https://www.jakartakerja.com/lowongan/finance-accounting-supervisor-di-pt-jaya-baya/</a> </span>
      </div>
    </div>
    <!-- Telepon -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <PhoneIcon class="h-6 w-6" />
        <span>Telepon/WhatsUp</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span><span>+6287780101058</span></span>
      </div>
    </div>
    <!-- Alamat -->
    <div class=" grid grid-cols-2 gap-2">
      <div class=" flex flex-row gap-2">
        <MapPinIcon class="h-6 w-6" />
        <span>Alamat</span>
      </div>
      <div class=" flex flex-row gap-2">
        <span>:</span>
        <span><span>Jalan Pangeran Tubagus Angke Blok G1 7 J Desa/Kelurahan : Wijaya Kusuma, Kecamatan :, RT.7/RW.5, Wijaya Kusuma, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11640</span></span>
      </div>
    </div>
  </div>
</template>
