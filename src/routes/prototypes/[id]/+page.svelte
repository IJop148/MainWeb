<script lang="ts">
    import { page } from "$app/stores";

    import Blocktesting from "$lib/Templates/SubPages/prototypes/blocktesting.svelte";

    $: id = $page.params.id.toLowerCase();

</script>

{#if id == "blocktesting"}
    <Blocktesting />
{:else}
    <script lang="ts">
        window.location.href = "/prototypes";
        
    </script>
{/if}

