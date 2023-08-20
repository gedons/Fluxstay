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

    <main class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> 
        <div class="container p-12 mx-auto bg-white">
          <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div class="flex flex-col md:w-full">
                  <h2 class="mb-4 font-semibold md:text-xl text-heading ">Client Details
                  </h2>
                  <form class="justify-center w-full mx-auto" method="post" action>
                      <div>
                          <div class="space-x-0 lg:flex lg:space-x-4">
                              <div class="w-full lg:w-1/2">
                                  <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                      Name</label>
                                  <input name="firstName" type="text" placeholder="First Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                              <div class="w-full lg:w-1/2 ">
                                  <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                      Name</label>
                                  <input name="Last Name" type="text" placeholder="Last Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                          </div>
                          <div class="space-x-0 lg:flex lg:space-x-4 mt-4">
                            <div class="w-full lg:w-1/2">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                <input name="firstName" type="email" placeholder="Email"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                                <input name="Last Name" type="text" placeholder="Phone"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                        </div>

                        <h2 class="mb-4 font-semibold md:text-xl text-heading mt-4">Reservation Details</h2>                        
                          <div class="space-x-0 lg:flex lg:space-x-4">
                              <div class="w-full lg:w-1/2">
                                  <label for="city"
                                      class="block mb-3 text-sm font-semibold text-gray-500">Start Date</label>
                                  <input name="firstname" type="date" placeholder="First Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                              <div class="w-full lg:w-1/2 ">
                                  <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                      End Date</label>
                                  <input name="lastname" type="date" placeholder="Last Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                          </div>

                          <div class="space-x-0 lg:flex lg:space-x-4 mt-4">
                            <div class="w-full lg:w-1/2">
                                <label for="city"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Room Type</label>
                                    <select class="w-full px-4 py-3 text-sm border text-gray-600 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                                      <option>Select</option>
                                      <option>Standard Suites</option>
                                      <option>Royal Suites</option>
                                      <option>Luxury Suites</option>
                                      <option>Executive Suites</option>
                                    </select>
                            </div>
                            <div class="w-full lg:w-1/2 ">
                                <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                    Room Number</label>
                                    <select class="w-full px-4 py-3 text-sm border text-gray-600 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                                      <option>Select</option>
                                      <option>100</option>
                                      <option>122</option>
                                      <option>112</option>
                                      <option>111</option>
                                    </select>
                            </div>
                        </div>
                          

                        <h2 class="mb-4 font-semibold md:text-xl text-heading mt-4">Next of Kin Details</h2>                        
                          <div class="space-x-0 lg:flex lg:space-x-4">
                              <div class="w-full lg:w-1/2">
                                  <label for="city"
                                      class="block mb-3 text-sm font-semibold text-gray-500">First Name</label>
                                  <input name="firstname" type="text" placeholder="First Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                              <div class="w-full lg:w-1/2 ">
                                  <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                      Last Name</label>
                                  <input name="lastname" type="text" placeholder="Last Name"
                                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                              </div>
                          </div>
                          <div class="mt-4">
                            <div class="w-full">
                                <label for="Phone"
                                    class="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                                <input name="phone" type="text" placeholder="Phone"
                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                         </div>

 
                          <div class="mt-4">
                              <button
                                  class="w-full px-6 py-2 text-blue-200 bg-indigo-600 hover:bg-indigo-900">Process</button>
                          </div>
                      </div>
                  </form>
              </div>
              <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                  <div class="pt-12 md:pt-0 2xl:ps-4">
                      <h2 class="text-xl font-semibold">Order Summary
                      </h2>
                       <div class="mt-8">
                          <div class="flex flex-col space-y-4">
                              <div class="flex space-x-4">                                  
                                  <div>
                                      <h2 class="text-xl font-semibold">Executive Room</h2>                                     
                                  </div>                                 
                              </div>                             
                          </div>
                      </div>    
                                        
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Room<span class="ml-2">$40.00</span></div>
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Cleaning Fee<span class="ml-2">$10</span></div>
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Taxes<span class="ml-2">$10</span></div>                     
                      <div
                          class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                          Total<span class="ml-2">$50.00</span></div>
                  </div>
              </div>
          </div>
      </div>
      </div>
      </main>
</template>