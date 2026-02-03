export interface Product {
    id: string;
    name: string;
    slug: string;
    price: string;
    category: string; // "Sarees", "Lehengas", etc.
    type: string;     // "Top", "Bottom wear", "One piece", "Jewellery"
    image1: string;
    image2: string;
    description?: string;
}

export interface Collection {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    filterType: 'category' | 'type'; // How it filters products
    filterValue: string; // The value to match
}

export const allProducts: Product[] = [
    // One Piece (Sarees, Gowns)
    { id: '1', name: 'Royal Silk Anarkali', slug: 'royal-silk-anarkali', price: '₹1,450', category: 'Anarkalis', type: 'One piece', image1: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1610030469668-965361363292?q=80&w=1500', description: "A timeless Anarkali crafted from rich royal silk, featuring intricate zari embroidery and a flowing silhouette perfect for grand occasions." },
    { id: '4', name: 'Zari Woven Saree', slug: 'zari-woven-saree', price: '₹1,895', category: 'Sarees', type: 'One piece', image1: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1610030469853-27c1913166b4?q=80&w=1500', description: "Handwoven Banarasi saree with traditional zari motifs, exuding elegance and heritage charm." },
    { id: '7', name: 'Midnight Blue Gown', slug: 'midnight-blue-gown', price: '₹1,220', category: 'Gowns', type: 'One piece', image1: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1500', description: "An enchanting midnight blue evening gown with delicate sequencing and a dramatic trail." },
    { id: '8', name: 'Organza Floral Saree', slug: 'organza-floral-saree', price: '₹1,560', category: 'Sarees', type: 'One piece', image1: 'https://images.unsplash.com/photo-1583395992688-294b055314eb?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1583395992982-b7b5adcc96bd?q=80&w=1500', description: "Lightweight organza saree featuring hand-painted floral motifs, perfect for summer weddings." },

    // Bottom Wear (Lehengas, Skirts)
    { id: '2', name: 'Midnight Velvet Lehenga', slug: 'midnight-velvet-lehenga', price: '₹1,980', category: 'Lehengas', type: 'Bottom wear', image1: 'https://images.unsplash.com/photo-1594595286542-c2b53b879c23?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1583395992982-b7b5adcc96bd?q=80&w=1500', description: "Luxurious velvet lehenga in deep midnight blue, adorned with heavy zardosi work for the modern bride." },
    { id: '5', name: 'Crimson Bridal Set', slug: 'crimson-bridal-set', price: '₹1,150', category: 'Lehengas', type: 'Bottom wear', image1: 'https://images.unsplash.com/photo-1585675306859-9069d511854e?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1500', description: "Classic crimson bridal lehenga featuring intricate gotapatti work and a regal flared skirt." },
    { id: '9', name: 'Ivory Raw Silk Skirt', slug: 'ivory-raw-silk-skirt', price: '₹1,345', category: 'Skirts', type: 'Bottom wear', image1: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1500', description: "Minimalist ivory raw silk skirt that pairs perfectly with heavy crop tops or blouses." },
    { id: '10', name: 'Gold Brocade Palazzo', slug: 'gold-brocade-palazzo', price: '₹1,050', category: 'Palazzos', type: 'Bottom wear', image1: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1500', description: "Statement gold brocade palazzos offering comfort without compromising on festive glamour." },

    // Top (Blouses, Kurtis)
    { id: '3', name: 'Embroidered Crop Top', slug: 'embroidered-crop-top', price: '₹1,480', category: 'Crop Tops', type: 'Top', image1: 'https://images.unsplash.com/photo-1619602495392-127c59e74488?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1619602495209-661ff4f53f93?q=80&w=1500', description: "Chic embellished crop top with contemporary cuts, designed for the fashion-forward woman." },
    { id: '11', name: 'Hand Painted Tunic', slug: 'hand-painted-tunic', price: '₹1,399', category: 'Tunics', type: 'Top', image1: 'https://images.unsplash.com/photo-1605763239999-5236f064f276?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1605763239999-5236f064f276?q=80&w=1500', description: "Artistic hand-painted tunic in soft cotton silk, perfect for day events." },
    { id: '12', name: 'Velvet Mirror Work Blouse', slug: 'velvet-mirror-work-blouse', price: '₹1,850', category: 'Blouses', type: 'Top', image1: 'https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1500', description: "Rich velvet blouse featuring traditional mirror work, adding a sparkle to any saree or lehenga." },
    { id: '13', name: 'Chanderi Silk Kurti', slug: 'chanderi-silk-kurti', price: '₹1,299', category: 'Kurtis', type: 'Top', image1: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1610030469853-27c1913166b4?q=80&w=1500', description: "Elegant Chanderi silk kurti with delicate thread work, a staple for festive wardrobes." },

    // Jewellery
    { id: '6', name: 'Kundan Choker Set', slug: 'kundan-choker-set', price: '₹1,760', category: 'Sets', type: 'Jewellery', image1: 'https://images.unsplash.com/photo-1621815809710-ad924d5ba153?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1500', description: "Exquisite Kundan choker set with matching earrings, handcrafted by master artisans." },
    { id: '14', name: 'Temple Gold Bangles', slug: 'temple-gold-bangles', price: '₹1,999', category: 'Bangles', type: 'Jewellery', image1: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1500', description: "Traditional Temple jewellery bangles with intricate goddess motifs." },
    { id: '15', name: 'Diamond Drop Earrings', slug: 'diamond-drop-earrings', price: '₹1,620', category: 'Earrings', type: 'Jewellery', image1: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1500', description: "Contemporary diamond drop earrings that catch the light beautifully." },
    { id: '16', name: 'Antique Polki Necklace', slug: 'antique-polki-necklace', price: '₹1,750', category: 'Necklaces', type: 'Jewellery', image1: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1500', image2: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1500', description: "Heirloom-quality Polki necklace set with precious stones." }
];

export const collections: Collection[] = [
    {
        id: 'c1',
        name: 'One Piece',
        slug: 'one-piece',
        description: 'Elegant Sarees, Gowns and Anarkalis.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1500',
        filterType: 'type',
        filterValue: 'One piece'
    },
    {
        id: 'c2',
        name: 'Bottom Wear',
        slug: 'bottom-wear',
        description: 'Lehengas, Skirts and Palazzos.',
        image: 'https://images.unsplash.com/photo-1594595286542-c2b53b879c23?q=80&w=1500',
        filterType: 'type',
        filterValue: 'Bottom wear'
    },
    {
        id: 'c3',
        name: 'Top Wear',
        slug: 'top',
        description: 'Designer Blouses, Crop Tops and Kurtis.',
        image: 'https://images.unsplash.com/photo-1619602495392-127c59e74488?q=80&w=1500',
        filterType: 'type',
        filterValue: 'Top'
    },
    {
        id: 'c4',
        name: 'Jewellery',
        slug: 'jewellery',
        description: 'Handcrafted Accessories and Jewels.',
        image: 'https://images.unsplash.com/photo-1621815809710-ad924d5ba153?q=80&w=1500',
        filterType: 'type',
        filterValue: 'Jewellery'
    }
];
