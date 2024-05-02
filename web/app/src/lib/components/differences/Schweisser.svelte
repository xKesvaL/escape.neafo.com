<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatcher = createEventDispatcher();

    let found = [false, false, false];

    const onClickDifference = (index: number) => {
        found[index] = true;
        dispatcher("found", { found });
    }
</script>

<div class="relative flex-1 w-full">
    <enhanced:img src="$assets/differences/schweisser.png" class="w-full h-full" />
    <button class="{found[0] ? 'border-2 border-primary' : ''} transition h-[18%] w-[7%] absolute top-[35%] left-[12%] rounded-full" on:click={() => onClickDifference(0)}></button>
    <button class="{found[1] ? 'border-2 border-primary' : ''} transition h-[10%] w-[15%] absolute top-[36%] left-[30%] rounded-full" on:click={() => onClickDifference(1)}></button>
    <button class="{found[2] ? 'border-2 border-primary' : ''} transition h-[10%] w-[15%] absolute top-[87%] left-[15%] rounded-full" on:click={() => onClickDifference(2)}></button>
</div>