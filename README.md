# 🛍️ LUXE Fashion - E-commerce React App

A modern, fully functional e-commerce frontend application built with React and Tailwind CSS. Features a beautiful gradient design, smooth animations, and a complete shopping experience.

![LUXE Fashion](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🛒 Shopping Experience
- **Product Catalog** - Browse 12 premium clothing items with high-quality images
- **Category Filtering** - Filter by All Items, Tops, Bottoms, Dresses, Outerwear, and Shoes
- **Shopping Cart** - Full cart functionality with add/remove/update quantity
- **Wishlist** - Save favorite items for later
- **Quick View Modal** - View product details without leaving the page
- **Toast Notifications** - Real-time feedback for user actions

### 💎 Product Features
- **Product Badges** - New, Sale, Trending, Premium, and Bestseller tags
- **Star Ratings** - Display ratings and review counts
- **Sale Pricing** - Show original and discounted prices
- **Size Selection** - Choose from available sizes
- **Product Descriptions** - Detailed product information
- **Multiple Images** - High-quality product photography

### 🎨 Design Elements
- **Gradient Color Scheme** - Modern purple-pink-rose gradients throughout
- **Smooth Animations** - Hover effects, transitions, and transforms
- **Responsive Layout** - Works seamlessly on mobile, tablet, and desktop
- **Glassmorphism** - Modern backdrop blur effects
- **Sticky Header** - Always accessible navigation
- **Hero Section** - Eye-catching banner with CTAs
- **Features Bar** - Highlight shipping, returns, and support policies

### 🧮 Cart Features
- **Quantity Management** - Increase/decrease item quantities
- **Remove Items** - Delete products from cart
- **Price Calculations** - Automatic subtotal, savings, and total
- **Sliding Cart Sidebar** - Smooth slide-out cart panel
- **Empty Cart State** - Helpful messaging when cart is empty

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/luxe-fashion.git
cd luxe-fashion
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install required packages**
```bash
npm install lucide-react
# or
yarn add lucide-react
```

4. **Start the development server**
```bash
npm start
# or
yarn start
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.x"
}
```

## 🏗️ Project Structure

```
luxe-fashion/
├── src/
│   ├── components/
│   │   └── ClothingStore.jsx    # Main component
│   ├── App.js
│   └── index.js
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Key Components

### Main Component: `ClothingStore`

**State Management:**
- `cart` - Array of cart items with quantities
- `wishlist` - Array of product IDs in wishlist
- `selectedCategory` - Current category filter
- `cartOpen` - Cart sidebar visibility
- `selectedProduct` - Product in quick view modal
- `notification` - Toast notification message

**Key Functions:**
- `addToCart(product)` - Add product to cart
- `updateQuantity(productId, change)` - Update item quantity
- `removeFromCart(productId)` - Remove item from cart
- `toggleWishlist(productId)` - Add/remove from wishlist
- `showNotification(message)` - Display toast notification

## 🎨 Customization

### Colors
The app uses a purple-pink-rose gradient theme. To customize colors, update the Tailwind classes:

```jsx
// Primary gradient
from-purple-600 via-pink-600 to-rose-600

// Hover states
hover:bg-purple-50
hover:text-purple-600

// Badges
bg-gradient-to-r from-emerald-500 to-teal-500  // New
bg-gradient-to-r from-amber-500 to-orange-500  // Bestseller
bg-gradient-to-r from-rose-500 to-pink-500     // Trending
bg-gradient-to-r from-purple-600 to-indigo-600 // Premium
bg-gradient-to-r from-red-500 to-rose-600      // Sale
```

### Products
Add or modify products in the `products` array:

```jsx
{
  id: 1,
  name: 'Product Name',
  category: 'tops', // tops, bottoms, dresses, outerwear, shoes
  price: 34.99,
  oldPrice: 49.99, // optional
  image: 'https://...', // product image URL
  color: 'Color Name',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.8,
  reviews: 234,
  badge: 'Sale', // optional: New, Sale, Trending, Premium, Bestseller
  description: 'Product description'
}
```

### Categories
Modify categories in the `categories` array:

```jsx
{
  id: 'unique-id',
  name: 'Category Name',
  count: 5 // number of products
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌟 Features Breakdown

### Header
- Sticky navigation with backdrop blur
- Search bar (UI only)
- User account icon
- Wishlist with counter badge
- Shopping cart with counter badge

### Hero Section
- Full-width banner with overlay
- Gradient text effects
- Call-to-action buttons
- Animated pulse indicator

### Features Bar
- Free shipping information
- Easy returns policy
- Secure payment badges
- 24/7 support highlight

### Product Grid
- Responsive grid layout (1-4 columns)
- Image zoom on hover
- Product badges
- Star ratings
- Price display with sale prices
- Quick add to cart
- Quick view button
- Wishlist toggle

### Shopping Cart
- Slide-out sidebar
- Product thumbnails
- Quantity controls
- Remove item button
- Price calculations
- Checkout button
- Continue shopping option

### Quick View Modal
- Large product image
- Full product details
- Size selection
- Add to cart & wishlist
- Additional product info

### Footer
- Brand information
- Navigation links
- Newsletter signup
- Copyright information

## 🎭 Animations

The app includes several animations:
- **Hover effects** - Scale, shadow, and color transitions
- **Slide transitions** - Cart sidebar
- **Fade in/out** - Modals and overlays
- **Pulse animations** - Notification badges
- **Bounce effect** - Toast notifications
- **Transform scales** - Buttons and cards

## 🔧 Troubleshooting

### Images not loading
- Check internet connection
- Verify Pexels URLs are accessible
- Consider hosting images locally

### Styles not applying
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` content paths
- Rebuild Tailwind styles

### Cart not updating
- Check React state management
- Verify function parameters
- Check browser console for errors

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Backend integration
- [ ] Payment gateway integration
- [ ] Product search functionality
- [ ] Filtering by price, size, color
- [ ] Sort options (price, popularity, newest)
- [ ] Customer reviews section
- [ ] Related products
- [ ] Recently viewed items
- [ ] Email notifications
- [ ] Order tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Accessibility improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- **Lucide React** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework
- **Pexels** - Free stock photography
- **React** - JavaScript library for building user interfaces

## 📧 Contact

Project Link: [https://github.com/yourusername/luxe-fashion](https://github.com/yourusername/luxe-fashion)

---

**Made with ❤️ and React**
