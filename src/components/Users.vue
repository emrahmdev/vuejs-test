<template>
    <div>
        <el-table
                :data="users"
                style="width: 100%">
            <el-table-column
                    prop="login"
                    label="Username"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="Details"
                    width="180">
                <template slot-scope="scope">
                    <router-link :to="{ name: 'details', params: {username: users[scope.$index].login} }">
                        <el-button type="primary">Details</el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: mapState([
            'users'
        ]),
        created: function () {
            this.$store.dispatch('loadUsers');
        }
    }
</script>

<style scoped>

</style>