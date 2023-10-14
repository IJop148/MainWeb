<script>
    import PrototypeCard from "$lib/Templates/atoms/v1/PrototypeCard.svelte";
    import InternalWebsiteLinks from "$lib/data/StaticInformation/InternalWebsiteLinks";
    
    let length = InternalWebsiteLinks.Prototypes.length;

</script>

<div class="h-auto w-full px-4 py-16 lg:px-8 text-center">
    <a class="text-xl py-8 text-accent cursor-pointer" href="/">&lt Home here &gt</a>
    <p class="text-6xl gradienttext py-8">Prototype</p>
    <div class="grid text-left gap-8 grid-cols-1 sm:grid-cols-{length == 0? 1: 2} lg:grid-cols-{length > 4? 4: length}">
    {#if length == 0}
    <div class="rounded-2xl cursor-pointer p-4 bg-base-200 m-16 duration-300 border-2 border-secondary border-opacity-0 hover:border-opacity-100 hover:-translate-y-2 hover:scale-105">
        <h1 class="text-3xl text-primary pb-3 text-center font-extrabold">Nothing is here yet</h1>
        
        
    </div>
    {/if}
        {#each InternalWebsiteLinks.Prototypes as item}
            <PrototypeCard item={item} />
        {/each}
    </div>
</div>