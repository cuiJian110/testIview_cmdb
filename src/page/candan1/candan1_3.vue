<template>
    <div>
        
        <Button @click="handleShowDia">showDia</Button>
        <Modal
            width="50"
            :styles="{top: '60px', height: '500px'}"
            v-model="isShowDia"
            title="Common Modal dialog box title"
        >
            <Button type="primary" @click="showInnerDia">showInner</Button>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Modal
            v-model="isShowInnerDia"
            title="inner title"
        >
            <Table :columns="changeColumns" :data="changeDetailDate"></Table>
        </Modal>
    </div>
</template>
<script>
// import axios from 'axios';
// import {testjiekou} from '@/api';
export default {
    data() {
        return {
            isShowDia: false,
            isShowInnerDia: false,
            obj_y: {
                "weblogic_management_server_port": { "to": "17011" },
                "jdk_version": { "to": "1.6.0_37" },
                "security_t3_config_rule": { "to": "\u672a\u77e5\u9879" },
                "name": { "to": "openstack" },
                // "configuration_version": { "to": "10.3.6.0" },
                // "production_mode_enabled": { "to": "true" },
                // "domain_ip": { "to": "20.59.18.27" },
                // "weblogic_mx": { "to": "2048m" },
                // "jta_timeout_seconds": { "to": "\u672a\u77e5\u9879" },
                // "weblogic_management_server_address": { "to": "20.59.18.27" },
                // "log_date_format_pattern": { "to": "\u672a\u77e5\u9879" },
                // "obj_ip": { "to": "20.59.18.27" },
                // "admin_server_name": { "to": "AdminServer" },
                // "patchdir_home": { "to": "/weblogic/patch_wls1036" },
                // "wlst_path": { "to": "/weblogic/wlserver_10.3/server/" },
                // "md_home": { "to": "/weblogic" },
                // "platform_home": { "to": "/weblogic/wlserver_10.3" },
                // "domain_version": { "to": "10.3.6.0" },
                // "weblogic_ms": { "to": "1024m" }
            },
            diff_filed_show: [
                {filed: "weblogic_management_server_port", filed_name: "web服务端口"},
                {filed: "jdk_version", filed_name: "jdk版本"},
                {filed: "security_t3_config_rule", filed_name: "t3配置规则"},
                {filed: "name", filed_name: "名称"},
            ],
            changeColumns: [
                {title: '变更对象', key: 'change_obj'},
                {title: '变更前', key: 'before_change'},
                {title: '变更后', key: 'after_change'}
            ],
            changeDetailDate: [],
        }
    },
    methods: {
        handleShowDia() {
            this.isShowDia = true;
        },
        showInnerDia() {
            this.changeDetailDate = [];
            const {diff_filed_show, obj_y} = this;
            this.isShowInnerDia = true;
            for(let key in obj_y) {
                const obj = {};
                obj.change_obj = diff_filed_show[diff_filed_show.findIndex(i => i.filed === key)].filed_name;
                obj.after_change = obj_y[key].to || "";
                obj.before_change = obj_y[key].from || "";
                this.changeDetailDate.push(obj);
            }
        }
        // initData() {
        //     testjiekou().then(res => {
        //         console.log(res);
        //     })
        // }
    },
    created() {
        // this.initData();
    }
}
</script>