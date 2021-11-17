<template>
    <div class="main-wrapper">
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import MainPage from '@/components/Main-page/Main-page';
import Footer from '@/components/Footer/Footer';

export default {
    components: {
        Header,
        MainPage,
        Footer
    }
}
</script>