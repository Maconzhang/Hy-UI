<template lang="html">
  <div class="header">
    <div class="header-1">
      <div class="log">
    	</div>
  		<div class="rightBtn" @click="clickMenu" :class="{ 'rightBtn-active' :isShowMenu == true}">
  		</div>
    </div>
		<transition name="breadcrumb">
			<div class="menu" v-if="isShowMenu">
				<div class="menu-item menu-item-active" v-for="(item, index) in menuList" @click="goRoute(item.routeValue)">
					{{ item.label }}
					<div class="icon" v-if="item.routeValue == $route.path">
					</div>
				</div>
			</div>
		</transition>
  </div>
</template>

<script>

export default {
	data() {
		return {
			menuList: [
				{ label: '首页', routeValue: '/' },
				{ label: '小遛电单车', routeValue: '/liuBike' },
				{ label: '关于我们', routeValue: '/aboutUs'},
			],
			isShowMenu: false,
		}
	},
	methods: {
		clickMenu() {
			this.isShowMenu = !this.isShowMenu;
		},
		goRoute(param) {
			this.$router.push(param);
      this.clickMenu();
		}
	}
}
</script>

<style lang="scss" scoped>
@mixin bck{
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
	.header{
		width: 100vw;
		height: vm(50);
    position: relative;
    .header-1{
      z-index: 12;
      position: relative;
      background: #222222;
      width: 100vw;
  		height: vm(50);
    }
		.log{
      @include bck;
			margin-left: vm(20);
			width: vm(86);
			height: vm(50);
      position: absolute;
			background-image: url('~@/assets/govWeb/logo@3x.png');
		}

		.rightBtn{
      @include bck;
			width: vm(50);
			height: vm(50);
			background-image: url('~@/assets/govWeb/choice@3x.png');
			position: absolute;
			right: 0;
			top: 0;
		}
		.rightBtn-active{
			background-image: url('~@/assets/govWeb/close@3x.png');
		}

		.menu{
			height: vm(150);
			padding: 0 vm(20);
      box-sizing: border-box;
			background-color: rgba(255,255,255,0.8);
      z-index: 10;
      position: absolute;
      width: 100vw;
			.menu-item{
				height: vm(50);
				line-height: vm(50);
				font-size: vm(14);
				color: #222222;
				letter-spacing: vm(0.3);
				border-bottom: 0.5px solid #222222;
				position: relative;
				.icon{
          @include bck;
					background-image: url('~@/assets/govWeb/right@3x.png');
					width: vm(50);
					height: vm(50);
					position: absolute;
					right: 0;
					top: 0;
				}
			}
			.menu-item-active{
				letter-spacing: vm(0.39);
				font-size: vm(18);
			}
		}
	}
</style>
