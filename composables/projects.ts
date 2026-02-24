export const useProjects = () => {
  return [
    {
      client: "Crooqpub",
      title: "Plateforme de produits",
      description: `Développement d’un outil de création de devis permettant de sélectionner des produits issus de plusieurs sources externes (APIs).
        <br />
        <br />
        L’interface simplifie la génération de devis personnalisés en centralisant les données produits et en automatisant le calcul des montants.`,
      link: "#",
      image: "/dashboard_home.png",
      class: "shadow-xl shadow-orange-100 !min-w-[300px]",
      accentImage: "/images/accent_dashboard.png",
      accentClass:
        "w-full max-w-[200px] left-[0px] -top-[50px] mx-auto absolute",
    },
    {
      client: "Freelance",
      title: `Platerform de campagnes emailing`,
      description: `Développment d'une plateforme de campagnes emailing permettant de créer, gérer et suivre des campagnes de marketing par email.
        <br />
        <br />
        L'outil permet de créer des campagnes personnalisées, de gérer les listes de diffusion et de suivre les performances des campagnes en temps réel.`,
      link: "#",
      image: "/image2.png",
      reverse: true,
      class: "shadow-xl shadow-cyan-100",
      accentImage: "/images/accent.png",
      accentClass:
        "w-full max-w-[200px] right-[0px] -top-[60px] mx-auto absolute",
    },
    {
      client: "Numberly",
      title: "Watchly",
      description: `Permet de suivre et de superviser l’ensemble des campagnes emailings programmées sur la plateforme Numberly.<br /><br />

        l’ensemble des campagnes emailings programmées sur la plateforme Numberly.
        Cet outil de supervision permet ainsi de valider le bon envoi des campagnes programmées et de suivre leur diffusion en temps réel.
        Il est possible :
        <br />
        <br />
    `,
      link: "#",
      image: "/watchly.png",
      class: "shadow-xl shadow-blue-200",
      accentImage: "/images/accent_watchly.png",
      accentClass:
        "w-full max-w-[300px] right-[10%] -top-[80px] mx-auto absolute",
    },
  ];
};
