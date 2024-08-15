<template>
  <div class="h-screen mx-2 py-2 bg-[#FAFBFF]">
    <!-- Display client codes as buttons -->
    <div>
      <div v-if="ticketData.count == 0">
        <div class="flex justify-center items-center py-10">
          <img
            src="/static/no-data-found.jpeg"
            class="rounded-lg"
            alt=""
            style="height: 300px; width: 300px"
          />
        </div>
        <p class="text-center py-2 text-gray-600">No tickets available</p>
      </div>
      <div v-else>
          <div class="w-[50%] ml-[100px] py-4">
          <input
            type="text"
            v-model="searchQuery"
            class=" appearance-none border-1 border-gray-200 rounded-lg w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
            placeholder="Search"
          />
        </div>
        <div
          v-for="(clientCode, index) in filteredClientCodes"
          :key="index"
          class="w-[50%] ml-[100px] mb-4"
        >
     
          <div class="border rounded-lg overflow-hidden shadow-md">
            <!-- Panel Header -->
            <div
              @click="toggleClientCode(clientCode)"
              class="border-b px-4 py-3 cursor-pointer bg-gray-100"
            >
              <div class="flex justify-between items-center">
                <div class="text-sm font-semibold">{{ clientCode }}</div>
                <svg
                  :class="{
                    'transform rotate-180': activeClient === clientCode,
                  }"
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <!-- Panel Content (Conditional) -->
            <div v-if="activeClient === clientCode" class="px-4 py-3">
              <div
                v-for="(ticketNo, index) in filteredTickets(clientCode)"
                :key="index"
              >
                <div
                  class="bg-white shadow-xl rounded-xl p-4 my-1"
                  @click="ticketClick(clientCode, ticketNo)"
                >
                  <div class="flex text-sm justify-between">
                    <div>#{{ ticketNo.ticketNo }}</div>
                    <div
                      class="px-4 uppercase text-xs text-center bg-green-200 text-green-700 flex items-center"
                    >
                      {{ getStatus(ticketNo.status_name) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import axios from "axios";
import DOMPurify from "dompurify";
export default defineComponent({
  props: {
    ticketData: Object,
  },
  data() {
    return {
      searchQuery: "",
      rating: 0,
      groupedTickets: {},
      activeClient: "",
      selectedTicketsData: {},
      loader: true,
      selectedTicket: null,
      showModel: false,
      selectedticketNo: null,
      openStatus: false,
      selectedstatus: null,
      isreopen: false,
      openStatus1: false,
      statusArray: [
        {
          id: 4,
          name: "In-Progress",
          colour: "#ff7700",
          auto_close: 0,
          order: 2,
          created_at: 1668678556,
          updated_at: 1678538407,
          icon: '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #ff7700; color: #fff; line-height: 1.25rem;" title="In-Progress">I</div>',
          icon_without_tooltip:
            '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #ff7700; color: #fff; line-height: 1.25rem;">I</div>',
        },
        {
          id: 1,
          name: "Open",
          colour: "#35a600",
          auto_close: 1,
          order: 1,
          created_at: 1668678556,
          updated_at: 1668678556,
          icon: '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #35a600; color: #fff; line-height: 1.25rem;" title="Open">O</div>',
          icon_without_tooltip:
            '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #35a600; color: #fff; line-height: 1.25rem;">O</div>',
        },
        {
          id: 2,
          name: "Closed",
          colour: "#454545",
          auto_close: 0,
          order: 4,
          created_at: 1668678556,
          updated_at: 1668678556,
          icon: '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #454545; color: #fff; line-height: 1.25rem;" title="Closed">C</div>',
          icon_without_tooltip:
            '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #454545; color: #fff; line-height: 1.25rem;">C</div>',
        },
        {
          id: 3,
          name: "Awaiting Reply",
          colour: "#1e79a6",
          auto_close: 1,
          order: 3,
          created_at: 1668678556,
          updated_at: 1678538407,
          icon: '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #1e79a6; color: #fff; line-height: 1.25rem;" title="Awaiting Reply">A</div>',
          icon_without_tooltip:
            '<div class="sp-inline-block sp-h-5 sp-w-5 sp-rounded-full sp-text-xs sp-text-center sp-font-bold sp-align-middle" style="background-color: #1e79a6; color: #fff; line-height: 1.25rem;">A</div>',
        },
      ],
    };
  },
  mounted() {
    console.log("ticketData received:", this.ticketData);
    if (
      this.ticketData &&
      this.ticketData.tickets &&
      this.ticketData.tickets.length > 0
    ) {
      this.groupTickets();
    }
  },
  methods: {
     filteredTickets(clientCode: string): any[] {
      if (!this.searchQuery) {
        return this.groupedTickets[clientCode].tickets;
      }
      const lowercaseQuery = this.searchQuery.toLowerCase();
      return this.groupedTickets[clientCode].tickets.filter(
        (ticket) => ticket.ticketNo.toString().includes(lowercaseQuery)
      );
    },
    goBack(this: {
      openStatus1: boolean;
      openStatus: boolean;
      showModel: boolean;
      fetchTickets: Function;
    }) {
      this.openStatus = false;
      this.openStatus1 = false;
      this.showModel = false;
      this.fetchTickets();
      document.body.style.overflow = "auto";
    },
    submitData(this: { openStatus: boolean; replyTickets: Function }) {
      this.openStatus = true;
      this.replyTickets();
    },
    async replyTickets(this: {
      openStatus1: boolean;
      updatedData: any;
      load: boolean;
      selectedticketNo: any;
      textContent: any;
      attachment: any;
      selectedFileName: any;
      isButtonDisabled: boolean;
    }) {
      setTimeout(() => {
        this.openStatus = false;
        this.openStatus1 = true;
      }, 2000);

      const formData = new FormData();

      const branchcode = localStorage.getItem("branchCode");

      formData.append("branchcode", branchcode);
      formData.append("ticket_no", this.selectedticketNo);
      formData.append("text", this.textContent);
      formData.append("attachment", this.attachment);
      formData.append("filename", this.selectedFileName);

      try {
        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/reply-ticket.php",
          formData
        );
        this.updatedData = response.data;
        if (response.data) {
          this.selectedFileName = null;
          this.isButtonDisabled = true;
          this.textContent = "";
          this.openStatus1 = false;
          console.log(this.load, "this.load");
        }
      } catch (error) {
      } finally {
      }
    },
    bactoCard(this: { showModel: boolean }) {
      this.showModel = false;
      document.body.style.overflow = "auto";
    },
    getStatus(status: number) {
      debugger;

      console.log(this.statusArray);
      for (let i = 0; i < this.statusArray.length; i++) {
        if (this.statusArray[i].id == status) {
          return this.statusArray[i].name;
        }
      }
    },
    extractTextWithStyles(html: string): string {
      const container = document.createElement("div");
      container.innerHTML = html;

      const extractedText = Array.from(container.childNodes)
        .map((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent?.trim() || "";
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const tagName = element.tagName.toLowerCase();

            switch (tagName) {
              case "strong":
                return `<strong style="font-weight: bold;">${this.extractTextWithStyles(
                  element.innerHTML
                )}</strong>`;
              case "em":
                return `<em style="font-style: italic;">${this.extractTextWithStyles(
                  element.innerHTML
                )}</em>`;
              case "u":
                return `<u style="text-decoration: underline;">${this.extractTextWithStyles(
                  element.innerHTML
                )}</u>`;
              case "p":
                return `<p style="text-align: ${
                  element.style.textAlign || "left"
                };">${this.extractTextWithStyles(element.innerHTML)}</p>`;
              case "ul":
                return `<ul>${this.extractTextWithStyles(
                  element.innerHTML
                )}</ul>`;
              case "ol":
                return `<ol>${this.extractTextWithStyles(
                  element.innerHTML
                )}</ol>`;

              case "li":
                if (
                  element.parentElement?.tagName.toLowerCase() === "ul" ||
                  element.parentElement?.tagName.toLowerCase() === "p"
                ) {
                  return `<li style="color: ${
                    element.style.color || "inherit"
                  }; list-style-type: disc;">${this.extractTextWithStyles(
                    element.innerHTML
                  )}</li>`;
                } else if (
                  element.parentElement?.tagName.toLowerCase() === "ol" ||
                  element.parentElement?.tagName.toLowerCase() === "p"
                ) {
                  const index =
                    Array.from(element.parentElement.children).indexOf(
                      element
                    ) + 1;
                  return `<li style="color: ${
                    element.style.color || "inherit"
                  }; list-style-type: decimal;">${index}. ${this.extractTextWithStyles(
                    element.innerHTML
                  )}</li>`;
                }

              default:
                return this.extractTextWithStyles(element.innerHTML);
            }
          }
          return "";
        })
        .join(" ");
      return DOMPurify.sanitize(extractedText);
    },
    reOpen(this: { isreopen: boolean }) {
      this.isreopen = true;
    },
    closeReopen(this: {
      isreopen: boolean;
      openStatus: boolean;
      replyTickets: Function;
    }) {
      this.isreopen = false;
      this.openStatus = true;
      this.replyTickets();
    },
    viewAttach(this: { openImageFile: boolean; apiImage: any }, data: any) {
      if (data && data[0].upload && data[0].upload.filename) {
        const fileName = data[0].upload.filename.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (fileName.endsWith(".pdf")) {
          this.pdf = "pdf";
          this.isPdf = true;
        } else {
          this.isPdf = false;
          this.openImageFile = true;
        }
      } else {
        console.log("File name is undefined or null");
      }
      this.apiImage = data[0]?.direct_frontend_url;
    },
    groupTickets() {
      this.groupedTickets = {};

      // Assuming ticketData.tickets is an array of tickets
      this.ticketData.tickets.forEach((ticket) => {
        const clientCode = ticket.clientCode;

        if (!this.groupedTickets[clientCode]) {
          this.groupedTickets[clientCode] = {
            clientCode: ticket.clientCode,
            emailId: ticket.emailId,
            departmentId: ticket.departmentId,
            tickets: [],
          };
        }

        if (
          !this.groupedTickets[clientCode].tickets.includes(ticket.ticketNo)
        ) {
          this.groupedTickets[clientCode].tickets.push({
            ticketNo: ticket.ticketNo,
            status_name: ticket.ticketStatus_id, // Assuming ticket.status_name exists
          });
        }
      });
    },
    ticketClick(clientCode: any, ticketNo: any) {
      debugger;
      this.selectedticketNo = ticketNo.ticketNo;
      this.selectedstatus = ticketNo.status_name;
      console.log(this.selectedticketNo, this.selectedstatus, "t test");
      this.showModel = true;
      this.selectedTicketData(clientCode, ticketNo);
    },
    async selectedTicketData(
      clientCode: string | Blob,
      ticketNo: string | Blob
    ) {
      this.loader = true; // Set loader to true before API call
      try {
        const formData = new FormData();
        formData.append("ticket_no", ticketNo.ticketNo);
        formData.append("clientcode", clientCode);

        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/get-ticket-status-messages.php",
          formData
        );

        this.selectedTicketsData = response.data;

        if (this.selectedTicketsData) {
          this.rating = this.selectedTicketsData.rating.rating;
          console.log(this.rating, "this.rating");
        }
      } catch (error) {
        console.error("Error fetching ticket messages:", error);
      } finally {
        this.loader = false;
      }
    },
    toggleClientCode(clientCode: string) {
      this.activeClient = this.activeClient === clientCode ? "" : clientCode;
    },
    openRatings(this: { ratingOpen: boolean; ratingData: any }) {
      debugger;
      this.ratingOpen = true;
      this.ratingData = {};
    },
    openTicketContent(this: { textContent: any }, data: any) {
      this.textContent = data;
    },
    submitRating(
      this: {
        ratingOpen: boolean;
        showModel: boolean;
        postRatings: Function;
      },
      key: number
    ) {
      this.ratingOpen = false;
      this.showModel = false;
      if (key == 0) {
        this.postRatings();
      }

      document.body.style.overflow = "auto";
    },

    hoverRating(this: { hover: any }, star: number) {
      this.hover = star;
    },
    getDate(data: any) {
      const date = new Date(data * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;

      return formattedDate;
    },
  },
  computed: {
    filteredClientCodes(): string[] {
      if (!this.searchQuery) {
        return Object.keys(this.groupedTickets);
      }
      const lowercaseQuery = this.searchQuery.toLowerCase();
      return Object.keys(this.groupedTickets).filter(
        (clientCode) =>
          clientCode.toLowerCase().includes(lowercaseQuery) ||
          this.groupedTickets[clientCode].tickets.some(
            (ticket) => ticket.ticketNo.toString().includes(lowercaseQuery)
          )
      );
    },
  },
  
});
</script>

<style scoped>
/* Add your custom styles here */
</style>