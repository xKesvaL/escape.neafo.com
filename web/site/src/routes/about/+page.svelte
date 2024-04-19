<script lang="ts">
    import AdventurerCard from "$lib/components/about/AdventurerCard.svelte"
    import type {AboutUsProfile} from "$lib/utils/types";
    import AdventurerThilo from "$lib/components/about/AdventurerThilo.svelte";
    import AdventurerMelina from "$lib/components/about/AdventurerMelina.svelte";
    import AdventurerMiriam from "$lib/components/about/AdventurerMiriam.svelte";
    import AdventurerJasmin from "$lib/components/about/AdventurerJasmin.svelte";
    import AdventurerSasha from "$lib/components/about/AdventurerSasha.svelte";
    import AdventurerAlessandro from "$lib/components/about/AdventurerAlessandro.svelte";
    import AdventurerSarah from "$lib/components/about/AdventurerSarah.svelte";
    import AdventurerSilvia from "$lib/components/about/AdventurerSilvia.svelte";
    import LineLeft from "$lib/components/about/LineLeft.svelte"
    import LineRight from "$lib/components/about/LineRight.svelte"
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { IconArrowNarrowDown } from "@tabler/icons-svelte";

    let profiles = [
        {
            name: "Thilo",
            role: "Le fabricant de clés",
            image: AdventurerThilo,
            job: "Chef de développement",
            occupation: "<span>UX/UI</span> Development"
        },
        {
            name: "Melina",
            role: "Game-Boss",
            image: AdventurerMelina,
            job: "Head of Escape",
            occupation: "Event-Entwicklung"
        },
        {
            name: "Miriam",
            role: "Werbe-ninja",
            image: AdventurerMiriam,
            job: "Head of Marketing",
            occupation: "Marketing"
        },
        {
            name: "Jasmin",
            role: "Organisation Genius",
            image: AdventurerJasmin,
            job: "Buchhaltung & Management",
            occupation: ""
        },
        {
            name: "Sasha",
            role: "Design-Prinzessin",
            image: AdventurerSasha,
            job: "Head of Design",
            occupation: "Druckspezialistin | Grafikdesign"
        },
        {
            name: "Alessandro",
            role: "Bewegtbild Allrounder",
            image: AdventurerAlessandro,
            job: "Head of Moving Image",
            occupation: ""
        },
        {
            name: "Sarah",
            role: "Design- und Achtsamkeitsfee",
            image: AdventurerSarah,
            job: "Head of We Balance & Creativity",
            occupation: ""
        },
        {
            name: "Silvia",
            role: "Materialabenteurerin",
            image: AdventurerSilvia,
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
    <div class="flex flex-row justify-center">
        <div class="flex flex-col gap-1">
            <div class="gap-2 flex flex-col">
                <h1 class="text-3xl font-bold">September 2020</h1>
                <LineLeft/>
            </div>
            <div>
                <div class="flex flex-row gap-2">
                    <Popover.Root>
                        <Popover.Trigger asChild let:builder>
                            <Button builders={[builder]} variant="outline" class="p-2"><IconArrowNarrowDown/></Button>
                        </Popover.Trigger>
                        <Popover.Content class="w-80" align="start" side="bottom">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">The idea is born: After receiving a request to plan a scavenger hunt for his nephew,
                                    Thilo Konstanzer decided to create not just a scavenger hunt, but rather an adventure for groups of children,
                                    2 - 3 hours of puzzle fun with a big treasure as a reward at the end!
                                </p>
                                <p class="text-sm">
                                    But during the planning phase, the Escape Room fan had another idea.
                                    Why only for children? Adults have just as much fun with puzzles.
                                </p>
                                <p class="text-sm">A children's adventure and an adult adventure at the Kaiserstuhl were to be created. </p>
                            </div>
                        </Popover.Content>
                    </Popover.Root>
                    <p class="text-2xl font-bold">The journey began.</p>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <div class="gap-2 flex flex-col">
                    <h1 class="text-3xl font-bold">January 2021</h1>
                    <LineLeft/>
                    <p class="text-2xl">Adventure development.</p>
                    <div class="grid grid-cols-2 gap-2">

                    </div>
                </div>
            </div>
        </div>
        <div class="w-[3px] h-100 bg-primary"></div>
        <div class="flex flex-col gap-20">
            <div class="gap-2 flex flex-col w-full mt-20">
                <h1 class="text-3xl font-bold text-end">December 2020</h1>
                <LineRight/>
                <div class="gap-1 flex flex-col text-end items-end">
                    <p class="text-2xl">Kaiserstuhl Escape Creation</p>
                    <enhanced:img src="$assets/about/logo.png?w=400" alt="Kaiserstuhl" />
                </div>
            </div>
        </div>
    </div>
</div>