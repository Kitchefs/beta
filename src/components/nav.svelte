<script>
	import { onMount }  from 'svelte';
	export let segment;
	onMount(() => {
		let query;
		let all_items;
		let item_name;
        let category_name;

		function test_equality(x, y) {
			x = x.split(' ').join('');
			y = y.split(' ').join('');
			return (x.includes(y) || y.includes(x));
        }
        
        if (segment === undefined || segment === 'saved_items') {
            document.getElementById("search-bar").addEventListener("keyup", () => {
                query = document.getElementById("search-bar").value.toLowerCase();
                all_items = document.querySelectorAll(".item");
                all_items.forEach((element, index, array) => {
                    item_name = element.getAttribute("item-name").split('-').join(' ');
                    category_name = element.getAttribute("category-name").split('-').join(' ');
                    if (test_equality(query, item_name) || test_equality(query, category_name) || query === "") {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }

                    if (segment === undefined) {
                        if (query != "") {
                            document.getElementById("featured-recipes-title").style.display = "none";
                            document.getElementById("featured-recipes-hr").style.display = "none";
                        } else {
                            document.getElementById("featured-recipes-title").style.display = "block";
                            document.getElementById("featured-recipes-hr").style.display = "block";
                        }
                    }
                });
            });
            
            document.getElementById("search-form").addEventListener('submit', (e) => {
                e.preventDefault();
            });
        }
    });
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	a {
		color: #ffffff !important;
		text-decoration: none !important;
		padding: 1em 0.5em !important;
		display: block !important;
		text-align: center;
	}
    @media screen and (max-width: 768px) {
        nav {
		    padding: 0.7em;
	    }
    }
    .kitchefs-brand {
        font-family: "Playfair Display";
        font-size: 1.2em;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin: 0 !important;
        padding-left: 0.4em !important;
        padding-right: 0.6em !important;
	}
	.active-orange input[type=text]:focus:not([readonly]) {
		border-bottom: 1px solid #ff3e00;
		box-shadow: 0 1px 0 0 #ff3e00;
	}
	.active-orange input[type=text] {
		border-bottom: 1px solid #6c757d;
		box-shadow: 0 1px 0 0 #6c757d;
		border-radius: 0;
		background-color: inherit;
		border: 0;
		outline: 0;
		color: #fff;
        padding: 5px;
	}
</style>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top hide-dl">
	<a class="kitchefs-brand" href=".">Kitchefs</a>

	<button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#kitchefs-navbar"
        aria-controls="kitchefs-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
    </button>

	<div class="collapse navbar-collapse" id="kitchefs-navbar">
        <ul class="navbar-nav flex-row mr-auto">
			<li class="col-md m-0 p-0"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li class="col-md m-0 p-0"><a aria-current="{segment === 'saved_items' ? 'page' : undefined}" href="saved_items">Saved</a></li>
            <li class="col-md m-0 p-0"><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
        </ul>
        {#if segment === undefined || segment === 'saved_items'}
            <form class="form-inline active-orange" id="search-form">
                <input
                    class="mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    id="search-bar" />
            </form>
        {/if}
	</div>
</nav>