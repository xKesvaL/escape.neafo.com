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
} from "@tabler/icons-svelte";
import * as m from "$paraglide/messages";
import { BRAND } from "$lib/config/brand";
import { Separator } from "$lib/components/ui/separator/index";
import HeaderMenuButton from "$lib/components/base/MenuButton.svelte";
</script>

<header
        class="bg-background/50 sticky left-0 right-0 top-0 flex h-20 z-30 items-center justify-between p-4 shadow-lg backdrop-blur-3xl backdrop-saturate-200"
        style:view-transition-name="header"
>
    <a href={route('/')}>
        <enhanced:img alt={BRAND.name} src="$assets/logo.png?w=162" style:view-transition-name="header-img"/>
    </a>

    <div class="flex gap-8 font-medium">
        <a href={route('/')}> {m.home()} </a>
        <a href=""> Escape Games </a>
        <a href=""> Teambuilding </a>
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
                </div>
                <Separator/>
                <Button href={route('/auth/login')}>Sign In</Button>
            </div>
        </PopoverContent>
    </Popover>
</header>
