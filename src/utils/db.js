export const user = {
	name: "Md Rostom Ali",
	designation: "FULLSTACK DEVELOPER",
	email: "rostomali4444@gmail.com",
	phone: "+8801782847366",
	website: {
		label: "www.rostom.xyz",
		link: "https://rostom.xyz",
	},
	image: "",
	about: "Hello, I'm a dedicated full-stack software engineer with a strong background in web development, boasting over 4 years of experience in PHP, Laravel, Vue.js, React.js, and JavaScript. My journey in the tech world has been fueled by a passion for creating innovative solutions and tackling complex challenges.",
	project: '',
	hireMeLink: null,
}

export const socialLinks = [
	{
		label: "Twitter",
		icon: "fa-twitter",
		link: "https://twitter.com/engrrostomali",
		active: true
	},
	{
		label: "Github",
		icon: "fa-github",
		link: "https://github.com/imrostom",
		active: true
	},
	{
		label: "Linkedin",
		icon: "fa-linkedin",
		link: "https://linkedin.com/in/md-rostom-ali",
		active: true
	},
	{
		label: "Stack Overflow",
		icon: "fa-stack-overflow",
		link: "#",
		active: false
	},
	{
		label: "Medium",
		icon: "fa-medium",
		link: "https://medium.com/@rostomali",
		active: true
	}
];

export const sidebarMenus = [
	{
		name: "about",
		label: "About",
		icon: "fa-circle-user",
		active: true
	},
	{
		name: "project",
		label: "Projects",
		icon: "fa-briefcase",
		active: true
	},
	{
		name: "blog",
		label: "Blog",
		icon: "fa-pen-fancy",
		active: false
	},
	{
		name: "resume",
		label: "Resume",
		icon: "fa-file-lines",
		active: true
	},
	{
		name: "contact",
		label: "Contact",
		icon: "fa-comment-dots",
		active: true
	}
];

import phpIcon  from "@/assets/images/tech-icons/php.svg";
import laravelIcon  from "@/assets/images/tech-icons/laravel.svg";
import javascriptIcon  from "@/assets/images/tech-icons/javascript.svg";
import vueIcon  from "@/assets/images/tech-icons/vue.svg";
import reactIcon  from "@/assets/images/tech-icons/react.svg";
import nodejsIcon  from "@/assets/images/tech-icons/nodejs.svg";
import mysqlIcon  from "@/assets/images/tech-icons/mysql.svg";
import mongodbIcon  from "@/assets/images/tech-icons/mongodb.svg";
import redisIcon  from "@/assets/images/tech-icons/redis.svg";
import digitalOceanIcon  from "@/assets/images/tech-icons/digitalocean.svg";
import gcpIcon  from "@/assets/images/tech-icons/gcp.svg";
import codeigniterIcon  from "@/assets/images/tech-icons/codeigniter.svg";
import html5Icon  from "@/assets/images/tech-icons/html5.svg";
import bootstrap5Icon  from "@/assets/images/tech-icons/bootstrap5.svg";

export const skills = [
	{
		name: 'PHP',
		path: phpIcon,
	    score: 80,
		status: true,
	},
	{
		name: 'Laravel',
		path: laravelIcon,
	    score: 80,
		status: true,
	},
	{
		name: 'Javascript',
		path: javascriptIcon,
	    score: 70,
		status: true,
	},
	{
		name: 'Vue',
		path: vueIcon,
	    score: 80,
		status: true,
	},
	{
		name: 'React',
		path: reactIcon,
	    score: 70,
		status: true,
	},
	{
		name: 'NodeJs',
		path: nodejsIcon,
	    score: 60,
		status: true,
	},
	{
		name: 'Mysql',
		path: mysqlIcon,
	    score: 80,
		status: true,
	},
	{
		name: 'MongoDB',
		path: mongodbIcon,
	    score: 60,
		status: false,
	},
	{
		name: 'Redis',
		path: redisIcon,
	    score: 80,
		status: true,
	},
	{
		name: 'DigitalOcean',
		path: digitalOceanIcon,
	    score: 70,
		status: false,
	},
	{
		name: 'GCP',
		path: gcpIcon,
	    score: 70,
		status: true,
	},
	{
		name: 'Codeigniter',
		path: codeigniterIcon,
	    score: 90,
		status: true,
	},
	{
		name: 'HTML5',
		path: html5Icon,
	    score: 80,
		status: false,
	},
	{
		name: 'Bootstrap',
		path: bootstrap5Icon,
    	score: 80,
		status: false,
	}
];


