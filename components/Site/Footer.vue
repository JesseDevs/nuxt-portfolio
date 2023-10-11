<template>
	<footer class="site-footer small-voice">
		<inner-column>
			<nav>
				<ul class="pages">
					<h3>Pages</h3>

					<li>
						<NuxtLink to="/" @click="ui.closeMenu">
							<span>Home</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/#ProjectSection" @click="ui.closeMenu">
							<span>Projects</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/#AboutCard" @click="ui.closeMenu">
							<span>About</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/writing" @click="ui.closeMenu">
							<span>Writing</span>
						</NuxtLink>
					</li>

					<li>
						<NuxtLink to="#ContactPage" @click="ui.closeMenu">
							<span>Contact</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="#ContactPage" @click="ui.closeMenu">
							<span>Form Interactions</span>
						</NuxtLink>
					</li>
				</ul>

				<ul class="socials">
					<h3>Socials</h3>
					<li>
						<NuxtLink to="https://github.com/JesseDevs" target="_blank" rel="noopener">
							Github
						</NuxtLink>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/felix-jesser/"
							target="_blank"
							rel="noopener"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<NuxtLink
							to="https://twitter.com/Jesse_Dude"
							target="_blank"
							rel="noopener"
						>
							Twitter
						</NuxtLink>
					</li>
					<li>
						<a
							href="https://www.instagram.com/jessedude2/"
							target="_blank"
							rel="noopener"
							>Instagram</a
						>
					</li>
					<li>
						<NuxtLink to="/webdev-resume-jesse.pdf" target="_blank" rel="noopener">
							Resume
						</NuxtLink>
					</li>
				</ul>
			</nav>
			<div class="footnote">
				<div class="frame-con">
					<iframe
						allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
						frameborder="0"
						style="width: 100%; max-width: 400px; overflow: hidden; border-radius: 10px"
						sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
						src="https://embed.music.apple.com/us/album/ferxxo-151/1704049454?i=1704050427"
					></iframe>
				</div>
				<div class="support-box">
					<MyLinks />
					<p>© 2023 • Jesse Felix</p>
				</div>
			</div>
		</inner-column>
	</footer>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.site-footer {
		display: block;
		width: 100%;
		position: relative;
		background: linear-gradient(180deg, var(--background), rgb(var(--brand-rgb) / 0.2));
		backdrop-filter: brightness(0.7);

		inner-column {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}

		* {
			font-size: inherit;
		}

		nav {
			border-top: 1px solid rgba(246, 244, 244, 0.301);
			padding-top: 2rem;
			display: flex;
			column-gap: 2rem;

			@media (min-width: 770px) {
				column-gap: 5rem;
			}

			h3 {
				font-size: var(--step-0);
				font-weight: 500;
			}

			ul {
				display: flex;
				flex-direction: column;
				width: 100%;
				column-gap: 1rem;
				row-gap: 15px;

				a:hover {
					text-decoration: underline;
				}

				@media (min-width: 770px) {
					flex-direction: row;
					flex-wrap: wrap;
					column-gap: 2rem;
					h3 {
						width: 100%;
					}
					li {
						flex-grow: 0;
					}
					a {
						padding: 0 1.2rem 0 0;
					}
				}

				h3 {
					font-weight: 500;
				}
				li {
					text-align: left;

					a {
						width: 100%;

						font-weight: 300;
						display: block;
						transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
						border-radius: 0.375rem;
						opacity: 0.85;
					}
				}
			}
		}

		.footnote {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			flex-wrap: wrap;
			column-gap: 5rem;
			row-gap: 1rem;

			p {
				flex-shrink: 0;
			}

			@media (min-width: 770px) {
				flex-wrap: nowrap;
				.frame-con {
					flex-shrink: 0;
				}

				iframe {
					width: 400px !important;
				}
			}
		}

		.support-box {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			row-gap: 1rem;
			justify-content: space-between;

			@media (min-width: 770px) {
				flex-direction: column;
				max-width: fit-content;
			}
		}
	}
</style>
