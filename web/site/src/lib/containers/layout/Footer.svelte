<script lang="ts">
import { BRAND } from "$lib/config/brand";
import * as m from "$paraglide/messages";
import {route} from "$lib/ROUTES";
</script>

<footer class="bg-background/50 p-8 shadow backdrop-blur-3xl backdrop-saturate-200 border-t border-primary">
  <div class="container grid gap-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 max-sm:gap-6">
      <enhanced:img src="$assets/logo.png?w=162" alt={BRAND.name} style:view-transition-name="footer-img" />
      <div class="flex flex-col gap-2">
        <h2 class="text-muted-foreground font-bold text-xl">{m.footer_more()}</h2>
        <div class="flex flex-col gap-1">
          <a href={route("/about")}>{m.footer_about()}</a>
          <a href={route("/contact")}>{m.footer_contact()}</a>
          <a href={route("/privacy-policy")}>{m.footer_privacy()}</a>
          <a href={route("/terms-and-conditions")}>{m.footer_terms()}</a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-muted-foreground font-bold text-xl">{m.footer_info()}</h2>
        <div class="flex flex-col gap-1">
          <a href={route("/jobs")}>{m.footer_jobs()}</a>
          <a href={route("/faq")}>{m.footer_faq()}</a>
          <a href={route("/escapes")}>{m.footer_escapes()}</a>
          <a href={route("/teambuilding")}>{m.footer_teambuilding()}</a>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center text-muted-foreground max-sm:flex-col max-sm:items-start max-sm:gap-2" style:view-transition-name="footer">
      
      <p>{m.footer_designed()}</p>
      <p>{m.footer_rights()}</p>
    </div>
  </div>
</footer>