import KetoHomeHeader from './components/KetoHomeHeader';
import KetoCalculatorComponents from './components/KetoCalculatorComponents';
import KetoCalculatorFooter from './components/KetoCalculatorFooter';
import Carousel from '@/app/components/homePageComponents/CustomCarousel'

export default function Home() {
const items = [
  {
    img: "https://placekitten.com/300/200",
    content: "Item 1 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/301/200",
    content: "Item 2 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/302/200",
    content: "Item 3 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/303/200",
    content: "Item 4 Content",
    price: 100,
  },
  {
    img: "https://placekitten.com/304/200",
    content: "Item 5 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/305/200",
    content: "Item 6 Content",
    price: 100,

  },
   {
    img: "https://placekitten.com/306/200",
    content: "Item 7 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/307/200",
    content: "Item 8 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/308/200",
    content: "Item 9 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/309/200",
    content: "Item 10 Content",
    price: 100,

  },
  {
    img: "https://placekitten.com/310/200",
    content: "Item 11 Content",
    price: 100,

  },
  // {
  //   img: "https://placekitten.com/311/200",
  //   content: "Item 12 Content",
  // },
  // Add more items as needed
];
  return (
    <>
    <Carousel items={items} />

      <KetoHomeHeader />
      <KetoCalculatorComponents />
      <KetoCalculatorFooter />
    </>
  );
}
