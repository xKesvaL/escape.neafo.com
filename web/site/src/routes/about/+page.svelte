<script lang="ts">
    import AdventurerCard from "$lib/components/about/AdventurerCard.svelte"
    import type {AboutUsProfile} from "$lib/utils/types";
    import AdventurerTilo from "$lib/components/about/AdventurerTilo.svelte";

    let profiles = [
        {
            name: "Thilo",
            role: "Le fabricant de clés",
            image: AdventurerTilo,
            job: "Chef de développement",
            occupation: "<span>UX/UI</span> Development"
        },
        {
            name: "Melina",
            role: "Game-Boss",
            image: AdventurerTilo,
            job: "Head of Escape",
            occupation: "Event-Entwicklung"
        },
        {
            name: "Miriam",
            role: "Werbe-ninja",
            image: AdventurerTilo,
            job: "Head of Marketing",
            occupation: "Marketing"
        },
        {
            name: "Jasmin",
            role: "Organisation Genius",
            image: AdventurerTilo,
            job: "Buchhaltung & Management",
            occupation: ""
        },
        {
            name: "Sasha",
            role: "Design-Prinzessin",
            image: AdventurerTilo,
            job: "Head of Design",
            occupation: "Druckspezialistin | Grafikdesign"
        },
        {
            name: "Alessandro",
            role: "Bewegtbild Allrounder",
            image: AdventurerTilo,
            job: "Head of Moving Image",
            occupation: ""
        },
        {
            name: "Sarah",
            role: "Design- und Achtsamkeitsfee",
            image: AdventurerTilo,
            job: "Head of We Balance & Creativity",
            occupation: ""
        },
        {
            name: "Silvia",
            role: "Materialabenteurerin",
            image: AdventurerTilo,
            job: "Head of Products",
            occupation: ""
        }
    ] satisfies Array<AboutUsProfile>
</script>

<div class="container flex flex-col gap-24 py-12">
     <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold">Our <span class="text-primary">Team</span></h1>
        <enhanced:img src="$assets/about/about-hero.png?w=1200,380" class="rounded-xl " />
     </div>
    <div class="flex flex-col gap-4 ">
        <h1 class="text-4xl font-bold">Explorers & <span class="text-primary">Adventurers</span></h1>
        <div class="grid grid-cols-4 gap-10">
            {#each profiles as profile}
                <AdventurerCard {profile}/>
            {/each}
        </div>
    </div>
</div>