<template>
    <div class="login">
        <router-view></router-view>
        <div>
            <van-tabbar v-model="active">
                <van-tabbar-item name="info" icon="home-o" to="info">首页</van-tabbar-item>
                <van-tabbar-item name="vip" icon="chat-o" to="vip">消息</van-tabbar-item>
                <van-tabbar-item name="shopping-car" icon="cart-o" to="shopping-car">购物车</van-tabbar-item>
                <van-tabbar-item name="my" icon="friends-o" to="my">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
// import { post } from 'api/request';
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
    data() {
        return{
            active: 'info',
        }
    }
}
</script>

<style scoped>

</style>
