<script setup>
	import TestimonialItem from "../components/TestimonialItem.vue"
</script>

<template>
	<section class="testimonials-section section py-5 mx-auto">
		<div class="container">
			<h3 class="mb-4 text-center section-heading">Clients I Worked With</h3>

			<div class="client-logo-list row d-flex justify-content-center align-items-stretch py-4 gx-2 gx-lg-3">
				<div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
					<div class="logo-holder">
						<img class="logo-image" src="@/assets/images/clients/client-logo-1.svg">
					</div>
				</div>
				
				<div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
					<div class="logo-holder">
						<img class="logo-image" src="@/assets/images/clients/client-logo-2.svg">
					</div>
				</div>

				<div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
					<div class="logo-holder">
						<img class="logo-image" src="@/assets/images/clients/client-logo-3.svg">
					</div>
				</div>

				<div class="logo-item col-4 col-md-3 col-lg-auto mb-3">
					<div class="logo-holder">
						<img class="logo-image" src="@/assets/images/clients/client-logo-4.svg">
					</div>
				</div>
			</div>

			<div class="slider-container text-center px-md-4 px-lg-5">

				<div class="testimonials-slider tiny-slider">
					<TestimonialItem></TestimonialItem>
					<TestimonialItem></TestimonialItem>
					<TestimonialItem></TestimonialItem>
					<TestimonialItem></TestimonialItem>
					<TestimonialItem></TestimonialItem>
					<TestimonialItem></TestimonialItem>
				</div>
				
				<div class="slider-custom-controls d-none d-md-block">
					<div class="prev" data-controls="prev">
						<i class="fas fa-chevron-left"></i>
					</div>
					<div class="next" data-controls="next">
						<i class="fas fa-chevron-right"></i>
					</div>
				</div><!--//slider-custom-controls-->
			</div><!--//slider-container-->

			<div class="section-cta text-center mt-5">
				<a class="btn btn-secondary theme-btn-cta" href="contact.html">
					Get In Touch 
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
					</svg>
				</a>
			</div><!--//section-cta-->
		</div><!--//container-->
	</section><!--//testiomonials-section-->
</template>
