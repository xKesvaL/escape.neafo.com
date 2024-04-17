<script lang="ts">
    import LegalContainer from "$lib/containers/legal/LegalContainer.svelte";
    import type { LegalProps } from '$lib/utils/types';

    
    const policy = [
        {
            title: "Conditions d’utilisation",
            description: "Le site accessible par les url suivants : sp-hess.fr (url provisoire) est exploité dans le respect de la législation française. L'utilisation de ce site est régie par les présentes conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées."
        },
        {
            title: "Collecte et traitement des données personnelles",
            description: "SP-HESS s'engage à respecter la confidentialité des données personnelles collectées (mots de passe, adresses, adresses emails, numéros de téléphone, noms, prénoms, adresses IP). Ces informations sont recueillies dans le but de fournir les services proposés par le site et ne seront pas cédées à des tiers sans votre consentement. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à contact@sp-hess.fr."
        },
        {
            title: "Propriété intellectuelle",
            description: "Tous les contenus présents sur le site de SP-HESS, incluant, sans s'y limiter, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. La reproduction, la modification, la distribution ou toute autre utilisation du contenu du site, autre que pour un usage personnel et non commercial, est strictement interdite sans l'autorisation écrite préalable de SP-HESS."
        },
     
        {
            title: "Liens hypertextes",
            description: "Les sites internet de SP-HESS peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. SP-HESS ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet. SP-HESS ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes."
        },

      
     
        ] satisfies Array<LegalProps> 
</script>

<div>
    <LegalContainer conditions={policy} title="Privacy Policy" update="Last update 27/03/2024"/>
</div>