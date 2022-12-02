<template>

    <div class="sm:px-24 px-4 py-12 grid border-b article-info">

        <div class="flex items-center mb-4">
            <svg width="28" height="29" class="font-bold rounded-full py-2 mx-1">

            </svg>
            <p class="font-bold px-2  rounded bg-gray-200 w-[20rem] h-[2rem]"></p>
        </div>
        <div class="grid sm:grid-cols-3 gap-6   rounded-lg">
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class="w-2/12 ">
                    <span class="text-[30px] rounded text-gray-200 font-bold w-6 h-[44px] "></span>
                </div>
                <div class="w-10/12 grid">
                    <h2 class="rounded font-bold h-[24px]  bg-gray-200 ">

                    </h2>
                    <div class="flex text-xs text-gray-400">
                        <span class="rounded w-12 "></span>
                    </div>

                </div>
            </div>
        </div>
        <!-- <Article></Article> -->
    </div>
</template>

<script setup>

</script>

<style scoped>
.article-card .article-image__img {
    animation: pulse-bg 1s infinite;
}

.article-info span {
    display: inline-block;
    animation: pulse-bg 1s infinite;
}

.article-info svg {

    display: inline-block;
    animation: pulse-bg 1s infinite;
}

.article-info h2 {
    animation: pulse-bg 1s infinite;
}

.article-info p {
    animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {

    0% {
        background-color: #ddd;
    }

    50% {
        background-color: #d0d0d0;
    }

    100% {
        background-color: #ddd;
    }
}
</style>
