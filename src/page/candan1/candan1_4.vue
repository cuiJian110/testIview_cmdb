<template>
    <div>
        <Table :columns="columns1" :data="data1" @on-row-click="handleRow1"></Table>
        <Drawer width="50" title="Basic Drawer" v-model="isShow">
            <div class="content">
                <Tabs v-model="current_tabs">
                    <TabPane label="属性" name="props">
                        <div>
                            <p>name: content_obj.name}}</p>
                            <p>age: content_obj.age}}</p>
                            <p>address: content_obj.address}}</p>
                        </div>
                        <div>
                            <p>name: content_obj.name}}</p>
                            <p>age: content_obj.age}}</p>
                            <p>address: content_obj.address}}</p>
                        </div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>
                        <div>dd</div><div>dd</div><div>dd</div><div>dd</div>

                    </TabPane>
                    <TabPane label="变更记录" name="changes" style="position: relative;">
                        <!-- <Table :columns="columns2" :data="data2" @on-row-click="handleRow2"></Table>
                        <div v-if="isShowDia" class="change_log">
                            aaa
                        </div> -->
                        <!-- <Modal
                            v-model="isShowDia"
                            title="Common Modal dialog box title"
                        >
                            <p>Content of dialog</p>
                            <p>Content of dialog</p>
                            <p>Content of dialog</p>
                        </Modal> -->
                    </TabPane>
                </Tabs>
            </div>
        </Drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            aaa: false,
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            isShow: false,
            current_tabs: "props",
            columns2: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data2: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            isShowDia: false,
        }
    },
    methods: {
        handleRow1(row) {
            // console.log(row);
            this.current_tabs = "props";
            this.isShow = true;
        },
        handleRow2(row) {
            console.log(row);
            this.isShowDia = true;
        }
    },
    created() {
    }
}
</script>
<style scoped>
    .change_log {
        width: 80%;
        height: 300px;
        background-color: #fff;
        box-shadow: 3px 3px 10px #000;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -50%;
        /* z-index: 20000; */
        /* left: 0; */
    }
</style>