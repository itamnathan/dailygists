<script setup>
import { defineAsyncComponent } from 'vue'



const Footer = defineAsyncComponent(() => import('./partials/footer.vue'))
const Header = defineAsyncComponent(() => import('./partials/header.vue'))
</script>
<template>
    <div class="dark:bg-slate-900">
        <!-- Header -->
        <Header />
        
        <main class="min-h-screen">
            <slot />
        </main>
        <!-- Footer -->
        <Footer />
    </div>
</template>
    
<style>

</style>