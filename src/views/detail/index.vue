<template>
    <div class="detail">
        <img class="detail-img" src="../../assets/1.jpg" alt="">
        <div class="detail-info">
            <p>描述：曾经曾经曾经曾经曾经曾经曾经</p>
            <p>价格：5.9</p>
            <p>选择： xxxx</p>
        </div>
        <van-share-sheet
        v-model="showShare"
        title="支付方式"
        :options="options"
        @select="onSelect"
        />
        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button @click="payment" type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat', url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb' },
                { name: '支付宝', icon: 'weibo', url: 'https://openapi.alipaydev.com/gateway.do' },
            ],
        }
    },

    methods: {
        payment() {
            this.showShare = true;
        },
        onSelect(option) {
            this.showShare = false;
            window.location.href = option.url;
        },
    }
}
</script>

<style scoped>
.detail{
    background: #ffffff;
    height: 100vh;
}
.detail-img{
    width: 100%;
    height: 40vh;
}
.detail-info{
    font-size: 14px;
}
.foot-btn{
    position: absolute;
    right: 5px;
    bottom: 60px;
}
</style>