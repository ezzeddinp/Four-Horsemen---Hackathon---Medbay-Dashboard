import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Overview",
            url: "/",
          },
        ],
      },
      {
        title: "Doctor",
        url: "/doctor-page",
        icon: Icons.Doctor,
        items: [],
      },
    ],
  }
];
