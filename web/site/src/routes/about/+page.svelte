<script lang="ts">
    import AdventurerCard from "$lib/components/about/adventurer/AdventurerCard.svelte"
    import type {AboutUsProfile, AboutUsEscape} from "$lib/utils/types";
    import AdventurerThilo from "$lib/components/about/adventurer/images/AdventurerThilo.svelte";
    import AdventurerMelina from "$lib/components/about/adventurer/images/AdventurerMelina.svelte";
    import AdventurerMiriam from "$lib/components/about/adventurer/images/AdventurerMiriam.svelte";
    import AdventurerJasmin from "$lib/components/about/adventurer/images/AdventurerJasmin.svelte";
    import AdventurerSasha from "$lib/components/about/adventurer/images/AdventurerSasha.svelte";
    import AdventurerAlessandro from "$lib/components/about/adventurer/images/AdventurerAlessandro.svelte";
    import AdventurerSarah from "$lib/components/about/adventurer/images/AdventurerSarah.svelte";
    import AdventurerSilvia from "$lib/components/about/adventurer/images/AdventurerSilvia.svelte";
    import LineLeft from "$lib/components/about/LineLeft.svelte";
    import LineRight from "$lib/components/about/LineRight.svelte";
    import Line from "$lib/components/about/Line.svelte";
    import EscapeCardAbout from "$lib/components/about/escape/EscapeCardAbout.svelte";
    import EscapeCardAboutLang from "$lib/components/about/escape/EscapeCardAboutLang.svelte";
    import EscapeInVino from "$lib/components/about/escape/images/EscapeInVino.svelte";
    import EscapeFluchDer9 from "$lib/components/about/escape/images/EscapeFluchDer9.svelte";
    import EscapeBuchDerSiegel from "$lib/components/about/escape/images/EscapeBuchDerSiegel.svelte";
    import EscapeInCantata from "$lib/components/about/escape/images/EscapeInCantata.svelte";
    import EscapeCodex from "$lib/components/about/escape/images/EscapeCodex.svelte";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import * as m from "$paraglide/messages"
    import { Button } from "$lib/components/ui/button/index.js";
    import { IconArrowNarrowDown, IconPlus, IconUser } from "@tabler/icons-svelte";

    let profiles = [
        {
            name: "Thilo",
            role: m.about_profile_thilo_role(),
            image: AdventurerThilo,
            job: m.about_profile_thilo_job(),
            occupation: m.about_profile_thilo_occupation()
        },
        {
            name: "Melina",
            role: m.about_profile_melina_role(),
            image: AdventurerMelina,
            job: m.about_profile_melina_job(),
            occupation: m.about_profile_melina_occupation()
        },
        {
            name: "Miriam",
            role: m.about_profile_miriam_role(),
            image: AdventurerMiriam,
            job: m.about_profile_miriam_job(),
            occupation: m.about_profile_miriam_occupation()
        },
        {
            name: "Jasmin",
            role:  m.about_profile_jasmin_role(),
            image: AdventurerJasmin,
            job: m.about_profile_jasmin_job(),
            occupation: ""
        },
        {
            name: "Sasha",
            role: m.about_profile_sasha_role(),
            image: AdventurerSasha,
            job: m.about_profile_sasha_job(),
            occupation: m.about_profile_sasha_occupation()
        },
        {
            name: "Alessandro",
            role: m.about_profile_alessandro_role(),
            image: AdventurerAlessandro,
            job: m.about_profile_alessandro_job(),
            occupation: ""
        },
        {
            name: "Sarah",
            role: m.about_profile_sarah_role(),
            image: AdventurerSarah,
            job: m.about_profile_sarah_job(),
            occupation: ""
        },
        {
            name: "Silvia",
            role: m.about_profile_silvia_role(),
            image: AdventurerSilvia,
            job: m.about_profile_silvia_role(),
            occupation: ""
        }
    ] satisfies Array<AboutUsProfile>
    let escapes = [
        {
            image: EscapeInVino,
            date: m.about_escapes_vino_date()
        },
        {
            image: EscapeFluchDer9,
            date: m.about_escapes_fluch_date()
        },
        {
            image: EscapeBuchDerSiegel,
            date: m.about_escapes_buch_date()
        }
    ] satisfies Array<AboutUsEscape>

    let escapesLang = [
        {
            image: EscapeInVino,
            date: m.about_escapes_vino_date()
        },
        {
            image: EscapeFluchDer9,
            date: m.about_escapes_fluch_date()
        },
        {
            image: EscapeInCantata,
            date: m.about_escapes_lang_incantata_date()
        }
    ] satisfies Array<AboutUsEscape>

    let escapeInCantata = {
        image: EscapeInCantata,
        date: m.about_escapes_incantata_date()
    } satisfies AboutUsEscape

    let escapeCodex = {
        image: EscapeCodex,
        date: m.about_escapes_codex_date()
    } satisfies AboutUsEscape

