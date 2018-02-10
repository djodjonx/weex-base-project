<template>
    <div>
        <div class="pre">
            <text class="new">Hello To You</text>
        </div>
        <div>
            <text>What's your name?</text>
        </div>
        <input class="input" type="text" v-model="user" placeholder="Type your's name">
        <button class="button" v-on:click="toNext">
            To next
        </button>
        <div class="error" v-if="error">
            <text>invalid</text>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: null,
            error: false
        }
    },
    methods: {
        toNext () {
            console.log('click')
            if (this.user && this.user.trim().length > 0) {
                this.$store.commit('setUser', this.user)
                this.$router.push({name: 'page2'})
            }
            this.error = true
            setTimeout(() => {
                this.error = false
            }, 2500)
        }
    }
}
</script>
<style>
    .pre {
        margin-bottom: 150px;

    }
    .new {
        text-align: center;
    }
    .input {
        border-bottom: 1px solid black;
    }
    .button {
        cursor: pointer;
        margin-top: 150px;
        text-align: center;
        width: 100px;
        align-self: center;
        border-radius: 5px;
        padding: 15px;

        &:after {
            background-color: blue;
        }
    }
    .error {
        color: red;
    }
</style>
