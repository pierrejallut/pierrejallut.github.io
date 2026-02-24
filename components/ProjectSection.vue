<script setup lang="ts">
</script>

<template>
  <section class=" w-full bg-gradient-to-b from-blue-50 via-orange-50 to-purple-50 py-[80px]
   ">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
      <h1 class="font-serif text-[32px] font-black mb-[50px]">
        <!-- <i class="pi pi-briefcase mr-2 !font-black !text-3xl"></i> -->
        Mes projets
      </h1>
    </div>
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 space-y-[0px] gird grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl ">
      <div class="col-span-2 w-full 
    bg-gradient-to-r from-orange-100 to-white-200 text-gray-900 
    rounded-xl shadow-md p-6 flex flex-row
    ">
        <div class="flex flex-col justify-center">
          <!-- subittle-->
          <h2 class="text-sm font-serif mb-4"> Crooqpub</h2>
          <h2 class="text-2xl font-bold font-serif  mb-4"> {{ projects[0].title }}</h2>
          <p class="text-lg mb-4 text-gray-600">
            {{ projects[0].description }}
          </p>
          <p class="">
            J'ai développé une interface intuitive permettant aux équipes de gérer leurs transactions sans friction.
          </p>
          <!-- <a href="#" class="mt-6 inline-block  font-medium hover:underline w-[50%] 
        text-gray-900 bg-gradient-to-r from-blue-500 to-purple-500 font-bold rounded-lg px-4 py-2 shadow-md
      ">
        Découvrir le projet →
      </a> -->
        </div>
        <Image :src="projects[0].image" alt="Plateforme de facturation" class="shadow-xl mt-4 border-2 border-gray-200
      w-full h-100 object-cover " preview />
      </div>
      <div class="col-span-2 w-full 
    bg-gradient-to-r from-blue-200 to-cyan-100 text-gray-900 
    rounded-xl shadow-md p-6 flex flex-row
    ">
        <!-- <Image :src="projects[1].image" alt="Plateforme de facturation" class="shadow-xl mt-4 mr-5 border-2 border-gray-200
      w-full h-100 object-cover" preview /> -->
        <div class="flex flex-col justify-center">
          <!-- subittle-->
          <h2 class="text-sm font-serif mb-4"> Crooqpub</h2>
          <h2 class="text-2xl font-bold font-serif  mb-4"> {{ projects[1].title }}</h2>
          <p class="text-lg mb-4 text-gray-600">
            {{ projects[1].description }}
          </p>
          <p class="">
            J'ai développé une interface intuitive permettant aux équipes de gérer leurs transactions sans friction.
          </p>
          <!-- <a href="#" class="mt-6 inline-block  font-medium hover:underline w-[50%] 
        text-gray-900 bg-gradient-to-r from-blue-500 to-purple-500 font-bold rounded-lg px-4 py-2 shadow-md
      ">
        Découvrir le projet →
      </a> -->
        </div>

      </div>

      <!-- Projet 2 -->

      <div class="col-span-1 w-full bg-gradient-to-r from-blue-200 to-purple-200 text-gray-900
    rounded-xl shadow-md p-6 flex flex-row">
        <div class="flex flex-col justify-center">
          <h2 class="text-sm font-serif mb-4"> Crooqpub</h2>
          <h2 class="text-2xl font-bold font-serif  mb-4"> {{ projects[1].title }}</h2>
          <p class="text-lg mb-4 text-gray-600">
            {{ projects[1].description }}
          </p>
          <p class="text-sm">
            J'ai développé une interface intuitive permettant aux équipes de gérer leurs transactions sans friction.
          </p>
        </div>
        <!-- <Image :src="projects[1].image" alt="Plateforme de facturation" class="rounded-xl shadow-md mt-4
      w-full h-100 object-cover" preview /> -->
      </div>

      <!-- Projet 3 -->

      <div class="col-span-1 w-full bg-gradient-to-r from-blue-200 to-purple-200 text-gray-900
    rounded-xl shadow-md p-6 flex flex-row">
        <div class="flex flex-col justify-center">
          <h2 class="text-sm font-serif mb-4"> Crooqpub</h2>
          <h2 class="text-2xl font-bold font-serif  mb-4"> {{ projects[2].title }}</h2>
          <p class="text-lg mb-4 text-gray-600">
            {{ projects[2].description }}
          </p>
          <p class="text-sm">
            J'ai développé une interface intuitive permettant aux équipes de gérer leurs transactions sans friction.
          </p>
        </div>
        <Image :src="projects[2].image" alt="Plateforme de facturation" class="rounded-xl shadow-md mt-4
      w-full h-100 object-cover" preview />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

const projects = ref([
    {
        title: 'Plateforme de produits',
        description: 'Génération de factures PDF et gestion des paiements.',
        link: '#',
        image: '/dashboard_home.png',
        background: 'bg-slate-50'
    },
    {
        title: 'CRM interne pour startup',
        description: 'Outil de suivi client et de génération de rapports.',
        link: '#',
        image: '/image2.png',
        // different light background
        background: 'bg-blue-50'
    },
    {
        title: 'Plateforme de facturation',
        description: 'Génération de factures PDF et gestion des paiements.',
        link: '#',
        image: '/crm.png',
        background: 'bg-red-50'
    },
    {
        title: 'Plateforme de facturation',
        description: 'Génération de factures PDF et gestion des paiements.',
        link: '#',
        image: '/crm.png',
        background: 'bg-yellow-50'
    },

]);

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
