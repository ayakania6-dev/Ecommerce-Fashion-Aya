import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, User, ChevronRight, Trash2, Plus, Minus, Star, X, Menu, Filter, ArrowRight } from 'lucide-react';

const ClothingStore = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState('');

  const products = [
    { id: 1, name: 'Premium Cotton Tee', category: 'tops', price: 34.99, oldPrice: 49.99, image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'White', sizes: ['XS', 'S', 'M', 'L', 'XL'], rating: 4.8, reviews: 234, badge: 'Sale', description: 'Ultra-soft premium cotton with a modern fit' },
    { id: 2, name: 'Vintage Denim Jacket', category: 'outerwear', price: 129.99, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Blue Wash', sizes: ['S', 'M', 'L', 'XL'], rating: 4.9, reviews: 189, badge: 'New', description: 'Classic denim with vintage wash and modern details' },
    { id: 3, name: 'High-Rise Skinny Jeans', category: 'bottoms', price: 79.99, image: 'https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Black', sizes: ['24', '26', '28', '30', '32'], rating: 4.7, reviews: 412, description: 'Stretch denim with a flattering high-rise fit' },
    { id: 4, name: 'Floral Maxi Dress', category: 'dresses', price: 89.99, oldPrice: 120.00, image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Floral Print', sizes: ['XS', 'S', 'M', 'L'], rating: 4.9, reviews: 298, badge: 'Trending', description: 'Flowing maxi dress with delicate floral pattern' },
    { id: 5, name: 'Cozy Knit Sweater', category: 'tops', price: 64.99, image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Heather Gray', sizes: ['S', 'M', 'L', 'XL'], rating: 4.8, reviews: 256, description: 'Chunky knit sweater perfect for layering' },
    { id: 6, name: 'Leather Ankle Boots', category: 'shoes', price: 159.99, image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Cognac', sizes: ['6', '7', '8', '9', '10'], rating: 4.9, reviews: 167, badge: 'Premium', description: 'Genuine leather boots with comfortable block heel' },
    { id: 7, name: 'Linen Button-Down', category: 'tops', price: 54.99, image: 'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'White', sizes: ['XS', 'S', 'M', 'L', 'XL'], rating: 4.6, reviews: 143, description: 'Breathable linen perfect for warm weather' },
    { id: 8, name: 'Tailored Wide-Leg Pants', category: 'bottoms', price: 74.99, image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Camel', sizes: ['2', '4', '6', '8', '10'], rating: 4.8, reviews: 201, description: 'Sophisticated wide-leg trousers with pleated front' },
    { id: 9, name: 'Silk Cami Top', category: 'tops', price: 79.99, oldPrice: 95.00, image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Champagne', sizes: ['XS', 'S', 'M', 'L'], rating: 4.7, reviews: 178, badge: 'Sale', description: 'Luxurious silk charmeuse camisole' },
    { id: 10, name: 'Wool Blend Coat', category: 'outerwear', price: 199.99, image: 'https://images.pexels.com/photos/7945998/pexels-photo-7945998.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Camel', sizes: ['XS', 'S', 'M', 'L'], rating: 4.9, reviews: 156, badge: 'Premium', description: 'Timeless wool blend coat with classic silhouette' },
    { id: 11, name: 'Pleated Midi Skirt', category: 'bottoms', price: 69.99, image: 'https://images.pexels.com/photos/7764021/pexels-photo-7764021.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Navy', sizes: ['XS', 'S', 'M', 'L'], rating: 4.6, reviews: 189, description: 'Elegant pleated skirt with flattering A-line cut' },
    { id: 12, name: 'Cashmere V-Neck', category: 'tops', price: 149.99, image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600', color: 'Burgundy', sizes: ['S', 'M', 'L', 'XL'], rating: 5.0, reviews: 312, badge: 'Bestseller', description: 'Pure cashmere sweater in classic v-neck style' },
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: 12 },
    { id: 'tops', name: 'Tops', count: 5 },
    { id: 'bottoms', name: 'Bottoms', count: 3 },
    { id: 'dresses', name: 'Dresses', count: 1 },
    { id: 'outerwear', name: 'Outerwear', count: 2 },
    { id: 'shoes', name: 'Shoes', count: 1 },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      showNotification('Quantity updated in cart');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showNotification('Added to cart');
    }
    setCartOpen(true);
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showNotification('Removed from cart');
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      showNotification('Removed from wishlist');
    } else {
      setWishlist([...wishlist, productId]);
      showNotification('Added to wishlist');
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const savings = cart.reduce((sum, item) => sum + ((item.oldPrice || item.price) - item.price) * item.quantity, 0);

  const getBadgeStyle = (badge) => {
    switch(badge) {
      case 'New': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
      case 'Bestseller': return 'bg-gradient-to-r from-amber-500 to-orange-500';
      case 'Trending': return 'bg-gradient-to-r from-rose-500 to-pink-500';
      case 'Premium': return 'bg-gradient-to-r from-purple-600 to-indigo-600';
      case 'Sale': return 'bg-gradient-to-r from-red-500 to-rose-600';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-2xl animate-bounce">
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">LUXE</span>
                <span className="text-slate-300 text-sm ml-2">FASHION</span>
              </h1>
              
              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-8">
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition">New Arrivals</a>
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition">Collections</a>
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition">Sale</a>
              </nav>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-slate-100/80 rounded-full px-4 py-2 gap-2 hover:bg-slate-100 transition">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none text-sm text-slate-700 w-40"
                />
              </div>
              
              {/* Icon Buttons */}
              <button className="p-2.5 hover:bg-purple-50 rounded-full transition group">
                <User className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition" />
              </button>
              
              <button 
                onClick={() => {}}
                className="relative p-2.5 hover:bg-rose-50 rounded-full transition group"
              >
                <Heart className={`w-5 h-5 transition ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-600 group-hover:text-rose-500'}`} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {wishlist.length}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2.5 hover:bg-purple-50 rounded-full transition group"
              >
                <ShoppingCart className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-pink-900/90 to-rose-900/95 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              Winter Collection 2025
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Redefine
              <span className="block mt-2 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
                Your Style
              </span>
            </h2>
            
            <p className="text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
              Discover premium collections crafted with elegance and designed for the modern wardrobe
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-2xl flex items-center gap-2">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white/30">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">Free Shipping</div>
              <div className="text-sm opacity-90">Orders over $50</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">Easy Returns</div>
              <div className="text-sm opacity-90">30-day policy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">Secure Pay</div>
              <div className="text-sm opacity-90">100% protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7 Support</div>
              <div className="text-sm opacity-90">Always here</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Shop by Category</h3>
            <p className="text-slate-600 mt-1">Find your perfect style</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-slate-200 rounded-full hover:border-purple-600 transition">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative px-6 py-3 rounded-2xl font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 hover:border-purple-300'
              }`}
            >
              {cat.name}
              <span className={`ml-2 text-xs ${selectedCategory === cat.id ? 'opacity-80' : 'text-slate-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200"
            >
              
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold text-white ${getBadgeStyle(product.badge)} shadow-lg`}>
                    {product.badge}
                  </div>
                )}
                
                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition shadow-lg hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`}
                  />
                </button>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition shadow-xl transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2.5 bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/30 transition border border-white/40"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-900">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviews})</span>
                </div>
                
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-sm text-slate-500 mb-3">{product.color}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ${product.price}
                      </p>
                      {product.oldPrice && (
                        <p className="text-sm text-slate-400 line-through">
                          ${product.oldPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition hover:scale-110"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${cartOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setCartOpen(false)}
        ></div>
        
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Cart Header */}
          <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">Shopping Cart</h3>
                <p className="text-sm opacity-90">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
              </div>
              <button 
                onClick={() => setCartOpen(false)} 
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart className="w-20 h-20 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-600 font-medium text-lg mb-2">Your cart is empty</p>
                <p className="text-slate-400 text-sm mb-6">Start adding items to your cart</p>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-xl transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-200 hover:border-purple-300 transition">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1 truncate">{item.name}</h4>
                      <p className="text-sm text-slate-600 mb-1">{item.color}</p>
                      <p className="text-lg font-bold text-purple-600">${item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-white rounded-lg border-2 border-slate-200">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-slate-50 transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-slate-50 transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t-2 border-slate-200 bg-slate-50">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Savings</span>
                    <span className="font-semibold text-emerald-600">-${savings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="pt-3 border-t border-slate-300 flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-900">Total</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105 mb-3">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => setCartOpen(false)}
                className="w-full py-3 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-purple-300 transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md" 
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white rounded-full shadow-xl hover:bg-slate-50 transition"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              
              {/* Product Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white ${getBadgeStyle(selectedProduct.badge)} shadow-lg`}>
                    {selectedProduct.badge}
                  </div>
                )}
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col justify-center">
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{selectedProduct.rating}</span>
                  <span className="text-slate-400">({selectedProduct.reviews} reviews)</span>
                </div>
                
                {/* Product Name */}
                <h2 className="text-4xl font-bold text-slate-900 mb-3 leading-tight">
                  {selectedProduct.name}
                </h2>
                
                {/* Color */}
                <p className="text-lg text-slate-600 mb-6">{selectedProduct.color}</p>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${selectedProduct.price}
                  </div>
                  {selectedProduct.oldPrice && (
                    <div className="text-2xl text-slate-400 line-through">
                      ${selectedProduct.oldPrice}
                    </div>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                {/* Size Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.sizes.map(size => (
                      <button 
                        key={size} 
                        className="px-6 py-3 border-2 border-slate-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition font-semibold text-slate-700 hover:text-purple-600"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  
                  <button 
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className="p-4 border-2 border-slate-200 rounded-2xl hover:border-rose-500 hover:bg-rose-50 transition"
                  >
                    <Heart className={`w-6 h-6 ${wishlist.includes(selectedProduct.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
                  </button>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Easy 30-day returns</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Secure checkout guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                LUXE FASHION
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium clothing for those who appreciate quality, style, and elegance.
              </p>
            </div>
            
            {/* Shop */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition">Sale</a></li>
                <li><a href="#" className="hover:text-white transition">Collections</a></li>
              </ul>
            </div>
            
            {/* Customer Care */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Customer Care</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe for exclusive offers and updates
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:border-purple-400 transition"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg transition">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 LUXE Fashion. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClothingStore;