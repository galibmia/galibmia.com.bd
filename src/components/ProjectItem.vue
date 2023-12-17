<script setup>
const {project} = defineProps(['project'])
</script>

<template>
	<div class="col-12 col-md-6 col-lg-4">
		<div class="card">
			<img :src="project.thumbnail" class="card-img-top" :alt="project.name">
			<div class="card-body px-0">
				<h5 class="card-title">
					<a :href="project.link">{{ project.name }}</a>
				</h5>
				<!-- <p class="card-text mb-1"> -->
					<!-- {{ project.description }} -->
				<!-- </p> -->
				<div>
					<a class="card-link more-link" :href="project.link" target="_blank">
						View more <span class="link-arrow"><i class="bi bi-arrow-right"></i></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>