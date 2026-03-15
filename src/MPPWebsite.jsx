import { useMemo, useState } from "react";
import {
  Heart,
  Shield,
  Users,
  Stethoscope,
  HandHeart,
  FileText,
  Mail,
  MapPin,
  Phone,
  Globe,
  Newspaper,
  Landmark,
  Camera,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Gift,
  BadgeDollarSign,
} from "lucide-react";

export default function MPPWebsite() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [activeTab, setActiveTab] = useState("stripe");

  const donationProgress = useMemo(() => {
    const raised = 18420;
    const goal = 30000;
    return {
      raised,
      goal,
      percent: Math.min(100, Math.round((raised / goal) * 100)),
    };
  }, []);

  const pillars = [
    {
      icon: Stethoscope,
      title: "Protéger la santé",
      description:
        "Nous défendons les structures sanitaires, les soignants et les patients dans les zones fragilisées.",
    },
    {
      icon: FileText,
      title: "Documenter",
      description:
        "Nous transformons les faits du terrain en données, témoignages et rapports utiles à l'action.",
    },
    {
      icon: HandHeart,
      title: "Soutenir",
      description:
        "Nous accompagnons les communautés par des actions de résilience et de soutien humain.",
    },
  ];

  const actions = [
    {
      title: "Formation communautaire",
      text: "Former des agents de santé communautaire capables d'agir dans les contextes sensibles.",
    },
    {
      title: "Prévention & plaidoyer",
      text: "Sensibiliser les décideurs et les citoyens à la protection des structures sanitaires.",
    },
    {
      title: "Soutien psychosocial",
      text: "Créer des espaces d'écoute et d'accompagnement pour les communautés affectées.",
    },
    {
      title: "Partenariats",
      text: "Construire un réseau de partenaires engagés pour amplifier l'impact.",
    },
  ];

  const stats = [
    { value: "500+", label: "personnes à former" },
    { value: "2", label: "pays pilotes" },
    { value: "5", label: "axes d'action" },
    { value: "1", label: "mission : la paix" },
  ];

  const news = [
    {
      title: "Lancement du programme de résilience communautaire",
      date: "Mars 2026",
      excerpt:
        "MPP structure son déploiement initial autour de la formation communautaire et de la protection des structures sanitaires.",
    },
    {
      title: "Préparation du premier rapport de documentation",
      date: "Avril 2026",
      excerpt:
        "L'association met en place ses méthodes de collecte, de vérification et de restitution des données terrain.",
    },
    {
      title: "Ouverture des partenariats institutionnels",
      date: "Mai 2026",
      excerpt:
        "MPP engage les premiers échanges avec des partenaires, mécènes, médias et acteurs humanitaires.",
    },
  ];

  const partners = [
    "ONG humanitaires",
    "Fondations",
    "Institutions de santé",
    "Collectivités",
    "Médias engagés",
    "Entreprises à impact",
  ];

  const reports = [
    {
      title: "Rapport d'activité annuel",
      description: "Bilan des actions menées, zones ciblées, résultats et perspectives.",
    },
    {
      title: "Rapport financier",
      description: "Présentation claire de l'utilisation des fonds, des ressources et des engagements.",
    },
    {
      title: "Rapport de terrain",
      description: "Documentation des besoins, des incidents et des réponses apportées par l'association.",
    },
  ];

  const gallery = [
    "Mission de terrain et coordination locale",
    "Formation d'agents communautaires",
    "Échanges avec les communautés bénéficiaires",
    "Documentation et collecte d'informations",
    "Actions de sensibilisation et plaidoyer",
    "Mobilisation de partenaires et bénévoles",
  ];

  const worldZones = [
    {
      region: "Haïti",
      status: "Pays pilote",
      text: "Renforcement communautaire et structuration de programmes de prévention.",
    },
    {
      region: "RDC",
      status: "Pays pilote",
      text: "Soutien à la protection des structures sanitaires et accompagnement des communautés.",
    },
    {
      region: "France",
      status: "Coordination",
      text: "Pilotage, plaidoyer, partenariats, collecte et rayonnement institutionnel.",
    },
  ];

  const donationAmounts = [25, 50, 100, 250];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 font-semibold text-slate-950">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
              <Heart className="h-5 w-5 text-emerald-600" />
            </div>
            Main Pour la Paix
          </div>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#mission" className="hover:text-emerald-700">Mission</a>
            <a href="#actions" className="hover:text-emerald-700">Actions</a>
            <a href="#don" className="hover:text-emerald-700">Faire un don</a>
            <a href="#actualites" className="hover:text-emerald-700">Actualités</a>
            <a href="#partenaires" className="hover:text-emerald-700">Partenaires</a>
            <a href="#benevolat" className="hover:text-emerald-700">Bénévolat</a>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
              <Shield className="h-4 w-4" />
              Protection de la santé dans les zones de conflit
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Là où un centre de santé tient debout, une communauté garde espoir.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Main Pour la Paix protège les structures sanitaires, soutient les communautés vulnérables et transforme l'émotion en action concrète grâce à la solidarité, aux partenariats et aux dons.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#don" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-400">
                Faire un don maintenant
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#partenaires" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Devenir partenaire
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-emerald-200">Campagne solidaire</div>
                  <div className="mt-2 text-2xl font-semibold">Objectif de collecte</div>
                </div>
                <BadgeDollarSign className="h-10 w-10 text-emerald-300" />
              </div>
              <div className="mt-6 text-4xl font-bold">{donationProgress.raised.toLocaleString("fr-FR")} €</div>
              <div className="mt-2 text-sm text-slate-300">collectés sur {donationProgress.goal.toLocaleString("fr-FR")} €</div>
              <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-emerald-400" style={{ width: `${donationProgress.percent}%` }} />
              </div>
              <div className="mt-3 text-sm text-emerald-100">{donationProgress.percent}% de l'objectif atteint</div>
              <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-50">
                Chaque don contribue à protéger les structures sanitaires, à former des relais communautaires et à soutenir les personnes exposées aux conséquences des conflits.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Humanité",
                "Protection",
                "Transparence",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-medium text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="mission" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Notre mission</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Protéger ce qui soigne. Soutenir ceux qui tiennent. Défendre la dignité humaine.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                L'association Main Pour la Paix agit pour renforcer la résilience des systèmes de santé dans les zones touchées par les conflits, documenter les violences et mobiliser des réponses humaines, concrètes et crédibles.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Nous voulons faire de la protection de la santé un combat visible, structuré et soutenu par une communauté de donateurs, bénévoles, institutions et partenaires.
              </p>
            </div>

            <div className="grid gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="actions" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Nos actions</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Une association plus forte quand elle montre ce qu'elle fait réellement.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {actions.map((action, index) => (
                <div key={action.title} className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{action.title}</h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">{action.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="don" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Faire un don</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Votre soutien peut devenir une action concrète sur le terrain.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cette section est conçue pour accueillir une intégration Stripe ou PayPal. Elle peut être reliée à une vraie page de paiement en quelques étapes lors de la mise en ligne.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Protection des structures sanitaires",
                  "Formation communautaire",
                  "Soutien psychosocial",
                  "Documentation et plaidoyer",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab("stripe")}
                  className={`rounded-xl px-4 py-2 text-sm font-medium ${activeTab === "stripe" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  Stripe
                </button>
                <button
                  onClick={() => setActiveTab("paypal")}
                  className={`rounded-xl px-4 py-2 text-sm font-medium ${activeTab === "paypal" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  PayPal
                </button>
              </div>

              <div className="mt-8">
                <div className="text-sm font-medium text-slate-500">Choisissez un montant</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${selectedAmount === amount ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-800"}`}
                    >
                      <div className="text-lg font-semibold">{amount} €</div>
                      <div className="text-sm opacity-80">Don solidaire</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Mode de paiement sélectionné</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">{activeTab === "stripe" ? "Stripe" : "PayPal"}</div>
                <div className="mt-4 text-sm leading-7 text-slate-600">
                  Ici, vous pourrez connecter un vrai bouton de paiement ou un formulaire sécurisé au moment du déploiement du site.
                </div>
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400">
                <Gift className="h-4 w-4" />
                Donner {selectedAmount} €
              </button>
            </div>
          </div>
        </section>

        <section id="actualites" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Actualités / blog</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Publier vos actions pour inspirer confiance.</h2>
              </div>
              <div className="text-sm text-slate-500">Une association qui raconte ses actions rassure donateurs et partenaires.</div>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {news.map((item) => (
                <article key={item.title} className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <Newspaper className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.excerpt}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partenaires" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Partenaires</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                La crédibilité d'une association grandit aussi par les alliances qu'elle construit.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cette page permet de valoriser vos soutiens institutionnels, vos mécènes, vos relais médias, vos structures de santé et vos partenaires opérationnels.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                Proposer un partenariat
                <Handshake className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="rounded-2xl border border-slate-200 bg-white px-5 py-8 text-center text-sm font-medium text-slate-700 shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rapports" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Rapports & transparence</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                La confiance se construit avec des preuves, des chiffres et de la clarté.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reports.map((report) => (
                <div key={report.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{report.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{report.description}</p>
                  <button className="mt-6 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                    Télécharger le rapport
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="galerie" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Galerie photos terrain</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Montrer le terrain rend la mission tangible.</h2>
            </div>
            <div className="text-sm text-slate-500">Vous pourrez remplacer ces blocs par de vraies photos lors de la mise en ligne.</div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item, index) => (
              <div key={item} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-emerald-100 via-slate-100 to-slate-200 text-slate-500">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <Camera className="h-10 w-10" />
                    <div className="text-sm font-medium">Photo terrain {index + 1}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold">{item}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Emplacement prêt à accueillir une photo authentique avec légende et contexte.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="monde" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Carte des actions dans le monde</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Une présence lisible pour montrer où et comment vous agissez.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Cette section simule une carte d'intervention internationale. Elle pourra ensuite être reliée à une vraie carte interactive ou à des fiches pays.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center gap-3 text-emerald-200">
                  <Globe className="h-6 w-6" />
                  <span className="text-sm font-medium uppercase tracking-[0.2em]">Zones d'action</span>
                </div>
                <div className="mt-8 space-y-4">
                  {worldZones.map((zone) => (
                    <div key={zone.region} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xl font-semibold text-white">{zone.region}</div>
                        <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                          {zone.status}
                        </div>
                      </div>
                      <p className="mt-3 leading-7 text-slate-300">{zone.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benevolat" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Formulaire de bénévolat</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Rejoindre l'association, ce n'est pas seulement donner. C'est aussi s'engager.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cette section permet de capter des profils utiles : bénévoles, experts, traducteurs, communicants, juristes, relais terrain ou partenaires ponctuels.
              </p>
            </div>

            <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                  <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Votre email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Compétence principale</label>
                  <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Communication, santé, juridique, logistique..." />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                  <textarea className="min-h-[140px] w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Expliquez comment vous souhaitez aider" />
                </div>
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                  <Users className="h-4 w-4" />
                  Envoyer ma candidature bénévole
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="impact" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Impact attendu</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Ce que votre soutien permet de rendre possible.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                  <div className="mt-2 text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Contact</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Parlons d'un don, d'un partenariat ou d'une mission bénévole.
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Mail className="h-5 w-5 text-emerald-300" />
                  <div className="mt-3 text-sm text-slate-300">Email</div>
                  <div className="mt-1 text-sm font-medium text-white">contact@mpp-association.org</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <MapPin className="h-5 w-5 text-emerald-300" />
                  <div className="mt-3 text-sm text-slate-300">Localisation</div>
                  <div className="mt-1 text-sm font-medium text-white">Lyon, France</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Phone className="h-5 w-5 text-emerald-300" />
                  <div className="mt-3 text-sm text-slate-300">Téléphone</div>
                  <div className="mt-1 text-sm font-medium text-white">+33 XX XX XX XX</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div>© {new Date().getFullYear()} Main Pour la Paix — Association loi 1901</div>
          <div className="flex flex-wrap gap-5">
            <a href="#don" className="hover:text-slate-900">Faire un don</a>
            <a href="#rapports" className="hover:text-slate-900">Rapports</a>
            <a href="#partenaires" className="hover:text-slate-900">Partenaires</a>
            <a href="#benevolat" className="hover:text-slate-900">Bénévolat</a>
          </div>
        </div>
      </footer>
    </div>
  );
}