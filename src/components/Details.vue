<template>
    <div class="container">
        <div class="f-col">
            <img :src="user.avatar_url">
            <h2>{{user.login}}</h2>
            <div class="f-row">
                <span class="label">Followers {{user.followers}} / Following {{user.following}} / Repos {{user.repos}}</span>
            </div>
        </div>
        <div class="f-col">
            <div class="f-row">
                <span class="label">Name:</span>
                <span>{{user.name}}</span>
            </div>
            <div class="f-row">
                <span class="label">Bio:</span>
                <span>{{user.bio}}</span>
            </div>
            <div class="f-row">
                <span class="label">Location:</span>
                <span>{{user.location}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: mapState([
            'user'
        ]),
        created: function () {
            this.$store.dispatch('loadUser', this.$route.params.username);
        },
    }
</script>

<style scoped>
    .container {
        display: flex;
    }
    .f-col {
        flex-direction: column;
        padding: 5px;
    }

    .f-row {
        flex-direction: row;
        text-align: left;
        margin-bottom: 5px;
    }

    .label {
        margin-right: 5px;
        font-weight: bold;
    }
</style>