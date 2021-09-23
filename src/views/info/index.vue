<template>
     <div class="font">
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="swipe-img" v-lazy="image" />
        </van-swipe-item>
        </van-swipe>
        <van-card
        v-for="(item, index) in 30" :key="index" @click="detail(item)"
        :num="index"
        tag="hot"
        price="5.900"
        origin-price="29.900"
        desc="描述信息"
        :lazy-load="true"
        title="商品标题"
        :thumb="imgUrl"
        >
        <template #tags>
            <van-tag plain type="danger">优惠</van-tag>
            <van-tag plain type="danger">促销</van-tag>
        </template>
        <template #footer>
            <van-button @click.stop="goShopping" size="mini">加入购物车</van-button>
            <van-button @click.stop="payment" size="mini">立即支付</van-button>
        </template>
        </van-card>
    </div>
</template>

<script>
export default {
    data() {
        return{
            imgUrl: require('../../assets/2.webp'),
            images: [
                require('../../assets/1.webp'),
                require('../../assets/2.webp'),
                require('../../assets/3.webp'),
                require('../../assets/4.webp'),
            ],
        }
    },

    methods: {
        goShopping() {
            alert('00');
        },

        payment() {
            alert('11')
        },

        detail(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: item
                }
            })
        },
    }
}
</script>

<style scoped>
.swipe-img{
    width: 100%;
    height: 200px;
}
.img-size{
    width: 100%;
}
.font{
    font-size: 14px;
}
</style>