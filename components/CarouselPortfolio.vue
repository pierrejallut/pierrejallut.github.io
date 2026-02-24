<template>
    <div class="bg-white dark:bg-gray-900 py-12 w-full absolute top-0 left-0 -z-10">
        <div class="w-full inline-flex flex-nowrap overflow-hidden mx-auto">
            <ul
                class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll opacity-[.4]">
                <li v-for="(item, index) in projects" :key="index">
                    <img :src="item.image" :alt="item.alt" class="max-w-[500px] object-contain" />
                </li>
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  opacity-[.4]"
                aria-hidden="true">
                <li v-for="(item, index) in projects" :key="index">
                    <img :src="item.image" :alt="item.alt" class="max-w-[500px]  object-contain" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
const projects = useProjects();
</script>
<style scoped>
@keyframes infinite-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-infinite-scroll {
    display: flex;
    animation: infinite-scroll 50s linear infinite;
}
</style>