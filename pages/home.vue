<template>
<div>
  <!-- <div class="fixed top-0 bg-white md:w-full md:px-[5%] border-b shadow-md md:block hidden">
      <img src="public/logo-2.jpeg" alt="" >
    </div> -->
      <div>
    
 
    <tabsSection />
    <!-- class="w-full md:max-w-3xl" -->
  
  </div>
    <!-- <div class=" bg-[#2A394E] text-white md:w-full  border-b shadow-md md:block hidden">
    <div class="md:mx-auto container md:w-[90%] text-sm py-2">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellat obcaecati inventore, quam ipsam cupiditate minus adipisci quibusdam accusantium sint ducimus enim aspernatur necessitatibus, voluptas omnis, nemo voluptate explicabo. Ipsam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio id nisi quam delectus nesciunt culpa quis. Labore porro error minima exercitationem tempore sint quae nam est dolorum, doloribus architecto.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sint voluptatum nisi delectus, porro temporibus officiis veritatis provident facere adipisci eveniet corrupti! Ex tenetur voluptatem dolorum, earum eligendi hic eius!
    lorem,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor perferendis at blanditiis animi doloribus aperiam explicabo provident obcaecati reprehenderit quisquam nam alias eveniet sint, non ullam fugit laboriosam. Numquam!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus vel cum aperiam adipisci. Obcaecati, saepe, laborum illum sapiente nostrum impedit quo quaerat laudantium soluta alias sit recusandae minus, esse cum.
    </div></div> -->
</div>

</template>
<script lang="ts">
import axios from "axios";
export default {
  mounted() {
    // setTimeout(() => {
    //   this.loading = true;
    // }, 1000);
  },
  data() {
    return {
    
     
    
    };
  },

 
};
</script>
<style scoped>
.three-body {
  --uib-size: 35px;
  --uib-speed: 0.8s;
  --uib-color: #2741b6;
  position: relative;
  display: inline-block;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
  position: absolute;
  height: 100%;
  width: 30%;
}

.three-body__dot:after {
  content: "";
  position: absolute;
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--uib-color);
  border-radius: 50%;
}

.three-body__dot:nth-child(1) {
  bottom: 5%;
  left: 0;
  transform: rotate(60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite ease-in-out;
  animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
  bottom: 5%;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15)
    ease-in-out;
}

.three-body__dot:nth-child(3) {
  bottom: -5%;
  left: 0;
  transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
  top: 0;
  left: 0;
  animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wobble1 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
  }
}

@keyframes wobble2 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
  }
}
</style>