export const projects = [
	{
		name: 'Easy Jobs - Easy Solution For Remote Hiring',
		thumbnail: 'https://easy.jobs/wp-content/uploads/2020/04/easyjobs-hero-device.png.webp',
		description: 'easy.jobs: Turbocharge your hiring! Whether remote or local, our advanced recruiting solution simplifies the entire process. Streamline recruitment effortlessly with everything you need for accelerated and hassle-free hiring.',
		link: 'https://easy.jobs',
		stacks: [
			phpIcon,
			laravelIcon,
			javascriptIcon,
			vueIcon,
			mysqlIcon,
			redisIcon,
			gcpIcon
		]
	},
	{
		name: 'FoodBank Multi Restaurant App with Admin & Restaurant Panel',
		thumbnail: 'https://codecanyon.img.customer.envatousercontent.com/files/479509219/fb_banner.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=59966103ecf3fe67e6af63dbc294dc9b',
		description: 'The FoodBank: Simplifying food orders! Restaurants create accounts, users order easily, track, and pay with a click. Committed to an excellent user experience, The FoodBank team focuses on building the best eCommerce solution for restaurant owners.',
		link: 'https://codecanyon.net/item/foodbank-all-in-one-multi-restaurant-food-ordering-management-system/35543239?',
		stacks: [
			phpIcon,
			laravelIcon,
			javascriptIcon,
			mysqlIcon,
			html5Icon,
			bootstrap5Icon
		]
	},
	{
		name: 'Green Invoice - The Invoice Management System',
		thumbnail: 'https://landingpage.greensoftbd.net/gim/assets/img/banner.jpg',
		description: 'Green Invoice: A robust invoice management system with a user-friendly interface and built-in notifications for easy customer management. This web-based application streamlines customer invoicing, making Green Invoice your best choice for efficient invoice management.',
		link: 'https://codecanyon.net/item/green-invoice-the-invoice-management-system/28907411',
		stacks: [
			phpIcon,
			laravelIcon,
			javascriptIcon,
			vueIcon,
			mysqlIcon,
			redisIcon,
			gcpIcon
		]
	},
	{
		name: 'Inilabs School Express : School Management System',
		thumbnail: 'https://codecanyon.img.customer.envatousercontent.com/files/451789235/school_banner.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=02b4ff2538b2dd5daa9bbcb0c4ac905a',
		description: 'iNiLabs School Management System: A user-friendly and cost-effective web-based solution for educational institutions worldwide. Packed with features, it seamlessly handles everything from admissions to exams, fee collection to result declaration, meeting the diverse needs of academic institutes.',
		link: 'https://codecanyon.net/item/inilabs-school-management-system-express/11630340',
		stacks: [
			phpIcon,
			codeigniterIcon,
			javascriptIcon,
			mysqlIcon,
			gcpIcon
		]
	},
	{
		name: 'iTest - Quiz & Online Examination System',
		thumbnail: 'https://codecanyon.img.customer.envatousercontent.com/files/472457796/itest_web_banner.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=6e73794381d17084bbeb2ee05314dccd',
		description: 'iTest: Top online quiz and exam app for educators. Create, share, and manage quizzes with ease. Powerful assessment tools for evaluating student knowledge and skills across subjects.',
		link: 'https://codecanyon.net/item/itest-complete-online-examination-system/20620179',
		stacks: [
			phpIcon,
			codeigniterIcon,
			javascriptIcon,
			mysqlIcon,
			gcpIcon
		]
	},
	{
		name: 'Green LMS - The Library Management System',
		thumbnail: 'https://codecanyon.img.customer.envatousercontent.com/files/458948075/banner.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=490eb36c4885864814417ded29cb2e44',
		description: 'Green LMS is a powerfull library management with 25+ features, 6+ reports. Web-based for easy book management, issuing, fines, and payments. Powerful reporting for comprehensive library insights. The best tool for efficient library management.',
		link: 'https://codecanyon.net/item/green-lms-the-library-management-system/25602126',
		stacks: [
			phpIcon,
			codeigniterIcon,
			javascriptIcon,
			mysqlIcon,
			gcpIcon
		]
	}
];

export const experiences = [
	{
		company: "WpDeveoper",
		website: "https://wpdeveloper.com/",
		period: "03 Oct 23 - Present",
		designation: "PHP Developer",
		responsibilities: [
			"Develop and secure RESTful APIs.",
			"Develop and maintain web applications using PHP and related technologies.",
			"Optimize database structures and queries for performance.",
			"Collaborate with cross-functional teams and mentor junior developers.",
			"Troubleshoot and debug issues in existing code.",
			"Integrate third-party APIs and web services.",
			"Write and execute unit tests and integration tests.",
			"Write clean, well-documented PHP code.",
			"Work with DevOps teams to ensure smooth deployment and operations."
		]  
	},
	{
		company: "INILABS",
		website: "https://inilabs.net/",
		period: "28 Jan 2018 – 28 Sep 2021",
		designation: "Software Engineer",
		responsibilities: [
			"Developer multiple web application for envatu marketplace",
			"Develop and secure RESTful APIs.",
			"Develop and maintain web applications using PHP and related technologies.",
			"Optimize database structures and queries for performance.",
			"Collaborate with cross-functional teams and mentor junior developers.",
			"Troubleshoot and debug issues in existing code.",
			"Integrate third-party APIs and web services.",
			"Write and execute unit tests and integration tests.",
			"Write clean, well-documented PHP code.",
			"Work with DevOps teams to ensure smooth deployment and operations."
		]
	},
	{
		company: "GreenSoftBd",
		website: "https://greensoftbd.net/",
		period: "16 Dec 2019 – Present",
		designation: "Software Engineer",
		responsibilities: [
			"Developer multiple web application for envatu marketplace",
			"Develop and secure RESTful APIs.",
			"Develop and maintain web applications using PHP and related technologies.",
			"Optimize database structures and queries for performance.",
			"Collaborate with cross-functional teams and mentor junior developers.",
			"Troubleshoot and debug issues in existing code.",
			"Integrate third-party APIs and web services.",
			"Write and execute unit tests and integration tests.",
			"Write clean, well-documented PHP code.",
		]
	}
];