<script lang="ts">
    import GithubFetch from "$lib/data/API/Github";
    import { onMount } from "svelte";
    import type { IRepo } from "$lib/util/global.interface";
    import GithubCard from "../atoms/v1/GithubCard.svelte";
    import GeneralPage from "../atoms/v1/GeneralPage.svelte";
    import PrototypeCard from "../atoms/v1/PrototypeCard.svelte";
    import InternalWebsiteLinks from "$lib/data/StaticInformation/InternalWebsiteLinks";

    let repos: IRepo[];
    onMount(async () => {
        repos = await GithubFetch();
        console.log(repos)
    })

</script>   

<div class="h-auto overflow-x-hidden flex flex-row pt-8 lg:pt-0">
    <GeneralPage />
</div>
<div class="w-full grid grid-cols-1 pb-96">
    <div class="w-full">
        <h1 class="text-4xl font-bold text-center">Github Projects</h1>
        <!-- Get the github data using the api -->
        <div class="grid gap-5 mt-5 lg:grid-cols-2 pt-6 lg:px-24 px-4">
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
    <div class="pt-32">
        <h1 class="text-4xl font-bold text-center">More pages</h1>
        <div class="grid gap-5 mt-5 lg:grid-cols-2 pt-6 lg:px-24 px-4">
            
            <div 
            aria-hidden="true"
            on:click={()=>{window.open("prototypes", "_self")} }
            class="bg-base-200 p-4 cursor-pointer rounded-lg boxHover">
                <p class="text-2xl lg:text-4xl gradienttext font-bold">Prototypes</p>
                <p class="">This is where you can find some small prototypes</p>
            </div>


            <!-- <div 
            aria-hidden="true"
            on:click={()=>{window.open("information", "_self")} }
            class="bg-base-200 p-4 cursor-pointer rounded-lg boxHover">
                <p class="text-2xl lg:text-4xl gradienttext font-bold">Information</p>
                <p class="">Want more information about a project of mine, read this</p>
            </div> -->
        </div>
    </div>
</div>