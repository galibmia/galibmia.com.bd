<script setup>
	import SidebarPanel from '../components/SidebarPanel.vue';
	import TopbarPanel from '../components/TopbarPanel.vue';
	import UserProfilePanel from '../components/UserProfilePanel.vue';
	import ProjectPanel from '../components/ProjectPanel.vue';
	import SkillPanel from '../components/SkillPanel.vue';
	import Footer from '../components/Footer.vue';
</script>

<template>
	<div class="container-fluid">
		<SidebarPanel></SidebarPanel>

		<div class="main-content-wrapper">
			<div class="container-fluid">
				<TopbarPanel/>

				<UserProfilePanel/>

				<ProjectPanel/>

				<SkillPanel/>
			</div>
		</div>
	</div>

	<Footer/>
</template>
