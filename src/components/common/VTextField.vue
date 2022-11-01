<template>
  <span>
    <label :for="id">{{ label }}</label>
    <textarea v-if="type === 'textarea'" ref="input" v-on="getListeners" v-bind="getInputProps" @input="handleInput" />
    <input v-else ref="input" v-on="getListeners" v-bind="getInputProps" @input="handleInput" />
  </span>
</template>
<script>
export default {
  name: 'v-text-field',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    onlyInput: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    inputProps: {
      type: Object,
      default() {
        return {};
      },
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    getListeners() {
      /* eslint no-unused-vars: "off" */
      const { input, ...others } = this.$listeners;
      return { ...others };
    },
    getInputProps() {
      const { value, label, inputProps, ...others } = this.$props;
      return { ...inputProps, ...others };
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    resetInput() {
      this.$refs.input.value = '';
      this.$emit('input', '');
    },
  },
};
</script>
