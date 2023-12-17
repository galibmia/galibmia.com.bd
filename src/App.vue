<script setup>
import { RouterView } from 'vue-router'
import { themeModeStore, sidebarMenuStore } from './stores'

const themeMode = themeModeStore();
</script>

<template>
	<div :class="themeMode.mode">
		<RouterView />
	</div>
</template>