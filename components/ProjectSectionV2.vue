<script setup lang="ts">
</script>
<template>
    <!-- <div class="flex flex-row justify-center items-center p-4"> -->
    <div class="bg-gray-50 pt-[50px] pb-[100px] px-10 bg-gradient-to-b from-blue-50-[50%] via-purple-50 to-blue-50
       ">
        <div class="mx-auto max-w-6xl overflow-hidden">
            <h1 class="font-serif text-3xl font-black mt-10 text-center">Projets</h1>
            <div class="flex flex-col justify-center gap-20 mt-10  mx-auto">

                <div class="flex flex-col-reverse lg:flex-row gap-1 lg:gap-5 justify-center items-center p-4 relative"
                    :class="project.reverse ? 'lg:flex-row-reverse' : ''" v-for="(project, index) in projects"
                    :key="index">

                    <div class="relative">
                        <Image :src="project.image" alt="Plateforme de facturation"
                            class="shadow-xl mt-4 mr-5 border-2 border-gray-200 w-full object-cover"
                            :class="project.class" preview />
                        <div class="flex flex-wrap gap-4 mt-4">
                            <template v-for="(image, idx) in project.otherImages" :key="idx">
                                <Image :src="image" alt="Plateforme de facturation" class="shadow-xl border-2 border-gray-200 w-full object-cover 
                                    max-w-[300px]" :class="project.class" preview />
                            </template>
                        </div>
                        <!-- <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                                    <div class="mb-4">
                                        <div class="relative mx-auto">
                                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                                                :alt="slotProps.data.name" class="w-full rounded" />
                                            <Tag :value="slotProps.data.inventoryStatus"
                                                :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute"
                                                style="left:5px; top: 5px" />
                                        </div>
                                    </div>
                                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                                    <div class="flex justify-between items-center">
                                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                                        <span>
                                            <Button icon="pi pi-heart" severity="secondary" outlined />
                                            <Button icon="pi pi-shopping-cart" class="ml-2" />
                                        </span>
                                    </div> -->
                        <!-- </div> -->

                        <!-- <Image :src="project.image" alt="Plateforme de facturation" class="shadow-xl mt-4 mr-5 border-2 border-gray-200
w-full h-100 object-cover" :class="project.class" preview />
                        <img :src="project.accentImage" alt="Contact"
                            class="w-full max-w-[200px] right-[0px] -top-[60px] mx-auto absolute"
                            :class="project.accentClass" /> -->
                    </div>
                    <div class="flex flex-col gap-[40px] justify-start items-start! lg:mr-4 relative">

                        <div>
                            <h2 class="text-sm font-serif mb-4">

                                {{ project.client }}
                            </h2>
                            <h2 class="text-3xl font-bold font-serif my-4 relative
                        ">
                                <!-- <img src="/accent.png" alt="Logo"
                                    class="absolute bottom-1 left-[200px] transform -scale-x-100 " /> -->
                                {{ project.title }}
                            </h2>
                            <p class="leading-7 text-lg text-sky-950 text-shadow-2xs text-shadow-sky-300"
                                v-html="project.description">
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const projects = useProjects();

const selectedProject = ref<typeof projects[0] | null>(null);
</script>

<style scoped>
.format {
    line-height: 1.5;
    font-size: 1.125rem;
}

.gradient-outline {
    background: none;
    border-radius: 8px;
    padding: 10px 20px;
    color: purple;
    font-weight: bold !important;
    border: 1px solid purple;
}

.gradient {
    /* blue to purple */
    background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%) !important;
    /* border-radius: 8px; */
    padding: 10px 20px;
    color: white;
    font-weight: bold !important;
    border: 1px solid white;
}

.profile-section {
    /* background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%) !important; */
    /* border: 10px solid black; */
    padding: 20px;
    width: 600px;
    height: 600px;
    margin-right: 40px;
    clip-path: polygon(5% 98%, 99% 100%, 91% 69%, 80% 58%, 70% 51%, 63% 47%, 62% 37%, 63% 28%, 64% 20%, 60% 13%, 50% 5%, 40% 4%, 26% 15%, 23% 29%, 30% 47%, 32% 54%, 21% 66%, 13% 74%, 6% 85%);
    /* mask-image: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); */
}
</style>
