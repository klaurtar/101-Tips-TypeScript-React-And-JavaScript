interface LibraryBook {
  name: string;
  author: string;
  libraryRentalID: number;
  numOfRentals: number;
}

type Book = Omit<LibraryBook, 'libraryRentalID' | 'numOfRentals'>;

// type Book = {
//     name: string;
//     author: string;
// }
