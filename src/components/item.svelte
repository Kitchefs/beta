<script>
    export let name;
    export let category;
    export let image;
    export let description;
    export let href;

    function lowercase(x) {
        x = x.toLowerCase();
        x = x.split(' ').join('-');
        return x;
    }
</script>

<style>
    .col-md-4 {
        padding-bottom: 30px;
    }
    img {
        object-fit: cover;
        border-radius: 2px 2px 0 0;
    } 
    h3 {
        font-family: "Playfair Display";
        font-size: 150%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>

<div class="col-md-4 item" item-name="{lowercase(name)}" category-name="{lowercase(category)}">
    <a href="{href}">
        <div class="card mb-4 shadow-sm item-card h-100">
            <img src={image} width="100%" height="200px" alt={name} />
            <div class="card-body">
                <h3 class="card-text">{name}</h3>
                <p class="card-text">{description}</p>
            </div>
        </div>
    </a>
</div>
