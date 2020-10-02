const menu = [{
        id: 1,
        title: "chocolate pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://amp.insider.com/images/5a183346ec1ade66d90a7b76-1136-852.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshakes",
        category: "shakes",
        price: 6.99,
        img: "https://blog.opentable.co.uk/wp-content/uploads/sites/110/2017/06/Maxwells.png",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://prod.static9.net.au/_/media/Images/Kitchen/2016/05/20/12/00/eggsavofetasmash-recipe.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://diyjoy.com/wp-content/uploads/2019/12/creole-deviled-eggs-1.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://s.yimg.com/ny/api/res/1.2/WrfXK_m3xEmQfnUHfnUQKA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/the_daily_meal_299/b2ad9f8144574e251bb3179a0b11138b",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://bacontoday.com/wp-content/uploads/2016/01/bacon-blue-cheese-fries-recipe.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/02/chilis-boss-beef-burger.jpg?fit=1200%2C879&ssl=1",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Quagmyre",
        category: "shakes",
        price: 16.99,
        img: "https://cf.ltkcdn.net/cocktails/images/std/229397-450x300-Quagmyer.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "https://thehonestbison.com/wp-content/uploads/Bison_Sirloin_2.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 11,
        title: "Spaghetti Cacio e Pepe",
        category: "lunch",
        price: 22.99,
        img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps835_OMRR2777383B06_04_7bC_RMS.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 12,
        title: "Spicy Thai Basil Chicken (Pad Krapow Gai)",
        category: "dinner",
        price: 22.99,
        img: "https://i.pinimg.com/originals/f8/00/62/f800625cc52c11eabddea2a652aae57b.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 13,
        title: "Easy Chorizo Street Tacos",
        category: "breakfast",
        price: 22.99,
        img: "https://www.cscassets.com/recipes/wide_cknew/wide_24323.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 14,
        title: "Indian-Style Chicken and Onions",
        category: "breakfast",
        price: 22.99,
        img: "https://img.buzzfeed.com/video-api-prod/assets/1382895d667748a88efbaadd50c10f03/FB_2.jpg?output-format=auto&output-quality=auto",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 15,
        title: "Russian Cabbage Rolls with Gravy",
        category: "lunch",
        price: 22.99,
        img: "https://www.lutongbahayrecipe.com/wp-content/uploads/2019/11/beefy-cabbage-rolls-recipe.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 16,
        title: "Spicy Korean Fried Chicken with Gochujang Sauce",
        category: "dinner",
        price: 22.99,
        img: "https://jesspryles.com/wp-content/uploads/2018/01/korean-fried-chicken-32.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 17,
        title: "The Real Mojito",
        category: "shakes",
        price: 22.99,
        img: "https://www.thespruceeats.com/thmb/uph9GgtfGnN3rlLSEaP1WhYI2Ag=/1000x562/smart/filters:no_upscale()/mojito-5a8f339fba61770036ec61d8.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 18,
        title: "Fried Rice Restaurant Style",
        category: "lunch",
        price: 22.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=3264&h=1709&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5336832.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    }, {
        id: 19,
        title: "Perfect Sushi Rice",
        category: "lunch",
        price: 22.99,
        img: "https://nathanandchristinamakefood.com/static/images/620/homemade-sushi-0.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 20,
        title: "Lemon Chicken Piccata",
        category: "breakfast",
        price: 22.99,
        img: "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x694/public/charred-lemon-chicken-piccata-ck.jpg?itok=QwoF3oPQ",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    }, {
        id: 21,
        title: "Italian Sausage Stuffed Shells",
        category: "dinner",
        price: 22.99,
        img: "https://images-gmi-pmc.edge-generalmills.com/3644bc2a-73fd-44e7-9d15-933a3d216a5c.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 22,
        title: "German Spaetzle Dumplings",
        category: "lunch",
        price: 22.99,
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/3/26/0/RE0303-1_German-Dumplings_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383161796003.jpeg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    }, {
        id: 23,
        title: "Spaghetti Aglio e Olio",
        category: "breakfast",
        price: 22.99,
        img: "https://img-global.cpcdn.com/recipes/547fb0b8d2bcef2e/1200x630cq70/photo.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 24,
        title: "Easy Korean Ground Beef Bowl",
        category: "lunch",
        price: 22.99,
        img: "https://hintofhelen.com/wp-content/uploads/2018/07/DSC_0409-5-1170x1170.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
    {
        id: 25,
        title: "Quick Bruschetta Chicken Bake",
        category: "dinner",
        price: 22.99,
        img: "https://bestmedicinenews.org/wp-content/uploads/chicken-bake-696x522.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..`,
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                    <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}