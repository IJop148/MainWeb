<script lang="ts">
    import GithubFetch from "$lib/data/API/Github";
    import { onMount } from "svelte";
    import type { IRepo } from "$lib/util/global.interface";
    import GithubCard from "../atoms/v1/GithubCard.svelte";
  import GeneralPage from "../atoms/v1/GeneralPage.svelte";

    let repos: IRepo[];
    onMount(async () => {
        repos = await GithubFetch();
        console.log(repos)
    })

</script>
<div class="h-auto overflow-x-hidden flex flex-row">
    <GeneralPage />
</div>
<div class="w-full grid grid-cols-1 pb-96">
    <div class="w-full h-16">
        <h1 class="text-4xl font-bold text-center">Github Projects</h1>
        <!-- Get the github data using the api -->
        <div class="grid gap-5 mt-5 lg:grid-cols-2 pt-6 px-24">
            {#if repos}
                {#each repos as repo}
                    <GithubCard Repo={repo} />
                {/each}
            {:else}
                {#each Array(2) as _, i}
                    <div class="rounded-lg bg-base-200 border-base-300 h-52 animate-pulse" />
                {/each}
            {/if}
        </div>
    </div>
</div>