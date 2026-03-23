const culturalStyles = {
  west_bengal: {
    insight: "Bengali interiors are known for artistic expression, minimal furniture, and cultural richness.",
    materials: "Teak Wood + Terracotta",
    colors: "Alpona White & Sindoor Red",
    furniture: "Four-poster beds & Easy chairs",
    decor: "Dhokra Art & Jamdani Fabrics"
  },
  rajasthan: {
    insight: "Rajasthani decor is defined by its royal heritage, intricate carvings, and vibrant color palettes.",
    materials: "Marble + Sheesham Wood",
    colors: "Indigo, Saffron & Emerald",
    furniture: "Carved Jharokhas & Low Divans",
    decor: "Blue Pottery & Bandhani Textures"
  },
  kerala: {
    insight: "Traditional Kerala design emphasizes natural ventilation, open courtyards, and massive woodwork.",
    materials: "Tung Wood + Laterite Stones",
    colors: "Earthy Browns & Sandstone",
    furniture: "Charupadi Seating & Large Chests",
    decor: "Nettur Petti & Aranmula Mirrors"
  },
  tamil_nadu: {
    insight: "Inspired by temple architecture, this style features complex stone work and antique brass finishes.",
    materials: "Granite + Rosewood",
    colors: "Deep Red, Gold & Dark Earth",
    furniture: "Thinnai Seating & Swing Planks",
    decor: "Tanjore Paintings & Brass Lamps"
  },
  punjab: {
    insight: "Punjabi heritage is loud, proud, and centered around massive textures and warm communal spaces.",
    materials: "Sturdy Oak + Phulkari Fabrics",
    colors: "Mustard Yellow & Teal",
    furniture: "Woven Charpais & Huge Closets",
    decor: "Phulkari Wall-hangings & Shishas"
  },
  maharashtra: {
    insight: "Marathi traditional interiors balance WADA architecture with sturdy, minimal wooden elements.",
    materials: "Black Stone + Sagwan Wood",
    colors: "Vibrant Yellow & Kumkum Red",
    furniture: "Diwan Seating & Gaddi beds",
    decor: "Paithani Accents & Warli Murals"
  },
  gujarat: {
    insight: "Vibrant Gujarati decor is a celebration of mirrors, embroidery, and lively geometric patterns.",
    materials: "Embroidered Fabrics + Lacquer",
    colors: "Electric Pink & Royal Blue",
    furniture: "Sankheda Swings & Patchwork poufs",
    decor: "Mirror Work (Abhla) & Lippan Art"
  },
  kashmir: {
    insight: "Kashmiri interiors are cold-climate havens featuring extensive walnut wood and wool textures.",
    materials: "Walnut Wood + Himalayan Wool",
    colors: "Crimson & Walnut Brown",
    furniture: "Khatamband Ceilings & Low desks",
    decor: "Pashmina Fabrics & Copper Samovars"
  },
  assam: {
    insight: "Assamese style is a masterclass in sustainable living, using bamboo and natural cane.",
    materials: "Bamboo + Cane + Tokari",
    colors: "Leaf Green & Muga Silk Gold",
    furniture: "Cane Lounge chairs & Murhas",
    decor: "Bamboo Wall Art & Bell Metal"
  }
};

const cultureThemeMap = {
  scandinavian: { gold: "#B89685", goldLight: "#E5D3C8", hero: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200" },
  minimalist: { gold: "#78866B", goldLight: "#D1D8C1", hero: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200" },
  west_bengal: { gold: "#D32F2F", goldLight: "#FFCDD2", hero: "https://images.unsplash.com/photo-1590059345152-320078277259?auto=format&fit=crop&q=80&w=1200" },
  rajasthan: { gold: "#3F51B5", goldLight: "#C5CAE9", hero: "https://images.unsplash.com/photo-1599661046289-e31887846eac?auto=format&fit=crop&q=80&w=1200" },
  kerala: { gold: "#2E7D32", goldLight: "#C8E6C9", hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200" },
  tamil_nadu: { gold: "#8B4513", goldLight: "#DEB887", hero: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200" },
  punjab: { gold: "#F9A825", goldLight: "#FFF176", hero: "https://images.unsplash.com/photo-1597040660057-7977a42f5e1f?auto=format&fit=crop&q=80&w=1200" },
  maharashtra: { gold: "#E65100", goldLight: "#FFB74D", hero: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200" },
  gujarat: { gold: "#EC407A", goldLight: "#F48FB1", hero: "https://images.unsplash.com/photo-1597040660057-7977a42f5e1f?auto=format&fit=crop&q=80&w=1200" },
  kashmir: { gold: "#5D4037", goldLight: "#A1887F", hero: "https://images.unsplash.com/photo-1566833912952-6bd46db6384a?auto=format&fit=crop&q=80&w=1200" },
  assam: { gold: "#558B2F", goldLight: "#AED581", hero: "https://images.unsplash.com/photo-1623910385960-498c8c679958?auto=format&fit=crop&q=80&w=1200" }
};

export default function handler(req, res) {
  res.status(200).json({ styles: culturalStyles, themes: cultureThemeMap });
}
