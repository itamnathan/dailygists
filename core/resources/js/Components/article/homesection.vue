<template>

    <section class="sm:w-8/12   pr-3 sm:pr-0">

        <articleskeleton></articleskeleton>
        <div class="flex sm:px-12 px-[1px] py-2 sm:py-6">
            <div class="sm:w-8/12 w-9/12 grid px-4">

                <h2 class="sm:text-[20px] text-[16px] font-bold">My Junior Got Fired and Sued for Working on His Side
                    Projects During
                    Office
                    hours</h2>
                <p class="text-gray-500  text-xs sm:text-base font-semibold hidden md:block">All my life, I’ve enjoyed
                    reading. As a
                    kid, after I learned to read to myself, I would close the door to
                    my room, and lie on my side on…</p>
                <div class="flex justify-between">
                    <div class="flex text-xs items-center text-gray-400 space-x-1">


                        <span>Sep 22 </span>
                        <span> 6 min read</span>
                        <span class="rounded-full bg-gray-200 capitalize px-[10px] hidden sm:block"> laptop</span>
                    </div>
                    <div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt">
                            <path
                                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                fill="#292929"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="sm:w-4/12 w-3/12">
                <img src="/storage/uploads/lg/tooo-20.webp"
                    class="sm:w-[200px] w-[100px] sm:h-[134px] h-[100px] rounded" />
            </div>
        </div>
    </section>
</template>

<script setup>
import articleskeleton from "@/Components/skeletons/article.vue"
</script>

<style>

</style>