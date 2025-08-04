// Configuration constants for the application
// Updated for Cloudflare Pages deployment
export const config = {
  // Cloudinary settings
  cloudinary: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME || 'your_cloudinary_cloud_name',
    uploadPreset: import.meta.env.CLOUDINARY_UNSIGNED_PRESET || 'your_unsigned_upload_preset',
  },
  
  // Snipcart settings
  snipcart: {
    publicApiKey: import.meta.env.SNIPCART_PUBLIC_API_KEY || 'your_snipcart_public_api_key',
  },
  
  // Product settings
  product: {
    name: 'Custom Shaped Golf Ball Marker',
    price: 24.99,
    currency: 'USD',
    id: 'custom-marker-001',
  },
  
  // Canvas settings for marker design
  canvas: {
    width: 400,
    height: 400,
    exportWidth: 800,
    exportHeight: 800,
  },
  
  // Available marker shapes
  shapes: [
    { id: 'circle', name: 'Circle', icon: '●' },
    { id: 'square', name: 'Square', icon: '■' },
    { id: 'shield', name: 'Shield', icon: '🛡️' },
  ],
};