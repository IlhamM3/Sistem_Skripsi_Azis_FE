<template>
    <button type="button" class="ButtonOpenContoh hover:bg-[#006534]/70 bg-[#006534] text-white text-base font-semibold px-3 py-1.5 rounded-lg cursor-pointer">{{ title }}</button>
</template>

<script>
export default {
    name: 'ButtonLabel',
    props: {
        title: {
        type: String,
        required: true,
        },
    }
}
</script>