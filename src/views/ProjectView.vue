<script setup>
	import SidebarPanel from '../components/SidebarPanel.vue';
	import TopbarPanel from '../components/TopbarPanel.vue';
	import Footer from '../components/Footer.vue';
	import { projects } from '../utils/db';

</script>

<template>
	<div class="container-fluid">
		<SidebarPanel></SidebarPanel>

		<div class="main-content-wrapper">
			<div class="container-fluid">

				<TopbarPanel></TopbarPanel>

				<section class="page-intro-section section has-profile-image mx-auto ">
					<div class="profile-holder text-center">
						<img class="profile-pic rounded-circle" src="@/assets/images/profile.png" alt="image">
					</div>
					<div class="intro-holder">
						<h2 class="intro-name text-center">My Projects</h2>
						<div class="profile-intro text-center limit-max-width mx-auto">
							<p class="mb-4">
								Below is a showcase of my completed projects. Let's arrange a free consultation if you're looking for a dedicated partner for your upcoming project. I'm excited to learn about your project objectives and discuss how my experience can benefit your efforts.
							</p>
						</div>
					</div>
				</section>
		
				<section class="projects-section section mx-auto">
					<div class="row justify-content-center gx-lg-5">
						
						<div v-for="project in projects" class="project-item col-12 col-md-6 col-lg-12 mb-5">
							<div class="project-item-inner row">
								<div class="col-12 col-lg-5 col-xl-4">
									<img class="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" :src="project.thumbnail" :alt="project.name">
								</div>
								<div class="col-12 col-lg-7 col-xl-8">
									<h3 class="title">
										<a :href="project.link">{{ project.name }}</a>
									</h3>
									<div class="intro mb-3">{{ project.description }}</div>
									
									<h4 class="subtitle">Tech Stack:</h4>
									<ul class="tech-stack list-inline" v-if="project.stacks.length">
										<li class="list-inline-item" v-for="stack in project.stacks">
											<img class="rounded" :src="stack" />
										</li>
									</ul>
									
									<a class="more-link" :href="project.link" target="_blank">
										View Details <span class="link-arrow"><i class="bi bi-arrow-right"></i></span>
									</a>
								</div>
							</div>
						</div>

					</div>
				</section>
			</div>
		</div>
	</div>

	<Footer/>
</template>
