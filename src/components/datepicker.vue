<template>
  <div class="control">
    <input type="text" class="input" readonly :value="value" ref="datepicker"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return { localValue: this.value };
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    localValue: {
      _handler: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style>
</style>