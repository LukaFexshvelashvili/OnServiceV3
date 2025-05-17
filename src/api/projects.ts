export type TprojectItem = {
  id: number;
  type: number[];
  color: string;
  slice_last: number;
  images: string[];
  name: string;
  description: string;
  link: null | string;
};
// TYPES
//  | 0 - website |
//  | 1 - design |
//  | 2 - adprint |

export const projectsList: TprojectItem[] = [
  {
    id: 1,
    type: [0],
    color: "#4c40f7",
    images: [
      "/projects/Camp/ResponsiveMockup.png",
      "/projects/Camp/Mobile.png",
    ],
    name: "Camp",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",
    slice_last: -1,
    link: "https://lukafexshvelashvili.github.io/CampWebsite-React-TS/",
  },
  {
    id: 2,
    type: [0],
    color: "#3a86ff",
    images: [
      "/projects/OnHome/ResponsiveMockup.png",
      "/projects/OnHome/Mobile.png",
    ],
    name: "OnHome",
    description: "ბინების ყიდვა გაყიდვა გაქირავების სერვისი",
    slice_last: -2,
    link: "https://onhome.ge/",
  },
  {
    id: 3,
    type: [0],
    color: "#1A7BFF",
    images: [
      "/projects/Colab/ResponsiveMockup.png",
      "/projects/Colab/Mobile.png",
    ],
    name: "Colab",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",
    slice_last: -1,
    link: "https://lukafexshvelashvili.github.io/ColabWebsite/",
  },
  {
    id: 4,
    type: [0],
    color: "#14d49e",
    images: [
      "/projects/Eventoy/ResponsiveMockup.png",
      "/projects/Eventoy/Mobile.png",
    ],
    name: "Eventoy",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",
    slice_last: 3,
    link: "https://lukafexshvelashvili.github.io/Eventoy/",
  },
  {
    id: 5,
    type: [0],
    color: "#6b0e99",
    images: [
      "/projects/BookStore/ResponsiveMockup.png",
      "/projects/BookStore/Mobile.png",
    ],
    name: "Book Store",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",

    slice_last: 4,
    link: "https://lukafexshvelashvili.github.io/BookStoreWebsite/",
  },
  {
    id: 6,
    type: [0],
    color: "#fe5000",
    images: [
      "/projects/Rations/ResponsiveMockup.png",
      "/projects/Rations/Mobile.png",
    ],
    name: "Rations",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",

    slice_last: -1,
    link: "https://lukafexshvelashvili.github.io/Rations/",
  },
  {
    id: 7,
    type: [0],
    color: "#3417ff",
    images: [
      "/projects/Bravay/ResponsiveMockup.png",
      "/projects/Bravay/Mobile.png",
    ],
    name: "Bravay",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",

    slice_last: -1,
    link: "https://lukafexshvelashvili.github.io/NFT-Landing-Page/",
  },
  {
    id: 9,
    type: [0, 1],
    color: "#ff681d",
    images: [
      "/projects/Meraba/ResponsiveMockup.png",
      "/projects/Meraba/Mobile.png",
    ],
    name: "Meraba.ge",
    description: "ავტო დახმარების სერვისი",
    slice_last: -1,
    link: "https://meraba.ge/",
  },
  {
    id: 10,
    type: [0],
    color: "#c80036",
    images: [
      "/projects/AutoKeys/ResponsiveMockup.png",
      "/projects/AutoKeys/Mobile.png",
    ],
    name: "autokeys.ge",
    description: "ავტო გასაღებების სერვისი",
    slice_last: -4,
    link: "https://autokeys.ge/",
  },
  {
    id: 15,
    type: [1],
    color: "#FC5832",
    images: [
      "/projects/SpecBorbali/ResponsiveMockup.png",
      "/projects/SpecBorbali/Mobile.png",
    ],
    name: "Spec Borbali",
    description: "",
    slice_last: 4,
    link: null,
  },
  {
    id: 17,
    type: [0],
    color: "#5CE1D2",
    images: [
      "/projects/HooBank/ResponsiveMockup.png",
      "/projects/HooBank/Mobile.png",
    ],
    name: "HooBank",
    description: "პორტფოლიოს საჩვენებელი ვებგვერდი",
    slice_last: -3,
    link: "https://atukajikuridze.github.io/hoobank/",
  },
  {
    id: 18,
    type: [2],
    color: "#000",
    images: ["/projects/AdPrinting/Citroen.png"],
    name: "CITROEN",
    description: "",
    slice_last: -1,
    link: null,
  },
  {
    id: 19,
    type: [2],
    color: "#000",
    images: ["/projects/AdPrinting/Cafe.png"],
    name: "Cafe",
    description: "",
    slice_last: -1,
    link: null,
  },
  {
    id: 21,
    type: [2],
    color: "#FFAD00",
    images: ["/projects/AdPrinting/Marjo.png"],
    name: "Marjo",
    description: "",
    slice_last: 4,
    link: null,
  },
  {
    id: 22,
    type: [2],
    color: "#4e4e4e",
    images: ["/projects/AdPrinting/Builder.png"],
    name: "Builder",
    description: "",
    slice_last: -1,
    link: null,
  },
  {
    id: 23,
    type: [0, 1],
    color: "#D30043",
    images: [
      "/projects/MoviesGo/ResponsiveMockup.png",
      "/projects/MoviesGo/Mobile.png",
    ],
    name: "MoviesGo",
    description: "ფილმების სერიალების ანიმაციების და ანიმეების პლატფორმა",
    slice_last: 2,
    link: null,
  },
  {
    id: 24,
    type: [2],
    color: "#139A9C",
    images: ["/projects/AdPrinting/Mtatsminda.png"],
    name: "Mtatsminda",
    description: "",
    slice_last: -1,
    link: null,
  },
  {
    id: 25,
    type: [2],
    color: "#8f926e",
    images: ["/projects/AdPrinting/Funicular.png"],
    name: "Funicular",
    description: "",
    slice_last: -1,
    link: null,
  },
  {
    id: 26,
    type: [2],
    color: "#C3BCBC",
    images: ["/projects/AdPrinting/Dentistry.png"],
    name: "Dentistry",
    description: "",
    slice_last: -3,
    link: null,
  },
];
export const typesList: string[] = ["ვებგვერდი", "დიზაინი", "რეკლამა"];
