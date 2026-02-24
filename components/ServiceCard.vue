<template>
     <div class="border-l-4 p-6 rounded-lg shadow-sm flex flex-col items-center"
        :class="mainClass">
        <i class="!text-3xl mb-4" :class="iconClass"></i>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{title}}</h3>
        <p class="text-gray-800 leading-relaxed">
            {{ description }}
        </p>
    </div>
</template>
<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  mainClass: {
    type: String,
    default: 'bg-amber-50 border-amber-600'
  },
  iconClass: {
    type: String,
    default: 'pi pi-chart-line text-amber-600'
  }
})
</script>