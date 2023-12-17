import { ref } from 'vue'
import { defineStore } from 'pinia'

export const themeModeStore = defineStore('themeMode', () => {
	const mode = ref('dark-mode')

	const switchThemeMode = () => {
		mode.value = mode.value === 'light-mode' ? 'dark-mode' : 'light-mode';
	}

	return { mode, switchThemeMode }
})

export const sidebarMenuStore = defineStore('sidebarMenu', () => {
	const showSidebar = ref(true)

	const toggleSidebar = () => {
		showSidebar.value = showSidebar.value ? false : true;
	}

	return { showSidebar, toggleSidebar }
})