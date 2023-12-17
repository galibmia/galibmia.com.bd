<script setup>
	import SidebarPanel from '../components/SidebarPanel.vue';
	import TopbarPanel from '../components/TopbarPanel.vue';
	import UserProfilePanel from '../components/UserProfilePanel.vue';
	import ProjectPanel from '../components/ProjectPanel.vue';
	import TestimonialPanel from '../components/TestimonialPanel.vue';
	import SkillPanel from '../components/SkillPanel.vue';
	import Footer from '../components/Footer.vue';
</script>

<template>
	<div class="container-fluid">
		<SidebarPanel></SidebarPanel>

		<div class="main-content-wrapper">
			<div class="container-fluid">
				<TopbarPanel></TopbarPanel>


				<section class="page-intro-section section has-profile-image mx-auto">
					
					<div class="profile-holder text-center">
						<img class="profile-pic rounded-circle" src="assets/images/profile.png" alt="image">
					</div><!--//profile-holder-->
					<div class="intro-holder">
						<h2 class="intro-name text-center">My Blog</h2>
						<div class="profile-intro text-md-center  limit-max-width mx-auto">
							<p>Blog intro goes here. This is a space for me to share my journey as a software developer lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						<div class="section-cta text-center mt-4">
							<a class="btn btn-secondary theme-btn-cta" href="projects.html">View My Projects<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg></a>
						</div><!--//section-cta-->
					</div><!--//intro-holder-->
					
				</section><!--//page-intro-section-->
				
				<div class="blog-list-wrapper mx-auto">
					<div class="featured-blog-posts-wrapper text-center mb-5">
						<div class="featured-post-item post-item rounded row g-0 mx-auto">
							
							<div class="post-item-image col-12 col-md-3 col-lg-4 rounded-start-2">	
							</div><!--//post-item-image-->
							
							<div class="post-item-body col-12 col-md-9 col-lg-8 text-start">
								<div class="content-holder-inner">
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>How To Write A Software Developer Resume</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Featured blog post excerpt goes here sed faucibus placerat quam, et congue libero mollis congue. In placerat lectus et diam ornare dignissim. Etiam vulputate non felis egestas euismod. Donec in purus sed tortor dignissim pharetra ut vel turpis...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">appdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">tutorial</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">react</span></li>
										</ul>
									</div><!--//post-tags-->
								</div><!--//content-holder-inner-->
								<div class="post-item-footer">
									<div class="post-meta d-flex justify-content-between">    
										<div class="meta-single d-flex">19 Apr</div>       
										<ul class="meta-list list-inline d-flex mb-0">                                       
											<li class="list-inline-item post-time me-2">8 min read</li>
											<li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>28
											</li>
										</ul><!--//meta-list-->               	
									</div><!--post-meta-->
								</div><!--//post-item-inner-footer-->
								
							</div><!--//post-item-body-->
							
							<a class="link-mask" href="blog-post.html"></a>
							
						</div><!--//featured-blog-post-->
					</div>
					<div class="row g-5 justify-content-center">
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner d-flex flex-column">
								<div class="post-item-body">
									
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>How to Build a React Project with Create React App</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">appdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">tutorial</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">react</span></li>
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer mt-auto">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">26 Mar</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-2">3 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>4
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
						
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner">
								<div class="post-item-body">
									 <h3 class="post-title d-flex justify-content-between align-items-top"><span>Best Resources To Learn Python From Beginner to Advanced</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>

									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">webdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">resource</span></li>
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">18 Feb</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-3">2 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-1"></i>8
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
						
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner d-flex flex-column">
								<div class="post-item-body">
									
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>Top Side Hustles for Software Engineers</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">entrepreneurship</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">webdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">appdev</span></li>
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer mt-auto">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">5 Jan</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-3">4 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>3
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
						
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner d-flex flex-column">
								<div class="post-item-body">
									
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>Make mobile apps with React and Typescript</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">react</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">typescript</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">appdev</span></li>
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer mt-auto">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">15 Dec</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-3">10 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>21
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
						
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner d-flex flex-column">
								<div class="post-item-body">
									
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>Blog Post Lorem Ipsum</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">webdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">javascript</span></li>
											
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer mt-auto">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">2 Oct</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-3">3 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>1
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
						
						<div class="post-item col-12 col-md-6 col-lg-6">
							<div class="post-item-inner d-flex flex-column">
								<div class="post-item-body">
									
									<h3 class="post-title d-flex justify-content-between align-items-top"><span>Blog Post Lorem Ipsum</span><span class="title-icon-holder"><i class="bi bi-arrow-right-short"></i></span></h3>
									<p class="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
									<div class="post-tags my-3">
										<ul class="list-inline">
											<li class="list-inline-item"><span class="badge tag-badge">webdev</span></li>
											<li class="list-inline-item"><span class="badge tag-badge">devops</span></li>
											
										</ul>
									</div><!--//post-tags-->
								</div><!--//post-item-body-->
								
								<div class="post-item-footer mt-auto">
									<div class="meta d-flex justify-content-between">    
									   <div class="meta-single d-flex">19 Aug</div>       
									   <ul class="meta-list list-inline d-flex mb-0">                                       
										   <li class="list-inline-item post-time me-3">5 min read</li>

										   <li class="list-inline-item  post-comments-count">
											   <i class="bi bi-chat-square-text-fill me-2"></i>0
										   </li>
									   </ul><!--//meta-list-->               	
								   </div><!--meta-->
								</div>
								<a class="link-mask" href="blog-post.html"></a>
							</div><!--//post-item-inner-->
						</div><!--//post-item-->
					</div><!--//row-->
					
		
					<nav class="theme-pagination-nav py-5">
						<ul class="pagination justify-content-center">
					
							<li class="page-item disabled">
								<a class="page-link" href="#">
									<span aria-hidden="true">&laquo;</span>
									<span class="sr-only">Previous</span>
								</a>
							</li>
							<li class="page-item"><a class="page-link active" aria-current="page" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item">
								<a class="page-link" href="#">
									<span aria-hidden="true">&raquo;</span>
									<span class="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav><!--//theme-pagination-nav-->
					
					
				</div><!--//blog-list-wrapper-->
				
				<section class="leadgen-section section mx-auto">
   
					   <h3 class="section-heading text-start text-md-center text-highlight"> Need Help With Your Project?</h3>
					   <div class="intro text-md-center">Lead generation intro goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat egestas dui, quis ullamcorper massa pellentesque quis. </div>
						<div class="text-center mt-4">
									<a class="btn btn-secondary" href="contact.html">Get In Touch <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
</svg></a>
						</div>
					
			   </section><!--//leadgen-section-->

			</div>
		</div>
	</div>

	<Footer></Footer>
</template>
