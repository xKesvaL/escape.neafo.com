<script lang="ts">
    import {IconMapPin} from "@tabler/icons-svelte";
    import Button from "$lib/components/ui/button/button.svelte"
    import {goto} from '$app/navigation';
    import type {Escape} from "@repo/schemas/zod";
    import {route} from "$lib/ROUTES";

    export let escape: Escape;

</script>

<div class="flex rounded-2xl relative flex-col p-6 gap-6 shrink-0 max-w-96 overflow-hidden bg-card/50">
    <img class="absolute w-[150%] h-[150%] blur-3xl opacity-50 -z-10" src="{escape.image.data}" alt="escape_image" style:view-transition-name="escape-img" />
    <div class="rounded-xl">
        <img class="w-full" src="{escape.image.data}" alt="escape_image" style:view-transition-name="escape-img" />
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-foreground text-2xl">{escape.name}</p>
        <div class="flex gap-1 text-muted-foreground flex-row items-center">
            <IconMapPin />
            <p class=" text-l">{escape.city}</p>
        </div>
    </div>
    <div class="flex gap-6 w-full">
        <Button href={`/admin/escapes/${escape.slug}/edit`} class="w-full">Edit</Button>
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild let:builder>
                <Button class="w-full" builders={[builder]} variant="destructive">Disable</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Header>
                    <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                    <AlertDialog.Description>
                        This action cannot be undone. This will permanently delete the escape game.
                    </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action on:click={() => goto(route("/admin/escapes/[slug]/delete", { slug: escape.slug }))}>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </div>
</div>
