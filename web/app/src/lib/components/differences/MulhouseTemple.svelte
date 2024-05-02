<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatcher = createEventDispatcher();

    let found = [false, false, false, false];

    const onClickDifference = (index: number) => {
        found[index] = true;
        dispatcher("found", { found });
    }
</script>

<div class="relative flex-1 w-full">
    <enhanced:img src="$assets/differences/temple.png" class="w-full h-full" />
    <button class="{found[0] ? 'border-2 border-primary' : ''} transition h-[15%] w-[5%] absolute top-[35%] left-[22%] rounded-full" on:click={() => onClickDifference(0)}></button>
    <button class="{found[1] ? 'border-2 border-primary' : ''} transition h-[5%] w-[10%] absolute top-[42%] left-[30%] rounded-full" on:click={() => onClickDifference(1)}></button>
    <button class="{found[2] ? 'border-2 border-primary' : ''} transition h-[3%] w-[5%] absolute top-[48%] left-[65%] rounded-full" on:click={() => onClickDifference(2)}></button>
    <button class="{found[3] ? 'border-2 border-primary' : ''} transition h-[25%] w-[12%] absolute top-[40%] left-[79%] rounded-full" on:click={() => onClickDifference(3)}></button>
</div>