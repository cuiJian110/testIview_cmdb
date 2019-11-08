<template>
    <div>
        <div>
            <button @click="addItem(getLastId + 1)">addItem</button>
            <input id="all" type="checkbox" :checked="getIsAll" @click="changeAllStatus">
            
            <label for="all">全选</label>
        </div>
        <div v-for="item in cartList" :key="item.id">
            <input type="checkbox" :checked="item.isChecked" @click="changeStatus(item.id)">
            name: {{item.name}}
            price: {{item.price}}
            num: {{item.num}}
            <button @click="jiayi(item.id)">+1</button>
            <button @click="jianyi(item.id)">-1</button>
            <button @click="delyi(item.id)">del_1</button>
        </div>
        <div>
            total: {{getTotal}}
            selected: {{getSelected}}
            money: {{getMoney}}
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState({
            test: state => state.caidan_1.test,
            cartList: state => state.caidan_1.cartList,
        }),
        ...mapGetters(["getTotal","getSelected","getMoney","getLastId","getIsAll"])
    },
    methods: {
        ...mapMutations(["jiayi","jianyi","delyi","changeStatus","addItem","changeAllStatus"])
    }
}
</script>