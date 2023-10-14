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

<div class="hidden xl:block bg-base-200 rounded-2xl w-full boxHover">
    <p 
        aria-hidden="true"
        on:click={() => window.open(Repo.link, "_blank")}
        class="text-4xl font-bold px-4 py-2 inline-block gradienttext cursor-pointer"
    >{Repo.title}</p>
    
    <div class="xl:float-right sm:float-none h-auto xl:h-full flex items-center pr-5">
        <p
        aria-hidden="true"
        on:click={() => window.open("https://www.github.com/"+Repo.owner, "_blank")}
        class="text-2xl font-bold px-4 py-2 inline-block float-right right-0 cursor-pointer"
        >
        <img src="https://www.github.com/{Repo.owner}.png" alt="owner" class="w-16 border-2 border-white rounded-full hidden lg:block">
        </p>
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

<div class="block xl:hidden bg-base-200 rounded-2xl">
    <div>
        <p class="text-2xl py-4 px-4 gradienttext font-bold inline-flex">{Repo.title}</p>
        <img src="https://www.github.com/{Repo.owner}.png" alt="PFP" class="w-16 float-right rounded-full p-3 inline-flex">
        <p class="px-4 pb-3">{Repo.description}</p>
        
        <div class="p-4">
            <div class="inline rounded-xl w-max text-center px-4 py-1 mb-2" style="background-color: {Repo.languageColor};">
                <p class="text-lg {textColor} inline">{Repo.language}</p>
            </div>
            <div class="float-right">
                <div class=" px-4 inline">
                    <img src="/icons/star.svg" alt="star" class="w-6 h-6 unselectable inline-block">
                    <p class="inline-block">{Repo.stars}</p>
                </div>
                <div class="px-8 inline">
                    <img src="/icons/fork.svg" alt="fork" class="w-6 h-6 unselectable inline-block">
                    <p class="inline-block">{Repo.forks}</p>
                </div>
            </div>
        </div>

    </div>
</div>