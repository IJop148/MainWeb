<script lang="ts">
    import PersonalInformation from "$lib/data/StaticInformation/PersonalInformation";
    import FormalPage from "$lib/Templates/home/FormalPage.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let pageTypes: string = "formal"
    if($page.url.searchParams.has("type") && $page.url.searchParams.get("type") === "casual"){
        pageTypes = "casual"
    }

    export const pageType: string = pageTypes
</script>


<svelte:head>
    <title>Jop's CodingBar</title>
</svelte:head>
<div class="overflow-x-hidden">
    {#if pageType === 'formal'}
        <FormalPage />
    {/if}
</div>

