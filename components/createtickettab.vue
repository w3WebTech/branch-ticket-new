<template>
   <div class="mx-2 bg-[#FAFBFF]">
          <div class="container mx-auto md:w-[50%]">
            <div class="space-y-4 ">
              <div  class="w-full pt-2">
                    <input
                v-model="payload.branchcode"
                type="text"
                class="py-3 shadow-sm px-4 block w-full border-gray-200 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="branch code *"
              />
              </div>
               <div  class="w-full">
                    <input
                v-model="payload.clientcode"
                type="text"
                class="py-3 shadow-sm px-4 text-black block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="client code"
              />
              </div>
              <div class="w-full">
            
                <button
                  @click="isCatOpen = !isCatOpen"
                  type="button"
                  :class="selectedCategory ? 'text-black' : 'text-gray-400'"
                  class="w-full py-3 px-4 inline-flex justify-between items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <p>
                    {{
                      selectedCategory ? selectedCategory : "Select category"
                    }}
                  </p>

                  <svg
                    class="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div v-if="isCatOpen" class="relative">
                  <div
                    class="rounded-lg border absolute bg-gray-50 shadow-md z-50 w-full"
                    :class="
                      allCategories && allCategories.length >= 5
                        ? 'h-[150px] overflow-y-auto'
                        : null
                    "
                  >
                    <div
                      v-for="(category, index) in allCategories"
                      :key="index"
                      :style="{ zIndex: 100 - index }"
                    >
                      <div
                        v-if="index != 0 && index != 1"
                        @click="selectCategory(category)"
                        class="cursor-pointer text-sm text-gray-800 hover:bg-gray-100 p-2"
                      >
                        {{ category }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full">
                <button
                  @click="isSubOpen = !isSubOpen"
                  type="button"
                  :class="{
                    'text-black': selectedSubCategory,
                    'text-gray-400': !selectedSubCategory,
                  }"
                  :disabled="!selectedCategory || !subcategories.length"
                  class="w-full py-3 px-4 inline-flex justify-between items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <p>
                    {{
                      selectedSubCategory
                        ? selectedSubCategory
                        : "Select sub category"
                    }}
                  </p>

                  <svg
                    class="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div v-if="isSubOpen && !isCatOpen" class="relative">
                  <div
                    v-if="subcategories && subcategories.length != 0"
                    class="rounded-lg border absolute bg-gray-50 shadow-md z-50 w-full"
                    :class="
                      subcategories && subcategories.length >= 5
                        ? 'h-[150px] overflow-y-auto'
                        : null
                    "
                  >
                    <div
                      v-for="(subcategory, index) in subcategories"
                      :key="index"
                      class="cursor-pointer text-sm text-gray-800 hover:bg-gray-100 p-2"
                      :style="{ zIndex: 100 - index }"
                      @click="selectSubCategory(subcategory)"
                    >
                      {{ subcategory }}
                    </div>
                  </div>
                </div>
              </div>
              <input
                v-model="payload.subject"
                type="text"
                class="py-3 shadow-sm px-4 block w-full border-gray-200 text-black  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Subject"
              />

              <textEditor @create-descript="createDescriptText" class="" />

              <div class="flex items-center justify-center w-full">
                <label>
                  <div
                    class="flex gap-1 flex-row items-center justify-center cursor-pointer"
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
                  <div class="text-xs text-gray-400 text-center py-3">
                    {{
                      (selectedFileName && selectedFileName) || "No file chosen"
                    }}
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    ref="fileInput"
                    @change="uploadImage"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    multiple="false"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="container md:mx-auto md:w-[50%]">
         <button
    @click="createTicket"
    :disabled="isCreateButtonDisabled"
    type="button"
    class="w-full  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  text-white "
>
    <span class="sr-only">Close</span>
   <a href="#" class="btn btn-white btn-animate">Create Ticket</a>
