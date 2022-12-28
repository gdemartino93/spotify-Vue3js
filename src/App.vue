<script>
import AppHeader from './components/AppHeader.vue';
import AppExplorer from './components/AppExplorer.vue';
import AppNavBar from './components/AppNavBar.vue';
import AppCmdBar from './components/AppCmdBar.vue';



export default {
name : "App",
components : { AppCmdBar, AppExplorer, AppNavBar, AppHeader}
}
</script>

<template>
    <nav>
        <AppNavBar />
    </nav>

    <header>
        <AppHeader />
    </header>

    <main>
        <AppExplorer />
    </main>
        
    <footer>
        <AppCmdBar />
    </footer>

</template>

<style  lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;
</style>
