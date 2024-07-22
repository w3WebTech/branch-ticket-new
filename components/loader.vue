<template>
  <div class="container md:md:w-[90%] md:mx-auto">
    <div class="">
      <div class="h-3 bg-slate-300 w-32"></div>
    </div>
    <div class="pt-3">
      <div class="h-3 bg-slate-300 w-[200px]"></div>
    </div>
    <div class="flex justify-center gap-4 pt-12">
      <div class="">
        <div class="h-3 bg-slate-300 w-36"></div>
      </div>
      <div class="">
        <div class="h-3 bg-slate-300 w-36"></div>
      </div>
    </div>
    <div v-for="data in 4" :key="data">
      <div class="shadow-xl rounded-xl p-4 bg-white mt-8">
        <div class="pt-3">
          <div class="h-3 bg-slate-300 w-32"></div>
        </div>
        <div class="pt-3">
          <div class="h-3 bg-slate-300 w-[200px]"></div>
        </div>
        <div class="pt-3">
          <div class="h-3 bg-slate-300 w-32"></div>
        </div>
        <div class="pt-3">
          <div class="h-3 bg-slate-300 w-[200px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
