<script>
import { route } from "$lib/ROUTES";
import MenuButton from "$lib/components/base/MenuButton.svelte";
import { IconPuzzle, IconUsers } from "@tabler/icons-svelte";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "$lib/components/ui/breadcrumb/index";
import { page } from "$app/stores";
import { getI18n } from "$lib/utils/functions";
import * as m from "$paraglide/messages";

const crumbs = ["home", ...$page.url.pathname.split("/").filter(Boolean)];
</script>

<!-- Height is 100dvh minus header -->
<aside class="px-4 py-5 top-20 bg-card fixed h-[calc(100dvh-5rem)] w-60 border-r flex flex-col gap-2 z-10 max-sm:hidden">
    <MenuButton
            href={route('/admin/users')}
            icon={IconUsers}
    >
        {m.page_aside_users_title()}
    </MenuButton>
    <MenuButton
            href={route('/admin/escapes/create')}
            icon={IconPuzzle}
    >
        {m.page_aside_escapes_title()}
    </MenuButton>
</aside>

<div class="lg:pl-60">
    <Breadcrumb class="px-4 pt-8 container">
        <BreadcrumbList>
            {#each crumbs as crumb, i}
                <BreadcrumbItem>
                    <BreadcrumbLink href={'/' + crumbs.slice(1, i + 1).join('/')}>
                        {getI18n(`page_${crumb}_title`)}
                    </BreadcrumbLink>
                    {#if i < crumbs.length - 1}
                        <BreadcrumbSeparator/>
                    {/if}
                </BreadcrumbItem>
            {/each}
        </BreadcrumbList>
    </Breadcrumb>
    <slot/>
</div>