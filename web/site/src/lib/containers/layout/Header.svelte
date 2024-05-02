<script>
import { route } from "$lib/ROUTES";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "$lib/components/ui/popover/index";
import { Button } from "$lib/components/ui/button/index";
import {
    IconMenu2,
    IconServerCog,
    IconUser,
    IconUserCog,
    IconUsers,
    IconPuzzle, IconHome
} from "@tabler/icons-svelte";
import * as m from "$paraglide/messages";
import { BRAND } from "$lib/config/brand";
import { Separator } from "$lib/components/ui/separator/index";
import HeaderMenuButton from "$lib/components/base/MenuButton.svelte";
import { page } from '$app/stores';
import {i18n} from "$lib/config/i18n";
import { availableLanguageTags, languageTag } from "$paraglide/runtime.js";

$: currentRoute = i18n.route($page.url.pathname);
</script>

<header
        class="bg-background/50 sticky left-0 right-0 top-0 flex h-20 z-30 items-center justify-between p-4 shadow-lg backdrop-blur-3xl backdrop-saturate-200"
        style:view-transition-name="header"
>
    <a href={route('/')}>
        <enhanced:img alt={BRAND.name} src="$assets/logo.png?w=162" class="max-sm:w-[130px]" style:view-transition-name="header-img"/>
    </a>

    <div class="flex gap-8 font-medium max-sm:hidden">
        <a href={route('/')}> {m.home()} </a>
        <a href={route('/escapes')}> Escape Games </a>
        <a href={route('/teambuilding')}> Teambuilding </a>
    </div>

    <Popover>
        <PopoverTrigger asChild let:builder>
            <Button
                    builders={[builder]}
                    class="hover:bg-primary h-[3.25rem] rounded-full px-1.5"
                    variant="outline"
            >
                <span class="sr-only">{m.menu()}</span>
                <div class="p-2">
                    <IconMenu2 stroke="1.5"/>
                </div>
                <div class="bg-card rounded-full p-2">
                    <IconUser stroke="1.5"/>
                </div>
            </Button>
        </PopoverTrigger>
        <PopoverContent align="end" class="mt-2 w-80">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <div class="flex flex-col gap-2 sm:hidden">
                        <HeaderMenuButton
                                href={route('/')}
                                startsWith={true}
                                icon={IconHome}
                        >
                            {m.home()}
                        </HeaderMenuButton>
                        <HeaderMenuButton
                                href={route('/escapes')}
                                startsWith={true}
                                icon={IconPuzzle}
                        >
                            Escapes Games
                        </HeaderMenuButton>
                        <HeaderMenuButton
                                href={route('/teambuilding')}
                                startsWith={true}
                                icon={IconUsers}
                        >
                            Teambuilding
                        </HeaderMenuButton>
                        <Separator/>
                    </div>
                    <div class="flex gap-4">
                        {#each availableLanguageTags as lang}
                            <!-- the hreflang attribute decides which language the link points to -->
                            <a
                                    href={i18n.route($page.url.pathname)}
                                    hreflang={lang}
                                    aria-current={lang === languageTag() ? "page" : undefined}
                                    class="w-full h-10 bg-muted/25 rounded transition flex justify-center items-center hover:bg-muted"
                            >
                                {lang.toUpperCase()}
                            </a>
                        {/each}
                    </div>
                    <HeaderMenuButton
                            href={route('/profile')}
                            icon={IconUserCog}
                            startsWith={true}
                    >
                        {m.profile()}
                    </HeaderMenuButton>
                    <HeaderMenuButton
                            href={route('/admin')}
                            icon={IconServerCog}
                            startsWith={true}
                    >
                        {m.admin()}
                    </HeaderMenuButton>
                    {#if
                        currentRoute === route("/admin/users") ||
                        currentRoute === route("/admin/escapes/create") ||
                        currentRoute === route("/admin/escapes")
                    }
                        <Separator/>
                        <HeaderMenuButton
                                href={route('/admin/users')}
                                icon={IconUsers}
                                startsWith={false}
                        >
                            {m.page_aside_users_title()}
                        </HeaderMenuButton>
                        <HeaderMenuButton
                                href={route('/admin/escapes')}
                                icon={IconPuzzle}
                                startsWith={true}
                        >
                            {m.page_aside_escapes_title()}
                        </HeaderMenuButton>
                    {/if}
                </div>
                <Separator/>
                <Button href={route('/auth/login')}>Sign In</Button>
            </div>
        </PopoverContent>
    </Popover>
</header>
