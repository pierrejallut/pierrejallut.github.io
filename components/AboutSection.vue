<template>
    <section class="bg-blue-50 py-20">

        <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
            <div class="flex flex-col gap-4">
                <h1 class="font-serif text-[32px] font-black mb-3">
                    <i class="pi pi-user mr-2 !font-black !text-3xl"></i>
                    Un peu de moi
                </h1>
                <p class="text-base !mb-2">
                    Passionné depuis l'enfance par l'informatique, j'ai commencé à coder à l'âge de 12 ans.
                </p>
                <p class="text-base !mb-2">
                    Je me suis ensuite vite dirigé vers des études qui m'ont permis de solidifier pendant 5 ans mes
                    compétences en développement à Epitech Paris, une école d'ingénieur en informatique.
                </p>
                <p class="text-base !mb-2">
                    Le développement pour moi est un medium qui me permet de résoudre des problèmes complexes (vos
                    problèmes, peut-être ?) et de créer des solutions
                    esthétiques et fonctionnelles.
                </p>
                <!-- <ul class="text-base !mb-2">
                    <li>de m'adapter rapidement aux nouvelles technologies</li>
                    <li>de travailler efficacement en équipe</li>
                    <li>de comprendre les besoins des utilisateurs</li>
                    <li>de proposer des solutions innovantes</li>
                </ul> -->
                <h1 class="font-serif text-[32px] font-black !mb-3">
                    <i class="pi pi-code mr-2 !font-black !text-3xl"></i>
                    Mes compétences
                </h1>
                <p class="text-base !mb-2">
                    Je suis un développeur full-stack, ce qui signifie que je peux travailler sur toutes les couches
                    d'une application, du front-end au back-end
                    jusqu'à la base de données et l'administration système.
                </p>

                <p class="text-base !mb-2">
                    <!-- <img src="/AboutVisual.png" alt="AI" class="float-right max-w-20" /> -->
                    Je suis également passionné par le design et l'expérience utilisateur, ce qui me permet de créer des
                    applications à la fois fonctionnelles et esthétiques.
                </p>

                <!-- <p class="text-lg !mb-2 font-bold italic">
                    Rien ne me fait peur et tout me passionne!
                    <br />
                </p> -->

            </div>

            <div class="justify-center items-center min-w-[50%] flex flex-col gap-4 relative">
                <!-- <Skeleton
                    width="100%"
                    height="2rem"
                     v-for="i in 20"
                    ></Skeleton> -->

                <img src="/public/images/aboutme.png" alt="AI" class="w-[100%]" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
