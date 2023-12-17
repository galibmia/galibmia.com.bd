<script setup>
	import ProjectItem from "../components/ProjectItem.vue";
	import { projects } from "../utils/db";
</script>

<template>
	<section class="featured-projects-section section mx-auto">
		<h3 class="section-heading mb-4">Featured Projects</h3>

		<div class="section-intro mb-5 limit-max-width mx-auto text-md-center">
			Below is a showcase of my completed projects. Let's arrange a free consultation if you're looking for a dedicated partner for your upcoming project. I'm excited to learn about your project objectives and discuss how my experience can benefit your efforts.
		</div>

		<div class="featured-project-list container">
			<div class="row justify-content-center gy-4">
				<template v-for="project in projects">
					<ProjectItem :project="project"/>
				</template>
			</div>

			<div class="section-cta text-center mt-3">
				<router-link class="btn btn-secondary theme-btn-cta" :to="{name: 'project'}">
					More Projects
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
					</svg>
				</router-link>
			</div>
		</div>
	</section>
</template>
