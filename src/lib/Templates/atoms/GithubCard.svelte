<script lang="ts">
    import type { IRepo } from "$lib/util/global.interface";
    import { lightOrDark } from "$lib/util/Utils";

    export let Repo: IRepo;
    if(Repo.language === null || Repo.language === undefined){
        Repo.language = "Unknown"
        Repo.languageColor = "#fff"
        
    }
    let textColor = lightOrDark(Repo.languageColor) === "dark" ? "text-white" : "text-black"
</script>

<div class="bg-base-200 rounded-2xl w-full relative">
    <p 
        aria-hidden="true"
        on:click={() => window.open(Repo.link, "_blank")}
        class="text-4xl font-bold px-4 py-2 inline-block gradienttext cursor-pointer"
    >{Repo.title}</p>
    
    <div class="float-right h-full flex items-center pr-5">
        <p
        aria-hidden="true"
        on:click={() => window.open("https://www.github.com/"+Repo.owner, "_blank")}
        class="text-2xl font-bold px-4 py-2 inline-block float-right right-0 cursor-pointer"
        >{Repo.owner}</p>
        <img src="https://www.github.com/{Repo.owner}.png" alt="owner" class="w-16 border-2 border-white rounded-full inline-block">
    </div>
    <p class="text-lg px-4 py-1">{Repo.description}</p>
    <div class="grid grid-cols-3 items-center text-center">
        <div class="rounded-full inline-block px-4 py-1 m-4" style="background-color: {Repo.languageColor};"> <p class="text-lg {textColor} inline">{Repo.language}</p> </div>
        <div class="px-4 py-1 mx-2 inline-block">
            <img class="w-6 h-6 unselectable inline-block" alt="" src="/icons/star.svg"> 
            {Repo.stars}
        </div>
        <div class="px-4 py-1 m-4 inline-block">
            <img class="w-6 h-6 unselectable inline-block" alt="" src="/icons/fork.svg"> 
            {Repo.stars}
        </div>
    </div>
</div>
<!-- 
export interface IRepo {
    owner: string;
    link: string;
    description: string;
    image: string;
    website: string;
    language?: string;
    languageColor?: string;
    stars: number;
    forks: number;
    // Changed 'repo' to 'title'
    repo?: string;
    title?: string; -->