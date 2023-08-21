Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

# Nuxt Portfolio - Personal Site

### Purpose

My original [portfolio](https://www.JesseDevs.net) is currently built using PHP and hosted on spinup.
I am using this opportunity to build NUXT 3 understanding and fully build a new portfolio site.

Planning to use my Vue 3 expereince to take the current structure of my site and convert it to usable componenets in this project.

Currently pages in my [portfolio](https://www.JesseDevs.net) are built with a function that checks for an existing page then checks json data built out for that page, that can then construct the modules on that page.

```
function renderPage() {
	if (isset($_GET['page'])) {
		$page = $_GET['page'];
	} else {

		$page = "home";
	}

	if (file_exists("data/pages/" . $page . ".json")) {
		// Great!
	} else {
		$page = '404';
	}

	$json = file_get_contents("data/pages/" . $page . ".json");
	$pageData = json_decode($json, true);
	$projectsData = getProjectFile();

	include('templates/pages/standard.php');
}
```

Stardard.php is a file in my pages directory that takes the page data and creates the page uses server side rendering.

```
<main class="page-content <?= $page ?>">
	<?php foreach ($pageData['sections'] as $section) { ?>

		<section id="<?= $section['module'] ?>" class="has-a-module has-<?= $section['module'] ?>">

			<inner-column>

				<?php
				include('templates/modules/' . $section["module"] . '.php');
				?>

			</inner-column>
		</section>
	<?php } ?>
</main>
```

The idea is to be able to create a similar structure using NUXT and access all the benefits of NUXT to create a more optimal expereince for myself and my users.

### Initial Setup

-   npx nuxi@latest init **nuxt-portfolio**
-   npm install [Install dependencies]
-   npm i @pinia/nuxt @vite-pwa/nuxt nuxt-icon uuid
-   npm i pinia -f
