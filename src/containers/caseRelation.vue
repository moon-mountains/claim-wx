<template>
    <section>
        <van-nav-bar title="案件关联" left-arrow @click-left="onClickLeft"/>
        <van-form @submit="toCaseInfoRelation">
            <van-field
                    v-model="caseNo"
                    name="案件号"
                    label="案件号"
                    placeholder="案件号"
                    :rules="[{ required: true, message: '请填写案件号' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">确定关联</van-button>
            </div>
        </van-form>
        <van-notice-bar  background="#ecf9ff" left-icon="info-o" wrapable>
            支持单个或批量关联，如果需要批量关联，请将多个案件号用,号连接，如：12345,23456,34567,
            单次批量关联数量最多支持20个
        </van-notice-bar>
    </section>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        data() {
            return {
                caseNo: ''
            };
        },
        methods: {
            ...mapActions(["toCaseBaseInfoRelation"]),
            toCaseInfoRelation() {
                this.toCaseBaseInfoRelation({caseNo: this.caseNo}).then((data = {}) => {
                    if (data.code === 200) {
                        this.$notify({type: "success", message: data.message});
                    } else {
                        this.$notify(data.message || "关联失败");
                    }
                });
            },
            onClickLeft() {
                this.$router.go(-1);
            }
        },
    };
</script>