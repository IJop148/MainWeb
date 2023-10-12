<script lang="ts">
    import PersonalInformation from "$lib/data/StaticInformation/PersonalInformation";
</script>

<div class="w-1/2 float-left p-48">
    <h1 class="text-5xl font-bold gradienttext">Name</h1>
    <p class="text-xl">{PersonalInformation.name}</p>
    <h1 class="text-5xl font-bold mt-4 gradienttext">Study</h1>
    <a href="{PersonalInformation.study.url}"><p class="text-xl">{PersonalInformation.study.display}</p></a>
    <h1 class="text-5xl font-bold mt-4 gradienttext">Work</h1>
    <a href="{PersonalInformation.work.url}"><p class="text-xl underline underline-offset-4">{PersonalInformation.work.display}</p></a>
</div>
<div class="w-1/2 mt-28 relative float-right flex flex-col items-center justify-center">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="/imgs/ProfilePicture.jpg" alt="Profile Picture" class="w-64 rounded-full object-cover">
    <div class="h-1/3 mt-16 text-center">
        <p>Guilty with Autism</p>
        <a href="https://wakatime.com/@e433b428-d6a0-41d0-b5bc-69037319d82f">
            <img src="https://wakatime.com/badge/user/e433b428-d6a0-41d0-b5bc-69037319d82f.svg?style=for-the-badge" alt="Total time coded since Aug 31 2023" />
        </a>
    </div>
</div>