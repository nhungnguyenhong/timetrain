<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <menu-admin v-show="$auth.check('Admin')"></menu-admin>
                <menu-employee v-show="$auth.check('Employee')"></menu-employee>
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>
            <dashboard-content @click.native="toggleSidebar"></dashboard-content>
            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import MenuAdmin from "../menu/MenuAdmin";
import MenuEmployee from "../menu/MenuEmployee";

export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu,
        MenuAdmin,
        MenuEmployee
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>
