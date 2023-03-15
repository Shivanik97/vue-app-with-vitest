<template>
    <div>
        <form @submit.prevent="Submit">
            <input v-model="email" type="email" placeholder="your@email.com" required />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    setup() {
        const email = ref('')
        const Submit = () => {
            console.log(email.value)
        }
        return {
            email,
            Submit
        }
    }
}
</script>

<style lang="scss" scoped></style>