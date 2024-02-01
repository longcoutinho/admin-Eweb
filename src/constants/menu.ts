import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faShop} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
        {
            type: 1,
            icon: faImage,
            title: "banner",
        },
        {
            type: 2,
            title: "banners management",
            icon: faShop,
            child: [
                {
                    title: "item type",
                    url: "/item"
                }
            ]
        },
        {
          type: 1,
          icon: faShop,
          title: "collection",
        },
        {
          type: 2,
          title: "items management",
          icon: faShop,
          child: [
              {
                  title: "item type",
                  url: "/item"
              },
              {
                  title: "collection",
                  url: "/post"
              },
              {
                  title: "Hot item",
                  url: "/post"
              }
          ]
        },
        {
            type: 1,
            icon: faSearch,
            title: "Blog",
        },
        {
            type: 2,
            title: "Posts Management",
            icon: faSearch,
            child: [
                {
                    title: "item",
                    url: "/item"
                },
                {
                    title: "post",
                    url: "/post"
                }
            ]
        }
    ];
