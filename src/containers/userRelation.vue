<template>
    <section>
        <van-nav-bar title="账号关联" left-arrow @click-left="onClickLeft"/>
        <section v-show="!showRelationUser">
            <van-empty description="暂未关联账号" />
        </section>
        <section v-show="showRelationUser">
            <van-cell-group inset>
                <van-cell :value="this.systemUserName" >
                    <!-- 使用插槽来自定义 -->
                    <template #title>
                        <span style ="font-weight: bold">已关联的理赔账户:</span>
                    </template>
                </van-cell>
            </van-cell-group>
        </section>
        <van-grid clickable :column-num="2">
            <van-grid-item icon="add-o" text="添加关联" to="/addUserRelation" />
            <van-grid-item icon="close" text="取消关联" to="/deleteUserRelation"/>
        </van-grid>
        <van-notice-bar  background="#ecf9ff" left-icon="info-o" wrapable>
            一个微信号只能关联一个理赔账号，如需变更，先取消关联再添加关联
        </van-notice-bar>
    </section>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        data() {
            return {
                systemUserName:'',
                showRelationUser:false
            };
        },
        created() {
            this.queryWxUserRelation()
        },
        methods: {
            ...mapActions(["toQueryWxUserRelation"]),
            queryWxUserRelation() {
                this.toQueryWxUserRelation().then((data = {}) => {
                    if (data.code === 200) {
                        const dataJson = data.data;
                        console.log(dataJson)
                        if (dataJson) {
                            this.systemUserName = dataJson.username;
                            this.showRelationUser = true;
                        }
                    }
                });
            },
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    };
</script>