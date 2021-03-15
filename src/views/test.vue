<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <button class="w-1/2 flex items-center justify-center rounded-md bg-purple-700 text-white" type="button">
          <router-link to="/">vue-router yea => Go to Home page</router-link>
        </button>
        <div class="flex p-6 font-mono">
          <div class="flex-none w-40 relative">
            <img src="../assets/vite.png" alt="" class="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime" />
          </div>
          <form class="flex-auto pl-6">
            <div class="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-cyan-400 text-white">
              <h1 class="w-full flex-none text-2xl leading-7 mb-2 font-bold">vuex yea</h1>
              <div class="text-2xl leading-7 font-bold">Clicked: {{ count }} times</div>
              <div class="text-sm font-medium ml-3">count is {{ evenOrOdd }}.</div>
            </div>
            <div class="flex items-baseline py-8">
              <div class="space-x-3.5 flex text-center text-sm leading-none font-bold text-gray-500"></div>
              <div class="ml-auto text-xs">play Relax project</div>
            </div>
            <div class="flex space-x-4 text-sm font-bold uppercase mb-4">
              <div class="flex-auto flex space-x-3">
                <button class="w-1/2 flex items-center justify-center ring-4 focus:ring-green-500 focus:ring-opacity-50 bg-cyan-200" type="button" @click="incrementIfOdd">Increment if odd</button>
                <button class="w-1/2 flex items-center justify-center border ring-4 focus:ring-green-500 focus:ring-opacity-50 bg-cyan-200" type="button" @click="incrementAsync">Increment async</button>
              </div>
              <button class="flex-none flex items-center justify-center w-9 h-9 border border-blue-900" type="button" aria-label="like" @click="decrement">
                -
                <svg width="20" height="20" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
              <button class="flex-none flex items-center justify-center w-9 h-9 border border-purple-700 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like" @click="increment">
                +
                <svg width="20" height="20" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p class="text-xs leading-5 text-gray-500">@photonactivity</p>
            <P class="text-yellow-500"> Happy Coding!</P>
            <p class="text-green-500">===><a target="_blank" href="https://github.com/photonactivity/vite-vue-ts-tailwind-starter">Github</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      increment: () => store.dispatch("increment"),
      decrement: () => store.dispatch("decrement"),
      incrementIfOdd: () => store.dispatch("incrementIfOdd"),
      incrementAsync: () => store.dispatch("incrementAsync"),
    }
  },
  See(e) {
    window.open("https://github.com/vuejs/vuepress", "_blank")
  },
}
</script>
