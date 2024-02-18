import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            title: "product",
            icon: faCartShopping,
            child: [
                {
                    title: "categories",
                    url: "/item"
                },
                {
                    title: "all products",
                    url: "/item"
                },
                {
                    title: "add product",
                    url: "/item/add-item"
                }
            ]
        },
    ];
