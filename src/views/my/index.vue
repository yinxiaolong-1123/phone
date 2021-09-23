<template>
    <div>
        <h3 class="title bg">个人中心</h3>
        <div class="order bg">
            <van-row :gutter="10">
                <van-col span="4">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>待付款</span>
                </van-col>
                <van-col span="4">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>待发货</span>
                </van-col>
                <van-col span="4">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>待收货</span>
                </van-col>
                <van-col span="4">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>待评价</span>
                </van-col>
                <van-col span="8">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>退款/售后</span>
                </van-col>
            </van-row>
        </div>
        <div class="bg order">
            <van-row :gutter="10">
                <van-col span="6" @click="address">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>收获地址</span>
                </van-col>
                <van-col span="6">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>菜鸟</span>
                </van-col>
                <van-col span="6">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>官方客服</span>
                </van-col>
                <van-col span="6">
                    <van-icon name="cart-o" color="#1989fa" /><br>
                    <span>成就奖励</span>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{}
    },

    methods: {
        address() {
            this.$router.push({
                path: '/address'
            })
        }
    }
}
</script>

<style scoped>
.title{
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.order{
    padding: 10px;
    font-size: 14px;
    text-align: center;
}
.bg{
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>