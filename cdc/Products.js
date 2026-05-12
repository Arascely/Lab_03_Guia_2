// products.js — Módulo de gestión de productos (CORREGIDO)
// LABORATORIO 02: Se corrigieron los defectos técnicos y de negocio

const products = [
  { id: 1, name: 'Laptop HP', price: 2500 },
  { id: 2, name: 'Mouse Logitech', price: 45 }, 
  { id: 3, name: 'Teclado Mecánico', price: 120 }, 
  { id: 4, name: 'Monitor LG', price: 850 } 
];

function getProductById(id) {
  // Comparación estricta para cumplir el criterio CA-4
  const found = products.find(p => p.id === id);
  return found || null;
}

function calculateDiscount(product, discount) {
  // Validación para evitar precios nulos o negativos (CA-3)
  if (!product || product.price === null || product.price < 0) {
    throw new Error('Precio inválido');
  }
  
  return product.price - (product.price * discount);
}

function filterExpensive(minPrice) {
  return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };