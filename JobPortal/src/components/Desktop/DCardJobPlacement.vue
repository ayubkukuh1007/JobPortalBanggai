<script>
    import { MapIcon, MapPinIcon,DocumentIcon,PhoneIcon,DocumentTextIcon,ChatBubbleBottomCenterTextIcon } from "@heroicons/vue/24/outline";
    export default {
      components: { MapPinIcon, MapIcon,DocumentIcon,PhoneIcon,DocumentTextIcon,ChatBubbleBottomCenterTextIcon},
      props: {
        byHeader: Boolean,
      },
      data(){
          return {
            isHidden : this.byHeader
          }
      },
      methods:{
        isClose() {
          this.isHidden = false
        },
        closePlacementEvent(){
          this.$emit('closePlacementEvent',true)
        }
      }
    }
</script>

<template>
    <div v-show="isHidden" class="flex absolute w-full justify-center max-w-screen-desktop mx-auto m-5 popup">
        <div class="flex flex-col justify-center w-10/12 bg-customColor9 rounded shadow-md px-4 gap-2">
            <div @click="closePlacementEvent" class="flex justify-center self-end bg-customColor13 w-8 h-8 translate-x-4 rounded-bl-full cursor-pointer">
              <span class="font-semibold text-customColor9 align-middle">x</span>
            </div>
            <h3 class="font-semibold self-center text-xl p-1">- Pilih Cara Pemasangan -</h3>
            <div class="flex flex-col justify-between items-center p-2 gap-2 cursor-pointer">
              <span><font-awesome-icon icon="fa-brands fa-whatsapp" size="2x"  /></span>
              <h4 class="font-thin">Via Whatsapp</h4>
              <p>Tim kami akan memberikan bantuan pemasangan melalui aplikasi Whatsapp</p>
              <span class="h-px w-full bg-customColor10 rounded-sm"></span>
            </div>
              <div class="flex flex-col justify-between items-center p-2 gap-2 cursor-pointer">
                <font-awesome-icon icon="fa-regular fa-file-lines" size="2x" />
                <h4 class="font-thin">Via Website</h4>
                <p>Kirim materi via formulir website dengan sistem pembayaran otomatis <b>(lebih praktis)</b></p>
              </div>
        </div>
    </div>
</template>
<style>

.popup {
    font-family: "Roboto", sans-serif;
}
</style>