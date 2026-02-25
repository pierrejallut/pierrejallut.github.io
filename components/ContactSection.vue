<template>
    <div class=" bg-blue-50 pb-10">

        <!-- Timeline (à placer juste au-dessus du formulaire de contact) -->
        <div class="flex flex-col items-center ">
            <!-- <h2 class="text-2xl font-bold font-serif mb-8">Mon processus de développement</h2> -->
            <div class="w-full max-w-9xl px-4 mb-10">
                <ContactSteps></ContactSteps>
            </div>
        </div>

        <!-- <hr class="w-1/2 border-t-1 border-gray-300 mx-auto mb-[100px]" /> -->
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 px-4 ">
            <div>
                <h1 class="font-serif text-3xl font-black mb-4 relative">
                    <img src="/images/contact.png" alt="Contact"
                        class="w-full max-w-[200px] left-[250px] -top-[20px] mx-auto absolute" />
                    Contactez-moi
                </h1>
                <p class="text-lg mb-4">
                    Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et
                    grandir en tant que développeur.
                    <br />
                    <br />
                    N'hésitez pas à me contacter si vous avez un projet
                    passionnant en tête !
                </p>
                <!-- <p class="text-lg mb-4">
                    Vous pouvez m'écrire directement à mon adresse e-mail :
                    <span class="font-bold text-blue-500 cursor-pointer" @click="copyEmail">
                        <i class="pi pi-envelope mr-2"></i>
                        pierre@pierrejallut.com
                    </span>
                </p> -->
            </div>
            <div class="w-full flex flex-col gap-4">
                <form @submit.prevent="onFormSubmit" class="flex flex-col gap-4 mx-auto mb-6 w-full" ref="formRef">
                    <!-- <Select v-model="form.subject" option-value="value" option-label="label" :options="[
                        { label: 'Question', value: 'Question' },
                        { label: 'Automatisation interne', value: 'Automatisation interne' },
                        { label: 'SAAS', value: 'SAAS' },
                        { label: 'ECommerce', value: 'ECommerce' },
                        { label: 'Autre', value: 'Autre' }
                    ]" placeholder="Choisissez un sujet" class="w-1/2" /> -->
                    <input v-model="form.email" type="email" placeholder="Votre adresse e-mail" required
                        class="p-inputtext p-component w-full" />
                    <textarea v-model="form.message" rows="4" placeholder="Votre message" required
                        class="p-inputtext p-component w-full"></textarea>
                    <Button label="Me contacter" class="p-button-primary gradient" type="submit" />
                </form>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-sm text-gray-500">Ou copiez mon e-mail :</span>
                    <a href="" target="_blank" @click.prevent="copyEmail" v-if="!hasCopiedEmail"
                        class="p-button-primary gradient-outline font-bold!">
                        <span>Mon Email</span>
                    </a>
                    <span v-if="hasCopiedEmail" class="text-sm text-green-500">Adresse e-mail copiée !</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const toast = useToast();

const hasCopiedEmail = ref(false);



const form = ref({
    email: '',
    message: ''
});
const formRef = ref(null)
function submitForm() {
    formRef.value?.submit();
}

function onFormSubmit() {
    const subject = encodeURIComponent("Contact via site web");
    const body = encodeURIComponent(`${form.value.message}`);
    window.location.href = `mailto:pjallut@gmail.com?subject=${subject}&body=${body}`;
}

function copyEmail() {
    navigator.clipboard.writeText('pjallut@gmail.com')
        .then(() => {
            toast.add({
                severity: 'success', summary: 'Succès',
                detail: 'Adresse e-mail copiée dans le presse-papiers !'
            });
            hasCopiedEmail.value = true;
        })
        .catch(() => alert("Erreur lors de la copie."));
}
</script>