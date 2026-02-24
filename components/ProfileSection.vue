<script setup lang="ts">
</script>
<template>

    <!-- <div class="flex flex-row justify-center items-center p-4"> -->
    <div class="flex flex-col items-center p-4 pt-20 pb-20 relative">

        <div class="flex flex-col md:flex-row justify-center items-center p-4 gap-8 w-full max-w-7xl relative">
            <!-- Squelette arrière -->
            <div class="absolute -z-50 md:-ml-[700px] hidden md:flex flex-col gap-1 ">
                <!-- <Skeleton width="20rem" height="2rem"></Skeleton>
                <div class="flex flex-row gap-2">
                    <div class="flex flex-col gap-2">
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                        <Skeleton width="30rem" height="5rem"></Skeleton>
                    </div>
                </div> -->
            </div>

            <!-- Image de profil -->
            <div
                class="w-80 h-80 md:w-[600px] md:h-[600px]  bg-[url('/profile.jpg')] bg-cover bg-center  profile-section">
            </div>

            <!-- Section texte -->
            <div class="flex flex-col justify-center items-center md:items-start p-4 text-center md:text-left">
                <h1 class="font-serif font-black text-3xl md:text-4xl animated-underline relative">
                    <img src="/accent.png" alt="Logo" class="absolute -top-[120px]" />

                    Hey, moi c'est Pierre
                </h1>
                <p class="max-w-2xl text-gray-800 !text-xl md:text-lg !mt-5">
                    Je concois des outils web sur-mesure pour vous aider à automatiser vos processus et à améliorer
                    votre productivité.
                    <!-- <br /><br />
                    <strong class="italic"> Saas ? Site vitrine ? Application web ?</strong> -->
                    <br /><br />
                    <span class="font-bold">Mon objectif ?</span> Vous aider à atteindre vos objectifs en vous
                    fournissant des solutions numériques de qualité.
                    <br /><br />
                    <i> Je suis passionné par le développement web et j'adore relever des défis techniques.</i>
                </p>

                <!-- Boutons -->
                <div class="w-full mt-4">
                    <div class="mx-auto flex flex-col w-full justify-center items-center">
                        <p class="text-gray-500 text-sm mt-10">
                            Tous les visuels de ce site ont été réalisés par mes soins avec ❤️
                        </p>
                        <div class="flex flex-row gap-4">
                            <a href="#contact"
                                class="p-button-primary gradient font-bold! text-xl drop-shadow-lg !border-[2px]">
                                <i class="pi pi-envelope mr-2"></i>
                                <span>Me contacter</span>
                            </a>
                            <a href="#projects"
                                class="p-button-primary gradient-outline font-bold! flex items-center drop-shadow-lg !border-[2px]">
                                <i class="pi pi-folder
edin mr-2"></i>
                                <span>Mes projets</span>
                            </a>
                        </div>
                        <!-- <Button label="Me contacter" class="p-button-primary gradient" icon="pi pi-envelope"
                        @click="$emit('contact')" />
                    <Button label="Mon LinkedIn" class="p-button-primary gradient-outline" icon="pi pi-linkedin"
                        @click="$emit('linkedin')" />
                    <Button label="Mon GitHub" class="p-button-primary gradient-outline" icon="pi pi-github"
                        @click="$emit('github')" /> -->
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = ref([
]);
projects.value = useProjects();

</script>

<style scoped>
.format {
    line-height: 1.5;
    font-size: 1.125rem;
}

.animated-underline {
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    width: 100%;
}

.animated-underline::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    max-width: 100%;
    background: black;
    width: 20px;
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
