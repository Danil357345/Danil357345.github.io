---
layout: default
title: Github-Pages
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>GitHub Pages</title>
</head>
<body>
    <header>
        <div class="container">
            <h1 class="logo">Danil's Guide to Git</h1>
            <nav>
                <ul class="main-nav">
                    <li><a href="terminology.html">Terminology</a></li>
                    <li><a href="commands.html">Commands</a></li>
                    <li><a href="fizzbuzz.html">FizzBuzz Code</a></li>
                    <li><a href="github.html">GitHub</a></li>
                    <li><a href="XcodeIDE.html">XcodeIDE</a></li>
                    <li><a href="AboutReplit.html">Replit</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="container">
            <h1>Getting Started with GitHub Pages</h1>
            <p><strong>GitHub Pages</strong> is a free service offered by GitHub that allows you to host static websites directly from a GitHub repository. It is primarily used for personal, project, or documentation sites.</p>

            <h2>How to Get Started with GitHub Pages</h2>
            <p>Follow these steps to set up your own website using GitHub Pages:</p>
            <ol>
                <li><strong>Create a GitHub Repository:</strong> Start by creating a new repository on GitHub. You can name it anything, but for a personal website, name it <strong>username.github.io</strong> where "username" is your GitHub username.</li>
                <li><strong>Add Your Website Files:</strong> Add your HTML, CSS, and JavaScript files to the repository. The main page of your website should be called <strong>index.html</strong>.</li>
                <li><strong>Enable GitHub Pages:</strong> In your repository, go to the <em>Settings</em> tab. Scroll down to the <em>GitHub Pages</em> section, choose the branch (usually <em>main</em>) and folder (root or <em>/docs</em>) you want to publish from, and click <em>Save</em>.</li>
                <li><strong>Access Your Website:</strong> After enabling GitHub Pages, your site will be published and accessible at <strong>https://username.github.io</strong>.</li>
            </ol>

            <h2>How to Publish Updates</h2>
            <p>Once your GitHub Pages site is live, any changes you make to the repository will automatically be reflected on the site. Follow these steps to publish updates:</p>
            <ol>
                <li><strong>Edit Files Locally or on GitHub:</strong> You can update your website by editing your files directly on GitHub or using Git to pull, edit, and push changes from your local machine.</li>
                <li><strong>Commit and Push Changes:</strong> After making updates, commit the changes and push them to the repository. Once the changes are pushed to the correct branch, GitHub Pages will automatically deploy the new version of your site.</li>
            </ol>

            <h2>Common Pitfalls with GitHub Pages</h2>
            <p>Although GitHub Pages is simple to use, there are a few common issues users might encounter:</p>
            <ul>
                <li><strong>Incorrect Repository Name:</strong> If you're setting up a personal site, make sure your repository is named <strong>username.github.io</strong>, where "username" is your GitHub username.</li>
                <li><strong>Publishing from the Wrong Branch:</strong> Check that you are publishing from the correct branch, usually <strong>main</strong>, or specify a different one in the <em>GitHub Pages</em> settings.</li>
                <li><strong>Delays in Deployment:</strong> After pushing changes, it may take a few minutes for GitHub Pages to update your site. Be patient, and check the repository settings to ensure Pages is enabled correctly.</li>
                <li><strong>Broken Links and File Paths:</strong> Remember that GitHub Pages is case-sensitive, so make sure your links and file paths are correctly formatted.</li>
                <li><strong>Unsupported Features:</strong> GitHub Pages only supports static websites. Features like server-side processing (e.g., PHP or databases) are not supported.</li>
            </ul>

            <h2>How GitHub Pages Works</h2>
            <p>GitHub Pages works by serving static files (HTML, CSS, and JavaScript) from your GitHub repository. Here’s how it works under the hood:</p>
            <ul>
                <li><strong>Static Site Generation:</strong> GitHub Pages does not execute server-side code like PHP or Node.js. Instead, it serves static content, which is perfect for blogs, documentation, and portfolio sites.</li>
                <li><strong>Branch and Directory Setup:</strong> GitHub Pages can serve content from either the root of your repository, a <code>/docs</code> folder, or a specific branch like <em>gh-pages</em>. By default, it looks for an <code>index.html</code> file to serve as the homepage.</li>
                <li><strong>Custom Domains:</strong> You can configure GitHub Pages to use a custom domain by adding a <code>CNAME</code> file to your repository with the domain name or by configuring DNS settings on your domain registrar’s website.</li>
                <li><strong>Free HTTPS:</strong> GitHub Pages automatically provides HTTPS for all published sites using GitHub’s subdomain (username.github.io). If you use a custom domain, you can enable HTTPS in the repository settings.</li>
            </ul>

            <h2>Resources for GitHub Pages</h2>
            <ul>
                <li><a href="https://pages.github.com/" target="_blank">GitHub Pages Official Site</a>: Explore more about GitHub Pages, including documentation and examples.</li>
                <li><a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages Documentation</a>: Learn more about GitHub Pages features, setup, and advanced configurations.</li>
                <li><a href="https://guides.github.com/features/pages/" target="_blank">GitHub Pages Guide</a>: Step-by-step guide to get started with GitHub Pages.</li>
            </ul>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Check out my other projects!</p>
            <ul class="project-links">
                <li><a href="https://sirni4ek.github.io/">sirni4ek.github.io</a></li>
                <li><a href="https://danil357345.github.io/">danil357345.github.io</a> (You are here)</li>
                <li><a href="https://solomiia2098.github.io/">solomiia2098.github.io</a></li>
                <li><a href="https://gulkily.github.io/">gulkily.github.io</a></li>
            </ul>
            <p>Find the source code for this webpage on <a href="https://github.com/Danil357345/Danil357345.github.io">GitHub</a>.</p>
        </div>
    </footer>
</body>
</html>
