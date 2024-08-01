<template>
  <div class="bg-[#FAFBFF] h-screen roboto-thin">
    <div v-if="loading" class="w-full h-screen flex justify-center items-center ">
<loader/>

    </div>
    <div v-else>
      <!-- Tabs -->
       <div class="container md:w-[90%] md:mx-auto bg-[#eeeff4] md:bg-white pt-10">
        <div class="overflow-x-auto">
            <div class="flex space-x-8 px-2">
                <!-- Your existing tab buttons -->

                <!-- Tab 1: Create Ticket -->
                <div @click="getTabId(3)"
                    :class="['px-4 py-3 text-sm cursor-pointer whitespace-nowrap', setTab === 3 ? 'border-b-2 border-blue-600 font-bold text-blue-600 animate-bounce' : 'text-blue-600 hover:border-b-2 hover:border-blue-600 hover:font-bold']">
                    Create Ticket
                </div>

                <!-- Tab 2: Client Open Tickets -->
                <div @click="getTabId(1)"
                    :class="['py-3 text-sm cursor-pointer whitespace-nowrap', setTab === 1 ? 'border-b-2 border-blue-600 font-bold text-blue-600 animate-bounce' : 'text-blue-600 hover:border-b-2 hover:border-blue-600 hover:font-bold']">
                    Client Open Tickets ({{ clientTicketData.count }})
                </div>

                <!-- Tab 3: Client Resolved Tickets -->
                <div @click="getTabId(2)"
                    :class="['py-3 text-sm cursor-pointer whitespace-nowrap', setTab === 2 ? 'border-b-2 border-blue-600 font-bold text-blue-600 animate-bounce' : 'text-blue-600 hover:border-b-2 hover:border-blue-600 hover:font-bold']">
                    Client Resolved Tickets({{ clientTicketDataResolved.count }})
                </div>

                <!-- Tab 4: Branch Open Tickets -->
                <div @click="getTabId(4)"
                    :class="['px-4 py-3 text-sm cursor-pointer whitespace-nowrap', setTab === 4 ? 'border-b-2 border-blue-600 font-bold text-blue-600 animate-bounce' : 'text-blue-600 hover:border-b-2 hover:border-blue-600 hover:font-bold']">
                    Branch Open Tickets ({{ branchTicketData.count }})
                </div>

                <!-- Tab 5: Branch Resolved Tickets -->
                <div @click="getTabId(5)"
                    :class="['px-4 py-3 text-sm cursor-pointer whitespace-nowrap', setTab === 5 ? 'border-b-2 border-blue-600 font-bold text-blue-600 animate-bounce' : 'text-blue-600 hover:border-b-2 hover:border-blue-600 hover:font-bold']">
                    Branch Resolved Tickets ({{ branchTicketDataResolved.count }})
                </div>
            </div>
        </div>

        <!-- Content Section with Animation -->
        <transition name="slide">
            <div class="pt-[15px] pb-14">
                  <div v-if="setTab === 1" class="animate-slide animate-bounce">
                    <clientTickets :ticketData="clientTicketData" />
                </div>
                <div v-if="setTab === 2" class="animate-slide animate-bounce">
                    <clientResolvedTicket :ticketData="clientTicketDataResolved" />
                </div>
                <div v-if="setTab === 3" class="animate-slide animate-bounce">
                    <createtickettab @go-to-home="goBackFunc" />
                </div>
                <div v-if="setTab === 4" class="animate-slide animate-bounce">
                    <branchTickets :ticketData="branchTicketData" />
                </div>
                <div v-if="setTab === 5" class="animate-slide animate-bounce">
                    <branchResolvedTicket :ticketData="branchTicketDataResolved" />
                </div>
            </div>
        </transition>
    </div>

      <!-- Create Ticket Button Section (Optional) -->
      <!-- <div class="fixed-bottom p-3 md:hidden block">
        <button
          v-if="openTicketsCount"
          data-hs-overlay="#hs-vertically-centered-scrollable-modal"
          type="button"
          @click="openCreate"
          class="w-full py-4 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-[#2741b6] disabled:opacity-50 disabled:pointer-events-none"
        >
          Create Ticket
        </button>
      </div> -->

      <!-- Conditional Component: Create New Ticket Form -->
      <div v-if="isCreate">
        <createNewTicket @go-to-home="goBackFunc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      openTicketsCount: [],
      resolvedTickets: [],
      branchTicketData: { count: 0 }, 
      branchTicketDataResolved: { count: 0 }, 
            clientTicketData: { count: 0 }, 
      clientTicketDataResolved: { count: 0 }, 
      setTab: 3, 
      isCreate: false,
      username: null,
      emailId: null,
    };
  },
  async mounted() {
     
    await this.clientFetchTickets();
    await this.clientResolvedFetchTickets(); 
    await this.branchFetchTickets();
    await this.branchResolvedFetchTickets(); 
    this.loading = false; // Set loading to false after data is fetched
  },
  methods: {
    async clientFetchTickets() {
       const branchcode = localStorage.getItem("branchCode");
      try {
      const response = await axios.get(`https://g1.gwcindia.in/ticket-api/open-tickets.php`, {
    params: {
      branchCode: branchcode,
      createdBy: "CLIENT"
    }
  });

        // Set branch ticket data
        this.clientTicketData = response.data;
      } catch (error) {
        console.error("Error fetching branch tickets:", error.message);
      }
    },
    async clientResolvedFetchTickets() {
      try {
       const branchcode = localStorage.getItem("branchCode");

          const response = await axios.get(`https://g1.gwcindia.in/ticket-api/resolved-tickets.php`, {
 params: {
      branchCode: branchcode,
      createdBy: "CLIENT"
    }
  });

        // Set branch resolved ticket data
        this.clientTicketDataResolved = response.data;
      } catch (error) {
        console.error("Error fetching branch resolved tickets:", error.message);
      }
    },
    async branchFetchTickets() {
       const branchcode = localStorage.getItem("branchCode");
      try {
      const response = await axios.get(`https://g1.gwcindia.in/ticket-api/open-tickets.php`, {
    params: {
      branchCode: branchcode,
      createdBy: "BRANCH"
    }
  });

        // Set branch ticket data
        this.branchTicketData = response.data;
      } catch (error) {
        console.error("Error fetching branch tickets:", error.message);
      }
    },
    async branchResolvedFetchTickets() {
      try {
       const branchcode = localStorage.getItem("branchCode");

          const response = await axios.get(`https://g1.gwcindia.in/ticket-api/resolved-tickets.php`, {
 params: {
      branchCode: branchcode,
      createdBy: "BRANCH"
    }
  });

        // Set branch resolved ticket data
        this.branchTicketDataResolved = response.data;
      } catch (error) {
        console.error("Error fetching branch resolved tickets:", error.message);
      }
    },
    getTabId(id) {
      this.setTab = id; // Update setTab to switch between tabs
    },
    openCreate() {
      this.isCreate = true; // Show create ticket form/component
    },
    goBackFunc(ticket) {
      debugger
     this.branchTicketData=ticket;

      // Reset create ticket form visibility and scroll behavior
      this.isCreate = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
/* Font and global styles */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
.animate-bounce {
    animation: bounce-in 0.5s ease-out;
}
@keyframes bounce-in {
    0% {
        transform: translateY(-20px); /* Initial position off-screen */
        opacity: 0; /* Start invisible */
    }
    50% {
        transform: translateY(10px); /* Bounce up */
    }
    100% {
        transform: translateY(0); /* End position */
        opacity: 1; /* Fully visible */
    }
}
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {
  width: 75px;
  aspect-ratio: 1; 
  display: grid;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  filter: drop-shadow(40px 40px 0 #fff);
  animation: l8 2s infinite alternate;
}
.loader:after {
  margin: 0 0 0 auto; 
  filter: drop-shadow(-40px 40px 0 #fff);
  animation-delay: -1s;
}
@keyframes l8 {
  0%,10%   {border-radius:0}
  30%,40%  {border-radius:50% 0}
  60%,70%  {border-radius:50%}
  90%,100% {border-radius:0 50%}
}
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    perspective: 1000px; /* Perspective for 3D effect */
}

.flipping-cards {
    display: flex;
    justify-content: space-between;
    width: 210px; /* Adjust based on the number of cards and their width */
    transform-style: preserve-3d; /* Preserve 3D transformations */
}

.card {
    width: 30px;
    height: 40px;
    background-color: #2545d4; /* Base background color */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px; /* Increased border radius for rounded corners */
    transform-style: preserve-3d; /* Preserve 3D transformations */
    animation: flip 2s infinite, color-change 6s ease-in-out infinite;
    transform-origin: center; /* Center of transformation */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
}

@keyframes flip {
    0%, 100% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(180deg);
    }
}

@keyframes color-change {
    0%, 100% {
        background-color: #2545d4; /* Base color */
    }
    25% {
        background-color: #ff6b6b; /* Red */
    }
    50% {
        background-color: #ffc048; /* Orange */
    }
    75% {
        background-color: #00d084; /* Green */
    }
}

.card:nth-child(1) {
    animation-delay: 0s;
}

.card:nth-child(2) {
    animation-delay: 0.3s;
}

.card:nth-child(3) {
    animation-delay: 0.6s;
}

.card:nth-child(4) {
    animation-delay: 0.9s;
}

.card:nth-child(5) {
    animation-delay: 1.2s;
}

.card:nth-child(6) {
    animation-delay: 1.5s;
}

.card:nth-child(7) {
    animation-delay: 1.8s;
}
/* slideeee */

</style>
