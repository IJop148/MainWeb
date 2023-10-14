<script lang="ts">
    import type { IInternalWebsiteLinks } from "$lib/util/global.interface";
    import InternalWebsiteLinks from "$lib/data/StaticInformation/InternalWebsiteLinks";
    export let item: IInternalWebsiteLinks["Prototypes"];

    let link:string = "_self";
    if(item.urlBlank == true){
        link = "_blank";
    }
    let Dev:string;
    if(item.inDevelopment === 1){
        Dev = "Currently in development";
    }else if(item.inDevelopment === 2){
        Dev = "Currently on improvement board";
    }else{
        Dev = "Not in development";
    }
</script>

<div
    aria-hidden="true"
    on:click={()=>{window.open(item.url, link)}} 
    class="rounded-2xl cursor-pointer p-4 bg-base-200 boxHover"
>
    <h1 class="text-3xl text-primary pb-3 font-extrabold">{item.display}</h1>
    <p class="text-xl">{item.description}</p>
    <p class="text-xs text-accent inline-block">Status: {Dev}</p>
    {#if item.github}
    <p aria-hidden="true" on:click={()=>{window.open(item.github, "_blank")}} class="text-accent text-xs float-right inline-block">Source code on github</p>
    {/if}

</div>