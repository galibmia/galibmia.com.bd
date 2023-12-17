<script setup>
	import SidebarPanel from '../components/SidebarPanel.vue';
	import TopbarPanel from '../components/TopbarPanel.vue';
	import Footer from '../components/Footer.vue';
	import { skills } from '../utils/db';

	const customSkills = skills.filter((skill) => {
		return skill.status;
	});

	import { user, experiences } from '../utils/db';

</script>

<template>
	<div class="container-fluid">
		<SidebarPanel></SidebarPanel>

		<div class="main-content-wrapper">
			<div class="container-fluid">
				<TopbarPanel></TopbarPanel>

				<div class="resume-wrapper mx-auto rounded-2">
					<div class="resume-header px-4 px-lg-5">
						<div class="resume-profile-holder text-center">
							<img class="resume-profile-pic rounded-circle" src="@/assets/images/profile.png" alt="image">
							
							<h2 class="resume-name text-uppercase">{{ user.name }}</h2>
							<div class="resume-role-title text-uppercase">{{ user.designation }}</div>
							<div class="resume-contact mt-4">
								<ul class="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
									<li class="list-inline-item me-md-3 me-lg-5">
										<a href="https://api.whatsapp.com/send?phone=8801782847366">
											<i class="resume-contact-icon bi bi-whatsapp me-2"></i> {{ user.phone }}
										</a>
									</li>
									<li class="list-inline-item me-md-3 me-lg-5">
										<a :href="'mailto:' + user.email">
											<i class="resume-contact-icon bi bi-envelope me-2"></i> {{ user.name }}
										</a>
									</li>
									<li class="list-inline-item me-lg-5">
										<a :href="user.website.link">
											<i class="resume-contact-icon bi bi-globe me-2"></i> {{ user.website.label }}
										</a>
									</li>
								</ul>
							</div><!--//resume-contact-->
						</div><!--//profile-holder-->
					</div><!--//resume-header-->
					
					<div class="resume-body p-4 p-lg-5">
						<div class="row">
							<div class="col-main col-12 col-lg-8 pe-lg-4">
								<section class="resume-summary-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-2 py-lg-3"><i class="resume-section-heading-icon bi bi-person me-2"></i>About Me</h3>
									<div class="resume-summary-desc">
										Hello, I'm a dedicated full-stack software engineer with a strong background in web development, boasting over 4 years of experience in PHP, Laravel, Vue.js, React.js, and JavaScript. My journey in the tech world has been fueled by a passion for creating innovative solutions and tackling complex challenges.
									</div>
								</section>
								
								<hr>
								
								<section class="resume-experience-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i class="resume-section-heading-icon bi bi-briefcase me-2"></i>Work Experience</h3>
									<div class="resume-timeline position-relative">

										<article v-for="experience in experiences" class="resume-timeline-item position-relative pb-5">
											<div class="resume-timeline-item-header mb-2">
												<div class="resume-position-meta d-flex justify-content-between mb-1">
													<div class="resume-position-time">{{ experience.period }}</div>
													<div class="resume-company-name">
														<a :href="experience.website" target="_blank">{{ experience.company }}</a>
													</div>
												</div>
												<h3 class="resume-position-title mb-1">{{ experience.designation }}</h3>
											</div><!--//resume-timeline-item-header-->
											<div class="resume-timeline-item-desc" v-if="experience.responsibilities.length">
												<ul class="resume-timeline-list">
													<li v-for="responsibility in experience.responsibilities">
														{{ responsibility }}
													</li>
												</ul>
											</div><!--//resume-timeline-item-desc-->
										</article><!--//resume-timeline-item-->

									</div><!--//resume-timeline-->
								</section><!--//resume-experience-section-->
							</div><!--//col-8-->

							<div class="col-12 col-lg-4 ps-lg-4">
								<section class="resume-skills-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
										<i class="resume-section-heading-icon bi bi-gear me-2"></i>Tech Stack
									</h3>
									
									<ul class="list-unstyled">
										<li class="mb-2" v-for="skill in customSkills">
											<div class="resume-skill-name">{{ skill.name }}</div>
											<div class="progress resume-progress" role="progressbar" :aria-valuenow="skill.score" aria-valuemin="0" aria-valuemax="100">
												<div class="progress-bar resume-progress-bar" :style="{width: skill.score + '%'}"></div>
											</div>
										</li>
									</ul>
								</section>
								
								<hr>
								
								<section class="resume-skills-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i class="resume-section-heading-icon bi bi-person-gear me-2"></i>Soft Skills</h3>
									<ul class="list-inline">
										<li class="list-inline-item">
											<span class="badge resume-skill-badge">Leadership</span>
										</li>
										<li class="list-inline-item">
											<span class="badge resume-skill-badge">Project Management</span>
										</li>
										<li class="list-inline-item">
											<span class="badge resume-skill-badge">DevOps</span>
										</li>
									</ul>
								</section>
								
								<hr>
								<section class="resume-educate-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i class="resume-section-heading-icon bi bi-book me-2"></i>Education</h3>
									<ul class="list-unstyled">
										<li class="mb-2">
											<div class="resume-degree font-weight-bold">BSC in Computer Science</div>
											<div class="resume-degree-org">Green University</div>
											<div class="resume-degree-time">2018 - 2022</div>
										</li>
										<li>
											<div class="resume-degree font-weight-bold">Diploma In Computer</div>
											<div class="resume-degree-org">Comilla Polytechnic Institute</div>
											<div class="resume-degree-time">2012 - 2017</div>
										</li>
									</ul>
								</section>
								
								<hr>
								
								<section class="resume-lang-section resume-section">
									<h3 class="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i class="resume-section-heading-icon bi bi-translate me-2"></i>Languages</h3>
									 <ul class="list-unstyled resume-lang-list">
										<li class="mb-2">
											<div class="resume-lang-name">Bangla</div>
											<div class="resume-level-indicator row gx-0 flex-nowrap">
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item"></span></div>
												<div class="col"><span class="item"></span></div>
											</div>
										</li>
										 <li class="mb-2">
											<div class="resume-lang-name">English</div>
											<div class="resume-level-indicator row gx-0 flex-nowrap">
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item"></span></div>
												<div class="col"><span class="item"></span></div>
												<div class="col"><span class="item"></span></div>
											</div>
										</li>
										<li class="mb-2">
											<div class="resume-lang-name">Hindi</div>
											<div class="resume-level-indicator row gx-0 flex-nowrap">
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item item-full"></span></div>
												<div class="col"><span class="item"></span></div>
												<div class="col"><span class="item"></span></div>
												<div class="col"><span class="item"></span></div>
											</div>
										</li>
									</ul>
								</section>
							</div><!--//col-side-->
						</div><!--//row-->
					</div><!--//resume-body-->
				</div><!--//resume-wrapper-->
			</div>
		</div>
	</div>

	<Footer></Footer>
</template>
