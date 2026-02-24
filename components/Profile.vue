<template>
    <div class="flex flex-col items-center mb-6">
        <!-- <img src="/profile.jpg" alt="Photo de Thomas Dupont" class="w-24 h-24 rounded-full shadow-md mb-4" /> -->
        <div class="flex gap-2 items-center">
            <h1 class="text-3xl font-bold text-center animated-underline">Pierre Jallut</h1>
            |
            <a href="https://www.linkedin.com/in/pierre-jallut-009796b7/" target="_blank" class="hover:underline"><i
                    class="pi pi-linkedin"></i></a>
            <a href="https://github.com/tarkick" target="_blank" class="hover:underline"><i
                    class="pi pi-github"></i></a>
        </div>
        <p class="text-center text-gray-600 mt-2">
            Développement d’interfaces web sur mesure — Nuxt/Vue.js, Node & Python
        </p>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.animated-underline {
    display: inline-block;
    position: relative;
    font-size: 24px;
    padding-bottom: 2px;
}

.animated-underline::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    background: black;
    width: 10px;
    left: 0;
    animation: slide-pulse 2s ease-in-out infinite alternate;
}

@keyframes slide-pulse {
    0% {
        /* width: 20%; */
        left: 0%;
    }

    50% {
        /* width: 60%; */
        left: 20%;
    }

    100% {
        /* width: 20%; */
        left: 80%;
    }
}
</style>