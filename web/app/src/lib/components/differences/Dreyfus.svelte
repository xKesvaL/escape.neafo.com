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
    <enhanced:img src="$assets/differences/dreyfus.png" class="w-full h-full" />
    <button class="{found[0] ? 'border-2 border-primary' : ''} transition h-[8%] w-[10%] absolute top-[54%] left-[40%] rounded-full" on:click={() => onClickDifference(0)}></button>
    <button class="{found[1] ? 'border-2 border-primary' : ''} transition h-[3%] w-[5%] absolute top-[44%] left-[38%] rounded-full" on:click={() => onClickDifference(1)}></button>
    <button class="{found[2] ? 'border-2 border-primary' : ''} transition h-[3%] w-[5%] absolute top-[35%] left-[39%] rounded-full" on:click={() => onClickDifference(2)}></button>
</div>