<template lang="html">
  <div class="hy-input">
		<template>
			<input
			:type="type"
			:disabled="disabled"
			:readonly="readonly"
			:value="currentValue"
      :placeholder="placeholder"
			@blur="handleBlur"
			@focus="handleFocus"
			@input="handleInput">
			<span class="hy-input-suffix" v-if="showClear && !showCheck" @click="clickClear">
				<i class="iconfont icon-delete"></i>
			</span>
      <span class="hy-input-getCheck" v-if="showCheck"  @click="getCheckNumber">
        {{ isGetNummber ? (checkedNumber + '秒后再获取') : '获取验证码' }}
			</span>
		</template>
  </div>
</template>

<script>
export default {
	props: {
		value: [String, Number],
    placeholder: String,
		disabled: Boolean,
		readonly: Boolean,
    isGetNummber: false,
    maxCheckNumLen: 6,
    showCheck: {
      type: Boolean,
      default: function() {
        return false
      }
    },
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
			isFocused: false,
      checkedNumber: 60
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
			var value = event.target.value;
      if (this.showCheck) {
        value = value.slice(0,6);
        event.target.value = value;
      }
			this.currentValue = event.target.value;
			this.$emit('input', value);
		},
		clickClear() {
  		const value = '';
  		this.currentValue = value;
  		this.$emit('input', value);
		},
    getCheckNumber() {
      if (!this.isGetNummber) this.$emit('sendCheckNumber')
    }
	},
	computed: {
		showClear: function() {
			var isEmpty = (this.currentValue == "" || this.currentValue == null) ? true : false;
			return (!isEmpty && this.isFocused)
		}
	},
  watch: {
    isGetNummber: function(newValue, oldValue) {
      if (newValue) {
        const t = setInterval(()=> {
            this.checkedNumber = this.checkedNumber - 1;
            if (this.checkedNumber == 0) {
                clearInterval(t);
                this.$emit('close')
                this.checkedNumber = 60;
            }
        }, 1000)
      }
    }
  }
}
</script>
