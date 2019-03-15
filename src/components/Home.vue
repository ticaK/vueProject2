<template>
    <div>
        Home
        </div>
</template>

<script>
import LogService from '../services/LogService'

export default {
created(){
    LogService.log('log this');
}
}
</script>

<style>

</style>
