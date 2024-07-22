<template>
  <div class=" ">
    <home/>
  </div>
</template>
<script lang="ts">
export default {
 

  mounted() {
    // Get values from URL query parameters
    const clientCode = this.$route.query.clientcode
      ? this.$route.query.clientcode 
      : "GZ10219";
    const clientName = this.$route.query.clientname
      ? this.$route.query.clientname 
      : "RAJA ESWARAN";
    const clientemail = this.$route.query.clientemail
      ? this.$route.query.clientemail
      : "eswaran@gwcindia.in";
    // Do something with clientCode and clientName
    // this.clientCode = "GZ10219";
    // this.clientName = "RAJA ESWARAN";
    // this.clientemail=   "eswaran@gwcindia.in";
    localStorage.setItem("clientemail",clientemail);
    localStorage.setItem("clientname", clientName);
    localStorage.setItem("clientcode",clientCode);

    this.$router.push("/home");

    console.log("Client Code:", clientCode);
    console.log("Client Name:",     localStorage.getItem("clientname"));

    console.log("Client Name:", clientemail);
  },
  data() {
    return {
      allDepartMentData: null,
      getDepartment: null,
      tickets: [],
  
      error: null,
      emailId: "",
      resolvedTicketsData: [],
      openTicketsData: [],
      
    };
  },

  methods: {
   
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
