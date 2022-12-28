<script>
import AppCmdBar from './components/AppCmdBar.vue';
import AppExplorer from './components/AppExplorer.vue';
import AppNavBar from './components/AppNavBar.vue';

export default {
name : "App",
components : { AppCmdBar, AppExplorer, AppNavBar}
}
</script>

<template>


 <nav>
  <AppNavBar />
 </nav>
 <AppExplorer />
 <AppCmdBar />
</template>

<style  lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;
</style>
