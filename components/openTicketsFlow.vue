<template>
<div>
  <div class="">
    <!-- loader -->
    <!-- <div v-if="loading" class="container md:md:w-[90%] md:mx-auto">
      <div v-for="data in 4" :key="data">
        <div class="shadow-xl rounded-xl p-4 bg-white mt-4">
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
    </div> -->
    <!-- card section -->
    <div
      v-if="ticketData.length != 0"
      class="md:flex md:gap-8 container md:mx-auto md:md:w-[90%]"
    >
      <!-- CARD -->
      <div v-if="ticketData.length != 0" class="w-full md:w-[90%]">
        <div v-for="(data, i) in ticketData" :key="i" class="py-2">
          <div
            class="flex flex-col bg-white shadow-xl rounded-xl p-4 md:p-5"
            @click="selectedOpenTicket(data)"
            type="button"
          >
            <div class="flex justify-between">
              <div class="text-xs font-semibold">#{{ data.number }}</div>
              <div class="flex gap-1">
                <div
                  class="px-4 uppercase text-xs text-center bg-yellow-200 flex items-center"
                >
                  {{ data?.status?.name }}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    class="w-7 h-7"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="text-base font-bold">{{ data.subject }}</div>
            <div class="text-xs">{{ getDate(data.created_at) }}</div>
            <div
              v-if="data.last_reply.text"
              class="bg-[#F7F5F5] flex flex-col text-sm rounded-md p-2 mt-3"
              v-html="extractTextWithStyles(data.last_reply.text)"
            ></div>
          </div>
        </div>
      </div>
      <!-- faq -->
      <div class="md:block hidden w-[40%]">
        <!-- CARD -->
        <div class="bg-white border-gray rounded-md p-6 shadow-md h-fit w-full">
          <div class="text-lg font-sans my-1">FAQ</div>
          <div class="flex justify-between">
            <div class="text-sm font-sans my-0.5">Account Details</div>
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
            <div class="text-sm font-sans my-0.5">Funds & Account Balance</div>
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

    <!-- emty page -->
    <div v-if="ticketData.length == 0 ">
      <div class="flex justify-center items-center">
        <img
          src="/static/no-data-found.jpeg"
          class="rounded-lg"
          alt=""
          style="height: 300px; width: 300px"
        />
      </div>
      <p class="text-center py-2 text-gray-600">No tickets available</p>
    </div>
    <!-- review page -->
    <div
      v-if="showModel"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center"
      style="background: rgba(113 110 110 / 70%)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-full h-full shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content text-left h-full "><div class="fixed top-0 bg-white md:w-full md:px-[5%] border-b shadow-md md:block hidden">
      <img src="public/logo-2.jpeg" alt="" >
    </div>
          <div class="bg-[#eeeff4] md:bg-white md:py-5 md:mt-[5%]">
          <div class="flex justify-between w-full items-center container md:w-[90%] mx-auto">
            <div class="p-3 md:py-6  md:text-[30px]" >
              Hi {{ username && username }},<br />
              We are here to help you
            </div>
            <div class="md:block hidden  md:pl-6 ">
              <button
                data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                type="button"
                @click="openCreate"
                class="block  py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-[#2741b6] disabled:opacity-50 disabled:pointer-events-none"
              >
                Create Ticket
              </button>
            </div>
            </div>
          </div>
         
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
                    #{{ selectedTicket.number }}
                  </div>
                </div>
                <div class="md:px-6">
                  <div
                    class="uppercase bg-yellow-200 text-xs px-4 py-2 flex items-center justify-center"
                  >
                    {{ selectedTicket.status.name }}
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
                    <!-- 1st index -->
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
                          {{ selectedTicket.subject }}
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
                  <div class=" bg-[#2A394E] text-white md:w-full  border-b shadow-md md:block hidden ">
    <div class="md:mx-auto container md:w-[90%] text-sm text-normal py-2 ">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellat obcaecati inventore, quam ipsam cupiditate minus adipisci quibusdam accusantium sint ducimus enim aspernatur necessitatibus, voluptas omnis, nemo voluptate explicabo. Ipsam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio id nisi quam delectus nesciunt culpa quis. Labore porro error minima exercitationem tempore sint quae nam est dolorum, doloribus architecto.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sint voluptatum nisi delectus, porro temporibus officiis veritatis provident facere adipisci eveniet corrupti! Ex tenetur voluptatem dolorum, earum eligendi hic eius!
    lorem,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor perferendis at blanditiis animi doloribus aperiam explicabo provident obcaecati reprehenderit quisquam nam alias eveniet sint, non ullam fugit laboriosam. Numquam!
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus vel cum aperiam adipisci. Obcaecati, saepe, laborum illum sapiente nostrum impedit quo quaerat laudantium soluta alias sit recusandae minus, esse cum.
    </div></div>

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
    <!-- status  -->
    <div
      v-if="openStatus"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content py-4 text-left px-6 h-full">
          <div v-if="load == false">
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
              <div>#{{ selectedTicket.number }}</div>
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
          <div
            v-if="load == true"
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
    <!-- pdf open -->
    <iframe v-if="isPdf" :src="apiImage" width="100%" height="600px"></iframe>
    <!-- image Open -->
    <div
      v-if="openImageFile && !isPdf"
      class="main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex justify-end items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border shadow-lg modal-container bg-white w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="flex justify-end items-center p-2 pointer"
          @click="openImageFile = false"
        >
          <button
            type="button"
            class="flex justify-center items-center size-7 text-sm font-semibold rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            <span class="sr-only">Close</span>
            <svg
              class="flex-shrink-0 size-4"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="modal-content text-left p-4 h-full">
          <div class="flex justify-center">
            <img
              :src="apiImage"
              class="rounded-xl"
              alt="uploaded Image"
              style="height: 400px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- <div v-if="isCreate">
        <createNewTicket @go-to-home="goBackFunc" />
      </div> -->
      </div>
