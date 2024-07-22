<template>
  <div>
    <!-- Display client codes as buttons -->
    <div>
        <div v-if="ticketData.count == 0"><div class="flex justify-center items-center py-10">
        <img
          src="/static/no-data-found.jpeg"
          class="rounded-lg"
          alt=""
          style="height: 300px; width: 300px"
        />
      </div>
      <p class="text-center py-2 text-gray-600">No tickets available</p></div>
        <div v-else>     <div v-for="(clientCode, index) in Object.keys(groupedTickets)" :key="index" class="w-[50%] ml-[100px] mb-4">
      <div class="border rounded-lg overflow-hidden shadow-md">
        <!-- Panel Header -->
        <div @click="toggleClientCode(clientCode)" class="border-b px-4 py-3 cursor-pointer bg-gray-100">
          <div class="flex justify-between items-center">
            <div class="text-lg font-semibold">{{ clientCode }}</div>
            <svg :class="{'transform rotate-180': activeClient === clientCode}" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <!-- Panel Content (Conditional) -->
        <div v-if="activeClient === clientCode" class="px-4 py-3">
          <div v-for="(ticketNo, index) in groupedTickets[clientCode].tickets" :key="index">
            <div class="bg-white shadow-xl rounded-xl p-4 my-1" @click="ticketClick(clientCode, ticketNo)">
              <div class="flex justify-between">
                <div>#{{ ticketNo }}</div>
                <div class="px-4 uppercase text-xs text-center bg-green-200 text-green-700 flex items-center">open</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div></div>
       
    </div>

        <div
      v-if="showModel"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center"
      style="background: rgba(113 110 110 / 70%)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-full h-full shadow-lg z-50 overflow-y-auto"
      >
     <div class="modal-content text-left h-full ">
   
         
          <div
            class="flex flex-col bg-[#eeeff4] md:bg-white pointer-events-auto max-w-full max-h-full h-full"
          >
            <!-- <div class="md:block hidden">
              <div
                class="flex gap-8 items-center bg-[#F9FAFF] p-3 fixed top-0 z-10 w-full"
              >
                <div class="flex justify-between w-[69%]">
                  <div class="flex items-center">
                    <div @click="bactoCard">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-7 h-7 cursor-pointer"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="text-xs font-semibold">
                      #{{ selectedTicket.number }}
                    </div>
                  </div>

                  <div
                    class="uppercase bg-yellow-200 text-xs px-4 py-2 flex items-center justify-center"
                  >
                    {{ selectedTicket.status.name }}
                  </div>
                </div>
                <div class="w-24">
                  <button
                    :disabled="isContentEmpty"
                    @click="submitData"
                    type="button"
                    class="w-full h-10 w-24 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-700 text-white hover:bg-[#2741b6] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div> -->

            <div class="bg-[#F9FAFF]  container md:mx-auto md:md:w-[90%]">
              <div
                class="flex justify-between items-center py-3 px-2"
              >
                <div class="flex items-center">
                  <div @click="bactoCard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-7 h-7 cursor-pointer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div class="text-sm font-semibold">
                    #{{ this.selectedticketNo }} 
                  </div>
                </div>
                <div class="md:px-6">
                  <div
                    class="uppercase bg-yellow-200 text-xs px-4 py-2 flex items-center justify-center"
                  >
                    <!-- {{ selectedTicket.status.name }} -->status
                  </div>
                </div>
              </div>
            </div>

            <div class=" pb-20 md:pb-5">
              <div class="w-full p-4  bg-[#eeeff4] md:bg-white">
                <!-- review loader -->

                <div
                  v-if="loader == true"
                  class="container md:md:w-[90%] md:mx-auto"
                >
                  <div v-for="data in 4" :key="data" class="py-2">
                    <div
                      class="shadow rounded-md p-8 max-w-sm w-full md:max-w-[90%] mx-auto bg-white"
                    >
                      <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                          <div class="h-2 bg-slate-200 rounded"></div>
                          <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                              <div
                                class="h-2 bg-slate-200 rounded col-span-2"
                              ></div>
                              <div
                                class="h-2 bg-slate-200 rounded col-span-1"
                              ></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="md:flex md:gap-8 container md:mx-auto md:md:w-[90%]">
                  <div v-if="loader == false" class="w-full md:w-[90%]">
                  
                    <div v-for="(data, i) in selectedTicketsData.data" :key="i">
                      
                         <div
                        v-if="i == 0"
                        class="flex flex-col bg-blue-100 shadow-xl rounded-xl p-4 pt-2 md:p-5"
                      >
                        <div class="flex justify-between items-center">
                          <div
                            class="bg-[#0d6efd] text-white flex items-center justify-center rounded-full h-10 w-10 uppercase"
                          >
                            {{
                              data
                                ? data.user.formatted_name
                                    .charAt(0)
                                    .toUpperCase()
                                : "G"
                            }}
                          </div>
                          <div class="text-xs">
                            {{ getDate(data.created_at) }}
                          </div>
                        </div>
                        <div class="pt-3 text-base font-bold">
                          <!-- {{ selectedTicket.subject }} -->selectedTicket.subject 
                        </div>
                        <div
                          v-if="data.text"
                          class="py-1 text-sm"
                          style="line-height: 2"
                          v-html="extractTextWithStyles(data.text)"
                        ></div>

                        <div
                          v-if="
                            data &&
                            data.attachments &&
                            data.attachments.length != 0
                          "
                          @click="viewAttach(data?.attachments)"
                          class="text-sm text-[#0d6efd] font-semibold cursor-pointer"
                        >
                          View Attachment
                        </div>
                      </div>
                     
                    </div>
                    <!-- 1st index -->
                    

                    <!-- static reply -->
                    <div class="pt-2">
                      <div
                        class="flex flex-col bg-white shadow-xl rounded-xl p-4 md:p-5"
                      >
                        <div class="flex justify-between items-center">
                          <div
                            class="bg-white flex items-center justify-center rounded-full h-12 w-12 uppercase"
                          >
                            <img
                              src="/static/goodWill.jpeg"
                              alt="good-will-logo"
                            />
                          </div>
                          <div class="text-xs">
                            {{
                              getDate(
                                selectedTicketsData &&
                                  selectedTicketsData.data &&
                                  selectedTicketsData.data[0].created_at
                              )
                            }}
                          </div>
                        </div>

                        <div class="py-2 text-sm" style="line-height: 2">
                          Your ticket has been created successfully. Our support
                          team will get back to you in 24-48 business hours.
                        </div>
                      </div>
                    </div>
                    <!-- other data -->

                    <div
                      v-for="(data, i) in selectedTicketsData.data"
                      :key="i"
                      class="pt-2"
                    >
                      <div
                        v-if="i != 0"
                        class="flex flex-col shadow-xl rounded-xl p-4 md:p-5"
                        :class="
                          data &&
                          data.user &&
                          data.user.formatted_name == 'Goodwill India'
                            ? 'bg-white'
                            : 'bg-blue-100'
                        "
                      >
                        <div class="flex justify-between items-center">
                          <div
                            v-if="
                              data &&
                              data.user &&
                              data.user.formatted_name == 'Goodwill India'
                            "
                            class="bg-white flex items-center justify-center rounded-full h-12 w-12 uppercase"
                          >
                            <img
                              src="/static/goodWill.jpeg"
                              alt="good-will-logo"
                            />
                          </div>
                          <div
                            v-else
                            class="bg-[#0d6efd] text-white flex items-center justify-center rounded-full h-10 w-10 uppercase"
                          >
                            {{
                              data
                                ? data.user.formatted_name
                                    .charAt(0)
                                    .toUpperCase()
                                : null
                            }}
                          </div>
                          <div class="text-xs">
                            {{ getDate(data.created_at) }}
                          </div>
                        </div>
                        <div v-if="data.text">
                          <div
                            style="line-height: 3"
                            v-if="
                              data &&
                              data.user &&
                              data.user.formatted_name == 'Goodwill India'
                            "
                            v-html="data.text"
                          ></div>
                          <div
                            v-else
                            class="py-2 text-sm"
                            style="line-height: 2"
                            v-html="extractTextWithStyles(data.text)"
                          ></div>
                        </div>

                        <div
                          v-if="
                            data &&
                            data.attachments &&
                            data.attachments.length != 0
                          "
                          @click="viewAttach(data?.attachments)"
                          class="text-sm text-[#0d6efd] font-semibold cursor-pointer mt-3"
                        >
                          View Attachment
                        </div>
                      </div>
                    </div>
                    <div class="pt-2">
                      <openEditor @open-ticket-content="openTicketContent" />
                    </div>

                    <div class="flex items-center justify-center w-full mt-3">
                      <label>
                        <div
                          class="flex gap-1 flex-row items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="blue"
                            class="w-5 h-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div
                            class="text-xs text-[#2741b6] flex items-center justify-center"
                          >
                            Attach Image or Pdf ( Max Size 5mb )
                          </div>
                        </div>
                        <div class="text-xs text-gray-400 text-center">
                          {{
                            (selectedFileName && selectedFileName) ||
                            "No file chosen"
                          }}
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          class="hidden"
                          ref="fileInput"
                          @change="uploadImageOpen"
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple="false"
                        />
                      </label>
                    </div>
                  </div>

                  <!-- faq -->
                  <div class="md:block hidden w-[40%]">
                    <!-- CARD -->
                    <div
                      class="bg-white border-gray rounded-md p-6 shadow-md h-fit w-full"
                    >
                      <div class="text-lg font-sans my-1">FAQ</div>
                      <div class="flex justify-between">
                        <div class="text-sm font-sans my-0.5">
                          Account Details
                        </div>
                        <div class="mx-1 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="text-sm font-sans my-0.5">
                          Brokage and Other Charges
                        </div>
                        <div class="mx-1 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="text-sm font-sans my-0.5">
                          Funds & Account Balance
                        </div>
                        <div class="mx-1 my-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="text-sm font-sans my-0.5">
                          IPO & OFS and Mutual Fund
                        </div>
                        <div class="mx-1 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      class="justify-end flex items-center text-sm text-[#0d6efd] font-semibold py-3"
                    >
                      <div>SEE MORE</div>
                      <div class="mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#0d6efd"
                          class="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="md:block hidden">
                  <div
                    class="flex justify-end items-center container md:ml-[5%] md:w-[20%]"
                  >
                    <button
                      :disabled="isContentEmpty"
                      @click="submitData"
                      type="button"
                      style="width: 100%"
                      class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-700 text-white hover:bg-[#2741b6] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
            
              </div>
            </div>
             

            <div
              class="md:hidden block flex justify-end items-center gap-x-2 py-3 px-4 bg-white mt-auto sm:fixed sm:bottom-0 sm:z-10 w-full"
            >
              <button
                :disabled="isContentEmpty"
                @click="submitData"
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-700 text-white hover:bg-[#2741b6] disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
        <div
      v-if="openStatus"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content py-4 text-left px-6 h-full">
         
          <div
          
            class="flex justify-center items-center"
            style="height: 300px"
          >
            <div class="three-body">
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <div
      v-if="openStatus1"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content py-4 text-left px-6 h-full">
          <div >
            <div class="flex justify-center py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                class="w-16 h-16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center p-2 capitalize">
              successfully created new message!
            </div>
            <div class="flex justify-center p-2 font-bold">
              <!-- <div>#{{ selectedTicketNo }}</div> -->1234
            </div>

            <p class="text-center p-4">
              Your ticket has been updated successfully. Our support team will
              get back to you in 24-48 business hours.
            </p>
            <div class="flex justify-center items-center gap-x-2 py-3 px-4">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                @click="goBack"
              >
                Go Back
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import DOMPurify from "dompurify";
export default defineComponent({
  props: {
    ticketData: Object,
  },
  data() {
    return {
          rating: 0,
      groupedTickets: {},
      activeClient: '',
      selectedTicketsData: {},
      loader: true ,
      selectedTicket:null,
      showModel:false,
      selectedticketNo:null,
      openStatus:false,
      openStatus1:false
    };
  },
  mounted() {
    console.log('ticketData received:', this.ticketData);
    if (this.ticketData && this.ticketData.tickets && this.ticketData.tickets.length > 0) {
      this.groupTickets();
    }
  },
  methods: {
      goBack(this: {
      openStatus: boolean;
      showModel: boolean;
      fetchTickets: Function;
    }) {
      this.openStatus = false;
      this.showModel = false;
      this.fetchTickets();
      document.body.style.overflow = "auto";
    },
     submitData(this: { openStatus: boolean; replyTickets: Function }) {
      this.openStatus = true;
      this.replyTickets();
    },
    async replyTickets(this: {
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
           this.openStatus1=true;
      
    }, 2000);
   
      const formData = new FormData();

      const clientCode = localStorage.getItem("clientcode");
      formData.append("clientcode", clientCode);
  formData.append("branchcode", "Cad");
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
          this.openStatus1= false;
          console.log(this.load,"this.load")
        }
      } catch (error) {
      
      } finally {
        
      }
    },
       bactoCard(this: { showModel: boolean }) {
      this.showModel = false;
      document.body.style.overflow = "auto";
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
      this.ticketData.tickets.forEach(ticket => {
        const clientCode = ticket.clientCode;
        
        if (!this.groupedTickets[clientCode]) {
          this.groupedTickets[clientCode] = {
            clientCode: ticket.clientCode,
            emailId: ticket.emailId,
            departmentId: ticket.departmentId,
            tickets: []
          };
        }

        if (!this.groupedTickets[clientCode].tickets.includes(ticket.ticketNo)) {
          this.groupedTickets[clientCode].tickets.push(ticket.ticketNo);
        }
      });
    },
    ticketClick(clientCode: any, ticketNo: any){
      this.selectedticketNo=ticketNo;
      this.showModel=true;
this.selectedTicketData(clientCode, ticketNo);
    },
    async selectedTicketData(clientCode: string|Blob, ticketNo: string|Blob) {
      this.loader = true; // Set loader to true before API call
      try {
        const formData = new FormData();
        formData.append("ticket_no", ticketNo);
        formData.append("clientcode", clientCode);

        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/get-ticket-status-messages.php",
          formData
        );
         
      this.selectedTicketsData = response.data;
      

        if (this.selectedTicketsData) {
          this.rating = this.selectedTicketsData.rating.rating;
        }
    
      } catch (error) {
        console.error("Error fetching ticket messages:", error);
      } finally {
        this.loader = false;
      }
    },
    toggleClientCode(clientCode: string) {
      this.activeClient = this.activeClient === clientCode ? '' : clientCode;
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
  }
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
