<template lang="html">
  <div class="hy-input">
		<template>
			<input
			:type="type"
			:disabled="inputDisabled"
			:readonly="readonly"
			:value="currentValue"
			@blur="handleBlur"
			@focus="handleFocus"
			@input="handleInput">
			<span class="hy-input-suffix" v-if="showClear" @click="clickClear">
				<i class="iconfont icon-delete"></i>
			</span>
		</template>
  </div>
</template>

<script>
export default {
	props: {
		value: [String, Number],
		size: String,
		resize: String,
		form: String,
		disabled: Boolean,
		readonly: Boolean,
		inputDisabled: Boolean,
		type: {
			type: String,
			default: function() {
				return 'String'
			}
		}
	},
	data() {
		return {
			currentValue: this.value === undefined || this.value === null
				? ''
				: this.value,
			isFocused: false
		}
	},
	methods: {
		handleBlur() {
			this.isFocused = false
		},
		handleFocus() {
			this.isFocused = true
		},
		handleInput(event) {
			const value = event.target.value;
			this.currentValue = event.target.value;
			this.$emit('input', value);
		},
		clickClear() {
		const value = '';
		this.currentValue = value;
		this.$emit('input', value);
		}
	},
	computed: {
		showClear: function() {
			var isEmpty = (this.currentValue == "" || this.currentValue == null) ? true : false;
			return (!isEmpty && this.isFocused)
		}
	}
}
</script>
