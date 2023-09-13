<script lang="ts">
    import data from "$lib/data/GeneralInfo"

    function discordArguments() {
        let args:string = "?"

        for (let I = 0; I < data.Discord.options.length; I++) {
            const element = data.Discord.options[I];
            args = args + "&" + element.replaceAll(" ", "%20")
        }

        return args
    }

    import { onMount } from 'svelte';
	import type { IRepo } from '$lib/util/global.interface';
    import languageInfo from "$lib/data/languageInfo";

	let repos: IRepo[];

	onMount(async () => {
		const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=IJop148');
		const data = await response.json();
		repos = data.map((x: IRepo) => {
			return {
				owner: x.owner,
				title: x.repo,
				description: x.description,
				link: x.link,
				image: x.image,
				website: x.website,
				language: x.language,
				languageColor: x.languageColor,
				stars: Number(x.stars),
				forks: Number(x.forks)
			};
		});
	});


    

</script>

<!-- <figure><embed src=></embed></figure> -->
<html lang="en" class="">
    <head>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </head>
    </head>
    <body class="">
        <div class="pl-48 pt-48 pr-48 grid grid-cols-4 gap-2 relative" >
            <div class="col-span-3 z-auto">
                <p class="z-20 relative text-5xl inline-block"
                aria-hidden=true 
                on:click={() => {window.open("https://media.tenor.com/6us3et_6HDoAAAAC/hello-there-hi-there.gif", '_blank')}} >hello there, I am</p>
                <p class="z-10 relative gradienttext text-9xl font-semibold">{data.Name}</p>
                <p class="top-4 relative text-2xl">Education: <b class="text-info font-medium">{data.Education.Name}</b></p>
                <p class="top-4 relative text-2xl">Work: <b class="text-info font-medium">{data.Work.Title}</b></p>
            </div>
            
            <div class="row-span-all col-span-1 border-2 rounded-lg w-full p-2">
                <h2 class="text-6xl text-info">Links</h2>
                <img
                    id="DiscordEmbed"
                    class=" mt-2 mb-2 border rounded-lg hover:border-4 hover:border-primary duration-200"
                    alt="discord Embed" 
                    src="{data.Discord.EmbedLink}{discordArguments()}#{new Date().getTime()}">
                    {#each data.Links as linkjes}
                        <div 
                        aria-hidden=true 
                        on:click={() => {window.open(linkjes.Link, '_blank')}} 
                        class="w-full p-4 mt-2 mb-2 hover:cursor-pointer hover:border-4 hover:border-primary duration-200 border border-white rounded-xl grid grid-cols-5">
                            {#if linkjes.img}
                                <img src="{linkjes.img}" alt="Images">
                                <p class="col-span-4 relative left-4 top-1/3">{linkjes.Name}</p>
                                {:else}
                                <div class="col-span-5 top-1/3">{linkjes.Name}</div>
                            {/if}
                        </div>
                            
                    {/each}
                
                </div>
            </div>
            <div class="pl-48 pr-48 relative top-32 col-span-3">
                <h2 class="text-6xl font-semibold pl-4 pb-4">Projects</h2>
                <div class="grid grid-cols-2 relative top-4 gap-8">
                    {#if repos}
                        {#each repos as repo}
                            <div
                            aria-hidden=true 
                            on:click={()=>{window.open(repo.link, '_blank')}} 
                            class="h-52 cursor-pointer min-w-min grid grid-cols-3 w-full relative rounded-lg border p-4 hover:border-4 hover:border-primary duration-200">
                            
                            <div class=" col-span-2">
                                    <img class="w-8 rounded-full inline-flex" alt="Img" src="https://www.github.com/{repo.owner}.png">
                                    {repo.owner}
                                
                                </div>
                                
                                <div class="col-span-1 absolute right-16 top-8 columns-1">
                                    
                                    <!-- <div aria-hidden="true" on:click={()=>{window.open(languageInfo.Coding[repo.language?.toLowerCase()])}} class="hover:cursor-pointer"> -->
                                        <div style="background-color: {repo.languageColor};" class="w-8 p-4 h-8 z-20 rounded-lg inline-flex">
                                        </div>
                                        <p class="inline-flex relative bottom-2">{repo.language}</p>
                                    <!-- </div> -->
                                    <div >
                                        <div class="flex items-center gap-1 mt-2">
                                            <img src="/icons/star.svg" alt="repository stars" class="w-4" />
                                            <p>{repo.stars}</p>
                                        </div>
                                        <div class="flex items-center gap-1 mt-2">
                                            <img src="/icons/fork.svg" alt="repository forks" class="w-4" />
                                            <p>{repo.forks}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-3xl font-semibold col-span-3">{repo.title}</p>
                                {#if repo.description}
                                <p class="text-xl col-span-3">{repo.description}</p>
                                
                                {:else}
                                <p class="text-xl col-span-3">No description</p>
                                {/if}
                            </div>
                        {/each}
                    {:else}
                        {#each Array(2) as _, i}
                            <div class="rounded-lg bg-base-200 border-base-300 h-52 animate-pulse" />
                        {/each}
                    {/if}
            </div>
        </div>
    </body>
</html>