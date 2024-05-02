<script lang="ts">
    import {locationStore} from "$lib/stores/location";
    import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from '$lib/components/ui/drawer';
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '$lib/components/ui/dialog';
    import { Button } from '$lib/components/ui/button';
    import GameBar from "$lib/containers/GameBar.svelte";
    import {stats} from "$lib/stores/stats";
    import {IconArrowRight, IconHandLittleFinger} from "@tabler/icons-svelte";

    let isDrawerOpenDefault = !$locationStore.isTracking;
    let isFirstTime = $stats.firstTime;
</script>

<GameBar />

<div class="pt-16 h-[calc(100dvh)]">
    <slot />
</div>

<Dialog open={isFirstTime && $locationStore.isTracking}>
    <DialogContent>
        <DialogHeader class="flex flex-col gap-2">
            <DialogTitle class="flex gap-2 items-end">
                <IconHandLittleFinger  />
                Welcome!
            </DialogTitle>
            <p class="text-foreground/75 text-sm text-left">
               Welcome to the mulhouse escape game. Go to the locations indicated on the map to unlock the games. Try to get as many points as possible. Good luck!
            </p>
        </DialogHeader>
        <DialogFooter>
            <Button
                class="gap-2"
                on:click={() => {
                    stats.update({ firstTime: false });
                    isFirstTime = false;
                }}
            >
                Start the game
                <IconArrowRight />
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>

<Drawer open={isDrawerOpenDefault}>
    <DrawerContent class="sm:max-w-[425px]">
        <DrawerHeader>
            <DrawerTitle>Location permission</DrawerTitle>
            <DrawerDescription>
                Please enable location tracking to use the app.
            </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
            <DrawerClose asChild let:builder>
                <Button builders={[builder]} on:click={() => {
                    locationStore.trackLocation();
                }}>Enable Location</Button>
            </DrawerClose>
        </DrawerFooter>
    </DrawerContent>
</Drawer>

