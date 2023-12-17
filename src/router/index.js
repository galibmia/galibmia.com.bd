import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import BlogView from '../views/BlogView.vue'
import BlogItemView from '../views/BlogItemView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/projects',
			name: 'project',
			component: ProjectView
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogView
		},
		{
			path: '/blog/:slug',
			name: 'blog.item',
			component: BlogItemView
		},
		{
			path: '/resume',
			name: 'resume',
			component: ResumeView
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView
		}
	]
})

export default router
