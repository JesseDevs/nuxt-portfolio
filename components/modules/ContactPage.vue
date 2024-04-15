<template>
	<section :id="moduleData.module">
		<inner-column>
			<contact-page>
				<div class="heading-container">
					<div class="line"></div>
					<h2 class="loud-voice">{{ moduleData.heading }}<span>.</span></h2>
					<div class="line"></div>
				</div>
				<form
					action="https://formspree.io/f/xnqeoybe"
					method="POST"
					id="fs-frm"
					name="message-form"
				>
					<fieldset id="fs-frm-inputs">
						<div class="field">
							<label for="full-name">Full Name</label>
							<input
								type="text"
								name="name"
								id="full-name"
								placeholder="First and Last"
								required=""
							/>
						</div>
						<div class="field">
							<label for="email-address">Email Address</label>
							<input
								type="email"
								name="_replyto"
								id="email-address"
								placeholder="email@domain"
								required=""
							/>
						</div>
						<div class="field">
							<label for="telephone">Telephone Number (Optional)</label>
							<input
								type="telephone"
								name="telephone"
								id="telephone"
								placeholder="(555) 555-5555"
							/>
						</div>
						<div class="field">
							<label for="complaint">Message</label>
							<textarea
								rows="5"
								name="complaint"
								id="complaint"
								placeholder="Some cool stuff going on here. Let’s talk!"
								required=""
							></textarea>
						</div>

						<input
							name="_subject"
							id="email-subject"
							type="hidden"
							value="Portfolio Contact"
						/>
					</fieldset>

					<button class="button-24" type="submit">Submit</button>
				</form>
				<sub-content>
					<p v-html="moduleData.text"></p>
				</sub-content>
			</contact-page>
		</inner-column>
	</section>
</template>

<script setup>
	const props = defineProps({
		moduleData: Object,
	});
</script>

<style lang="scss">
	contact-page {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;

		sub-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 25px;
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}
	}
	.line {
		width: 100%;
		height: 1px;
		background: var(--text);
		opacity: 0.3;
	}

	.heading-container {
		display: flex;
		align-items: center;
		gap: 1.3rem;
		padding-bottom: 2rem;

		span {
			color: var(--brand);
		}
	}
	.contactEmail {
		margin: 0 auto;
		margin-top: 3rem;
		max-width: fit-content;

		@media (max-width: 500px) {
			span {
				font-size: var(--step-1);
			}
		}

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.8rem;
			width: fit-content;
			margin: auto;
			transition: 0.25s color;
		}

		@media (min-width: 430px) {
			a {
				flex-direction: row;
				gap: 0.6rem;
			}
		}
	}

	.contactEmail:hover {
		color: var(--brand);
	}

	contact-page {
		text-align: center;

		text-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			@media (min-width: 600px) {
				p {
					max-width: 33ch;
				}
			}
		}
	}

	form {
		width: 100%;
		font-size: var(--text-sm);

		.button-24 {
			background: var(--brand-dark);
			border: 1px solid var(--brand);
			border-radius: 6px;
			box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
			box-sizing: border-box;
			color: rgb(239, 233, 233);
			cursor: pointer;
			display: inline-block;
			text-transform: uppercase;
			width: 100%;
			max-width: 400px;
			margin: 0 auto;

			font-weight: 700;
			line-height: 16px;
			min-height: 40px;
			outline: 0;
			letter-spacing: 0.4px;
			padding: 12px 14px;
			text-align: center;
			text-rendering: geometricprecision;
			user-select: none;
			touch-action: manipulation;
			vertical-align: middle;
			transition: background-color 0.3s ease;
		}

		.button-24:hover,
		.button-24:active {
			background-color: initial;
			background-position: 0 0;
			color: var(--brand);
		}

		.button-24:active {
			opacity: 0.5;
		}
	}

	#fs-frm input,
	#fs-frm select,
	#fs-frm textarea,
	#fs-frm fieldset,
	#fs-frm optgroup,
	#fs-frm label,
	#fs-frm #card-element:disabled {
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		border: none;
		border-radius: 0;
		display: block;
		width: 100%;
		padding: 0;
		margin: 0;
	}

	#fs-frm input,
	#fs-frm textarea {
		color: var(--black);
		resize: none;
	}

	#fs-frm label,
	#fs-frm legend,
	#fs-frm ::placeholder {
		font-size: var(--text-xs);
		margin-bottom: 0.5rem;
		padding-top: 0.2rem;
		display: flex;
		align-items: baseline;
	}

	#fs-frm ::placeholder {
		color: rgb(80, 78, 78);
	}

	/* border, padding, margin, width */
	#fs-frm input,
	#fs-frm select,
	#fs-frm textarea,
	#fs-frm #card-element {
		border: 1px solid rgba(0, 0, 0, 0.2);
		background-color: rgba(255, 255, 255, 0.9);
		padding: 0.75em 1rem;
		margin-bottom: 1.5rem;
		border-radius: 7px;
	}
	#fs-frm input:focus,
	#fs-frm select:focus,
	#fs-frm textarea:focus {
		background-color: white;
		outline-style: solid;
		outline-width: thin;
		outline-color: gray;
		outline-offset: -1px;
	}
	#fs-frm [type='text'],
	#fs-frm [type='email'] {
		width: 100%;
	}

	#fs-frm [type='submit'],
	#fs-frm [type='reset'] {
		margin-bottom: 0;
	}
	#fs-frm select {
		text-transform: none;
	}

	#fs-frm [type='checkbox'] {
		appearance: checkbox;
		display: inline-block;
		width: auto;
		margin: 0 0.5em 0 0 !important;
	}

	#fs-frm [type='radio'] {
		appearance: radio;
	}

	#fs-frm fieldset.locale input[name='city'],
	#fs-frm fieldset.locale select[name='state'],
	#fs-frm fieldset.locale input[name='postal-code'] {
		display: inline;
	}
	#fs-frm fieldset.locale input[name='city'] {
		width: 52%;
	}
	#fs-frm fieldset.locale select[name='state'],
	#fs-frm fieldset.locale input[name='postal-code'] {
		width: 20%;
	}
	#fs-frm fieldset.locale input[name='city'],
	#fs-frm fieldset.locale select[name='state'] {
		margin-right: 3%;
	}

	@media (min-width: 800px) {
		#fs-frm fieldset {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 20px;
			div.field:first-of-type {
				grid-column: 1/1;
			}
			div.field:nth-of-type(3) {
				grid-row: 1;
				grid-column: 2;
			}
			div.field:nth-of-type(2),
			div.field:nth-of-type(4) {
				grid-column: 1/-1;
			}
		}

		form {
			max-width: 800px;
			margin: 0 auto;
		}
	}
</style>
