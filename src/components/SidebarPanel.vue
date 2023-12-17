<script setup>
import { sidebarMenus } from '../utils/db';
import { sidebarMenuStore } from '../stores';

const menuStore  = sidebarMenuStore();
</script>

<template>
	<div class="side-panel position-relative">
		<nav class="navbar">
			<div class="offcanvas offcanvas-start d-flex" tabindex="-1"  :class="{'show': menuStore.showSidebar}">
				<div class="offcanvas-body d-flex align-items-center">
					<ul class="main-nav navbar-nav text-center">
						<li class="nav-item" v-for="sidebarMenu in sidebarMenus">
							<router-link :to="{name: sidebarMenu.name}" v-if="sidebarMenu.active" class="nav-link d-flex flex-column">
								<span class="icon-holder">
									<i :class="'fa-solid ' + sidebarMenu.icon"></i>
								</span>
								<span class="nav-text">{{ sidebarMenu.label }}</span>
							</router-link>
						</li>

						<li class="nav-item nav-item-close">
							<button aria-label="Close" class="btn-close" type="button">
								<i class="bi bi-x"></i>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