</template>

<script lang="ts">
import axios from "axios";
import DOMPurify from "dompurify";
import { defineComponent, onMounted, watch } from 'vue';


export default {
  mounted() {
    console.log("Component mounted");
      this.username = localStorage.getItem("clientname");
    this.fetchTickets();
  },
  data() {
    return {
      isCreate:false,
      showModel: false,
      tickets: [],
      emailId: null,
      textContent: "",
      selectedTicketsData: [],
      openStatus: false,
      loading: false,
      updatedData: null,
      selectedTicket: null,
      loader: false,
      load: false,
      file: {},
      openImageFile: false,
      apiImage: null,
      attachment: null,
      selectedFileName: null,
      image: null,
      pdf: null,
      isPdf: false,
      isButtonDisabled: false,
      username:null
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
    isContentEmpty(this: { textContent: any; isButtonDisabled: boolean }) {
      if (this.textContent) {
        const isEmpty =
          this.textContent.trim().replace(/<\/?[^>]+(>|$)/g, "") === "";

        this.isButtonDisabled = isEmpty;

        return isEmpty;
      } else {
        this.isButtonDisabled = true;
        return true;
      }
    },
  },
  methods: {
    bactoCard(this: { showModel: boolean }) {
      this.showModel = false;
      document.body.style.overflow = "auto";
    },

    readFileAsBase64(file: any) {
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
    async uploadImageOpen(
      this: { selectedFileName: any; file: any; readFileAsBase64: Function },
      event: any
    ) {
      this.file = event.target.files[0];
      this.selectedFileName = this.file.name;
      const fileSize = this.file.size / (1024 * 1024);
      if (fileSize > 5) {
        alert("Maximum file size allowed is 5MB");
        return;
      }
      try {
        const base64String = await this.readFileAsBase64(this.file);
      } catch (error) {
        console.error(error);
      }
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

    selectedOpenTicket(
      this: {
        ticketNo: any;
        showModel: boolean;
        getTicketMessages: Function;
        selectedTicket: any;
      },
      data: any
    ) {
      this.selectedFileName = null;
      this.isButtonDisabled = true;
      this.textContent = "";
      this.showModel = true;
      this.selectedTicket = data;

      this.ticketNo = data.number;
      this.getTicketMessages(data.number);

      document.body.style.overflow = "hidden";
    },

    async replyTickets(this: {
      updatedData: any;
      load: boolean;
      ticketNo: any;
      textContent: any;
      attachment: any;
      selectedFileName: any;
      isButtonDisabled: boolean;
    }) {
      this.load = true;
      const formData = new FormData();

      const clientCode = localStorage.getItem("clientcode");
      formData.append("clientcode", clientCode);

      formData.append("ticket_no", this.ticketNo);
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
        }
      } catch (error) {
        error.message || "An error occurred";
      } finally {
        this.load = false;
      }
    },
    async fetchTickets(this: {
      emailId: any;
      tickets: any;
      loading: boolean;
      $emit: Function;
    }) {
      this.loading = true;

      this.emailId = localStorage.getItem("clientemail");
      const formData = new FormData();
      formData.append("emailId", this.emailId);

      try {
        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/get-user-all-tickets.php",
          formData
        );
        ticketData = response.data.data.filter(
          (item: any) =>
            item.status.name === "Open" || item.status.name === "In-Progress"
        );
        console.log("success")
      } catch (error) {
        error.message || "An error occurred";
      } finally {
        this.loading = false;
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
              case "s":
                return `<s style="text-decoration: line-through;">${this.extractTextWithStyles(
                  element.innerHTML
                )}</s>`;
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

    openTicketContent(this: { textContent: any }, data: any) {
      this.textContent = data;
    },

    async getTicketMessages(
      this: { selectedTicketsData: any; loader: boolean },
      number: any
    ) {
      this.loader = true;
      const formData = new FormData();

      formData.append("ticket_no", number);

      const clientCode = localStorage.getItem("clientcode");
      formData.append("clientcode", clientCode);

      try {
        const response = await axios.post(
          "https://g1.gwcindia.in/ticket-api/get-ticket-status-messages.php",
          formData
        );
        this.selectedTicketsData = response.data;
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        this.loader = false;
      }
    },

    submitData(this: { openStatus: boolean; replyTickets: Function }) {
      this.openStatus = true;
      this.replyTickets();
    },
        openCreate(this: { isCreate: boolean }) {
      this.isCreate = true;
      document.body.style.overflow = "hidden";
    },
  },
     props: {
    ticketData: Array, 
  },
};
</script>
<style>
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
.modal-content {
  background-color: #fefefe;
  /* margin: 15% auto; */
  /* padding: 20px; */
  /* border: 1px solid #888; */
  /* width: 80%; */
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
