<script lang="ts">
import { BRAND } from "$lib/config/brand";
import * as m from "$paraglide/messages";
</script>

<footer class="bg-background/50 p-8 shadow backdrop-blur-3xl backdrop-saturate-200 border-t border-primary">
  <div class="container grid">
    <div class="grid md:grid-cols-2 lg:grid-cols-4">
      <enhanced:img src="$assets/logo.png?w=162" alt={BRAND.name} style:view-transition-name="footer-img" />
    </div>
    <div class="flex justify-between items-center text-muted-foreground" style:view-transition-name="footer">
      
      <p>{m.footer_designed()}</p>
      <p>{m.footer_rights()}</p>
    </div>
  </div>
</footer>