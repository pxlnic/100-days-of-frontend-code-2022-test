<template>
	<transition name="slide">
		<header
			class="app-nav transition-all duration-300 overflow-hidden"
			:class="{ open: open }"
		>
			<nav class="flex flex-col transition-all overflow-hidden">
				<RouterLink to="/todo-list" class="w-full">
					<span class="flex relative items-center w-full mb-4">
						<FaIcon
							fillColor="fill-white"
							width="w-8"
							type="circleCheck"
						/>
						<p class="hide-text">Todos</p>
					</span>
				</RouterLink>
				<RouterLink to="/todo-stats">
					<span class="flex relative items-center w-full mb-4">
						<FaIcon
							fillColor="fill-white"
							width="w-8"
							type="stats"
						/>
						<p class="hide-text">Stats</p>
					</span>
				</RouterLink>
				<RouterLink to="/settings">
					<span class="flex relative items-center w-full">
						<FaIcon
							fillColor="fill-white"
							width="w-8"
							type="gear"
						/>
						<p class="hide-text">Settings</p>
					</span>
				</RouterLink>
			</nav>
			<button
				class="nav-toggle"
				@click.prevent="toggleNav"
				:class="{ rotate: open }"
			>
				<FaIcon
					:class="{ rotate: open }"
					fillColor="fill-white"
					width="w-6"
					type="doubleArrow"
				/>
			</button>
		</header>
	</transition>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import FaIcon from "../UI/faIcon.vue";
const open = ref(false);
const navWidth = computed(() => {
	if (open) {
		return "md:w-[250px]";
	} else {
		return "md:w-min";
	}
});
function toggleNav() {
	open.value = !open.value;
}
</script>

<style scoped>
.app-nav {
	@apply w-full max-h-0 top-0 left-0 py-8 px-4 bg-purple-900 text-white text-2xl z-20 md:w-24 md:max-h-screen md:h-screen;
}
.app-nav.open {
	@apply max-h-fit md:w-[250px];
}
.app-nav nav {
	@apply -z-50 w-0 max-h-0 duration-300 opacity-0 md:opacity-100 md:z-10 md:max-h-screen md:w-full;
	transition-delay: 0;
}
.app-nav.open nav {
	@apply opacity-100 z-20 max-h-fit w-full;
}
.nav-toggle {
	@apply p-4 absolute top-0 right-0 z-30 md:top-auto md:right-auto md:bottom-0 md:left-0;
}
.nav-toggle svg {
	@apply rotate-90 transition duration-300 md:rotate-0;
}
.nav-toggle svg.rotate {
	@apply -rotate-90 md:rotate-180;
}
svg {
	@apply mx-3;
}
.hide-text {
	@apply absolute left-14 transition duration-300 md:max-w-0 md:opacity-0;
}
.app-nav.open .hide-text {
	@apply md:max-w-full md:opacity-100;
}
.hide-text:hover {
	@apply underline;
}
</style>