<template>
    <div class="alert" :class="'alert-' + type" role="alert" v-show="isShowAlert">
        {{ message }}
        <button type="button" class="close" id="close-btn" @click="closeAlert">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        message: String
    },
    data() {
        return {
            isShowAlert: true,
        }
    },
    methods: {
        closeAlert() {
            this.isShowAlert = false;
        },
        showAlert() {
            this.isShowAlert = true;
        }
    },
    created() {
        if (! this.message) {
            this.closeAlert();
        }
    },
    watch: {
        message(newValue) {
            if (newValue) {
                this.showAlert();

                return ;
            }

            this.closeAlert();
        }
    }
}
</script>

<style scoped>

</style>
