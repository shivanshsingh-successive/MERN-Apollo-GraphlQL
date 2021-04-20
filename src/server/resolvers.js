const Book = require('../models/Book');
const Cart = require('../models/Cart');

const resolvers = {
  Query: {
    allBooks: () => Book.find(),
    detailBook: (_,args) => Book.findOne({ _id: args.id}),
    cartItems: () => Cart.find(),
  },
  Mutation: {
    addBook: async (_, args) => {
        const { title, author, pages, publisher, price, published_year } = args;
        const newBook = new Book({ title, author, pages, published_year, publisher, price });
        await newBook.save();
        return newBook;
    },
    addToCart: async (_, args) => {
      const item = await Book.findById({ _id : args.id })
      const { title, author, price } = item;
      const mycart = new Cart({title, author, price});
      await mycart.save();
      return mycart;
    },
  }
};

module.exports = resolvers;