</button>
          </div>
    <div
      v-if="opencreated"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content py-4 text-left h-full">
          <div v-if="loading == true">
            <div
              class="flex justify-center"
              :class="statusData && statusData.status == 'ok' ? 'py-4' : 'py-0'"
            >
              <svg
                v-if="statusData && statusData.status == 'ok'"
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
              <svg
                v-if="statusData && statusData.status == 'error'"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-20 h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div
              class="flex justify-center p-2 capitalize"
              :class="
                statusData && statusData.status == 'error'
                  ? 'text-red-500'
                  : null
              "
            >
              {{ statusData && statusData.message && statusData.message }}
            </div>
            <div
              v-if="
                statusData &&
                statusData.data &&
                statusData.data.ticket_no &&
                statusData.data.ticket_no
              "
              class="flex justify-center p-2 font-bold"
            >
              <div>
                #{{
                  statusData &&
                  statusData.data &&
                  statusData.data.ticket_no &&
                  statusData.data.ticket_no
                }}
              </div>
            </div>

            <p
              v-if="
                statusData &&
                statusData.data &&
                statusData.data.ticket_no &&
                statusData.data.ticket_no
              "
              class="text-center p-4"
            >
              Your ticket has been updated successfully. Our support team will
              get back to you in 24-48 business hours.
            </p>
            <div class="flex justify-center items-center gap-x-2 py-3 px-4">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                @click="goToHome"
              >
                Go Back
              </button>
            </div>
          </div>

          <div
            v-if="loader == true"
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

          </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      payload: {
        branchcode:"",
        clientcode:"",
        subject: "",
        text: "",
        department: "",
      },
      opencreated: false,
      statusData: null,
      allDepartMentData: null,
      allSubCategory: null,
      moreFile: "",
      extreamFileSize: null,
      selectedFileName: null,
      isCatOpen: false,
      isSubOpen: false,
     
   loading:false,
      selectedCategory: null,
      file: null,
      selectedSubCategory: null,
      allCategories: [],
      subcategories: [],
      attachment: null,
      departmentIndex: null,
    };
  },
  computed: {
    isCreateButtonDisabled(this: { payload: any }) {
      for (const key in this.payload) {
        if (!this.payload[key]) {
          return true;
        }
      }
      return false;
    },
  },
  mounted() {
    this.getDeparmentData();
  },
  methods: {
    goToHome() {
      debugger
      this.$emit("go-to-home",this.tickets);
        this.loading=false;
        this.opencreated=false
      },
     

    

    refreshPage() {
      window.location.reload();
    },
    goBackToHome(this: {
      opencreated: boolean;
      openCreate: boolean;
      goToHome: Function;
      refreshPage: Function;
    }) {
      this.opencreated = false;
      // this.refreshPage();
      this.goToHome();
    },

    createTicket(this: { opencreated: boolean; createpayload: Function }) {
      this.opencreated = true;
      this.createpayload();
    },
    async createpayload(this: {
      loading: boolean;
      opencreated: boolean;
      goToHome(): unknown;
      fetchTickets(): unknown;
      payload: any;
      statusData: any;
      stripHTML: any;
      attachment: any;
      loader: boolean;
      selectedFileName: any;
      departmentIndex: any;
    }) {
      debugger
      this.loader = true;
      const formData = new FormData();
      formData.append("department", this.departmentIndex);
      formData.append("subject", this.payload.subject);
      formData.append("text", this.payload.text);
formData.append("subCat",this.selectedSubCategory);
formData.append("branchcode", this.payload.branchcode);
formData.append("clientcode", this.payload.clientcode);
formData.append("createdBy", "BRANCH");
      // const clientCode = localStorage.getItem("clientcode");
      // if (clientCode) {
      //   formData.append("clientcode", clientCode);
      // }

      formData.append("attachment", this.attachment);
      formData.append("filename", this.selectedFileName);

      try {
        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/create-ticket.php",
          formData
        );
         console.log("hello2")
        this.statusData = response.data;
        console.log(this.statusData,
        "statusData"
        )
this.fetchTickets()
   this.loader = false;
   this.loading=true;
 

      } catch (error) {
        this.statusData = error;
      } finally {
     
      }
    },
     async fetchTickets(this: {
      openStatus: boolean;
      emailId: any;
      tickets: any;
      loading: boolean;
      $emit: Function;
    }) {
  this.openStatus=true;

      this.emailId = localStorage.getItem("clientemail");
      const formData = new FormData();
      formData.append("emailId", this.emailId);

      try {
        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/get-user-all-tickets.php",
          formData
        );
        this.tickets = response.data.data;
     
        console.log("success")
      } catch (error) {
        error.message || "An error occurred";
      } finally {
        
      }
    },
      
    readFileAsBase64(this: { attachment: any }, file: any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result.split(",")[1]; // Remove the prefix
          this.attachment = base64String;
          resolve(base64String);
        };

        reader.onerror = () => {
          reject(new Error("Unable to read the file."));
        };

        reader.readAsDataURL(file);
      });
    },
    async uploadImage(
      this: { selectedFileName: any; file: any; readFileAsBase64: any },
      event: any
    ) {
      this.file = event.target.files[0];
      this.selectedFileName = this.file.name;
      try {
        const base64String = await this.readFileAsBase64(this.file);
      } catch (error) {
        console.error(error);
      }

      const fileSize = this.file.size / (1024 * 1024);
      if (fileSize > 5) {
        alert("Maximum file size allowed is 5MB");
        return;
      }
    },
    async getDeparmentData(this: { allDepartMentData: any; getDep: Function }) {
      try {
        const response = await axios.get(
          "https://g1.gwcindia.in/ticket-api/ticket-category-subcategory.php"
        );
        this.allDepartMentData = response.data;
        this.getDep();
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    },
    getDep(this: { allDepartMentData: any; allCategories: any }) {
      this.allDepartMentData.forEach((each: any) => {
        const category = Object.keys(each)[0];
        this.allCategories.push(category);
      });
    },
    selectCategory(
      this: {
        isCatOpen: boolean;
        selectedCategory: any;
        payload: any;
        selectedSubCategory: any;
        departmentIndex: any;
        allDepartMentData:any,
        subcategories:any
      },
      data: any
    ) {
      this.isCatOpen = false;
      this.selectedCategory = data;
      this.payload.department = data;
      this.selectedSubCategory = null;

      this.departmentIndex = this.allDepartMentData.findIndex(
        (obj: any) => Object.keys(obj)[0] === this.selectedCategory
      );

      const selectedDepartment = this.allDepartMentData.find((department:any) => {
        return Object.keys(department)[0] === data;
      });

      if (selectedDepartment) {
        this.subcategories = Object.values(selectedDepartment)[0];
      } else {
        console.log("Selected category not found in the department array:<<<");
      }
    },
    selectSubCategory(this:{isSubOpen:boolean,selectedSubCategory:any},sub:any) {
      this.isSubOpen = false;
      this.selectedSubCategory = sub;
      console.log(this.selectedSubCategory,"this.selectedSubCategory")
    },
    createDescriptText(this: { payload: any }, text: any) {
      this.payload.text = text;
    },
  },

};
</script>
<style scoped>

.btn:link,
.btn:visited {
    text-transform: uppercase;
    text-decoration: none;

    padding: 15px 40px;
    display: inline-block;
    border-radius: 10px;
    transition: all .2s;
    position: absolute;
    width: 45%;
    background-color:#3f5bd8;
    color:white;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color:#081d7a;
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
    background-color: #fff;
    color: #777;
}

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-white::after {
    background-color: #fff;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.btn-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
/* loader */
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