function Dish(name, description, imageUrl) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
}
// PARTIE DESCRIPTION
const restaurantInfo = {
    title: "Description du restaurant",
    description1: `IT est une enseigne de restaurants italiens qui propose une cuisine 
        familiale et authentique.<br>
        Elle puise son inspiration dans les origines calabraises des fondateurs.<br><br>
        Sa particularité : des produits venant tout droit d’Italie, des recettes uniques conçues par Renato, <br>
        des plats frais et faits maison, sous les yeux des clients, tous les jours.  
        <br><br>A très vite pour partager un momento vero, comme en Italie !`,
    description2: `Adresse : 5 Pl. de la Gare, 59800 Lille<br>
        En face de la Gare Lille Flandres`,
    images: [
        { src: "images/ITinterieur.jpg", alt: "Intérieur du restaurant", class: "img-description" },
        { src: "images/ITexterieur.jpg", alt: "Extérieur du restaurant", class: "img-description" }
    ]
};

function createRestaurantInfo() {
    const section = document.createElement('section');
    section.id = 'restaurant-info';

    const h2 = document.createElement('h2');
    h2.textContent = restaurantInfo.title;
    section.appendChild(h2);

    const p1 = document.createElement('p');
    p1.innerHTML = restaurantInfo.description1; // Utilise innerHTML pour interpréter les balises <br>
    section.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerHTML = restaurantInfo.description2; // Utilise innerHTML pour interpréter les balises <br>
    section.appendChild(p2);

    const div = document.createElement('div');
    restaurantInfo.images.forEach(imgInfo => {
        const img = document.createElement('img');
        img.src = imgInfo.src;
        img.alt = imgInfo.alt;
        img.className = imgInfo.class;
        div.appendChild(img);
    });
    section.appendChild(div);

    const body = document.querySelector('body');
    const header = document.querySelector('header');
    body.insertBefore(section, header.nextSibling); // Insère la section juste après le <header>
}
document.addEventListener('DOMContentLoaded', createRestaurantInfo);

// PARTIE MENU 

const dishes = [ 
    {
        category: "Nos pizzas",
        items: [
            {
                name: "Margherita",
                image: "images/ITpizza1.jpg",
                description: "Ingrédients : Sauce Tomate Italienne, Mozzarella, Origan, Basilic, Huile d'Olive."
            },
            {
                name: "Formaggi",
                image: "images/ITpizza2.jpg",
                description: "Ingrédients : Panna (Crème), Taleggio DOP, Gorgonzola DOP, Mozzarella, Parmesan DOP, Poivre, Origan, Huile d’Olive."
            },
            {
                name: "Melanzana",
                image: "images/ITpizza3.jpg",
                description: "Ingrédients : Panna (Crème), Pecorino Romano DOP, Aubergines au Four, Roquette, Tomates Fraîches, Huile d’Olive."
            }
        ]
    },
    {
        category: "Nos pâtes",
        items: [
            {
                name: "Carbonara",
                image: "images/ITpates1.jpg",
                description: "Ingrédients : Guanciale (Lard Italien), Jaune d’Œuf, Pecorino Romano DOP, Bouillon de Volaille, Poivre Noir, Huile d’Olive."
            },
            {
                name: "Del Capo",
                image: "images/ITpates2.jpg",
                description: "Ingrédients : Sauce Tomate Italienne, Spianata (Saucisson Piquant Italien), Ail, Basilic, Ricotta, Huile d’Olive."
            },
            {
                name: "Genovose",
                image: "images/ITpates3.jpg",
                description: "Ingrédients : Pesto de Basilic, Parmesan DOP, Tomates Fraîches, Huile d’Olive."
            }
        ]
    },
    {
        category: "Nos desserts",
        items: [
            {
                name: "Tiramisù Tradizionale Caffè",
                image: "images/ITdessert1.jpg",
                description: "Ingrédients : Biscuits imbibés au Café Fort, Poudre de Cacao, Sirop d’Amaretto, Mascarpone Crémeux."
            },
            {
                name: "Mousse Al Cioccolato",
                image: "images/ITdessert2.jpg",
                description: "Ingrédients : Mousse au Chocolat Noir, Noisettes."
            },
            {
                name: "Tiramisù Rosa e Lamponi",
                image: "images/ITdessert3.jpg",
                description: "Ingrédients : Biscuits imbibés à la Rose, Mascarpone Crémeux à la Framboise."
            }
        ]
    }
];

window.onload = function() {
    const gallerySection = document.getElementById('gallery');
    dishes.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.id = category.category.toLowerCase().replace(/ /g, '-');
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        category.items.forEach(item => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = item.name;
            p.appendChild(strong);
            p.innerHTML += `<br>${item.description}`;

            article.appendChild(img);
            article.appendChild(p);
            categoryDiv.appendChild(article);
        });

        gallerySection.appendChild(categoryDiv);
    });
};