<template>
    <Dialog v-model:visible="visible" modal header="Détail du projet" :style="{ width: '90%', maxWidth: '2000px' }">
        <div v-if="selectedProject">
            <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title"
                class="mb-4 w-full  object-cover rounded" />
            <h3 class="text-xl font-semibold mb-2">{{ selectedProject.title }}</h3>
            <p class="text-sm text-gray-700 mb-2">{{ selectedProject.description }}</p>
            <a :href="selectedProject.link" target="_blank" class="text-blue-600 underline">Accéder au projet</a>
        </div>
    </Dialog>

    <TopMenu />

    <div class="mx-auto">
        <!-- <Profile /> -->
        <ProfileSection />
        <CarouselPortfolio />

        <!-- <Divider></Divider> -->
        <AboutSection id="about" />
        <ServicesSection id="services" />
        <!-- anchor -->
        <ProjectSectionV2 id="projects" />
        <ContactSection id="contact" />
        <div class="w-full h-12 bg-gradient-to-b blue-50">
            <div class="max-w-3xl mx-auto text-center pt-5">
                <p class="text-sm font-serif">© 2023 Pierre Jallut. Tous droits réservés.</p>
            </div>
        </div>

        <!-- footer -->
        <!-- <div class="footer bg-[#fcf4fa] py-10">
            <div class="max-w-3xl mx-auto text-center">
                <p class="text-sm text-gray-500">© 2023 Pierre Jallut. Tous droits réservés.</p>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';


const services = ref([
    { title: 'Interfaces pour outils internes', icon: '🧰' },
    { title: 'Dashboards interactifs', icon: '📊' },
    { title: 'Connecteurs backend & APIs', icon: '🔗' },
]);

const selectedProject = ref<typeof projects.value[0] | null>(null);
const visible = ref(false);

function showProject(project: typeof projects.value[0]) {
    selectedProject.value = project;
    visible.value = true;
}

</script>

<style scoped>
/* Ajoute styles personnalisés ici si besoin */
</style>