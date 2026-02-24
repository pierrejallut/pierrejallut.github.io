<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <header class="z-50 bg-white fixed top-0 w-full">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="h-[20px] w-[20px] bg-[radial-gradient(ellipse_at_center,_#3b82f6,_#9333ea)] shadow-lg mr-2"></div>
        <h1 class="text-xl font-bold">Pierre Jallut</h1>
      </div>

      <!-- Burger menu button (mobile) -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Navigation -->
      <nav class="hidden md:block ">
        <ul class="flex space-x-6 text-lg ">
          <li><a href="#about" class="text-gray-700 font-bold hover:text-blue-500">À propos</a></li>
          <li><a href="#projects" class="text-gray-700 font-bold hover:text-blue-500">Projets</a></li>
          <li><a href="#services" class="text-gray-700 font-bold hover:text-blue-500">Services</a></li>
          <li><a href="#contact" class="text-gray-700 font-bold hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </div>

    <!-- Mobile nav -->
    <div v-if="isOpen" class="md:hidden bg-white shadow-inner border-b">
      <ul class="flex flex-col space-y-4 px-6 py-4 text-lg">
        <li><a @click="isOpen = false" href="#about" class="text-gray-700 font-bold hover:text-blue-500 ">À
            propos</a>
        </li>
        <li><a @click="isOpen = false" href="#projects" class="text-gray-700 font-bold hover:text-blue-500">Projets</a>
        </li>
        <li><a @click="isOpen = false" href="#services" class="text-gray-700 font-bold hover:text-blue-500">Services</a>
        </li>
        <li><a @click="isOpen = false" href="#contact" class="text-gray-700 font-bold hover:text-blue-500">Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>