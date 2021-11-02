<template>
    <div class="main-wrapper">
        <Header/>
        <MainPage/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import MainPage from '@/components/Main-page/Main-page';

export default {
    components: {
        Header,
        MainPage
    }
}
</script>