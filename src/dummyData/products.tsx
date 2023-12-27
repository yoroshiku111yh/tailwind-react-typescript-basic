

import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";

interface Tag {
    tagText: string;
    tagValue: string;
  }
  
  interface Data {
    title: string;
    tags: Tag[];
    price: string;
    img: string;
  }


export const data: Data[] = [
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product1,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product2,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product3,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product4,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product1,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product2,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product3,
    },
    {
      title: "Blouse and belted skirt",
      tags: [
        {
          tagText: "Gene",
          tagValue: "Female",
        },
        {
          tagText: "Age",
          tagValue: "Ranges",
        },
      ],
      price: "N8.900.000",
      img: product4,
    },
  ];