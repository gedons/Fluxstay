<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-semibold tracking-tight text-gray-900">New Reservation</h1>
            <router-link
            :to="{name: 'Dashboard'}"
              class="
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
              
              "
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-4 -mt-1 -ml-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            
                Home
            </router-link>
          </div> 
        </div>
    </header>
</template>