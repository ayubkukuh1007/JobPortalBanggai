<script>

export default {

}
</script>
<template>
  <div class="flex flex-col justify-between mx-20 gap-3">
    <h2 class=" text-xl font-semibold">Syarat Pekerjaan</h2>
    <div>
      <span class="loker-detail"><ul> <li>Perempuan</li> <li>Min. pendidikan D3</li> <li>Usia 23 – 33 tahun</li> <li>Memiliki pengalaman kerja Min.2 tahun</li> <li>Disiplin dan bertanggung jawab</li> <li>Mampu mengoperasikan Microsoft Office</li> <li>Mampu berkomunikasi dengan baik</li> <li>Pekerja keras, teliti, jujur dan dapat bekerja sama tim maupun individu</li> </ul> </span>
    </div>
    <span class="h-px w-full bg-customColor10 rounded-sm"></span>
  </div>
</template>
<style scoped>

ul li::before {
  content: "\2022";
  color: rgb(6, 173, 106);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

</style>