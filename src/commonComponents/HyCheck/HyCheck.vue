<template lang="html">
		<div class="hy-check-group"> 
			<label class="hy-ui-label" @click="click()">
				<div class="hy-ui-label-hd">
					<!-- <input type="radio" name="" value="" class="hy-ui-label-hd-input"> -->
					<span class="hy-ui-label-hd-icon" 
					:class="[
						isChecked ? 'checkedIcon' : 'unCheckedIcon'
					]">
					</span>
				</div>
				<div class="hy-ui-label-bd"> 
					<slot></slot> 
				</div>
			</label>
		</div>
</template>

<script>
export default {
	props: {
		value: '',
		label: {
			type: String,
			default: function() {
				return '';
			}
		}
	},
	methods: {
		click() {
			
			this.$emit('input', this.label);
		}
	},
	computed: {
		isChecked() {
			if (this.value == this.label) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.checkedIcon{
    background-image: url('~@/assets/checked.png');
  }
  .unCheckedIcon{
    background-image: url('~@/assets/unChecked.png');
  }
	.hy-check-group{
		padding: vm(5) 0;
		.hy-ui-label{
				display: flex;
				line-height: vm(40);
				height: vm(40);
				font-size: vm(16);
				&-hd{
					display: flex;
					align-self: center;
					justify-content: center;
					&-input{
						position: absolute;
						left: 0;
					}
					&-icon{
						width: vm(18);
						height: vm(18);
						background-size: 100% 100%;
						display: inline-block;
					}
				}
				&-bd{
					padding-left: vm(5);
				}
		}
	}
</style>
