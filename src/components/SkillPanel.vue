<script setup>
	import { skills } from '../utils/db';
</script>

<template>
	<section class="skills-section section mx-auto mb-0">
		<h3 class="section-heading mb-4">Skills &amp; Experiences</h3>
		<hr>

		<div class="section-intro mb-5 text-md-center">
			Hello, I'm Rostom Ali, a software engineer specializing in Laravel, Vue.js, React, and NodeJs. In Laravel, I excel in building robust web applications, implementing RESTful APIs, and optimizing performance. My Vue.js expertise includes creating dynamic and responsive user interfaces, utilizing Vuex for state management, and seamless integration with backend APIs. I also have strong React skills, developing efficient and interactive interfaces, employing component-based architecture, and ensuring smooth data flow through API integrations. My dedication to clean and efficient code, along with attention to detail, makes me a valuable developer for impactful web solutions.
		</div><!--//section-intro-->

		<div class="row tech-list justify-content-center align-items-center">
			<div v-for="skill in skills" class="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
				<img class="rounded" :src="skill.path" :alt="skill.name">
			</div>
		</div><!--//tech-list-->
	</section><!--//skills-section-->
</template>
