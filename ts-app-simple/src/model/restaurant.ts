// let data = {
//   name: "jiseong's `restaurant`",
//   category: 'western',
//   address: {
//     city: 'incheon',
//     detail: 'somewhere',
//     zipcode: 1232131,
//   },
//   menu: [
//     {
//       name: 'rose pasta',
//       price: 2000,
//       category: 'PASTA',
//     },
//     {
//       name: 'galic steak',
//       price: 3000,
//       category: 'STEAK',
//     },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  adress: Adress;
  menu: Menu[];
};

export type Adress = {
  city: string;
  detail: string;
  zipcode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Adress, 'zipcode'>;
export type AddressOnlyZip = Pick<Adress, 'zipcode'>;

export type MenuWithoutPrice = Omit<Menu, 'price'>;
export type MenuOnlyPrice = Pick<Menu, 'price'>;
