# Magnetic Personalities - Custom Golf Ball Markers

A fast, responsive Astro-based e-commerce site where customers can upload photos, fit them into shaped golf ball markers, preview them live, and purchase via Snipcart.

## Features

- **Custom Image Editor**: Upload and manipulate images using Fabric.js
- **Shape Selection**: Choose from circle, square, and shield shapes
- **Live Preview**: Real-time preview with drag, scale, and rotate functionality
- **High-Quality Export**: Generate high-resolution PNG previews with shape masking
- **Cloud Storage**: Automatic upload to Cloudinary for image hosting
- **E-commerce Integration**: Seamless checkout with Snipcart
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Fast Performance**: Built with Astro for optimal loading speeds

## Tech Stack

- **Frontend**: Astro 4.x with TypeScript
- **Styling**: Tailwind CSS
- **Image Editor**: Fabric.js
- **E-commerce**: Snipcart v3+
- **Image Hosting**: Cloudinary
- **Deployment**: Ready for Vercel/Netlify

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudinary account
- Snipcart account

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your actual values:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_UNSIGNED_PRESET=your_unsigned_upload_preset
   SNIPCART_PUBLIC_API_KEY=your_snipcart_public_api_key
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4321`

## Configuration Setup

### Cloudinary Setup

1. **Create a Cloudinary account** at [cloudinary.com](https://cloudinary.com)

2. **Create an unsigned upload preset**:
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned"
   - Configure folder and transformations as needed
   - Note the preset name for your `.env` file

3. **Get your cloud name**:
   - Found in your Cloudinary dashboard
   - Add to `.env` as `CLOUDINARY_CLOUD_NAME`

### Snipcart Setup

1. **Create a Snipcart account** at [snipcart.com](https://snipcart.com)

2. **Get your public API key**:
   - Go to Account → API Keys
   - Copy the "Public Test Key" for development
   - Use "Public Live Key" for production
   - Add to `.env` as `SNIPCART_PUBLIC_API_KEY`

3. **Configure custom fields**:
   - In Snipcart dashboard, go to Settings → Custom Fields
   - Enable "Custom Field 1" to display preview images in orders

## Project Structure

```
src/
├── components/
│   └── ShapedMarkerDesigner.astro    # Main designer component
├── layouts/
│   └── Layout.astro                  # Base layout with Snipcart
├── pages/
│   ├── index.astro                   # Homepage
│   ├── designer.astro                # Design tool page
│   └── thank-you.astro               # Post-checkout page
├── config.ts                         # App configuration
└── env.d.ts                          # TypeScript declarations
```

## User Flow

1. **Homepage**: Hero section with call-to-action to start designing
2. **Designer Page**: 
   - Upload image
   - Choose shape (circle, square, shield)
   - Manipulate image (drag, scale, rotate, flip)
   - Generate high-res preview and upload to Cloudinary
   - Add to cart with preview URL in custom field
3. **Checkout**: Handled by Snipcart with secure payment processing
4. **Thank You**: Order confirmation with preview image

## Key Components

### ShapedMarkerDesigner

The main component handling:
- Fabric.js canvas initialization
- Image upload and manipulation
- Shape masking and preview generation
- Cloudinary upload integration
- Snipcart cart integration

### Configuration

All settings centralized in `src/config.ts`:
- Cloudinary settings
- Snipcart configuration
- Product details
- Canvas dimensions
- Available shapes

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect Astro

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Set environment variables** in Netlify dashboard
5. **Deploy**

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
CLOUDINARY_CLOUD_NAME=your_production_cloudinary_cloud_name
CLOUDINARY_UNSIGNED_PRESET=your_production_upload_preset
SNIPCART_PUBLIC_API_KEY=your_production_snipcart_key
```

## Testing the Full Flow

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test the designer**:
   - Navigate to `/designer`
   - Upload a test image
   - Select a shape
   - Manipulate the image
   - Generate preview (requires valid Cloudinary config)

3. **Test checkout**:
   - Add item to cart
   - Complete checkout flow (requires valid Snipcart config)
   - Check Snipcart dashboard for order with custom field

4. **Verify order data**:
   - Check that preview image URL appears in Snipcart order
   - Verify image is accessible via Cloudinary URL

## Customization

### Adding New Shapes

1. **Add shape to config**:
   ```typescript
   // src/config.ts
   shapes: [
     // ... existing shapes
     { id: 'heart', name: 'Heart', icon: '❤️' },
   ]
   ```

2. **Add shape logic**:
   ```javascript
   // In ShapedMarkerDesigner.astro
   case 'heart':
     // Add Fabric.js path or shape creation logic
     break;
   ```

### Styling Customization

- Modify `tailwind.config.mjs` for brand colors
- Update components for custom styling
- Add custom CSS in layout or components

### Product Configuration

Update product details in `src/config.ts`:
```typescript
product: {
  name: 'Custom Shaped Golf Ball Marker',
  price: 24.99,
  currency: 'USD',
  id: 'custom-marker-001',
}
```

## Troubleshooting

### Common Issues

1. **Fabric.js not loading**:
   - Check that CDN link is accessible
   - Verify script loads before component initialization

2. **Cloudinary upload fails**:
   - Verify cloud name and upload preset
   - Check upload preset is set to "unsigned"
   - Ensure CORS is configured if needed

3. **Snipcart not working**:
   - Verify API key is correct
   - Check that Snipcart script loads properly
   - Ensure domain is added to Snipcart dashboard

4. **Images not displaying**:
   - Check Cloudinary URLs are accessible
   - Verify image upload completed successfully

### Development Tips

- Use browser dev tools to debug Fabric.js canvas issues
- Check network tab for failed API calls
- Monitor console for JavaScript errors
- Test with different image formats and sizes

## Future Enhancements

- **Signed Uploads**: Migrate to signed Cloudinary uploads for better security
- **Additional Shapes**: Add more shape templates
- **Batch Orders**: Allow multiple marker designs in one order
- **Admin Dashboard**: Order management and image download interface
- **Email Integration**: Automated order confirmations with preview images

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Astro documentation: [docs.astro.build](https://docs.astro.build)
- Check Snipcart docs: [docs.snipcart.com](https://docs.snipcart.com)
- Review Cloudinary docs: [cloudinary.com/documentation](https://cloudinary.com/documentation)

## License

This project is licensed under the MIT License.