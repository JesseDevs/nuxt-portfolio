<template>
	<site-footer class="small-voice">
		<inner-column>
			<nav>
				<ul class="nav-container page">
					<h3>Page Routes</h3>

					<li>
						<NuxtLink to="/" @click="ui.closeMenu">
							<span>Home</span>
						</NuxtLink>
					</li>
					<li>
						<a href="/#ProjectSection" @click="ui.closeMenu">
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href="/#AboutCard" @click="ui.closeMenu">
							<span>About</span>
						</a>
					</li>
					<li>
						<NuxtLink to="/writing" @click="ui.closeMenu">
							<span>Writing</span>
						</NuxtLink>
					</li>

					<li>
						<a href="#ContactPage" @click="ui.closeMenu">
							<span>Contact</span>
						</a>
					</li>
				</ul>

				<ul class="socials">
					<h3>Socials</h3>
					<li><a href="https://github.com/JesseDevs" target="_blank"> Github </a></li>
					<li>
						<a href="https://www.linkedin.com/in/felix-jesser/" target="_blank">
							LinkedIn
						</a>
					</li>
					<li><a href="https://twitter.com/Jesse_Dude" target="_blank"> Twitter </a></li>
					<li>
						<a href="https://www.instagram.com/jessedude2/" target="_blank"
							>Instagram</a
						>
					</li>
					<li><a href="/webdev-resume-jesse.pdf" target="_blank"> Resume </a></li>
				</ul>
				<div class="footnote">
					<div class="frame-con">
						<iframe
							allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
							frameborder="0"
							style="
								width: 100%;
								max-width: 300px;
								overflow: hidden;
								border-radius: 10px;
								background-color: black;
							"
							sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
							src="https://embed.music.apple.com/us/album/ferxxo-151/1704049454?i=1704050427"
						></iframe>
					</div>
					<p>© 2023 • Jesse Felix</p>
				</div>
			</nav>
		</inner-column>
	</site-footer>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	site-footer {
		display: block;
		width: 100%;
		position: relative;
		background: linear-gradient(180deg, var(--background), rgb(var(--brand-rgb) / 0.2));
		backdrop-filter: brightness(0.7);

		* {
			font-size: inherit;
		}

		nav {
			border-top: 1px solid rgba(246, 244, 244, 0.301);
			padding-top: 2rem;
			display: flex;
			flex-direction: column;
			gap: 4rem;

			h3 {
				font-size: var(--step-0);
				text-decoration: underline;
				font-weight: 500;
			}

			ul {
				@media (min-width: 500px) {
					padding: 0 5rem;
				}
				display: flex;
				flex-wrap: wrap;
				column-gap: 1rem;
				row-gap: 1rem;

				h3 {
					flex-grow: 1;
					flex-shrink: 0;
					flex-basis: 100%;
				}
				li {
					flex-grow: 1;
					text-align: center;

					a {
						padding: 10px;
						font-weight: 400;
						display: block;
						transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
						border-radius: 0.375rem;
						opacity: 0.85;
						color: var(--white);

						&:hover {
							background-color: rgb(var(--black-rgb) / 0.7);
							opacity: 1;
						}
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
			row-gap: 2rem;

			p {
				flex-shrink: 0;
			}
		}
	}
</style>