</script>

<div class="container flex flex-col gap-24 py-12">
     <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold">{@html m.about_title()}</h1>
        <enhanced:img src="$assets/about/about-hero.png?w=1200,380" class="rounded-xl" alt="hero" />
     </div>
    <div class="flex flex-col gap-4 ">
        <h1 class="text-4xl font-bold">{@html m.about_adventurers_title()}</h1>
        <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {#each profiles as profile}
                <AdventurerCard {profile}/>
            {/each}
        </div>
    </div>
    <div class="grid grid-cols-[1fr,3px,1fr] justify-center max-sm:hidden">
        <div class="flex flex-col gap-20">
            <div class="gap-2 flex flex-col">
                <h1 class="text-3xl font-bold">{m.about_tree_september_2020_title()}</h1>
                <LineLeft/>
                <div class="flex flex-row gap-4 items-center">
                    <Popover.Root>
                        <Popover.Trigger asChild let:builder>
                            <Button builders={[builder]} variant="outline" class="p-2"><IconArrowNarrowDown/></Button>
                        </Popover.Trigger>
                        <Popover.Content class="w-96" align="start" side="bottom">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_0()}</p>
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_1()}</p>
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_2()}</p>
                            </div>
                        </Popover.Content>
                    </Popover.Root>
                    <p class="text-2xl font-bold">{m.about_tree_september_2020_popover_title()}</p>
                </div>
            </div>
            <div class="flex flex-col gap-2 mt-20">
                <h1 class="text-3xl font-bold">{m.about_tree_january_2021_title()}</h1>
                <LineLeft/>
                <p class="text-2xl">{m.about_tree_january_2021_text()}</p>
                <div class="grid grid-cols-2 gap-2 pr-8">
                    {#each escapes as escape}
                        <EscapeCardAbout {escape}/>
                    {/each}
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_december_2021_title()}</h1>
                <LineLeft/>
                <div class="flex flex-row gap-2 items-center">
                    <IconPlus class="text-primary flex-shrink-0" stroke="1.5"/>
                    <p class="text-2xl">{m.about_tree_december_2021_text()}</p>
                </div>
                <enhanced:img class="rounded-t-xl" src="$assets/about/job.png?w=400" alt="Job image" />
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_april_2022_title()}</h1>
                <LineLeft/>
                <p class="text-2xl">{m.about_tree_april_2022_text()}</p>
                <div class="pr-8">
                    <EscapeCardAbout escape={escapeInCantata}/>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_june_2022_title()}</h1>
                <LineLeft/>
                <div class="flex flex-row gap-2 items-center">
                    <IconPlus class="text-primary flex-shrink-0" stroke="1.5"/>
                    <p class="text-2xl">{m.about_tree_june_2022_text()}</p>
                </div>
                <enhanced:img class="rounded-t-xl" src="$assets/about/rhein-escape.png?w=400" alt="Rhein escape" />
            </div>
            <div class="flex flex-col gap-2 mt-40">
                <h1 class="text-3xl font-bold">{m.about_tree_november_2022_title()}</h1>
                <LineLeft/>
                <p class="text-2xl">{m.about_tree_november_2022_text()}</p>
                <div class="pr-8">
                    <EscapeCardAbout escape={escapeCodex}/>
                </div>
            </div>
            <div class="flex flex-col gap-2 mt-40">
                <h1 class="text-3xl font-bold">{m.about_tree_november_2023_title()}</h1>
                <LineLeft/>
                <div class="flex flex-row gap-2 items-center">
                    <p class="text-6xl text-primary font-bold">100 000</p>
                    <IconUser stroke="1.5" size="50" class="flex-shrink-0 text-primary"/>
                </div>
                <p class="text-2xl">{m.about_tree_november_2023_text_0()}</p>
                <div class="flex flex-col bg-card py-6 gap-6 rounded-xl text-center w-80">
                    <p class="text-3xl text-primary font-bold">{m.about_tree_november_2023_text_1()}</p>
                    <p>{@html m.about_tree_november_2023_text_1()}</p>
                </div>
            </div>
        </div>
        <div class="w-[3px] h-100 bg-primary"></div>
        <div class="flex flex-col gap-40">
            <div class="gap-2 flex flex-col w-full mt-32">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_december_2020_title()}</h1>
                <LineRight/>
                <div class="gap-1 flex flex-col text-end items-end">
                    <p class="text-2xl">{m.about_tree_december_2020_text()}</p>
                    <enhanced:img src="$assets/about/logo.png?w=400" alt="Kaiserstuhl" />
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_october_2021_title()}</h1>
                <LineRight/>
                <div class="gap-1 flex flex-col text-end items-end">
                    <p class="text-2xl">{m.about_tree_october_2021_text()}</p>
                    <enhanced:img src="$assets/about/escape-gmbh.jpg?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_february_2022_title()}</h1>
                <LineRight/>
                <div class="gap-1 flex flex-col text-end items-end">
                    <p class="text-2xl">{m.about_tree_february_2022_text()}</p>
                    <enhanced:img src="$assets/about/local.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_may_2022_title()}</h1>
                <LineRight/>
                    <div class="gap-4 flex flex-col text-end items-end">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_may_2022_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_may_2022_text_1()}</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2">
                        <enhanced:img src="$assets/about/stuttgart.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                        <enhanced:img src="$assets/about/map.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                    </div>
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_august_2022_title()}</h1>
                <LineRight/>
                <div class="gap-4 flex flex-col text-end items-end">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_1()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_2()}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 justify-end pl-8">
                        {#each escapesLang as escape}
                            <EscapeCardAboutLang {escape}/>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full -mt-28">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_march_2023_title()}</h1>
                <LineRight/>
                <div class="gap-4 flex flex-col text-end items-end">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_march_2023_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_march_2023_text_1()}</p>
                        </div>
                    </div>
                    <enhanced:img src="$assets/about/team.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-end">{m.about_tree_april_2024_title()}</h1>
                <LineRight/>
                <div class="gap-1 flex flex-col text-end items-end">
                    <div class="flex flex-row gap-2 items-center">
                        <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                        <p class="text-xl">{m.about_tree_april_2024_text_0()}</p>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                        <p class="text-xl">{m.about_tree_april_2024_text_1()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-sm:visible sm:hidden grid grid-cols">
        <div class="flex flex-col gap-20">
            <div class="gap-2 flex flex-col">
                <h1 class="text-3xl font-bold">{m.about_tree_september_2020_title()}</h1>
                <Line/>
                <div class="flex flex-row gap-4 items-center">
                    <Popover.Root>
                        <Popover.Trigger asChild let:builder>
                            <Button builders={[builder]} variant="outline" class="p-2"><IconArrowNarrowDown/></Button>
                        </Popover.Trigger>
                        <Popover.Content class="w-96" align="start" side="bottom">
                            <div class="flex flex-col gap-4">
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_0()}</p>
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_1()}</p>
                                <p class="text-sm">{m.about_tree_september_2020_popover_text_2()}</p>
                            </div>
                        </Popover.Content>
                    </Popover.Root>
                    <p class="text-2xl font-bold">{m.about_tree_september_2020_popover_title()}</p>
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full mt-10">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_december_2020_title()}</h1>
                <Line/>
                <div class="gap-1 flex flex-col text-start items-start">
                    <p class="text-2xl">{m.about_tree_december_2020_text()}</p>
                    <enhanced:img src="$assets/about/logo.png?w=400" alt="Kaiserstuhl" />
                </div>
            </div>
            <div class="flex flex-col gap-2 mt-20">
                <h1 class="text-3xl font-bold">{m.about_tree_january_2021_title()}</h1>
                <Line/>
                <p class="text-2xl">{m.about_tree_january_2021_text()}</p>
                <div class="grid grid-cols-2 gap-2 pr-8">
                    {#each escapes as escape}
                        <EscapeCardAbout {escape}/>
                    {/each}
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_october_2021_title()}</h1>
                <Line/>
                <div class="gap-1 flex flex-col text-start items-start">
                    <p class="text-2xl">{m.about_tree_october_2021_text()}</p>
                    <enhanced:img src="$assets/about/escape-gmbh.jpg?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_december_2021_title()}</h1>
                <Line/>
                <div class="flex flex-row gap-2 items-center">
                    <IconPlus class="text-primary flex-shrink-0" stroke="1.5"/>
                    <p class="text-2xl">{m.about_tree_december_2021_text()}</p>
                </div>
                <enhanced:img class="rounded-t-xl" src="$assets/about/job.png?w=400" alt="Job image" />
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_february_2022_title()}</h1>
                <Line/>
                <div class="gap-1 flex flex-col text-start items-start">
                    <p class="text-2xl">{m.about_tree_february_2022_text()}</p>
                    <enhanced:img src="$assets/about/local.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_april_2022_title()}</h1>
                <Line/>
                <p class="text-2xl">{m.about_tree_april_2022_text()}</p>
                <div class="pr-8">
                    <EscapeCardAbout escape={escapeInCantata}/>
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_may_2022_title()}</h1>
                <Line/>
                <div class="gap-4 flex flex-col text-start items-start">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_may_2022_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_may_2022_text_1()}</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2">
                        <enhanced:img src="$assets/about/stuttgart.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                        <enhanced:img src="$assets/about/map.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_june_2022_title()}</h1>
                <Line/>
                <div class="flex flex-row gap-2 items-center">
                    <IconPlus class="text-primary flex-shrink-0" stroke="1.5"/>
                    <p class="text-2xl">{m.about_tree_june_2022_text()}</p>
                </div>
                <enhanced:img class="rounded-t-xl" src="$assets/about/rhein-escape.png?w=400" alt="Rhein escape" />
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_august_2022_title()}</h1>
                <Line/>
                <div class="gap-4 flex flex-col text-start items-start">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_1()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_august_2022_text_2()}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 justify-end">
                        {#each escapesLang as escape}
                            <EscapeCardAboutLang {escape}/>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_november_2022_title()}</h1>
                <Line/>
                <p class="text-2xl">{m.about_tree_november_2022_text()}</p>
                <div class="pr-8">
                    <EscapeCardAbout escape={escapeCodex}/>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_march_2023_title()}</h1>
                <Line/>
                <div class="gap-4 flex flex-col text-start items-start">
                    <div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_march_2023_text_0()}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                            <p class="text-xl">{m.about_tree_march_2023_text_1()}</p>
                        </div>
                    </div>
                    <enhanced:img src="$assets/about/team.png?w=400" alt="Kaiserstuhl" class="rounded-xl" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-3xl font-bold">{m.about_tree_november_2023_title()}</h1>
                <Line/>
                <div class="flex flex-row gap-2 items-center">
                    <p class="text-6xl text-primary font-bold">100 000</p>
                    <IconUser stroke="1.5" size="50" class="flex-shrink-0 text-primary"/>
                </div>
                <p class="text-2xl">{m.about_tree_november_2023_text_0()}</p>
                <div class="flex flex-col bg-card py-6 gap-6 rounded-xl text-center w-80">
                    <p class="text-3xl text-primary font-bold">{m.about_tree_november_2023_text_1()}</p>
                    <p>{@html m.about_tree_november_2023_text_1()}</p>
                </div>
            </div>
            <div class="gap-2 flex flex-col w-full">
                <h1 class="text-3xl font-bold text-start">{m.about_tree_april_2024_title()}</h1>
                <Line/>
                <div class="gap-1 flex flex-col text-start items-start">
                    <div class="flex flex-row gap-2 items-center">
                        <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                        <p class="text-xl">{m.about_tree_april_2024_text_0()}</p>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <IconPlus stroke="1.5" class="flex-shrink-0 text-primary"/>
                        <p class="text-xl">{m.about_tree_april_2024_text_1()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>