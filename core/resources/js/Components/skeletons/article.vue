<template>
    <div>
        <div class="flex sm:px-12 px-[1px] py-2 sm:py-6 article-card">
            <div class=" w-9/12 grid px-4 article-info">

                <h2 class="sm:text-[20px] text-[16px] font-bold rounded h-12 sm:h-8">

                </h2>
                <p class="text-gray-500 rounded text-xs sm:text-base font-semibold hidden md:block">

                </p>
                <div class="flex justify-between">
                    <div class="flex text-xs justify-between items-center text-gray-400 space-x-1">


                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded bg-gray-200 capitalize px-[10px] hidden sm:block w-6 sm:w-12"> </span>
                    </div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt rounded">

                        </svg>
                    </div>
                </div>

            </div>
            <div class=" w-3/12 profile-image">
                <div class="sm:w-[200px] w-[100px] sm:h-[134px] h-[100px] rounded article-image__img"></div>
            </div>
        </div>
        <div class="flex sm:px-12 px-[1px] py-2 sm:py-6 article-card">
            <div class=" w-9/12 grid px-4 article-info">

                <h2 class="sm:text-[20px] text-[16px] font-bold rounded h-12 sm:h-8">

                </h2>
                <p class="text-gray-500 rounded text-xs sm:text-base font-semibold hidden md:block">

                </p>
                <div class="flex justify-between">
                    <div class="flex text-xs justify-between items-center text-gray-400 space-x-1">


                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded bg-gray-200 capitalize px-[10px] hidden sm:block w-6 sm:w-12"> </span>
                    </div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt rounded">

                        </svg>
                    </div>
                </div>

            </div>
            <div class=" w-3/12 profile-image">
                <div class="sm:w-[200px] w-[100px] sm:h-[134px] h-[100px] rounded article-image__img"></div>
            </div>
        </div>
        <div class="flex sm:px-12 px-[1px] py-2 sm:py-6 article-card">
            <div class=" w-9/12 grid px-4 article-info">

                <h2 class="sm:text-[20px] text-[16px] font-bold rounded h-12 sm:h-8">

                </h2>
                <p class="text-gray-500 rounded text-xs sm:text-base font-semibold hidden md:block">

                </p>
                <div class="flex justify-between">
                    <div class="flex text-xs justify-between items-center text-gray-400 space-x-1">


                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded w-6 sm:w-12"> </span>
                        <span class="rounded bg-gray-200 capitalize px-[10px] hidden sm:block w-6 sm:w-12"> </span>
                    </div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt rounded">

                        </svg>
                    </div>
                </div>

            </div>
            <div class=" w-3/12 profile-image">
                <div class="sm:w-[200px] w-[100px] sm:h-[134px] h-[100px] rounded article-image__img"></div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>




<style scoped>
.article-card .article-image__img {
    animation: pulse-bg 1s infinite;
}

.article-info span {
    height: 16px;
    display: inline-block;
    animation: pulse-bg 1s infinite;
}

.article-info svg {

    height: 16px;
    display: inline-block;
    animation: pulse-bg 1s infinite;
}

.article-info h2 {
    content: ' ';
    animation: pulse-bg 1s infinite;
    margin: 10px 0;
}

.article-info p {
    animation: pulse-bg 1s infinite;
    height: 46px;
    line-height: 140%;
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
