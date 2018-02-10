<template>
    <div>
        <div>
            <text>Yeah my second component in other Route</text>
        </div>
        <div>
            <text>It's so cool {{user}}</text>
        </div>
        <button @click="$router.push({name: 'page1'})">Back</button>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    }
}
</script>
<style>

</style>
