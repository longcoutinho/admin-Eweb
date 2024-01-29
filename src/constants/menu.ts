import {faSearch} from "@fortawesome/free-solid-svg-icons";
export const menuBar =
    [
      {
          type: 1,
          icon: faSearch,
          title: "theme",
      },
      {
          type: 2,
          title: "component",
          icon: faSearch,
          child: [
              "base",
              "button"
          ]
      },
        {
            type: 2,
            title: "item",
            icon: faSearch,
            child: [
                "base",
                "button"
            ]
        },
        {
            type: 1,
            icon: faSearch,
            title: "theme",
        },
        {
            type: 2,
            title: "component",
            icon: faSearch,
            child: [
                "base",
                "button"
            ]
        },
        {
            type: 2,
            title: "item",
            icon: faSearch,
            child: [
                "base",
                "button"
            ]
        },
    ];