<template>
    <div class="container">
        <van-button type="default" @click="showNotify">测试Notify</van-button>
        <van-notify id="van-notify" />
    </div>
</template>

<script>

    import Notify from '../../../static/vant/notify/index';
    export default {
        data() {
            return {}
        },
        methods: {
            showNotify() {
                console.info('showNotify');
                Notify('dddddd');
                console.info(Notify);
            },
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
