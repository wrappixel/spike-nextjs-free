import { uniqueId } from "lodash";
interface MenuitemsType {
    [x: string]: any;
    id?: string;
    navlabel?: boolean;
    subheader?: string;
    title?: string;
    icon?: any;
    href?: string;
    children?: MenuitemsType[];
    bgcolor?: any;
    chip?: string;
    chipColor?: string;
    variant?: string;
    external?: boolean;
}

const Menuitems: MenuitemsType[] = [
    {
        navlabel: true,
        subheader: "HOME",
    },

    {
        id: uniqueId(),
        title: "Dashboard",
        icon: "screencast-2-line-duotone",
        href: "/",
    },
    {
        id: uniqueId(),
        title: "Dashboard 2",
        icon: "chart-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/dashboards/dashboard2",

        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Frontend Pages",
        icon: "feed-line-duotone",
        chip: "Pro",
        href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/homepage",

        children: [
            {
                id: uniqueId(),
                title: "Homepage",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/homepage",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "About Us",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/about",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Blog",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/blog",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Blog Details",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/blog-detail",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Contact",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/contact",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Portfolio",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/portfolio",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Pricing",
                href: "https://spike-nextjs-pro-main.vercel.app/frontend-pages/pricing",
                chip: "Pro",
            },
        ],
    },

    {
        navlabel: true,
        subheader: "UTILITIES",
    },

    {
        id: uniqueId(),
        title: "Icons",
        icon: "smile-circle-linear",
        href: "/icons",
    },

    {
        id: uniqueId(),
        title: "Table",
        icon: "tablet-line-duotone",
        href: "/table",
    },

    {
        id: uniqueId(),
        title: "Form",
        icon: "window-frame-broken",
        href: "/sample-form",
    },
    {
        id: uniqueId(),
        title: "Sample Page",
        icon: "window-frame-broken",
        href: "/sample-page",
    },
    {
        id: uniqueId(),
        title: "Typography",
        icon: "text-bold-square-line-duotone",
        href: "/utilities/typography",
    },
    {
        id: uniqueId(),
        title: "Shadow",
        icon: "box-minimalistic-broken",
        href: "/utilities/shadow",
    },
    {
        navlabel: true,
        subheader: "APPS",
    },
    {
        id: uniqueId(),
        title: "Contacts",
        icon: "phone-line-duotone",
        chip: "Pro",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/contacts",
    },

    {
        id: uniqueId(),
        title: "Chats",
        icon: "chat-round-unread-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/chats",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Notes",
        icon: "notification-unread-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/notes",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Calendar",
        icon: "calendar-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/calendar",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Email",
        icon: "mailbox-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/email",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Tickets",
        icon: "ticket-sale-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/tickets",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Kanban",
        icon: "notes-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/kanban",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Users",
        icon: "user-rounded-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile/profile",

        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Profile",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile/profile",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Followers",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile/followers",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Friends",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile/friends",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Gallery",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile/gallery",
                chip: "Pro",
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Users v2",
        icon: "user-speak-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile2/profile",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Profile",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile2/profile",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Teams",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile2/teams",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Projects",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile2/projects",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Connections",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/user-profile2/connections",
                chip: "Pro",
            },
        ],
    },

    {
        id: uniqueId(),
        title: "Blog",
        icon: "align-vertical-spacing-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/apps/blog/post",

        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Posts",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/blog/post",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Detail",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
                chip: "Pro",
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Ecommerce",
        icon: "smart-speaker-minimalistic-line-duotone",
        href: "/apps/ecommerce/",

        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Shop",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/shop",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Shop V2",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/shop2",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Detail",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/detail/1",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Detail V2",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/detail2/1",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "List",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/list",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Checkout",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/checkout",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Add Product",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/add-product",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Edit Product",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/ecommerce/edit-product",
                chip: "Pro",
            },
        ],
    },

    {
        id: uniqueId(),
        title: "Invoice",
        icon: "checklist-minimalistic-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "List",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Details",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/detail/PineappleInc",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Create",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/create",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Edit",
                href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/edit/PineappleInc",
                chip: "Pro",
            },
        ],
    },
    {
        navlabel: true,
        subheader: "PAGES",
    },

    {
        id: uniqueId(),
        title: "Pages",
        icon: "folder-with-files-broken",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Roll Base Access",

                href: "https://spike-nextjs-pro-main.vercel.app/theme-pages/casl",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Pricing",

                href: "https://spike-nextjs-pro-main.vercel.app/theme-pages/pricing",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Account Setting",

                href: "https://spike-nextjs-pro-main.vercel.app/theme-pages/account-settings",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "FAQ",

                href: "https://spike-nextjs-pro-main.vercel.app/theme-pages/faq",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Landingpage",

                href: "https://spike-nextjs-pro-main.vercel.app/landingpage",
                chip: "Pro",
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Widgets",
        icon: "widget-add-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/widgets/cards",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Cards",
                href: "https://spike-nextjs-pro-main.vercel.app/widgets/cards",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Banners",
                href: "https://spike-nextjs-pro-main.vercel.app/widgets/banners",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Charts",
                href: "https://spike-nextjs-pro-main.vercel.app/widgets/charts",
                chip: "Pro",
            },
        ],
    },


    {
        navlabel: true,
        subheader: "FORMS",
    },
    {
        id: uniqueId(),
        title: "Form Elements",
        icon: "widget-3-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/autocomplete",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Autocomplete",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/autocomplete",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Button",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/button",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Checkbox",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/checkbox",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Radio",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/radio",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Date Time",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/date-time",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Slider",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/slider",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Switch",
                href: "https://spike-nextjs-pro-main.vercel.app/forms/form-elements/switch",
                chip: "Pro",
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Form Layout",
        icon: "widget-5-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-layout",

        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Form Horizontal",
        icon: "posts-carousel-horizontal-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-horizontal",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Form Vertical",
        icon: "posts-carousel-vertical-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-vertical",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Form Custom",
        icon: "menu-dots-circle-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-custom",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Form Wizard",
        icon: "recive-twice-square-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-wizard",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Form Validation",
        icon: "shield-warning-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-validation",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Tiptap Editor",
        icon: "gallery-edit-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/forms/form-tiptap",
        chip: "Pro",
    },

    {
        navlabel: true,
        subheader: "UI",
    },
    {
        id: uniqueId(),
        title: "Ui Components",
        icon: "code-scan-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/ui-components/alert",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Alert",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/alert",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Accordion",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/accordion",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Avatar",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/avatar",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Chip",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/chip",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Dialog",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/dialog",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "List",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/list",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Popover",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/popover",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Rating",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/rating",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Tabs",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/tabs",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Tooltip",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/tooltip",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Transfer List",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/transfer-list",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Typography",
                href: "https://spike-nextjs-pro-main.vercel.app/ui-components/typography",
                chip: "Pro",
            },
        ],
    },
    {
        navlabel: true,
        subheader: "TABLES",
    },

    {
        id: uniqueId(),
        title: "Tables",
        icon: "tablet-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Basic",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/basic",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Collapsible",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/collapsible",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Enhanced",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/enhanced",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Fixed Header",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/fixed-header",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Pagination",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/pagination",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Search",

                href: "https://spike-nextjs-pro-main.vercel.app/tables/search",
                chip: "Pro",
            },
        ],
    },

    {
        id: uniqueId(),
        title: "React Table",
        icon: "flip-vertical-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/react-tables/basic",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Basic",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/basic",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Dense",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/dense",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Filter",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/filter",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Row Selection",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/row-selection",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Pagination",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/pagination",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Sorting",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/sorting",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Column Visibility",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/column-visiblity",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Drag n Drop",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/drag-n-drop",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Editable",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/editable",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Empty",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/empty",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Expand",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/expanding",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Sticky",
                href: "https://spike-nextjs-pro-main.vercel.app/react-tables/sticky",
                chip: "Pro",
            },
        ],
    },
    {
        navlabel: true,
        subheader: "MUI CHARTS & TREES",
    },

    {
        id: uniqueId(),
        title: "Mui Charts",
        icon: "chart-linear",
        href: "https://spike-nextjs-pro-main.vercel.app/react-tables/basic",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Bar Charts",
                icon: "chart-square-linear",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/barcharts",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Line Charts",
                icon: "chart-linear",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/linecharts/line",
                chip: "Pro",
                children: [
                    {
                        id: uniqueId(),
                        title: "Lines",
                        icon: "stop-circle-line-duotone",
                        href: "https://spike-nextjs-pro-main.vercel.app/muicharts/linecharts/line",
                        chip: "Pro",
                    },
                    {
                        id: uniqueId(),
                        title: "Area",
                        icon: "stop-circle-line-duotone",
                        href: "https://spike-nextjs-pro-main.vercel.app/muicharts/linecharts/area",
                        chip: "Pro",
                    },
                ],
            },
            {
                id: uniqueId(),
                title: "Pie Charts",
                icon: "pie-chart-2-linear",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/piecharts",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Scatter Charts",
                icon: "align-bottom-linear",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/scattercharts",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Sparkline Charts",
                icon: "chart-2-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/sparklinecharts",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Gauge Charts",
                icon: "pie-chart-outline",
                href: "https://spike-nextjs-pro-main.vercel.app/muicharts/gaugecharts",
                chip: "Pro",
            },
        ],
    },

    {
        id: uniqueId(),
        title: "TreeView",
        icon: "benzene-ring-broken",
        href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-items",
        chip: "Pro",
        children: [
            {
                id: uniqueId(),
                title: "Items",
                icon: "stop-circle-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-items",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Selection",
                icon: "stop-circle-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-selection",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Expansion",
                icon: "stop-circle-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-expansion",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Customization",
                icon: "stop-circle-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-customization",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Focus",
                icon: "stop-circle-line-duotone",
                href: "https://spike-nextjs-pro-main.vercel.app/mui-trees/simpletree/simpletree-focus",
                chip: "Pro",
            },
        ],
    },

    {
        navlabel: true,
        subheader: "CHARTS",
    },
    {
        id: uniqueId(),
        title: "Line",
        icon: "align-right-line-duotone",

        chip: "Pro",
        href: "https://spike-nextjs-pro-main.vercel.app/charts/line",
    },
    {
        id: uniqueId(),
        title: "Gradient",
        icon: "pie-chart-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/charts/gradient",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Area",
        icon: "chart-square-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/charts/area",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Candlestick",
        icon: "align-top-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/charts/candlestick",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Column",
        icon: "align-left-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/charts/column",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "Doughtnut & Pie",
        icon: "pie-chart-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/charts/doughnut",
        chip: "Pro",
    },
    {
        id: uniqueId(),
        title: "RadialBar & Radar",
        icon: "asteroid-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/charts/radialbar",
        chip: "Pro",
    },
    {
        navlabel: true,
        subheader: "AUTH",
    },
    {
        id: uniqueId(),
        title: "Login",
        icon: "login-2-broken",
        href: "/authentication/login",
    },
    {
        id: uniqueId(),
        title: "Register",
        icon: "shield-user-linear",
        href: "/authentication/register",
    },

    {
        id: uniqueId(),
        title: "AuthPage",
        icon: "user-plus-line-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/login",
        chip: "Pro",

        children: [
            {
                id: uniqueId(),
                title: "Side Login",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/login",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Boxed Login",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth2/login",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Side Register",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/register",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Boxed Register",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth2/register",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Side Forgot PWD",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/forgot-password",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Boxed Forgot PWD",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth2/forgot-password",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Side Two Steps",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/two-steps",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Boxed Two Steps",
                href: "https://spike-nextjs-pro-main.vercel.app/auth/auth2/two-steps",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Error",
                icon: "bug-line-duotone",

                href: "https://spike-nextjs-pro-main.vercel.app/auth/error",
                chip: "Pro",
            },
            {
                id: uniqueId(),
                title: "Maintenance",
                icon: "settings-line-duotone",

                href: "https://spike-nextjs-pro-main.vercel.app/auth/maintenance",
                chip: "Pro",
            },
        ],
    },

    {
        navlabel: true,
        subheader: "OTHER",
    },
    {
        id: uniqueId(),
        title: "Menu Level",
        icon: "double-alt-arrow-down-bold-duotone",
        href: "https://spike-nextjs-pro-main.vercel.app/l1",

        children: [
            {
                id: uniqueId(),
                title: "Level 1",
                href: "https://spike-nextjs-pro-main.vercel.app/l1",
            },
            {
                id: uniqueId(),
                title: "Level 1.1",
                href: "https://spike-nextjs-pro-main.vercel.app/l1.1",

                children: [
                    {
                        id: uniqueId(),
                        title: "Level 2",
                        href: "https://spike-nextjs-pro-main.vercel.app/l2",
                    },
                    {
                        id: uniqueId(),
                        title: "Level 2.1",
                        href: "https://spike-nextjs-pro-main.vercel.app/l2.1",

                        children: [
                            {
                                id: uniqueId(),
                                title: "Level 3",
                                href: "https://spike-nextjs-pro-main.vercel.app/l3",
                            },
                            {
                                id: uniqueId(),
                                title: "Level 3.1",
                                href: "https://spike-nextjs-pro-main.vercel.app/l3.1",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: uniqueId(),
        title: "Disabled",
        icon: "forbidden-circle-line-duotone",
        href: "",
        disabled: true,
    },
    {
        id: uniqueId(),
        title: "SubCaption",
        subtitle: "This is the sutitle",
        icon: "square-academic-cap-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/",
    },

    {
        id: uniqueId(),
        title: "Chip",
        icon: "archive-check-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/",

        chipColor: "error",
    },
    {
        id: uniqueId(),
        title: "Outlined",
        icon: "smile-circle-line-duotone",

        href: "https://spike-nextjs-pro-main.vercel.app/",
    },
    {
        id: uniqueId(),
        title: "External Link",
        external: true,
        icon: "link-bold-duotone",

        href: "https://google.com",
    },
];

export default Menuitems;
