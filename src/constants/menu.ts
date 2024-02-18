import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            title: "product",
            icon: faCartShopping,
            child: [
                {
                    title: "categories",
                    url: "/item/categories"
                },
                {
                    title: "all products",
                    url: "/item/all"
                },
                {
                    title: "add product",
                    url: "/item/add"
                }
            ]
        },
    ];
