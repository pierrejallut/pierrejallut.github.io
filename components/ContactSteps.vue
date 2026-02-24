<template>
    <div class="flex flex-col items-center justify-center w-full max-w-9xl mx-auto py-8">
        <h2 class="text-3xl font-bold text-center mb-20 mt-10">Que faire maintenant ?</h2>

        <!-- Scroll wrapper on mobile -->
        <div class="relative w-full overflow-x-auto">

            <!-- Scrollable flex row -->
            <div class="flex gap-4 px-4 md:px-0 md:justify-center w-max md:w-full">
                <ContactStepCard v-for="(step, index) in steps" :key="index" :title="step.title"
                    :description="step.description" :backgroundColor="step.backgroundColor" :icon="step.icon"
                    :index="index" />
            </div>

            <!-- Animated gradient line (desktop only) -->
            <div
                class="hidden md:block absolute left-0 top-20 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-0 animate-gradient">
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes gradient-slide {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    background-size: 300% 300%;
    animation: gradient-slide 1s ease-in-out infinite;
}
</style>

<script setup lang="ts">
const steps = [
    {
        title: 'Écrivez-moi',
        icon: 'pi pi-envelope',
        description: 'Envoyez-moi un message via le formulaire ou par e-mail.',
        backgroundColor: 'bg-yellow-100'

    },
    {
        icon: 'pi pi-calendar',
        title: 'Planifions un appel',
        description: 'Nous discuterons de votre projet et de vos besoins.',
        backgroundColor: 'bg-purple-100'
    },
    {
        icon: 'pi pi-check',
        title: 'Démarrons ensemble',
        description: 'Je vous aiderai à réaliser votre projet avec succès.',
        backgroundColor: 'bg-blue-100'
    },
    {
        icon: 'pi pi-users',
        title: 'Suivi et support',
        description: 'Je reste à votre disposition pour toute question ou besoin d\'ajustement.',
        backgroundColor: 'bg-green-100'
    }
];

</script>
