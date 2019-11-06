<template>
    <div>
        <Table :columns="columns1" :data="data1" @on-row-click="handleRow"></Table>
        <div v-if="isShowMask" class="mask" @click="handleMask"></div>
        <div class="mask_content">
            <div class="title">
                {{content_obj.name}}_1
            </div>
            <div class="content">
                <Tabs v-model="current_tabs">
                    <TabPane label="属性" name="props">
                        <div>
                            <p>name: {{content_obj.name}}</p>
                            <p>age: {{content_obj.age}}</p>
                            <p>address: {{content_obj.address}}</p>
                        </div>
                    </TabPane>
                    <TabPane label="变更记录" name="changes">变更记录11</TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            isShowMask: false,
            current_tabs: "props",
            content_obj: {},
        }
    },
    methods: {
        handleShowContent() {
            document.querySelector(".mask_content").style.right = "0";
        },
        handleHideContent() {
            document.querySelector(".mask_content").style.right = "-100%";
        },
        handleMask() {
            this.isShowMask = false;
            this.handleHideContent();
        },
        handleRow(row) {
            this.content_obj = {...row};
            this.isShowMask = true;
            this.current_tabs = "props";
            this.handleShowContent();
        }
    }
}
</script>
<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: rgba(0,0,0,.5);
        display: flex;
        justify-content: flex-end; 
    }
    .mask_content {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: #fff;
        z-index: 99999;
        width: 50%;
        height: 100%;
        transition: all 0.5s;
    }
    .title {
        height: 60px;
        background-color: #ccc;
        line-height: 60px;
        padding-left: 30px;
        margin-bottom: 10px;
    }
    .content {
        padding: 0 20px;
    }
</style>