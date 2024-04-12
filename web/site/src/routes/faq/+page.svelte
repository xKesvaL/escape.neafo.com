<script lang="ts">
import { Input } from "$lib/components/ui/input";
import { IconSearch } from "@tabler/icons-svelte";
import ComputerImage from "$lib/components/illustrations/ComputerImage.svelte"
import QuestionFaq from "$lib/components/faq/QuestionsFaq.svelte"
import type { FAQ } from "$lib/utils/types";

 const faqs = [
    { 
      question:"Can we bring our dog ?",
      answer:"No, fuck you."
     },
    { 
      question:"Can we bring our dog ?",
      answer:"No, fuck you."
     },
    { 
      question:"Can we bring our dog ?",
      answer:"No, fuck you."
     },
 ] satisfies Array<FAQ>
</script>

<section class="max-w-[1080px] mx-auto mb-20">
    <div class="hero py-12 flex flex-row items-center justify-between">
        <div class="left flex flex-col gap-4">
            <h1 class="text-5xl font-extrabold">How can we <span class="text-primary">help you</span>?</h1>
            <p class="text-xl  font-thin">Here you can find our FAQ page and find the answer you need.</p>
            <div class="flex flex-col items-end">
                <Input class="rounded-2xl" placeholder="What do you need ?"/>
                <IconSearch stroke="1.5" class="stroke-muted-foreground absolute translate-y-2 -translate-x-2 "/>
            </div>
        </div>

        <div>
            <ComputerImage/>
        </div>
    </div>

    <div class="flex gap-x-24 gap-y-14 self-stretch flex-wrap justify-center">
      <QuestionFaq faqs={faqs}/>
    </div>

</section>
