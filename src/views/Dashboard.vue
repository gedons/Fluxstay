<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold tracking-tight text-gray-900">Dashboard</h1>
        <router-link :to="{ name: 'BookingCreate' }" class="
                py-2
                px-3
                font-semibold
                focus:outline-none
                leading-6 
                rounded
                border
                text-gray-900
                hover:text-indigo-600
                bg-gray-50
              
              ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-3 h-4 -mt-1 -ml-1 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>

          Create
        </router-link>
      </div>
    </div>
  </header>

  <main class="bg-gray-100">

    <!-- Summary Cards -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- <div class="flex justify-center">
            <svg  class="animate-spin text-center  h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-900">
        <!-- total task count -->
        <div class="order-1 lg:order-1 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
          style="animation-delay: 0.2s">
          <h2 class="text-2xl mb-3 text-center font-semibold">Rooms</h2>
          <div class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
            4
          </div>
        </div>
        <!-- /total task count  -->

        <!-- completed task count -->
        <div class="order-2 lg:order-2 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
          style="animation-delay: 0.2s">
          <h2 class="text-2xl mb-3 text-center font-semibold">Reservations</h2>
          <div class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
            15
          </div>
        </div>
        <!-- /completed task count  -->

        <!-- imcompleted task count -->
        <div class="order-3 lg:order-3 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
          style="animation-delay: 0.2s">
          <h2 class="text-2xl mb-3 text-center font-semibold">Payments</h2>
          <div class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
            3
          </div>
        </div>
        <!-- /imcompleted task count  -->

        <!-- overdue task count -->
        <div class="order-4 lg:order-4 bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
          style="animation-delay: 0.2s">
          <h2 class="text-2xl mb-3 text-center font-semibold">Users</h2>
          <div class="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
            5
          </div>
        </div>
        <!-- /overdue task count  -->


      </div>
    </div>

    <!-- Rooms -->
    <div class="bg-white shadow h-64">
      <div class="w-full p-3 rounded-sm text bg-white border border-slate-200">
        <div class="text-slate-800 font-semibold mb-2">Available Room Type</div>
        <div class="p-3">
          <div>
            <ul class="my-1">
              <li class="flex px-2">
                <div class="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"><svg
                    class="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                    <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"></path>
                  </svg></div>
                <div class="grow flex items-center border-b border-slate-100 text-sm py-2">
                  <div class="grow flex justify-between">
                    <div class="self-center"><span class="font-medium text-slate-800 hover:text-slate-900"
                        href="#0">Standard Suites</span></div>
                    <div class="shrink-0 self-start ml-2">
                      <div
                      class="text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1">
                      Fully Booked</div>
                  </div>                 
                </div>
              </div>
            </li>
            <li class="flex px-2">
              <div class="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"><svg
                  class="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"></path>
                </svg></div>
              <div class="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div class="grow flex justify-between">
                  <div class="self-center"><span class="font-medium text-slate-800 hover:text-slate-900"
                      href="#0">Royal Suites</span></div>
                  <div class="shrink-0 self-start ml-2">
                    <div
                    class="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">
                    Available</div>
                </div>                
              </div>
            </div>
          </li>
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"><svg
                class="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"></path>
              </svg></div>
            <div class="grow flex items-center border-b border-slate-100 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><span class="font-medium text-slate-800 hover:text-slate-900"
                    href="#0">Luxury Suites</span></div>
                <div class="shrink-0 self-start ml-2">
                  <div
                  class="text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1">
                  Fully Booked</div>
              </div>              
            </div>
          </div>
          </li>
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3"><svg
                class="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z"></path>
              </svg></div>
            <div class="grow flex items-center border-b border-slate-100 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><span class="font-medium text-slate-800 hover:text-slate-900"
                    href="#0">Executive Suites</span>
                  </div>
                
                  <div class="shrink-0 self-start ml-2">
                    <div
                    class="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">
                    Available</div>
                </div>
            </div>
          </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
    </div>


</main>
</template>

<script>
import { PencilIcon, PlusIcon } from '@heroicons/vue/24/outline';
</script>