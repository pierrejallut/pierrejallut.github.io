<template>
    <div
        class="flex flex-col items-center  p-4 rounded-lg shadow-md flex-1 max-w-[350px] relative justify-center z-10 bg-white">
        <div class="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full mb-2">
            {{ index + 1 }}
        </div>
        <h3 class="text-lg font-bold mb-1 text-center text-gray-800">
            {{ title }} </h3>
        <p class="text-gray-600 text-lg text-center">
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    backgroundColor: {
        type: String,
        default: 'bg-white'
    },
    index: {
        type: Number,
        default: 0
    }
})
</script>