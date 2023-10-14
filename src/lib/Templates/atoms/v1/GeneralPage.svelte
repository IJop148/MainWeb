<script lang="ts">
    import PersonalInformation from "$lib/data/StaticInformation/PersonalInformation";
</script>

<div class="w-full lg:grid-cols-3 lg:grid flex flex-col items-center justify-center text-center">
    <div class="lg:py-48 flex flex-col items-center">
        <h1 class="text-5xl w-full font-bold gradienttext">Name</h1>
        <p class="text-xl">{PersonalInformation.name}</p>
        <h1 class="text-5xl font-bold mt-4 gradienttext">Study</h1>
        <a href="{PersonalInformation.study.url}"><p class="text-xl">{PersonalInformation.study.display}</p></a>
        <h1 class="text-5xl font-bold mt-4 gradienttext">Work</h1>
        <a href="{PersonalInformation.work.url}"><p class="text-xl underline underline-offset-4">{PersonalInformation.work.display}</p></a>
    </div>

    <div class="lg:py-40 py-8 w-full relative flex flex-col items-center justify-center text-center">
        <a class="lg:p-8 py-2" href="https://wakatime.com/@e433b428-d6a0-41d0-b5bc-69037319d82f">
            <p class="text-2xl pb-2 text-secondary">Time coded</p>
            <img class="w-64" src="https://wakatime.com/badge/user/e433b428-d6a0-41d0-b5bc-69037319d82f.svg?style=for-the-badge" alt="Total time coded since Aug 31 2023" />
        </a>

        <a class="lg:p-8 py-2" href="https://wakatime.com/@e433b428-d6a0-41d0-b5bc-69037319d82f">
            <p class="text-2xl pb-2 text-secondary">This website</p>
            <img class="w-64" src="https://wakatime.com/badge/user/e433b428-d6a0-41d0-b5bc-69037319d82f/project/6b44d036-9cfe-4347-ae45-d5b05574289d.svg?style=for-the-badge" alt="wakatime">
        </a>
    </div>

    <div class="lg:mt-28 w-full relative float-right flex flex-col items-center justify-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/imgs/ProfilePicture.jpg" alt="Profile Picture" class="w-64 rounded-full object-cover">
        <div class="h-1/3 mt-16 text-center">
            <p class="italic text-2xl py-2">Guilty with Autism</p>
            
        </div>
    </div>
</div>