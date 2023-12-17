<script setup>
	import SidebarPanel from '../components/SidebarPanel.vue';
	import TopbarPanel from '../components/TopbarPanel.vue';
	import Footer from '../components/Footer.vue';
	import { socialLinks, user } from '../utils/db';
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
						<h2 class="intro-name text-center">Get In Touch</h2>
						<div class="contact-intro text-md-center limit-max-width mx-auto">
							<p>Thank you for reaching out to us! We appreciate your interest and would love to hear from you. Please use the form below to get in touch, and we will do our best to respond to your inquiry as soon as possible.</p>
						</div>
						
						<ul class="social-list list-inline mx-auto d-block d-lg-none py-3 text-center">
							<li v-for="socialLink in socialLinks" class="list-inline-item me-1 me-lg-2">
								<a v-if="socialLink.active" :href="socialLink.link" target="_blank">
									<i :class="'fa-brands fa-fw ' + socialLink.icon"></i>
								</a>
							</li>
						</ul>
					</div>
					
					<div class="contact-form-wrapper pt-3">
						<div class="resume-contact mt-4">
							<ul class="resume-contact-list list-unstyled list-inline mb-0 text-center">
								<li class="list-inline-item me-md-3 me-lg-5">
									<a href="https://api.whatsapp.com/send?phone=8801782847366">
										<i class="resume-contact-icon bi bi-whatsapp me-2"></i> {{ user.phone }}
									</a>
								</li>
								<li class="list-inline-item me-md-3 me-lg-5">
									<a :href="'mailto:' + user.email">
										<i class="resume-contact-icon bi bi-envelope me-2"></i> {{ user.email }}
									</a>
								</li>
								<li class="list-inline-item me-lg-5">
									<a :href="user.website.link">
										<i class="resume-contact-icon bi bi-globe me-2"></i> {{ user.website.label}}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>

	<Footer/>
</template>
