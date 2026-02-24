<template>
  <section class=" py-20 bg-gradient-to-r from-blue-50 to-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-[32px] font-black mb-[30px] text-left">
        <i class="pi pi-briefcase mr-2 !font-black !text-3xl "></i>
        Ce que je propose
      </h1>

      <div class=" bg-contain bg-center bg-no-repeat flex flex-col lg:flex-row justify-center items-center text-center px-4 text-black
            w-full  mt-[80px] gap-10">

        <div class="flex flex-col !lg:flex-row justify-center items-center text-center px-4 text-black"
          v-for="(service, index) in services" :key="index">
          <img :src="service.image" alt="AI" class="min-w-[200px] min-h-[200px] bg-cover bg-center" />

          <div class="text-lg text-center font-bold mb-4  p-4">
            <h2 class="text-3xl font-bold mb-2 font-serif">{{ service.title }}</h2>
            <p class="text-lg font-semibold font-serif text-left">
              {{ service.description }}
            </p>
          </div>
        </div>

        <!-- 
      <!-- Développement sur mesure -->
        <!-- <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :mainClass="index % 2 === 0 ? 'bg-amber-50 border-amber-600' : 'bg-blue-50 border-blue-600'"
        :iconClass="index % 2 === 0 ? 'pi pi-chart-line text-amber-600' : 'pi pi-cog text-blue-600'"
        /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const services = [
  {
    title: "Développement sur mesure",
    description: "Je crée des applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.",
    image: "/images/development_drawn.png"
  },
  {
    title: "Intégration d’APIs & automatisation",
    subtitle: "Connexion de vos outils existants pour éviter les doubles saisies et fluidifier les process métier.",
    description: "Liaison avec vos services existants pour automatiser les flux de travail et améliorer l'efficacité.",
    image: "/images/automation_drawn.png"
  },
  {
    title: " Interfaces simples et efficaces",
    description: "Des interfaces conçues pour être utilisées au quotidien, sans formation.",
    image: "/images/interface_drawn.png"
  },
  {
    title: "Dashboards & visualisation de données",
    description: "Des tableaux de bord personnalisés pour suivre vos indicateurs clés de performance.",
    image: "/images/dataviz_drawn.png"
  }
];
</script>