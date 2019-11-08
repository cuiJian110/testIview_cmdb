const obj = {
    state: {
        test: "testcaidanyi",
        cartList: [
            {id: 1, name: "pingguo_1", num: 5, price: 10, isChecked: false},
            {id: 2, name: "pingguo_2", num: 5, price: 10, isChecked: true},
            {id: 3, name: "pingguo_3", num: 5, price: 10, isChecked: false},
            {id: 4, name: "pingguo_4", num: 5, price: 10, isChecked: false},
        ]
    },
    getters: {
        getTotal(state) {
            return state.cartList.length;
        },
        getSelected(state) {
            return state.cartList.reduce((p,i) => {
                if(i.isChecked) {
                    p++;
                }
                return p;
            },0)
        },
        getMoney(state) {
            return state.cartList.reduce((p,i) => {
                if(i.isChecked) {
                    p += i.num * i.price;
                }
                return p;
            },0)
        },
        getLastId(state,obj) {
            return state.cartList[obj.getTotal - 1].id
        },
        getIsAll(state,obj) {
            if(obj.getTotal === obj.getSelected) {
                return true;
            } else {
                return false;
            }
        }
    },
    mutations: {
        jiayi(state,id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList[index].num++;
        },
        jianyi(state,id) {
            const i = state.cartList.findIndex(item => item.id === id);
            state.cartList[i].num--;
        },
        delyi(state,id) {
            const i = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(i,1);
        },
        changeStatus(state,id) {
            const i = state.cartList.findIndex(i => i.id === id);
            state.cartList[i].isChecked = !state.cartList[i].isChecked;
        },
        addItem(state,id) {
            const obj = {id, name: `pingguo_${id}`, num: 5, price: 10, isChecked: false}
            state.cartList.push(obj);
        },
        changeAllStatus(state,e) {
            state.cartList.forEach(i => i.isChecked = e.target.checked);
        } 
    },
    actions: {

    }
}
export default obj;