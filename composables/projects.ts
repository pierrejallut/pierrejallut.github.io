export const useProjects = () => {
  return [
    {
      client: "CrooqPub",
      title: "Dashboard Devis/BAT",
      description: `Développement d’un outil interne de création de devis permettant de sélectionner des produits issus de plusieurs sources externes (APIs).
        <br />
        <br />
        L’interface simplifie la génération de devis personnalisés en centralisant les données produits et en automatisant le calcul des montants.`,
      link: "#",
      image: "/images/dashboard.png",
      otherImages: [
        "/images/dashboard_add_product.png",
        "/images/dashboard_edit.png",
        // "/images/dashboard_connect.png",
      ],
      class: "shadow-xl shadow-orange-100",
      accentImage: "/images/accent_dashboard.png",
      accentClass:
        "w-full max-w-[200px] left-[0px] -top-[50px] mx-auto absolute",
    },
    {
      client: "TheGoodies",
      title: `LOOT: Ecommerce headless (Nuxt.js & Sylius)`,
      description: `Développement d’une plateforme e-commerce sous Sylius avec front-end headless en Nuxt.js intégrant un configurateur de produits utilisant Canvas.js`,
      link: "#",
      image: "/images/loot_home.png",
      otherImages: ["/images/loot_configurator.png"],
      reverse: true,
      class: "shadow-xl shadow-cyan-100",
      accentImage: "/images/accent.png",
      accentClass:
        "w-full max-w-[200px] right-[0px] -top-[60px] mx-auto absolute",
    },
    {
      client: "Numberly",
      title: "Watchly (Suite MarTech Platform)",
      description: `
        Travail sur la suite Numberly MarTech Platform sur plusieurs outils SaaS destinés à l'automatisation de création et gestion de campagnes marketings.
        <br />
        <br />
        Conception et déploiement de Watchly une interface permettant de suivre et de superviser l’ensemble des campagnes emailings programmées sur la plateforme Numberly.
    `,
      link: "#",
      image: "/watchly.png",
      otherImages: ["/images/sendingly.png", "/images/dashboardly.png"],
      class: "shadow-xl shadow-blue-200",
      accentImage: "/images/accent_watchly.png",
      accentClass:
        "w-full max-w-[300px] right-[10%] -top-[80px] mx-auto absolute",
    },
  ];
};
