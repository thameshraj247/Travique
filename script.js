const traviqueData = {
  traveler: {
    id: "TRV-884920",
    name: "Sophia Vance",
    email: "sophia.vance@travique.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    tier: "Travique Diamond Club",
    miles: 24580,
    memberSince: "March 2023",
    phone: "+91 98765 43210",
    nationality: "United States",
    passportExpiry: "Nov 2031"
  },

  bookings: [
    {
      id: "BK-2026-9041",
      packageId: "pkg-intl-maldives",
      title: "Maldives Overwater Lagoon Sanctuary",
      category: "Honeymoon & Luxury",
      destination: "Baa Atoll, Maldives",
      dates: "Dec 18 - Dec 24, 2026",
      status: "Ready for Departure",
      statusCode: 4,
      travelersCount: 2,
      travelers: ["Sophia Vance", "Liam Vance"],
      hotel: "Anantara Kihavah Maldives Villas (Sunset Overwater Pool Villa)",
      flights: {
        outbound: "Emirates EK-652 | DXB -> MLE | Seat 2A, 2B | 08:30 AM",
        return: "Emirates EK-653 | MLE -> DXB | Seat 2A, 2B | 11:45 PM",
        pnr: "TRV-EK9421"
      },
      seaplaneTransfer: "Trans Maldivian Airways Flight TMA-18",
      totalAmount: 4850,
      currency: "$",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
      invoiceNumber: "INV-2026-9041",
      ticketNumber: "TKT-MLE-88912",
      bookingDate: "Oct 12, 2026",
      paymentMethod: "Visa Platinum ending in 4192",
      itinerary: [
        {
          day: 1,
          title: "Touchdown in Paradise & Scenic Seaplane Flight",
          time: "09:45 AM",
          desc: "Arrive at Velana International Airport (MLE). Greeted by your personal Travique Island Host and escorted to the private VIP seaplane lounge. 35-minute panoramic flight over turquoise atolls to Anantara Kihavah.",
          highlight: "Champagne welcome & private butler orientation"
        },
        {
          day: 2,
          title: "Private House Reef Snorkeling & Manta Ray Safari",
          time: "10:30 AM",
          desc: "Board the luxury yacht for a guided UNESCO Biosphere Reserve excursion with a resident marine biologist. Swim alongside gentle manta rays and sea turtles.",
          highlight: "GoPro underwater footage included"
        },
        {
          day: 3,
          title: "Sub-Ocean Dining & Starlight Overwater Spa",
          time: "01:00 PM / 07:00 PM",
          desc: "Indulge in a 4-course gourmet lunch at SEA underwater restaurant surrounded by coral life. Sunset 90-minute couple's ayurvedic ritual over the glass-bottom spa pavilion.",
          highlight: "World-class sommelier wine pairing"
        },
        {
          day: 4,
          title: "Private Sandbank Castaway Experience",
          time: "11:00 AM",
          desc: "Speedboat transfer to an uninhabited desert island for a personalized chef-curated picnic, paddleboarding, and total seclusion.",
          highlight: "Drone aerial photography session"
        },
        {
          day: 5,
          title: "Sunset Dolphin Cruise & Beachfront Barbecue",
          time: "05:30 PM",
          desc: "Traditional wooden Dhoni sailing into the golden Maldivian sunset with pods of spinner dolphins. Candlelit lobster dinner directly on powder-soft sand.",
          highlight: "Live acoustic Boduberu music"
        },
        {
          day: 6,
          title: "Floating Breakfast & Departure",
          time: "08:30 AM",
          desc: "Heart-shaped floating breakfast served in your private plunge pool. Leisurely checkout and scenic return seaplane flight back to MLE airport.",
          highlight: "Commemorative Travique island gift pack"
        }
      ]
    },
    {
      id: "BK-2026-7814",
      packageId: "pkg-intl-swiss",
      title: "Swiss Alpine Wonders & Glacier Panoramic Express",
      category: "International",
      destination: "Zurich, Zermatt & Interlaken, Switzerland",
      dates: "Jan 15 - Jan 22, 2027",
      status: "E-Tickets & Vouchers Issued",
      statusCode: 3,
      travelersCount: 2,
      travelers: ["Sophia Vance", "Liam Vance"],
      hotel: "The Omnia Zermatt & Victoria-Jungfrau Grand Hotel",
      flights: {
        outbound: "Swiss International LX-19 | JFK -> ZRH | Seat 4K, 4J | 06:15 PM",
        return: "Swiss International LX-18 | ZRH -> JFK | Seat 4K, 4J | 01:20 PM",
        pnr: "TRV-LX5501"
      },
      railPass: "1st Class 8-Day Swiss Travel Rail Pass Included",
      totalAmount: 5400,
      currency: "$",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
      invoiceNumber: "INV-2026-7814",
      ticketNumber: "TKT-ZRH-44210",
      bookingDate: "Oct 28, 2026",
      paymentMethod: "Amex Centurion ending in 9002",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Zurich & Lake Promenade Welcome",
          time: "09:00 AM",
          desc: "Arrive at Zurich Airport, meet your Travique Swiss concierge, private transfer to Baur au Lac. Afternoon walking tour of the Old Town (Altstadt) and evening Lake Zurich cruise.",
          highlight: "Swiss artisan chocolate tasting"
        },
        {
          day: 2,
          title: "Scenic Train to Interlaken & Lake Brienz",
          time: "10:00 AM",
          desc: "First-class scenic train through the Brunig Pass into Interlaken. Check into Victoria-Jungfrau. Private steamboat journey on turquoise Lake Brienz.",
          highlight: "Panoramic alpine lunch at Giessbach Falls"
        },
        {
          day: 3,
          title: "Jungfraujoch - Top of Europe High Alpine Tour",
          time: "08:30 AM",
          desc: "Ascend via the modern Eiger Express cable car to Jungfraujoch (3,454m). Explore the Ice Palace, Sphinx Observatory, and marvel at the Aletsch Glacier.",
          highlight: "Highest post office and chocolate shop in Europe"
        },
        {
          day: 4,
          title: "Glacier Express to Zermatt (Matterhorn View)",
          time: "09:15 AM",
          desc: "Board the world-famous Glacier Express panoramic rail car. Feast on a 3-course lunch on board while traveling through the Rhine Gorge and Oberalp Pass to car-free Zermatt.",
          highlight: "Direct unobstructed Matterhorn balcony suite"
        },
        {
          day: 5,
          title: "Gornergrat Cogwheel Railway & Winter Snowshoeing",
          time: "10:00 AM",
          desc: "Climb on Europe's highest open-air cogwheel train to Gornergrat (3,089m) for a 360-degree panorama of 29 peaks exceeding 4,000 meters.",
          highlight: "Traditional Valais cheese fondue experience"
        },
        {
          day: 6,
          title: "Matterhorn Glacier Paradise & Ice Cave",
          time: "10:30 AM",
          desc: "High-altitude cable car ride to 3,883m. Step inside the glacier ice palace 15 meters below the surface. Afternoon free for luxury boutique shopping in Zermatt.",
          highlight: "Private ski/snowshoe coach session"
        },
        {
          day: 7,
          title: "Return to Zurich & Farewell Gala Dinner",
          time: "02:00 PM",
          desc: "Leisurely first-class rail return to Zurich. Grand farewell dinner at Kronenhalle featuring classic Swiss haute cuisine amidst museum-grade art collections.",
          highlight: "Celebratory champagne toast"
        },
        {
          day: 8,
          title: "Homeward Flight from Zurich",
          time: "10:00 AM",
          desc: "Private limousine transfer to Zurich Kloten Airport. Priority check-in and lounge escort for your transatlantic flight.",
          highlight: "Dedicated airport concierge"
        }
      ]
    },
    {
      id: "BK-2026-3392",
      packageId: "pkg-dom-kashmir",
      title: "Royal Kashmir & Serene Dal Lake Houseboat",
      category: "Domestic",
      destination: "Srinagar, Gulmarg & Pahalgam, India",
      dates: "May 10 - May 16, 2026",
      status: "Trip Completed",
      statusCode: 5,
      travelersCount: 2,
      travelers: ["Sophia Vance", "Liam Vance"],
      hotel: "Khyber Himalayan Resort & Sukoon Luxury Houseboat",
      flights: {
        outbound: "Air India AI-825 | DEL -> SXR | Seat 3A, 3B",
        return: "Air India AI-826 | SXR -> DEL | Seat 3A, 3B",
        pnr: "TRV-AI1892"
      },
      totalAmount: 2250,
      currency: "$",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
      invoiceNumber: "INV-2026-3392",
      ticketNumber: "TKT-SXR-12948",
      bookingDate: "Feb 14, 2026",
      paymentMethod: "Visa Platinum ending in 4192",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar & Shikara Sunset on Dal Lake",
          time: "11:30 AM",
          desc: "Arrive at Sheikh ul-Alam Airport. Traditional saffron Kahwa welcome at Sukoon Luxury Houseboat. Gentle sunset Shikara ride across the lotus gardens of Dal Lake.",
          highlight: "Floating flower market interaction"
        },
        {
          day: 2,
          title: "Mughal Gardens & Old City Heritage Walk",
          time: "09:30 AM",
          desc: "Visit Nishat Bagh and Shalimar Bagh terrace gardens built by Emperor Jahangir. Explore historic copper artisan quarters and Jamia Masjid.",
          highlight: "Authentic 7-course Kashmiri Wazwan feast"
        },
        {
          day: 3,
          title: "Scenic Drive to Gulmarg & Gondola Phase 2",
          time: "08:30 AM",
          desc: "Drive past pine-scented valleys to Gulmarg 'Meadow of Flowers'. Board the Gulmarg Gondola to Apharwat Peak at 13,780 ft with breathtaking views of Nanga Parbat.",
          highlight: "High-altitude pine forest photography"
        },
        {
          day: 4,
          title: "Alpine Meadows & Golf Course Stroll",
          time: "10:00 AM",
          desc: "Leisure morning around the historic St. Mary's Church and high-altitude golf grounds. Afternoon spa rejuvenation at The Khyber Resort.",
          highlight: "Ayurvedic cedarwood body scrub"
        },
        {
          day: 5,
          title: "Pahalgam 'Valley of Shepherds' & Betaab Valley",
          time: "09:00 AM",
          desc: "Journey along the Lidder River to picturesque Pahalgam. Visit Aru Valley and Betaab Valley surrounded by snowcapped peaks and crystal rivers.",
          highlight: "Riverside trout angling and picnic"
        },
        {
          day: 6,
          title: "Return to Srinagar & Souvenir Hunting",
          time: "11:00 AM",
          desc: "Visit authentic Pashmina weaving clusters and GI-tagged Kashmiri walnut wood carving workshops. Evening farewell on the lake.",
          highlight: "Private Pashmina masterclass"
        }
      ]
    }
  ],

  domesticPackages: [
    {
      id: "pkg-dom-kashmir",
      title: "Kashmir Paradise: Houseboats & High Peaks",
      tagline: "Experience the Switzerland of the East with Dal Lake luxury",
      region: "North India",
      duration: "6 Days / 5 Nights",
      price: 1199,
      originalPrice: 1499,
      discount: "20% OFF",
      rating: 4.95,
      reviewsCount: 348,
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["5-Star Houseboat Stay", "Gulmarg Gondola Passes", "All Transfers in Private SUV", "Daily Saffron Kahwa & Breakfast", "Guided Mughal Garden Walk"]
    },
    {
      id: "pkg-dom-kerala",
      title: "Kerala Backwaters & Munnar Tea Horizons",
      tagline: "Serene houseboats, spice plantations & Ayurvedic wellness",
      region: "South India",
      duration: "5 Days / 4 Nights",
      price: 980,
      originalPrice: 1250,
      discount: "22% OFF",
      rating: 4.92,
      reviewsCount: 290,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["Overnight Alleppey Houseboat", "Boutique Munnar Tea Estate", "Spice Garden Tour", "Daily Organic Kerala Breakfast", "Kathakali Performance Entry"]
    },
    {
      id: "pkg-dom-rajasthan",
      title: "Royal Rajasthan: Forts, Palaces & Desert Sands",
      tagline: "Live like Maharaja amidst majestic citadels & dunes",
      region: "West India",
      duration: "7 Days / 6 Nights",
      price: 1450,
      originalPrice: 1800,
      discount: "19% OFF",
      rating: 4.98,
      reviewsCount: 412,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      featured: false,
      inclusions: ["Heritage Palace Stays (Jaipur & Udaipur)", "Sam Sand Dunes Swiss Luxury Tent", "Camel Safari & Folk Performance", "Private Chauffeur Sedan", "Monument VIP Skip-the-line"]
    },
    {
      id: "pkg-dom-goa",
      title: "Goa Luxury Coastal & Sunset Catamaran Escape",
      tagline: "Pristine white sands, Portuguese heritage & beach clubs",
      region: "West Coast",
      duration: "4 Days / 3 Nights",
      price: 799,
      originalPrice: 999,
      discount: "20% OFF",
      rating: 4.88,
      reviewsCount: 215,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      featured: false,
      inclusions: ["5-Star Beachfront Resort", "Private Sunset Catamaran Charter", "Fontainhas Latin Quarter Walk", "Daily Buffet Breakfast & Cocktails", "Airport Luxury Pickup"]
    },
    {
      id: "pkg-dom-ladakh",
      title: "Ladakh High-Altitude Odyssey & Pangong Lake",
      tagline: "Turquoise salt lakes, dramatic monasteries & moon landscapes",
      region: "Himalayas",
      duration: "6 Days / 5 Nights",
      price: 1320,
      originalPrice: 1650,
      discount: "20% OFF",
      rating: 4.96,
      reviewsCount: 189,
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["Oxygen-Fitted Luxury Vehicle", "Nubra Valley Glamping", "Pangong Lake Frontline Camp", "Inner Line Permits Included", "Monastery Meditation Guides"]
    },
    {
      id: "pkg-dom-andaman",
      title: "Andaman Turquoise Coral & Havelock Island",
      tagline: "Asia's best beach, deep reef dives & secluded coves",
      region: "Island Territory",
      duration: "6 Days / 5 Nights",
      price: 1250,
      originalPrice: 1550,
      discount: "19% OFF",
      rating: 4.94,
      reviewsCount: 278,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
      featured: false,
      inclusions: ["Havelock Clifftop Resort Stay", "Makruzz High Speed Ferry Tickets", "Scuba Diving with PADI Instructor", "Cellular Jail Sound & Light Show", "All Island Private Transfers"]
    },
    {
      id: "pkg-dom-udaipur",
      title: "Udaipur Royal Pichola & Mewar Palace Splendor",
      tagline: "Venice of the East with private lake cruises & heritage suites",
      region: "West India",
      duration: "5 Days / 4 Nights",
      price: 1150,
      originalPrice: 1450,
      discount: "21% OFF",
      rating: 4.97,
      reviewsCount: 320,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["Taj Lake Palace / Oberoi Udaivilas Stay", "Private Sunset Shikara on Lake Pichola", "Exclusive City Palace Guided Tour", "Jag Mandir Island Royal Dinner", "Chauffeured Luxury Transfers"]
    }
  ],

  internationalPackages: [
    {
      id: "pkg-intl-swiss",
      title: "Switzerland Grand Alps & Glacier Panoramic Express",
      tagline: "Snow-crowned peaks, scenic rails & luxury lakeside palaces",
      region: "Europe",
      duration: "8 Days / 7 Nights",
      price: 2790,
      originalPrice: 3400,
      discount: "18% OFF",
      rating: 4.99,
      reviewsCount: 520,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["8-Day 1st Class Swiss Travel Pass", "Jungfraujoch Top of Europe Tickets", "Glacier Express Seat Reservation", "4 & 5-Star Central Alpine Hotels", "Daily Continental Breakfast"]
    },
    {
      id: "pkg-intl-maldives",
      title: "Maldives Overwater Lagoon Sanctuary",
      tagline: "Crystal clear lagoons, private plunge pool villas & coral reefs",
      region: "Indian Ocean",
      duration: "5 Days / 4 Nights",
      price: 2425,
      originalPrice: 3100,
      discount: "22% OFF",
      rating: 4.97,
      reviewsCount: 460,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["Overwater Sunrise Villa with Pool", "Roundtrip Seaplane Airport Transfers", "All-Inclusive Dining & Fine Wines", "Couple Coral Reef Snorkeling Safari", "Sunset Champagne Cruise"]
    },
    {
      id: "pkg-intl-bali",
      title: "Bali Tropical Bliss: Ubud Rainforest & Seminyak",
      tagline: "Sacred temples, emerald rice terraces & ocean sunsets",
      region: "Southeast Asia",
      duration: "6 Days / 5 Nights",
      price: 1150,
      originalPrice: 1450,
      discount: "21% OFF",
      rating: 4.91,
      reviewsCount: 388,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["Private Pool Villa in Ubud & Seminyak", "Tegallalang Rice Terrace & Jungle Swing", "Nusa Penida Island Day Tour", "Balinese Traditional Massage", "Private Dedicated English Chauffeur"]
    },
    {
      id: "pkg-intl-dubai",
      title: "Dubai Glamour, Burj Khalifa & Starlight Desert",
      tagline: "Futuristic architecture, luxury megamalls & red dune safaris",
      region: "Middle East",
      duration: "5 Days / 4 Nights",
      price: 1390,
      originalPrice: 1750,
      discount: "20% OFF",
      rating: 4.89,
      reviewsCount: 310,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      featured: false,
      inclusions: ["5-Star Downtown Dubai Hotel", "Burj Khalifa 124/125th Floor Entry", "Premium 4x4 Desert Safari with BBQ", "Marina Yacht Dinner Cruise", "Museum of the Future Priority Entry"]
    },
    {
      id: "pkg-intl-japan",
      title: "Japan Golden Route: Tokyo, Kyoto & Mt. Fuji",
      tagline: "Neon-lit cityscapes, ancient shrines & bullet train precision",
      region: "East Asia",
      duration: "9 Days / 8 Nights",
      price: 3250,
      originalPrice: 3950,
      discount: "18% OFF",
      rating: 4.99,
      reviewsCount: 640,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["7-Day Shinkansen Bullet Train Pass", "Traditional Kyoto Ryokan with Onsen", "Mt. Fuji & Hakone Ropeway Pass", "Tokyo Shibuya & Shinjuku Tour", "Authentic Tea Ceremony Class"]
    },
    {
      id: "pkg-intl-paris-rome",
      title: "Paris, Venice & Rome: Classical European Odyssey",
      tagline: "Eiffel views, gondola serenades & Roman Colosseum grandeur",
      region: "Europe",
      duration: "10 Days / 9 Nights",
      price: 3680,
      originalPrice: 4500,
      discount: "18% OFF",
      rating: 4.96,
      reviewsCount: 472,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      featured: false,
      inclusions: ["Eiffel Tower Summit Priority Access", "Venetian Grand Canal Gondola Serenade", "Colosseum & Roman Forum VIP Tour", "High Speed Eurostar & Italo Rail", "Centrally Located 4-Star Boutique Hotels"]
    },
    {
      id: "pkg-intl-amalfi",
      title: "Amalfi Coast & Capri Private Yacht Odyssey",
      tagline: "Cliffside Positano villas, Blue Grotto private boat & lemon groves",
      region: "Europe",
      duration: "7 Days / 6 Nights",
      price: 3450,
      originalPrice: 4200,
      discount: "18% OFF",
      rating: 4.98,
      reviewsCount: 395,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      featured: true,
      inclusions: ["5-Star Positano Clifftop Suite", "Private Speedboat to Capri & Blue Grotto", "Ravello Villa Cimbrone Gardens Pass", "Michelin-Star Cliffside Dining", "Private Helicopter / Mercedes Transfers"]
    }
  ],

  honeymoonPackages: [
    {
      id: "pkg-hm-maldives",
      title: "Maldives Overwater Sunset Romance",
      type: "honeymoon",
      tagline: "Private infinity pool, couple spa & secluded sandbank dining",
      duration: "5 Days / 4 Nights",
      price: 2650,
      originalPrice: 3350,
      discount: "21% OFF",
      rating: 4.99,
      reviewsCount: 312,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      perks: ["Complimentary Champagne on Arrival", "Floating Breakfast in Pool Villa", "Couple's Overwater 90m Spa", "Romantic Candlelight Beach Dinner", "Private Drone & Couple Photography"]
    },
    {
      id: "pkg-hm-santorini",
      title: "Santorini Cliffside Dream & Mykonos Chic",
      type: "honeymoon",
      tagline: "Caldera view jacuzzi suites, private catamaran & Greek sunsets",
      duration: "7 Days / 6 Nights",
      price: 3100,
      originalPrice: 3800,
      discount: "18% OFF",
      rating: 4.98,
      reviewsCount: 284,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      perks: ["Oia Caldera Cave Suite with Heated Jacuzzi", "Semi-Private Sunset Catamaran Cruise", "Santorini Volcanic Wine Tasting Tour", "High-Speed Ferry to Mykonos", "Romantic Dinner at 180° Sunset Bar"]
    },
    {
      id: "pkg-hm-swiss",
      title: "Swiss Fairytale Romance: Zermatt & Lake Lucerne",
      type: "honeymoon",
      tagline: "Matterhorn balcony chalets, vintage carriage rides & chocolates",
      duration: "7 Days / 6 Nights",
      price: 3450,
      originalPrice: 4200,
      discount: "18% OFF",
      rating: 4.97,
      reviewsCount: 198,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      perks: ["Matterhorn View Luxury Chalet Suite", "Horse-Drawn Carriage Ride in Zermatt", "Private Yacht Cruise on Lake Lucerne", "Cheese & Chocolate Fondue Gala", "1st Class Swiss Rail Romance Pass"]
    },
    {
      id: "pkg-hm-bali",
      title: "Bali Clifftop Bliss & Secret Waterfall Romance",
      type: "honeymoon",
      tagline: "Infinity pool overlooking Indian Ocean & candlelit cave dinners",
      duration: "6 Days / 5 Nights",
      price: 1420,
      originalPrice: 1780,
      discount: "20% OFF",
      rating: 4.93,
      reviewsCount: 220,
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      perks: ["Uluwatu Oceanfront Villa with Butler", "Private Helicopter Coastal Tour", "Romantic Flower Bath & Couple Spa", "Secret Waterfall Picnic for Two", "Daily Sunset Cocktails on Clifftop"]
    },
    {
      id: "pkg-hm-amalfi",
      title: "Amalfi Ravello Clifftop & Capri Starlight Romance",
      type: "honeymoon",
      tagline: "Private infinity terrace, couple yacht charter & candlelit lemon groves",
      duration: "6 Days / 5 Nights",
      price: 2980,
      originalPrice: 3650,
      discount: "18% OFF",
      rating: 4.99,
      reviewsCount: 260,
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      perks: ["Belmond Hotel Caruso Balcony Suite", "Private Sunset Yacht to Faraglioni Rocks", "Couple's Capri Spa with Champagne", "Candlelit Cliffside Dining in Positano", "Chauffeured Alfa Romeo / Mercedes Fleet"]
    }
  ],

  familyPackages: [
    {
      id: "pkg-fam-singapore",
      title: "Singapore & Sentosa Universal Kingdom",
      type: "family",
      tagline: "Theme parks, interactive science centers & futuristic gardens",
      duration: "5 Days / 4 Nights",
      price: 1650,
      originalPrice: 2050,
      discount: "20% OFF",
      rating: 4.94,
      reviewsCount: 418,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      perks: ["Universal Studios Singapore Express VIP Passes", "S.E.A. Aquarium & Night Safari Tram", "Gardens by the Bay Cloud Forest & Avatar Experience", "Spacious Family Interconnecting Suite", "All Private Family Van Transfers"]
    },
    {
      id: "pkg-fam-disney",
      title: "Disneyland Paris & Fairytale Castles",
      type: "family",
      tagline: "Meet Disney characters, thrill rides & Seine river enchantment",
      duration: "6 Days / 5 Nights",
      price: 2490,
      originalPrice: 3000,
      discount: "17% OFF",
      rating: 4.92,
      reviewsCount: 350,
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      perks: ["Multi-Day Disney Park Hopper Tickets", "Disneyland Themed Hotel with Early Magic Hour", "Seine River Illuminations Cruise with Kids Activity", "Eiffel Tower 2nd Floor Family Ticket", "Private Airport & Park Transfers"]
    },
    {
      id: "pkg-fam-dubai",
      title: "Dubai Parks, Atlantis Waterpark & Safari",
      type: "family",
      tagline: "World's biggest waterpark, indoor snow & desert adventures",
      duration: "6 Days / 5 Nights",
      price: 1890,
      originalPrice: 2350,
      discount: "20% OFF",
      rating: 4.90,
      reviewsCount: 295,
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
      perks: ["Atlantis The Palm Unlimited Aquaventure Access", "Lost Chambers Aquarium Explorer Tickets", "Ski Dubai Snow Park Family Pass", "Gentle Desert Camp with Falconry", "Dedicated Family SUV with Child Seats"]
    },
    {
      id: "pkg-fam-kenya",
      title: "Kenya Masai Mara Family Safari Adventure",
      type: "family",
      tagline: "Witness the Big Five, luxury tented camps & Maasai storytelling",
      duration: "7 Days / 6 Nights",
      price: 3380,
      originalPrice: 4100,
      discount: "18% OFF",
      rating: 4.98,
      reviewsCount: 164,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      perks: ["Child-Friendly Luxury Safari Camp", "Private 4x4 Pop-Up Roof Game Cruiser", "Maasai Warrior Junior Ranger Program", "Hot Air Balloon Flight & Bush Breakfast", "All National Park & Conservation Fees"]
    },
    {
      id: "pkg-fam-swiss",
      title: "Swiss Alpine Wonders, Glacier Train & Chocolate Atelier",
      type: "family",
      tagline: "Panoramic mountain rails, Lindt chocolate workshop & Lake Lucerne",
      duration: "7 Days / 6 Nights",
      price: 3150,
      originalPrice: 3850,
      discount: "18% OFF",
      rating: 4.97,
      reviewsCount: 310,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      perks: ["Swiss Family Rail Pass with 1st Class Seats", "Private Lindt Chocolate Making Masterclass", "Mount Titlis Rotair Cableway Family Ticket", "Interconnecting Family Alpine Chalet Suite", "Private Zurich & Lucerne Chauffeur"]
    }
  ],

  savedPackageIds: ["pkg-intl-swiss", "pkg-hm-maldives", "pkg-dom-kashmir"],

  reviews: [
    {
      name: "Marcus & Elena Sterling",
      location: "London, UK",
      trip: "Maldives Overwater Lagoon Sanctuary",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 weeks ago",
      comment: "Travique organized our 10th anniversary honeymoon flawlessly! The private seaplane transfer, underwater dining, and the intuitive traveler dashboard with our downloadable boarding passes made this the most stress-free luxury trip we have ever taken."
    },
    {
      name: "Dr. Arvind & Neha Sharma",
      location: "San Jose, USA",
      trip: "Swiss Alpine Wonders & Glacier Express",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 month ago",
      comment: "The day-by-day itinerary on the Travique dashboard kept our entire family on track across Zurich, Zermatt, and Interlaken. Instant ticket access on my phone saved us hours at stations. World-class service!"
    },
    {
      name: "Camille Dupont",
      location: "Paris, France",
      trip: "Kashmir Paradise & Dal Lake Houseboat",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 months ago",
      comment: "A magical journey. The Sukoon houseboat in Srinagar felt like living inside royal history, and the Gulmarg gondola ride was breathtaking. Travique's 24/7 concierge was always one WhatsApp tap away."
    }
  ],

  faqs: [
    {
      q: "How does the Travique Traveler Dashboard work?",
      a: "Once you book any holiday package or sign into your traveler portal, your dashboard instantly displays your active countdown, real-time booking milestones, flight PNRs, day-by-day interactive itineraries, and 1-click printable tickets and official tax invoices."
    },
    {
      q: "Can I customize the day-by-day itinerary?",
      a: "Absolutely! All Travique packages are bespoke. Once booked, your dedicated destination concierge will tailor activities, dietary preferences, villa upgrades, or private aircraft charters to your exact desires."
    },
    {
      q: "What is your cancellation and rescheduling policy?",
      a: "We offer 100% flexible travel. You can reschedule any package up to 14 days before departure with zero amendment fees. Full refunds are processed within 48 hours in accordance with our Travique Shield Protection."
    },
    {
      q: "Are flights and visas included in the packages?",
      a: "Our international packages include comprehensive visa assistance, priority processing, and pre-arranged premium flights or flight credits. You can also opt for land-only packages if you wish to redeem personal frequent flyer miles."
    }
  ],

  destinations: [
    {
      id: "dest-swiss",
      name: "Swiss Alps & Lake Lucerne",
      country: "Switzerland",
      category: "Europe",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Dec - Mar / Jun - Sep",
      temp: "18°C / 2°C",
      highlights: "Matterhorn, Glacier Express, Interlaken, Lake Brienz",
      packageTarget: "pkg-intl-swiss"
    },
    {
      id: "dest-maldives",
      name: "Baa & North Malé Atoll",
      country: "Maldives",
      category: "Island",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Nov - Apr (Dry Sunshine)",
      temp: "29°C Lagoon",
      highlights: "Overwater Villas, Seaplane Flights, Manta Ray Safari",
      packageTarget: "pkg-intl-maldives"
    },
    {
      id: "dest-kashmir",
      name: "Kashmir Valley & Gulmarg",
      country: "India",
      category: "Himalayas",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Apr - Oct / Dec - Feb",
      temp: "22°C / 4°C",
      highlights: "Dal Lake Shikaras, Gulmarg Gondola, Saffron Orchards",
      packageTarget: "pkg-dom-kashmir"
    },
    {
      id: "dest-bali",
      name: "Ubud Rainforest & Nusa Penida",
      country: "Indonesia",
      category: "Asia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Apr - Oct (Dry Season)",
      temp: "28°C Tropical",
      highlights: "Tegallalang Terraces, Clifftop Sunsets, Secret Waterfalls",
      packageTarget: "pkg-intl-bali"
    },
    {
      id: "dest-japan",
      name: "Tokyo, Kyoto & Mount Fuji",
      country: "Japan",
      category: "Asia",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Mar - May (Sakura) / Autumn",
      temp: "20°C Pleasant",
      highlights: "Shinkansen Bullet Train, Arashiyama Bamboo, Ryokans",
      packageTarget: "pkg-intl-japan"
    },
    {
      id: "dest-dubai",
      name: "Dubai Marina & Arabian Desert",
      country: "United Arab Emirates",
      category: "Middle East",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Oct - Apr (Winter Sunshine)",
      temp: "26°C Coastal",
      highlights: "Burj Khalifa, Mega Yacht Cruises, 4x4 Dune Safaris",
      packageTarget: "pkg-intl-dubai"
    },
    {
      id: "dest-kerala",
      name: "Alleppey Backwaters & Munnar",
      country: "India",
      category: "Himalayas",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Sep - Mar (Cool Season)",
      temp: "25°C Serene",
      highlights: "Luxury Houseboats, Organic Tea Estates, Ayurveda Spa",
      packageTarget: "pkg-dom-kerala"
    },
    {
      id: "dest-santorini",
      name: "Santorini & Mykonos",
      country: "Greece",
      category: "Europe",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      bestSeason: "May - Oct (Warm Aegean)",
      temp: "27°C Coastal",
      highlights: "Caldera Cave Suites, Sunset Catamarans, Greek Tavernas",
      packageTarget: "pkg-hm-santorini"
    },
    {
      id: "dest-paris-rome",
      name: "Paris, Venice & Rome Grand Tour",
      country: "France & Italy",
      category: "Europe",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      bestSeason: "Apr - Jun / Sep - Oct",
      temp: "21°C Mild",
      highlights: "Eiffel Summit, Grand Canal Gondolas, Colosseum VIP",
      packageTarget: "pkg-intl-paris-rome"
    }
  ]
};
window.traviqueData = traviqueData;

function findPackageById(id) {
  const all = [
    ...traviqueData.domesticPackages,
    ...traviqueData.internationalPackages,
    ...traviqueData.honeymoonPackages,
    ...traviqueData.familyPackages
  ];
  return all.find(p => p.id === id);
}

const AppState = {
  currentView: 'home',
  isDarkMode: false,
  isRTL: false,
  isLoggedIn: false,
  traveler: traviqueData.traveler,
  savedPackageIds: new Set(traviqueData.savedPackageIds),
  bookings: [...traviqueData.bookings],
  activeItineraryTripId: 'BK-2026-9041',
  selectedHoneymoonTab: 'honeymoon'
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initFontStyle();
  initRouter();
  initWishlist();
  renderAllSections();
  setupEventListeners();
  updateAuthUI();
  initGlobalScrollAnimations();
});

function initTheme() {
  const savedTheme = localStorage.getItem('travique_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function toggleDarkMode() {
  if (AppState.isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.documentElement.classList.add('dark');
  AppState.isDarkMode = true;
  localStorage.setItem('travique_theme', 'dark');
  updateThemeButtonUI();
}

function disableDarkMode() {
  document.documentElement.classList.remove('dark');
  AppState.isDarkMode = false;
  localStorage.setItem('travique_theme', 'light');
  updateThemeButtonUI();
}

function updateThemeButtonUI() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  if (AppState.isDarkMode) {
    btn.innerHTML = `<i class="fa-solid fa-sun text-teal-400 text-sm"></i>`;
    btn.setAttribute('title', 'Switch to Light Mode');
    btn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    btn.innerHTML = `<i class="fa-solid fa-moon text-teal-500 text-sm"></i>`;
    btn.setAttribute('title', 'Switch to Dark Mode');
    btn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

function initDirection() {
  const savedDir = localStorage.getItem('travique_dir') || 'ltr';
  setDirection(savedDir);
}

function toggleDirection() {
  const newDir = AppState.isRTL ? 'ltr' : 'rtl';
  setDirection(newDir);
}

function setDirection(dir) {
  AppState.isRTL = dir === 'rtl';
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('travique_dir', dir);
  updateDirButtonUI();
}

function updateDirButtonUI() {
  const btn = document.getElementById('dir-toggle-btn');
  if (!btn) return;
  if (AppState.isRTL) {
    btn.innerHTML = `<i class="fa-solid fa-right-left text-teal-400 text-sm"></i>`;
    btn.setAttribute('title', 'Switch to Left to Right layout');
    btn.setAttribute('aria-label', 'Switch to Left to Right layout');
  } else {
    btn.innerHTML = `<i class="fa-solid fa-right-left text-teal-500 text-sm"></i>`;
    btn.setAttribute('title', 'Switch to Right to Left layout');
    btn.setAttribute('aria-label', 'Switch to Right to Left layout');
  }
}

const FONT_PRESETS = {
  royal: {
    heading: "'Playfair Display', Georgia, serif",
    display: "'Playfair Display', Georgia, serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    name: "Royal Riviera"
  },
  syne: {
    heading: "'Syne', sans-serif",
    display: "'Syne', sans-serif",
    body: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    name: "Avant-Garde Chic"
  },
  urbanist: {
    heading: "'Urbanist', sans-serif",
    display: "'Urbanist', sans-serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    name: "Jetsetter Elite"
  },
  outfit: {
    heading: "'Outfit', sans-serif",
    display: "'Outfit', sans-serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    name: "Contemporary"
  }
};

function applyFontStyle(fontKey) {
  const preset = FONT_PRESETS[fontKey] || FONT_PRESETS.royal;
  document.documentElement.style.setProperty('--font-heading', preset.heading);
  document.documentElement.style.setProperty('--font-display', preset.display);
  document.documentElement.style.setProperty('--font-body', preset.body);

  localStorage.setItem('travique_font_style', fontKey);

  document.querySelectorAll('.font-option-btn').forEach(btn => {
    if (btn.getAttribute('data-font') === fontKey) {
      btn.classList.add('active-sub');
    } else {
      btn.classList.remove('active-sub');
    }
  });

  closeFontDropdown();
}

function initFontStyle() {
  const saved = localStorage.getItem('travique_font_style') || 'royal';
  applyFontStyle(saved);
}

function toggleFontDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('font-dropdown-menu');
  if (menu) menu.classList.toggle('show');
}

function closeFontDropdown() {
  const menu = document.getElementById('font-dropdown-menu');
  if (menu) menu.classList.remove('show');
}

function detectCurrentPage() {
  const path = (window.location.pathname || '').toLowerCase();
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();

  if (hash && ['about', 'destinations', 'packages', 'contact', 'dashboard', 'domestic', 'international', 'honeymoon-family', 'home-1', 'home-2'].includes(hash)) {
    return hash;
  }

  if (path.includes('about')) return 'about';
  if (path.includes('destination')) return 'destinations';
  if (path.includes('package')) return 'packages';
  if (path.includes('domestic')) return 'packages';
  if (path.includes('international')) return 'packages';
  if (path.includes('honeymoon')) return 'packages';
  if (path.includes('contact')) return 'contact';
  if (path.includes('dashboard')) return 'dashboard';
  if (path.includes('home-2')) return 'home-2';

  return 'home-1';
}

function initRouter() {
  const currentView = detectCurrentPage();
  navigateTo(currentView, false);

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.replace('#', '') || detectCurrentPage();
    navigateTo(currentHash, false);
  });
}

function navigateTo(viewId, updateHash = true) {

  if (viewId === 'home') viewId = 'home-1';
  if (viewId === 'about-us') viewId = 'about';
  if (viewId === 'contact-us') viewId = 'contact';
  if (viewId === 'holiday-packages') viewId = 'packages';
  if (viewId === 'dashboad') viewId = 'dashboard';

  const validViews = ['home', 'home-1', 'home-2', 'about', 'destinations', 'packages', 'domestic', 'international', 'honeymoon-family', 'contact', 'dashboard'];
  if (!validViews.includes(viewId)) {
    viewId = 'home-1';
  }

  AppState.currentView = viewId;

  document.querySelectorAll('.view-section').forEach(el => {
    el.classList.add('hidden');
  });

  let targetView = document.getElementById(`view-${viewId}`);
  if (!targetView && (viewId === 'home' || viewId === 'home-1')) {
    targetView = document.getElementById('view-home-1') || document.getElementById('view-home');
  }
  if (targetView) {
    targetView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeHomeDropdown();

  const isHomeActive = (viewId === 'home' || viewId === 'home-1' || viewId === 'home-2');

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkView = link.getAttribute('data-view');
    const isActive = (isHomeActive && linkView === 'home') ||
                     (linkView === viewId) ||
                     (viewId === 'about' && linkView === 'about') ||
                     (viewId === 'contact' && linkView === 'contact') ||
                     (viewId === 'packages' && linkView === 'packages') ||
                     (viewId === 'destinations' && linkView === 'destinations') ||
                     (viewId === 'dashboard' && linkView === 'dashboard') ||
                     (['domestic', 'international', 'honeymoon-family'].includes(viewId) && linkView === 'packages');
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
    const itemView = item.getAttribute('data-view');
    if (itemView === viewId || (itemView === 'home-1' && viewId === 'home')) {
      item.classList.add('active-sub');
    } else {
      item.classList.remove('active-sub');
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const linkView = link.getAttribute('data-view');
    const isActive = (isHomeActive && (linkView === 'home' || linkView === 'home-1')) ||
                     (linkView === viewId) ||
                     (viewId === 'about' && linkView === 'about') ||
                     (viewId === 'contact' && linkView === 'contact') ||
                     (viewId === 'packages' && linkView === 'packages') ||
                     (viewId === 'destinations' && linkView === 'destinations') ||
                     (viewId === 'dashboard' && linkView === 'dashboard') ||
                     (['domestic', 'international', 'honeymoon-family'].includes(viewId) && linkView === 'packages');
    if (isActive) {
      link.classList.add('text-teal-400', 'font-bold');
    } else {
      link.classList.remove('text-teal-400', 'font-bold');
    }
  });

  if (updateHash) {
    window.location.hash = viewId;
  }

  if (viewId === 'dashboard') {
    renderDashboard();
  } else if (viewId === 'destinations') {
    renderDestinationsView();
  } else if (viewId === 'packages') {
    renderAllHolidayPackages();
  } else if (viewId === 'home-2') {
    initHome2FlashTimer();
  }

  setTimeout(() => {
    initGlobalScrollAnimations();
  }, 100);
}

function toggleHomeDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('home-dropdown-menu');
  if (menu) {
    menu.classList.toggle('show');
  }
}

function closeHomeDropdown() {
  const menu = document.getElementById('home-dropdown-menu');
  if (menu) {
    menu.classList.remove('show');
  }
}

function toggleMobileHomeSubmenu() {
  const submenu = document.getElementById('mobile-home-submenu');
  const chevron = document.getElementById('mobile-home-chevron');
  if (submenu) {
    submenu.classList.toggle('hidden');
    if (chevron) {
      chevron.classList.toggle('rotate-180');
    }
  }
}

function updateMobileMenuIcon(isOpen) {
  const toggle = document.getElementById('mobile-menu-toggle');
  if (!toggle) return;
  const icon = toggle.querySelector('i');
  if (icon) {
    if (isOpen) {
      icon.className = 'fa-solid fa-xmark text-lg sm:text-xl transition-transform duration-200';
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('title', 'Close menu');
    } else {
      icon.className = 'fa-solid fa-bars-staggered text-lg sm:text-xl transition-transform duration-200';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('title', 'Open menu');
    }
  }
}

function closeMobileMenuDrawer() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
    updateMobileMenuIcon(false);
  }
}

let home2TimerInterval = null;
function initHome2FlashTimer() {
  if (home2TimerInterval) clearInterval(home2TimerInterval);

  function update() {
    const now = new Date();

    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    const diff = Math.max(0, midnight - now);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const hEl = document.getElementById('h2-timer-hours');
    const mEl = document.getElementById('h2-timer-mins');
    const sEl = document.getElementById('h2-timer-secs');

    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
    if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  home2TimerInterval = setInterval(update, 1000);
}

function initWishlist() {
  const saved = localStorage.getItem('travique_saved_packages');
  if (saved) {
    try {
      AppState.savedPackageIds = new Set(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }
  updateWishlistCount();
}

function toggleWishlist(packageId, e) {
  if (e) e.stopPropagation();
  const pkg = findPackageById(packageId);
  const pkgTitle = pkg ? pkg.title : 'Package';

  if (AppState.savedPackageIds.has(packageId)) {
    AppState.savedPackageIds.delete(packageId);
    showToast(`Removed "${pkgTitle}" from your saved list`, 'fa-heart-crack');
  } else {
    AppState.savedPackageIds.add(packageId);
    showToast(`Saved "${pkgTitle}" to your Wishlist!`, 'fa-heart');
  }

  localStorage.setItem('travique_saved_packages', JSON.stringify([...AppState.savedPackageIds]));
  updateWishlistCount();
  updateWishlistButtonIcons();

  if (AppState.currentView === 'dashboard') {
    renderSavedPackagesHTML();
  }
}

function updateWishlistCount() {
  const count = AppState.savedPackageIds.size;
  document.querySelectorAll('.wishlist-counter').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

function updateWishlistButtonIcons() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const pkgId = btn.getAttribute('data-id');
    const icon = btn.querySelector('i');
    if (AppState.savedPackageIds.has(pkgId)) {
      btn.classList.add('active');
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
    } else {
      btn.classList.remove('active');
      if (icon) {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    }
  });
}

function updateAuthUI() {
  const authContainer = document.getElementById('auth-button-container');
  if (!authContainer) return;

  const savedUserStr = localStorage.getItem('travique_user');
  let user = null;
  if (savedUserStr) {
    try {
      user = JSON.parse(savedUserStr);
    } catch (e) {}
  }

  const isLoggedIn = user && user.isLoggedIn !== false;
  AppState.isLoggedIn = isLoggedIn;

  if (isLoggedIn) {
    const currentName = user.name || AppState.traveler.name || 'Tharun';
    const currentTier = user.tier || 'Diamond Club VIP';
    const currentAvatar = user.avatar || AppState.traveler.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

    authContainer.innerHTML = `
      <div class="relative" id="user-header-menu-container">
        <button id="user-profile-menu-btn" onclick="toggleHeaderProfileDropdown(event)" class="flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-white dark:bg-[#0B1924] border border-slate-200 dark:border-ocean-800 hover:border-[#DEB17E] shadow-sm transition-all cursor-pointer" title="Traveler Profile & Options">
          <img src="${currentAvatar}" alt="${currentName}" class="w-7 h-7 rounded-full object-cover ring-1 ring-[#DEB17E]">
          <span class="text-xs font-bold text-ocean-950 dark:text-white hidden sm:inline">${currentName.split(' ')[0]}</span>
          <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
        </button>

        <div id="user-header-dropdown-menu" class="hidden absolute right-0 mt-2 w-64 bg-white/95 dark:bg-[#0B1924]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-ocean-800 rounded-2xl shadow-2xl py-3 px-3 z-50 space-y-2">
          <div class="px-3 py-2 border-b border-slate-100 dark:border-ocean-800/80">
            <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Signed in as</p>
            <p class="text-sm font-extrabold text-ocean-950 dark:text-white truncate">${currentName}</p>
            <span class="inline-flex items-center gap-1 mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DEB17E]/20 text-[#9E6738] dark:text-[#DEB17E]">
              <i class="fa-solid fa-gem text-[8px]"></i> ${currentTier}
            </span>
          </div>
          <div class="space-y-1">
            <a href="dashboard.html" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-ocean-850 hover:text-ocean-950 transition-colors">
              <i class="fa-solid fa-chart-pie text-[#DEB17E] w-4"></i> Dashboard
            </a>
            <a href="dashboard.html#tab-reservations" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-ocean-850 hover:text-ocean-950 transition-colors">
              <i class="fa-regular fa-calendar-days text-[#DEB17E] w-4"></i> My Bookings
            </a>
            <a href="dashboard.html#tab-saved" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-ocean-850 hover:text-ocean-950 transition-colors">
              <i class="fa-regular fa-heart text-[#DEB17E] w-4"></i> Saved Packages
            </a>
          </div>
          <div class="border-t border-slate-100 dark:border-ocean-800/80 pt-1">
            <button onclick="handleLogout()" class="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer">
              <i class="fa-solid fa-arrow-right-from-bracket w-4"></i> Log Out
            </button>
          </div>
        </div>
      </div>
    `;
  } else {

    authContainer.innerHTML = `
      <a href="login.html" class="ctrl-btn ctrl-btn-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs flex items-center gap-1.5 font-bold rounded-full cursor-pointer">
        <i class="fa-solid fa-user text-xs"></i>
        <span>Login</span>
      </a>
    `;
  }
}
window.updateAuthUI = updateAuthUI;

function toggleHeaderProfileDropdown(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const menu = document.getElementById('user-header-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}
window.toggleHeaderProfileDropdown = toggleHeaderProfileDropdown;

document.addEventListener('click', (e) => {
  const container = document.getElementById('user-header-menu-container');
  const menu = document.getElementById('user-header-dropdown-menu');
  if (container && menu && !menu.classList.contains('hidden')) {
    if (!container.contains(e.target)) {
      menu.classList.add('hidden');
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('user-header-dropdown-menu');
    if (menu) menu.classList.add('hidden');
  }
});

function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  AppState.isLoggedIn = true;
  updateAuthUI();
  closeModal('login-modal');
  showToast(`Welcome back, ${AppState.traveler.name}!`, 'fa-circle-check');
  if (AppState.currentView === 'dashboard') {
    renderDashboard();
  }
}

function handleLogout() {
  localStorage.removeItem('travique_user');
  AppState.isLoggedIn = false;
  updateAuthUI();
  if (typeof showToast === 'function') {
    showToast('You have been logged out successfully.', 'fa-arrow-right-from-bracket');
  }
  if (typeof loadCustomerProfileDetails === 'function') {
    loadCustomerProfileDetails();
  }
}
window.handleLogout = handleLogout;

function openLoginModal() {
  window.location.href = 'login.html';
}

function renderAllSections() {
  renderTrendingPackages();
  renderDestinationsView();
  renderAllHolidayPackages();
  renderDomesticPackages();
  renderInternationalPackages();
  renderHoneymoonFamilyPackages();
  renderReviews();
  renderFaqs();
  renderDashboard();
  updateWishlistButtonIcons();
}

function renderDestinationsView(filter = 'all') {
  const container = document.getElementById('destinations-grid');
  if (!container) return;

  let dests = traviqueData.destinations || [];
  if (filter !== 'all') {
    dests = dests.filter(d => d.category.toLowerCase().includes(filter.toLowerCase()));
  }

  container.innerHTML = dests.map((d, idx) => {

    const highlightList = (d.highlights || '').split(',').map(s => s.trim()).filter(Boolean);
    const pillsHtml = highlightList.slice(0, 3).map(h => `
      <span class="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-800 dark:text-teal-300 text-[10px] font-bold flex items-center gap-1 border border-teal-500/20">
        <i class="fa-solid fa-sparkles text-[8px] text-[#9E6738] dark:text-[#DEB17E]"></i>
        <span class="truncate">${h}</span>
      </span>
    `).join('');

    const sanctuaryType = d.country === 'Switzerland' ? 'The Omnia Chalet' :
                          d.country === 'Maldives' ? 'Overwater Atoll' :
                          d.country === 'Indonesia' ? 'Viceroy Valley' :
                          d.country === 'Japan' ? 'Hoshinoya Ryokan' :
                          d.country === 'United Arab Emirates' ? 'Burj Royal Suite' :
                          d.country === 'India' ? 'Spice Coast Haven' : 'Curated Private Retreat';

    const transferType = d.country === 'Switzerland' ? 'Glacier Rail' :
                         d.country === 'Maldives' ? 'Twin Seaplane' :
                         d.country === 'Indonesia' ? 'Private Chauffeur' :
                         d.country === 'Japan' ? 'Shinkansen 1st Cl.' :
                         d.country === 'United Arab Emirates' ? 'Helicopter / Rolls' :
                         d.country === 'India' ? 'Private Houseboat' : 'VIP Chauffeur';

    const startingRate = d.country === 'Switzerland' ? '$3,850' :
                         d.country === 'Maldives' ? '$3,425' :
                         d.country === 'Indonesia' ? '$2,650' :
                         d.country === 'Japan' ? '$3,680' :
                         d.country === 'United Arab Emirates' ? '$2,980' :
                         d.country === 'India' ? '$1,890' : '$2,750';

    return `
    <div class="travel-card group cursor-pointer flex flex-col justify-between rounded-3xl overflow-hidden bg-white dark:bg-ocean-900 border border-slate-200 dark:border-ocean-800 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" onclick="window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'">

      <!-- Image Stage with Guaranteed High-Contrast Protection in Light & Dark Mode -->
      <div class="travel-card-img-wrap relative h-56 overflow-hidden">
        <img src="${d.image}" alt="${d.name}" class="travel-card-img w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1924]/95 via-[#0B1924]/45 to-transparent"></div>

        <!-- Top Floating Badges -->
        <div class="absolute top-3 left-3 flex items-center gap-1.5">
          <span class="px-3 py-1 rounded-full bg-white/95 dark:bg-ocean-950/90 text-[#1A3B55] dark:text-[#DEB17E] font-black text-xs shadow-md border border-[#9E6738]/30">
            <i class="fa-solid fa-location-dot mr-1 text-[#9E6738] dark:text-[#DEB17E]"></i>${d.country}
          </span>
        </div>
        <div class="absolute top-3 right-3">
          <span class="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 shadow-md">
            <i class="fa-solid fa-temperature-half text-[#DEB17E] mr-1"></i>${d.temp}
          </span>
        </div>

        <!-- Location Title strictly forced to white with drop-shadow -->
        <div class="absolute bottom-3 left-4 right-4 text-white z-10">
          <span class="text-[9px] font-extrabold uppercase tracking-widest text-[#DEB17E] block mb-0.5">${d.category} Sanctuary</span>
          <h3 class="dest-card-title text-xl font-bold font-heading !text-white group-hover:!text-[#DEB17E] transition-colors leading-tight drop-shadow-md" style="color: #ffffff !important;">${d.name}</h3>
          <p class="dest-card-subtitle text-[11px] !text-slate-200 mt-1 line-clamp-1 drop-shadow flex items-center gap-1.5" style="color: #f1f5f9 !important;">
            <i class="fa-solid fa-sparkles text-[#DEB17E] text-[10px] shrink-0"></i>
            <span class="truncate">${d.highlights}</span>
          </p>
        </div>
      </div>

      <!-- Card Body: Rich 3-Spec Bar, Feature Badges, and Curated Rate Row -->
      <div class="p-5 pt-4 space-y-3.5 flex-1 flex flex-col justify-between">

        <!-- 3-Column Micro-Telemetry Grid -->
        <div class="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-100/90 dark:bg-ocean-850/80 border border-slate-200/80 dark:border-ocean-800 text-center">
          <div>
            <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Best Season</span>
            <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${d.bestSeason}</span>
          </div>
          <div class="border-x border-slate-200 dark:border-ocean-800 px-1">
            <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Sanctuary</span>
            <span class="block text-[11px] font-extrabold text-[#9E6738] dark:text-[#DEB17E] truncate">${sanctuaryType}</span>
          </div>
          <div>
            <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Transfer</span>
            <span class="block text-[11px] font-extrabold text-ocean-950 dark:text-white truncate">${transferType}</span>
          </div>
        </div>

        <!-- Curated Feature Badges -->
        <div class="flex flex-wrap gap-1.5 pt-0.5">
          ${pillsHtml}
        </div>

        <!-- Bottom Row: Price & Action -->
        <div class="pt-3 border-t border-slate-200 dark:border-ocean-800/80 flex items-center justify-between gap-3">
          <div class="flex flex-col">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curated Rate</span>
            <span class="text-sm font-black text-ocean-950 dark:text-white">From <span class="text-teal-600 dark:text-[#DEB17E]">${startingRate}</span> <span class="text-[10px] font-normal text-slate-400">/ guest</span></span>
          </div>
          <button onclick="event.stopPropagation(); window.location.href='destination-detail.html?id=${d.id}&target=${d.packageTarget}'" class="btn-secondary !py-2 !px-4 !text-xs font-bold shadow-md hover:shadow-xl flex items-center gap-1.5 rounded-xl transition-all">
            <span>Explore</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>

      </div>

    </div>
    `;
  }).join('');
}

function filterDestinationsTab(filter, btn) {
  document.querySelectorAll('#destinations-filter-chips button').forEach(b => {
    b.classList.remove('bg-teal-500', 'text-white', 'border-transparent');
    b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-teal-500', 'text-white', 'border-transparent');
    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  }
  renderDestinationsView(filter);
}

function renderAllHolidayPackages(category = 'all', searchQuery = '') {
  const container = document.getElementById('packages-grid') || document.getElementById('all-packages-grid');
  if (!container) return;

  let all = [
    ...traviqueData.internationalPackages,
    ...traviqueData.domesticPackages,
    ...traviqueData.honeymoonPackages,
    ...traviqueData.familyPackages
  ];

  if (category === 'domestic') {
    all = traviqueData.domesticPackages;
  } else if (category === 'international') {
    all = traviqueData.internationalPackages;
  } else if (category === 'honeymoon') {
    all = traviqueData.honeymoonPackages;
  } else if (category === 'family') {
    all = traviqueData.familyPackages;
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    all = all.filter(p => p.title.toLowerCase().includes(q) || (p.region && p.region.toLowerCase().includes(q)) || (p.tagline && p.tagline.toLowerCase().includes(q)));
  }

  container.innerHTML = all.map(pkg => createPackageCardHTML(pkg)).join('');
  updateWishlistButtonIcons();
  if (typeof initGlobalScrollAnimations === 'function') {
    initGlobalScrollAnimations();
  }
}

function filterAllPackagesCategory(category, btn) {
  document.querySelectorAll('#packages-filter-chips button').forEach(b => {
    b.classList.remove('bg-teal-500', 'text-white', 'border-transparent');
    b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-teal-500', 'text-white', 'border-transparent');
    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  }
  const searchVal = document.getElementById('packages-search-input')?.value || '';
  renderAllHolidayPackages(category, searchVal);
}

function filterAllPackagesSearch(query) {
  renderAllHolidayPackages('all', query);
}

function renderTrendingPackages() {
  const container = document.getElementById('trending-packages-grid');
  if (!container) return;
  const trending = [
    traviqueData.internationalPackages[0],
    traviqueData.internationalPackages[1],
    traviqueData.domesticPackages[0],
    traviqueData.honeymoonPackages[1],
    traviqueData.domesticPackages[1],
    traviqueData.familyPackages[0]
  ];
  container.innerHTML = trending.map(pkg => createPackageCardHTML(pkg)).join('');
  if (typeof initGlobalScrollAnimations === 'function') {
    initGlobalScrollAnimations();
  }
}

function renderDomesticPackages(filter = 'all') {
  const container = document.getElementById('domestic-packages-grid');
  if (!container) return;
  let packages = traviqueData.domesticPackages;
  if (filter !== 'all') {
    packages = packages.filter(p => p.region.toLowerCase().includes(filter.toLowerCase()));
  }
  container.innerHTML = packages.map(pkg => createPackageCardHTML(pkg)).join('');
  updateWishlistButtonIcons();
}

function filterDomestic(region, btn) {
  document.querySelectorAll('#domestic-filter-chips button').forEach(b => {
    b.classList.remove('bg-teal-500', 'text-white', 'border-transparent');
    b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-teal-500', 'text-white', 'border-transparent');
    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  }
  renderDomesticPackages(region);
}

function renderInternationalPackages(filter = 'all') {
  const container = document.getElementById('international-packages-grid');
  if (!container) return;
  let packages = traviqueData.internationalPackages;
  if (filter !== 'all') {
    packages = packages.filter(p => p.region.toLowerCase().includes(filter.toLowerCase()));
  }
  container.innerHTML = packages.map(pkg => createPackageCardHTML(pkg)).join('');
  updateWishlistButtonIcons();
}

function filterInternational(region, btn) {
  document.querySelectorAll('#international-filter-chips button').forEach(b => {
    b.classList.remove('bg-teal-500', 'text-white', 'border-transparent');
    b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-teal-500', 'text-white', 'border-transparent');
    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  }
  renderInternationalPackages(region);
}

function renderHoneymoonFamilyPackages() {
  const container = document.getElementById('honeymoon-family-grid');
  if (!container) return;
  const isHoneymoon = AppState.selectedHoneymoonTab === 'honeymoon';
  const packages = isHoneymoon ? traviqueData.honeymoonPackages : traviqueData.familyPackages;
  container.innerHTML = packages.map(pkg => createPackageCardHTML(pkg)).join('');
  updateWishlistButtonIcons();
}

function switchHoneymoonFamilyTab(tab) {
  AppState.selectedHoneymoonTab = tab;
  const hmBtn = document.getElementById('tab-btn-honeymoon');
  const famBtn = document.getElementById('tab-btn-family');

  if (tab === 'honeymoon') {
    hmBtn.classList.add('bg-teal-500', 'text-white', 'shadow-md');
    hmBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    famBtn.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
    famBtn.classList.add('text-slate-600', 'dark:text-slate-300');
  } else {
    famBtn.classList.add('bg-teal-500', 'text-white', 'shadow-md');
    famBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    hmBtn.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
    hmBtn.classList.add('text-slate-600', 'dark:text-slate-300');
  }

  renderHoneymoonFamilyPackages();
}

function createPackageCardHTML(pkg) {
  const isSaved = AppState.savedPackageIds.has(pkg.id);
  const inclusions = pkg.inclusions ? pkg.inclusions.slice(0, 3) : (pkg.perks ? pkg.perks.slice(0, 3) : []);

  return `
    <div class="travel-card group">
      <div class="travel-card-img-wrap">
        <img src="${pkg.image}" alt="${pkg.title}" class="travel-card-img" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          ${pkg.discount ? `<span class="badge-teal font-extrabold">${pkg.discount}</span>` : ''}
          ${pkg.region ? `<span class="badge-ocean">${pkg.region}</span>` : ''}
          ${pkg.type === 'honeymoon' ? `<span class="badge-ocean"><i class="fa-solid fa-heart text-teal-300 mr-1"></i>Honeymoon</span>` : ''}
          ${pkg.type === 'family' ? `<span class="badge-ocean"><i class="fa-solid fa-users text-teal-300 mr-1"></i>Family</span>` : ''}
        </div>

        <button class="wishlist-btn ${isSaved ? 'active' : ''}" data-id="${pkg.id}" onclick="toggleWishlist('${pkg.id}', event)" title="Save to Wishlist">
          <i class="${isSaved ? 'fa-solid text-teal-400' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span class="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md font-medium">
            <i class="fa-regular fa-clock mr-1 text-teal-300"></i>${pkg.duration}
          </span>
          <span class="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md font-bold text-teal-300 flex items-center gap-1">
            <i class="fa-solid fa-star text-xs"></i>${pkg.rating}
            <span class="text-white/70 font-normal">(${pkg.reviewsCount})</span>
          </span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 group-hover:text-teal-400 transition-colors cursor-pointer" onclick="window.location.href='package-detail.html?id=${pkg.id}'">
            ${pkg.title}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
            ${pkg.tagline || 'Experience handcrafted luxury and unforgettable travel moments with Travique.'}
          </p>

          <div class="mt-3.5 space-y-1.5">
            ${inclusions.map(inc => `
              <div class="flex items-center text-xs text-slate-600 dark:text-slate-300">
                <i class="fa-solid fa-circle-check text-teal-400 mr-2 text-[11px]"></i>
                <span class="truncate">${inc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div>
            <span class="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Starting from</span>
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-extrabold text-slate-900 dark:text-white font-heading">$${pkg.price}</span>
              ${pkg.originalPrice ? `<span class="text-xs line-through text-slate-400">$${pkg.originalPrice}</span>` : ''}
              <span class="text-[10px] text-slate-400">/person</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.location.href='package-detail.html?id=${pkg.id}'" class="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-400 hover:border-teal-400 transition-all text-xs font-semibold cursor-pointer" title="View Full Details">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button onclick="initiateBooking('${pkg.id}')" class="px-3.5 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 text-white font-semibold text-xs hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-1.5">
              <span>Book</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderReviews() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = traviqueData.reviews.map(rev => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-teal-400 mb-3">
          ${Array(rev.rating).fill('<i class="fa-solid fa-star text-sm"></i>').join('')}
        </div>
        <p class="text-slate-700 dark:text-slate-200 text-sm italic leading-relaxed">
          "${rev.comment}"
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
        <img src="${rev.avatar}" alt="${rev.name}" class="w-11 h-11 rounded-full object-cover ring-2 ring-teal-400/50">
        <div>
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">${rev.name}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">${rev.location} - <span class="text-teal-400 font-medium">${rev.trip}</span></p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFaqs() {
  const container = document.getElementById('faqs-container');
  if (!container) return;

  container.innerHTML = traviqueData.faqs.map((faq, idx) => `
    <div class="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-800/50">
      <button onclick="toggleFaq(${idx})" class="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:text-teal-400 transition-colors">
        <span class="text-base">${faq.q}</span>
        <i id="faq-chevron-${idx}" class="fa-solid fa-chevron-down text-slate-400 transition-transform duration-300"></i>
      </button>
      <div id="faq-ans-${idx}" class="hidden px-5 pb-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
        ${faq.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const ans = document.getElementById(`faq-ans-${idx}`);
  const chevron = document.getElementById(`faq-chevron-${idx}`);
  if (!ans) return;

  const isHidden = ans.classList.contains('hidden');
  if (isHidden) {
    ans.classList.remove('hidden');
    chevron.classList.add('rotate-180');
  } else {
    ans.classList.add('hidden');
    chevron.classList.remove('rotate-180');
  }
}

function renderDashboard() {
  const container = document.getElementById('dashboard-content-area');
  if (!container) return;

  if (!AppState.isLoggedIn) {
    container.innerHTML = `
      <div class="text-center py-16 px-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md">
        <div class="w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto text-2xl mb-4">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Traveler Dashboard Portal</h3>
        <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2 text-sm">
          Please log into your Travique traveler account to view live trip tracking, interactive day-by-day itineraries, saved holiday packages, and downloadable tickets & invoices.
        </p>
        <button onclick="openLoginModal()" class="mt-6 px-6 py-2.5 rounded-xl bg-teal-500 text-white font-bold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25">
          Sign In as Traveler (Sophia Vance)
        </button>
      </div>
    `;
    return;
  }

  const activeTripsCount = AppState.bookings.filter(b => b.statusCode < 5).length;
  const savedCount = AppState.savedPackageIds.size;
  const totalInvoices = AppState.bookings.length;

  container.innerHTML = `
    <div class="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-teal-950 text-white border border-teal-500/30 shadow-xl relative overflow-hidden mb-8">
      <div class="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <img src="${AppState.traveler.avatar}" alt="${AppState.traveler.name}" class="w-20 h-20 rounded-2xl object-cover ring-4 ring-teal-400/40 shadow-xl">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-2xl font-extrabold font-heading text-white">${AppState.traveler.name}</h2>
              <span class="px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/40">
                ${AppState.traveler.tier}
              </span>
            </div>
            <p class="text-xs text-teal-100/70 mt-1">
              Member ID: <span class="font-mono font-bold text-white">${AppState.traveler.id}</span> - Member Since ${AppState.traveler.memberSince}
            </p>
            <p class="text-xs text-teal-100/70">
              <i class="fa-solid fa-award text-teal-400 mr-1"></i> ${AppState.traveler.miles.toLocaleString()} Travique Miles Available
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <button onclick="openBookingModalDirect()" class="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2">
            <i class="fa-solid fa-compass"></i> Explore & Book New
          </button>
          <button onclick="handleLogout()" class="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all border border-white/20" title="Logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
        <div>
          <span class="text-xs text-teal-100/60 font-medium">Active Journeys</span>
          <p class="text-2xl font-extrabold text-white font-heading mt-0.5">${activeTripsCount}</p>
        </div>
        <div>
          <span class="text-xs text-teal-100/60 font-medium">Saved Holiday Wishlist</span>
          <p class="text-2xl font-extrabold text-teal-300 font-heading mt-0.5">${savedCount}</p>
        </div>
        <div>
          <span class="text-xs text-teal-100/60 font-medium">Tickets & Invoices</span>
          <p class="text-2xl font-extrabold text-white font-heading mt-0.5">${totalInvoices}</p>
        </div>
        <div>
          <span class="text-xs text-teal-100/60 font-medium">Global Passport Health</span>
          <p class="text-2xl font-extrabold text-teal-300 font-heading mt-0.5">Verified 100%</p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 mb-8 overflow-x-auto">
      <button onclick="switchDashboardTab('tracking', this)" class="dash-tab-btn active px-4 py-2 rounded-lg text-sm font-bold text-teal-500 bg-teal-50 dark:bg-teal-950/40 border border-teal-500/20 whitespace-nowrap">
        <i class="fa-solid fa-route mr-1.5"></i> Live Bookings & Tracker
      </button>
      <button onclick="switchDashboardTab('itinerary', this)" class="dash-tab-btn px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-400 whitespace-nowrap">
        <i class="fa-solid fa-calendar-days mr-1.5"></i> Interactive Itinerary
      </button>
      <button onclick="switchDashboardTab('saved', this)" class="dash-tab-btn px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-400 whitespace-nowrap">
        <i class="fa-solid fa-heart mr-1.5"></i> Saved Packages (${savedCount})
      </button>
      <button onclick="switchDashboardTab('documents', this)" class="dash-tab-btn px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-400 whitespace-nowrap">
        <i class="fa-solid fa-file-invoice mr-1.5"></i> Tickets & Invoices Hub
      </button>
    </div>

    <div id="dash-view-tracking" class="dash-view">
      ${renderActiveBookingsHTML()}
    </div>

    <div id="dash-view-itinerary" class="dash-view hidden">
      ${renderItineraryTabHTML()}
    </div>

    <div id="dash-view-saved" class="dash-view hidden">
      ${renderSavedPackagesHTML()}
    </div>

    <div id="dash-view-documents" class="dash-view hidden">
      ${renderDocumentsHubHTML()}
    </div>
  `;
}

function switchDashboardTab(tabName, btn) {
  document.querySelectorAll('.dash-tab-btn').forEach(b => {
    b.classList.remove('active', 'text-teal-500', 'bg-teal-50', 'dark:bg-teal-950/40', 'border', 'border-teal-500/20', 'font-bold');
    b.classList.add('text-slate-600', 'dark:text-slate-400', 'font-semibold');
  });

  if (btn) {
    btn.classList.add('active', 'text-teal-500', 'bg-teal-50', 'dark:bg-teal-950/40', 'border', 'border-teal-500/20', 'font-bold');
    btn.classList.remove('text-slate-600', 'dark:text-slate-400', 'font-semibold');
  }

  document.querySelectorAll('.dash-view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(`dash-view-${tabName}`);
  if (target) {
    target.classList.remove('hidden');
  }
}

function renderActiveBookingsHTML() {
  const activeBookings = AppState.bookings.filter(b => b.statusCode < 5);
  const pastBookings = AppState.bookings.filter(b => b.statusCode >= 5);

  return `
    <div class="space-y-8">
      <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <i class="fa-solid fa-plane-departure text-teal-400"></i> Active Upcoming Expeditions
        </h3>

        ${activeBookings.length === 0 ? `
          <div class="p-8 text-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <p class="text-slate-500">No active trips currently booked.</p>
            <button onclick="navigateTo('international')" class="mt-4 px-4 py-2 rounded-lg bg-teal-500 text-white text-xs font-bold">Discover International Holidays</button>
          </div>
        ` : activeBookings.map(bk => `
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-md mb-6 transition-all hover:border-teal-400/50">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-700/80">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-teal-500">#${bk.id}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20">${bk.category}</span>
                </div>
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mt-1">${bk.title}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                  <i class="fa-solid fa-location-dot text-teal-400"></i> ${bk.destination}
                  <span>-</span>
                  <i class="fa-regular fa-calendar text-teal-400"></i> ${bk.dates}
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <button onclick="openTicketModal('${bk.id}')" class="flex-1 lg:flex-initial px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-xs font-bold hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-all shadow-sm">
                  <i class="fa-solid fa-ticket text-teal-400"></i> E-Ticket
                </button>
                <button onclick="openInvoiceModal('${bk.id}')" class="flex-1 lg:flex-initial px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-teal-400 flex items-center justify-center gap-1.5 transition-all">
                  <i class="fa-solid fa-file-invoice-dollar text-teal-400"></i> Tax Invoice
                </button>
                <button onclick="viewBookingItinerary('${bk.id}')" class="flex-1 lg:flex-initial px-3.5 py-2 rounded-xl bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 flex items-center justify-center gap-1.5 transition-all shadow-md shadow-teal-500/20">
                  <i class="fa-solid fa-calendar-check"></i> Itinerary
                </button>
              </div>
            </div>

            <div class="mt-6 pt-2">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Live Booking Tracker</div>
              <div class="relative">
                <div class="absolute top-4 left-4 right-4 h-1 bg-slate-200 dark:bg-slate-700 -z-0">
                  <div class="h-full bg-gradient-to-r from-teal-500 to-emerald-400" style="width: ${bk.statusCode === 4 ? '100%' : bk.statusCode === 3 ? '66%' : '33%'}"></div>
                </div>

                <div class="grid grid-cols-4 relative z-10 text-center">
                  <div>
                    <div class="tracker-step-dot done mx-auto mb-2"><i class="fa-solid fa-check"></i></div>
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-200">Confirmed</p>
                    <span class="text-[10px] text-slate-400">Oct 12</span>
                  </div>
                  <div>
                    <div class="tracker-step-dot done mx-auto mb-2"><i class="fa-solid fa-check"></i></div>
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-200">Visa / Vouchers</p>
                    <span class="text-[10px] text-slate-400">Approved</span>
                  </div>
                  <div>
                    <div class="tracker-step-dot ${bk.statusCode >= 3 ? 'done' : 'pending'} mx-auto mb-2">
                      <i class="${bk.statusCode >= 3 ? 'fa-solid fa-check' : 'fa-solid fa-ticket'}"></i>
                    </div>
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-200">E-Tickets Issued</p>
                    <span class="text-[10px] text-teal-400">Available</span>
                  </div>
                  <div>
                    <div class="tracker-step-dot ${bk.statusCode === 4 ? 'active' : 'pending'} mx-auto mb-2">
                      <i class="fa-solid fa-plane-departure"></i>
                    </div>
                    <p class="text-xs font-bold text-teal-400">Ready to Fly</p>
                    <span class="text-[10px] text-teal-300 font-semibold">Countdown Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <span class="text-slate-400 font-semibold block mb-1">Accommodation</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${bk.hotel}</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <span class="text-slate-400 font-semibold block mb-1">Flight & PNR</span>
                <span class="font-mono font-bold text-teal-400">${bk.flights.pnr}</span>
                <p class="text-[11px] text-slate-500 mt-0.5 truncate">${bk.flights.outbound}</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-slate-400 font-semibold block mb-1">Total Paid</span>
                  <span class="font-extrabold text-base text-slate-900 dark:text-white">${bk.currency}${bk.totalAmount}</span>
                </div>
                <span class="px-2 py-1 rounded bg-teal-500/10 text-teal-400 font-bold text-[10px] uppercase">
                  <i class="fa-solid fa-shield-check mr-1"></i>Protected
                </span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <i class="fa-solid fa-clock-rotate-left text-slate-400"></i> Past Journeys Archive
        </h3>

        ${pastBookings.map(bk => `
          <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <img src="${bk.image}" alt="${bk.title}" class="w-16 h-16 rounded-xl object-cover">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-teal-400">Completed Expedition</span>
                <h4 class="font-bold text-slate-900 dark:text-white text-base">${bk.title}</h4>
                <p class="text-xs text-slate-500">${bk.dates} - ${bk.destination}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 w-full md:w-auto">
              <button onclick="openInvoiceModal('${bk.id}')" class="flex-1 md:flex-initial px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-400">
                <i class="fa-solid fa-receipt mr-1"></i> Invoice
              </button>
              <button onclick="initiateBooking('${bk.packageId}')" class="flex-1 md:flex-initial px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-400 text-xs font-bold hover:bg-teal-500 hover:text-white transition-all">
                <i class="fa-solid fa-rotate-right mr-1"></i> Re-Book Trip
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderItineraryTabHTML() {
  const currentTrip = AppState.bookings.find(b => b.id === AppState.activeItineraryTripId) || AppState.bookings[0];

  return `
    <div>
      <div class="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6">
        <div>
          <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Select Active Itinerary</label>
          <select onchange="changeActiveItinerary(this.value)" class="text-sm font-bold bg-transparent border-0 text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
            ${AppState.bookings.map(b => `
              <option value="${b.id}" ${b.id === currentTrip.id ? 'selected' : ''} class="dark:bg-slate-800">
                ${b.title} (${b.dates})
              </option>
            `).join('')}
          </select>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="openTicketModal('${currentTrip.id}')" class="px-3.5 py-2 rounded-xl bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 transition-all shadow-md">
            <i class="fa-solid fa-ticket mr-1"></i> View Trip Ticket
          </button>
          <button onclick="window.print()" class="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-teal-400 transition-all">
            <i class="fa-solid fa-print mr-1"></i> Print Itinerary
          </button>
        </div>
      </div>

      <div class="relative pl-6 md:pl-10 space-y-6 before:content-[''] before:absolute before:left-3 md:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-teal-400 before:via-teal-500/50 before:to-transparent">
        ${currentTrip.itinerary.map(day => `
          <div class="relative group">
            <div class="absolute -left-6 md:-left-10 top-1 w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-teal-400 flex items-center justify-center text-[10px] font-bold text-teal-400 group-hover:scale-125 transition-transform shadow-md shadow-teal-400/20">
              ${day.day}
            </div>

            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-extrabold text-xs uppercase">
                    Day ${day.day}
                  </span>
                  <h4 class="font-bold text-slate-900 dark:text-white text-base">${day.title}</h4>
                </div>
                <span class="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <i class="fa-regular fa-clock text-teal-400"></i> ${day.time}
                </span>
              </div>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                ${day.desc}
              </p>

              ${day.highlight ? `
                <div class="mt-4 p-3 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/30 flex items-center gap-2 text-xs text-teal-800 dark:text-teal-200 font-medium">
                  <i class="fa-solid fa-sparkles text-teal-500"></i>
                  <span><strong>Travique Exclusive:</strong> ${day.highlight}</span>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function viewBookingItinerary(bookingId) {
  AppState.activeItineraryTripId = bookingId;
  const tabBtn = document.querySelectorAll('.dash-tab-btn')[1];
  switchDashboardTab('itinerary', tabBtn);
}

function changeActiveItinerary(bookingId) {
  AppState.activeItineraryTripId = bookingId;
  const target = document.getElementById('dash-view-itinerary');
  if (target) {
    target.innerHTML = renderItineraryTabHTML();
  }
}

function renderSavedPackagesHTML() {
  const savedIds = [...AppState.savedPackageIds];
  const savedPackages = savedIds.map(id => findPackageById(id)).filter(Boolean);

  if (savedPackages.length === 0) {
    return `
      <div class="text-center py-16 px-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <div class="w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto text-2xl mb-4">
          <i class="fa-regular fa-heart"></i>
        </div>
        <h4 class="text-xl font-bold text-slate-900 dark:text-white">Your Travel Wishlist is Empty</h4>
        <p class="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mt-2">
          Click the heart icon on any domestic, international, or honeymoon package to save it here for instant booking and price drop notifications.
        </p>
        <button onclick="navigateTo('international')" class="mt-6 px-5 py-2.5 rounded-xl bg-teal-500 text-white font-bold text-xs hover:bg-teal-400 transition-all">
          Explore Holiday Packages
        </button>
      </div>
    `;
  }

  return `
    <div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">Your Saved Holiday Packages (${savedPackages.length})</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Real-time pricing and exclusive traveler discounts applied.</p>
        </div>
        <button onclick="clearAllSaved()" class="text-xs text-teal-500 hover:underline font-semibold">
          <i class="fa-solid fa-trash-can mr-1"></i> Clear All
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${savedPackages.map(pkg => createPackageCardHTML(pkg)).join('')}
      </div>
    </div>
  `;
}

function clearAllSaved() {
  if (confirm('Are you sure you want to clear your saved packages?')) {
    AppState.savedPackageIds.clear();
    localStorage.removeItem('travique_saved_packages');
    updateWishlistCount();
    updateWishlistButtonIcons();
    const target = document.getElementById('dash-view-saved');
    if (target) {
      target.innerHTML = renderSavedPackagesHTML();
    }
    showToast('Wishlist cleared', 'fa-trash-can');
  }
}

function renderDocumentsHubHTML() {
  return `
    <div class="space-y-6">
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Travel Documents & Tax Receipts Vault</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Download airline-ready boarding e-tickets and verified invoices compliant with global travel and GST/VAT regulations.
          </p>
        </div>
        <span class="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20">
          <i class="fa-solid fa-lock mr-1"></i> 256-Bit Encrypted Vault
        </span>
      </div>

      <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div class="divide-y divide-slate-100 dark:divide-slate-700">
          ${AppState.bookings.map(bk => `
            <div class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center text-xl shrink-0">
                  <i class="fa-solid fa-plane-up"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-slate-900 dark:text-white font-mono">${bk.ticketNumber}</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase">${bk.invoiceNumber}</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white mt-0.5">${bk.title}</h4>
                  <p class="text-xs text-slate-500">Booked: ${bk.bookingDate} - Total: <strong class="text-teal-400">${bk.currency}${bk.totalAmount}</strong></p>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button onclick="openTicketModal('${bk.id}')" class="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-xs font-bold hover:bg-teal-500 transition-colors flex items-center gap-1.5 shadow-sm">
                  <i class="fa-solid fa-ticket text-teal-400"></i>
                  <span>Download Ticket</span>
                </button>
                <button onclick="openInvoiceModal('${bk.id}')" class="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-teal-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <i class="fa-solid fa-file-invoice-dollar text-teal-400"></i>
                  <span>Tax Invoice</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function openTicketModal(bookingId) {
  const bk = AppState.bookings.find(b => b.id === bookingId) || AppState.bookings[0];
  const modalContainer = document.getElementById('ticket-modal-content');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="printable-area ticket-wrapper">
      <div class="ticket-header flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="assets/logo-dark.png" alt="Travique Logo" class="h-10 w-auto object-contain">
          <div>
            <h3 class="text-xl font-extrabold tracking-wider text-white">TRAVIQUE</h3>
            <p class="text-[10px] text-teal-200 tracking-widest uppercase font-semibold">Priority Boarding & Luxury Voucher</p>
          </div>
        </div>

        <div class="text-right">
          <span class="text-[10px] text-teal-200 uppercase tracking-wider block">Ticket Number</span>
          <span class="font-mono text-sm font-bold text-white">${bk.ticketNumber}</span>
        </div>
      </div>

      <div class="p-6 md:p-8 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs uppercase tracking-wider text-slate-400 font-bold">Holiday Expedition</span>
            <h4 class="text-xl font-bold text-slate-900 mt-0.5">${bk.title}</h4>
            <p class="text-xs text-teal-600 font-semibold"><i class="fa-solid fa-location-dot mr-1"></i>${bk.destination}</p>
          </div>
          <div class="text-right">
            <span class="text-xs uppercase tracking-wider text-slate-400 font-bold">Travel Dates</span>
            <p class="text-sm font-bold text-slate-900">${bk.dates}</p>
            <span class="px-2 py-0.5 rounded bg-teal-500/20 text-teal-800 text-[10px] font-bold uppercase">CONFIRMED TICKET</span>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div>
            <span class="text-[10px] uppercase text-slate-400 font-bold block">Primary Traveler</span>
            <span class="text-xs font-bold text-slate-900 truncate block">${bk.travelers[0]}</span>
          </div>
          <div>
            <span class="text-[10px] uppercase text-slate-400 font-bold block">Flight PNR</span>
            <span class="text-xs font-mono font-bold text-teal-600">${bk.flights.pnr}</span>
          </div>
          <div>
            <span class="text-[10px] uppercase text-slate-400 font-bold block">Travelers</span>
            <span class="text-xs font-bold text-slate-900">${bk.travelersCount} Guests</span>
          </div>
          <div>
            <span class="text-[10px] uppercase text-slate-400 font-bold block">Class / Tier</span>
            <span class="text-xs font-bold text-slate-900">Priority First</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span class="text-[10px] text-teal-300 uppercase tracking-wider block font-bold">Flight Details</span>
            <span class="text-xs font-bold">${bk.flights.outbound}</span>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-teal-300 uppercase tracking-wider block font-bold">Return Sector</span>
            <span class="text-xs font-bold">${bk.flights.return}</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-teal-800 uppercase tracking-wider font-bold block">Accommodation Voucher</span>
            <span class="text-xs font-bold text-teal-950">${bk.hotel}</span>
          </div>
          <span class="font-mono text-xs font-extrabold px-3 py-1 rounded bg-teal-200 text-teal-900">VCHR-99214</span>
        </div>

        <div class="ticket-perforation"></div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex-1 w-full">
            <div class="ticket-barcode mb-2"></div>
            <p class="text-[10px] font-mono text-center text-slate-400 tracking-widest">TRV9041284710294820149021</p>
          </div>
          <div class="w-16 h-16 bg-slate-900 text-white rounded-lg flex flex-col items-center justify-center p-1 text-[9px] font-mono text-center shrink-0">
            <i class="fa-solid fa-qrcode text-2xl text-teal-400"></i>
            <span>SCAN GATE</span>
          </div>
        </div>
      </div>
    </div>

    <div class="no-print mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
      <span class="text-xs text-slate-500">Need a paper copy for border control?</span>
      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-download"></i> Print / Save as PDF
        </button>
        <button onclick="closeModal('ticket-modal')" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-400">
          Close
        </button>
      </div>
    </div>
  `;

  openModal('ticket-modal');
}

function openInvoiceModal(bookingId) {
  const bk = AppState.bookings.find(b => b.id === bookingId) || AppState.bookings[0];
  const modalContainer = document.getElementById('invoice-modal-content');
  if (!modalContainer) return;

  const basePrice = Math.round(bk.totalAmount * 0.88);
  const taxes = bk.totalAmount - basePrice;

  modalContainer.innerHTML = `
    <div class="printable-area invoice-wrapper">
      <div class="invoice-stamp">
        PAID IN FULL
      </div>

      <div class="flex items-start justify-between border-b border-slate-200 pb-6 mb-6">
        <div>
          <div class="flex items-center gap-2 text-slate-900 mb-2">
            <img src="assets/logo-light.png" alt="Travique Logo" class="h-9 w-auto object-contain">
            <span class="text-2xl font-black font-heading tracking-tight">TRAVIQUE</span>
          </div>
          <p class="text-xs text-slate-500">Travique Global Luxury Holiday Packages Ltd.</p>
          <p class="text-xs text-slate-500">One World Trade Center, Suite 4400, New York, NY</p>
          <p class="text-xs text-slate-500">Tax Registration: GST/VAT-US-99201482</p>
        </div>

        <div class="text-right">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-widest block">TAX INVOICE</span>
          <span class="font-mono text-base font-extrabold text-slate-900">${bk.invoiceNumber}</span>
          <p class="text-xs text-slate-500 mt-1">Invoice Date: <strong class="text-slate-800">${bk.bookingDate}</strong></p>
          <p class="text-xs text-slate-500">Payment: <strong class="text-slate-800">${bk.paymentMethod}</strong></p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200 mb-6 text-xs">
        <div>
          <span class="font-bold text-slate-400 uppercase tracking-wider block mb-1">Billed To (Traveler)</span>
          <p class="font-bold text-slate-900 text-sm">${AppState.traveler.name}</p>
          <p class="text-slate-500">${AppState.traveler.email}</p>
          <p class="text-slate-500">Member ID: ${AppState.traveler.id}</p>
        </div>
        <div class="text-right">
          <span class="font-bold text-slate-400 uppercase tracking-wider block mb-1">Booking Reference</span>
          <p class="font-mono font-bold text-teal-600 text-sm">#${bk.id}</p>
          <p class="text-slate-500">Ticket Ref: ${bk.ticketNumber}</p>
          <p class="text-slate-500">Status: <strong class="text-teal-600 font-bold">100% Settled</strong></p>
        </div>
      </div>

      <div class="mb-6">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b border-slate-200 text-slate-400 uppercase font-bold tracking-wider">
              <th class="py-2">Description</th>
              <th class="py-2 text-center">Travelers</th>
              <th class="py-2 text-right">Unit Rate</th>
              <th class="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="py-3">
                <p class="font-bold text-slate-900">${bk.title}</p>
                <span class="text-slate-500 text-[11px]">${bk.hotel} - ${bk.dates}</span>
              </td>
              <td class="py-3 text-center text-slate-700 font-bold">${bk.travelersCount}</td>
              <td class="py-3 text-right text-slate-700 font-mono">$${Math.round(basePrice / bk.travelersCount)}</td>
              <td class="py-3 text-right font-bold text-slate-900 font-mono">$${basePrice}</td>
            </tr>
            <tr>
              <td class="py-3">
                <p class="font-bold text-slate-900">Complimentary Travique Shield Travel Protection</p>
                <span class="text-slate-500 text-[11px]">Comprehensive cancellation, medical & flight delay guarantee</span>
              </td>
              <td class="py-3 text-center text-slate-700 font-bold">${bk.travelersCount}</td>
              <td class="py-3 text-right text-slate-700 font-mono">$0</td>
              <td class="py-3 text-right font-bold text-teal-600 font-mono">INCLUDED</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="border-t border-slate-200 pt-4 mb-8">
        <div class="w-64 ml-auto space-y-1.5 text-xs">
          <div class="flex justify-between text-slate-600">
            <span>Subtotal:</span>
            <span class="font-mono font-bold">$${basePrice}</span>
          </div>
          <div class="flex justify-between text-slate-600">
            <span>Applicable GST / Airport Taxes (12%):</span>
            <span class="font-mono font-bold">$${taxes}</span>
          </div>
          <div class="flex justify-between text-slate-900 font-bold text-sm pt-2 border-t border-slate-300">
            <span>Total Paid (USD):</span>
            <span class="font-mono text-teal-600 font-black text-base">$${bk.totalAmount}</span>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-200 pt-4 flex items-center justify-between text-[11px] text-slate-400">
        <p>Thank you for traveling with Travique. Certified ATOL & IATA Member #9924-81.</p>
        <span class="font-serif italic font-bold text-slate-600 text-sm">Authorized Travique Treasury</span>
      </div>
    </div>

    <div class="no-print mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
      <span class="text-xs text-slate-500">Official receipt for corporate accounting or tax deduction</span>
      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-teal-500 text-white text-xs font-bold hover:bg-teal-400 transition-all flex items-center gap-1.5">
          <i class="fa-solid fa-download"></i> Print / Download Invoice PDF
        </button>
        <button onclick="closeModal('invoice-modal')" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-400">
          Close
        </button>
      </div>
    </div>
  `;

  openModal('invoice-modal');
}

function openPackageDetailsModal(packageId) {
  const pkg = findPackageById(packageId);
  if (!pkg) return;

  const modalContainer = document.getElementById('package-detail-modal-content');
  if (!modalContainer) return;

  const inclusions = pkg.inclusions || pkg.perks || [];

  modalContainer.innerHTML = `
    <div class="p-6 md:p-8 space-y-6">
      <div class="relative h-64 md:h-80 rounded-2xl overflow-hidden -mt-2">
        <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-5 left-5 right-5 text-white">
          <div class="flex items-center gap-2 mb-2">
            <span class="badge-teal">${pkg.duration}</span>
            ${pkg.region ? `<span class="badge-ocean">${pkg.region}</span>` : ''}
          </div>
          <h3 class="text-2xl md:text-3xl font-extrabold font-heading">${pkg.title}</h3>
          <p class="text-xs md:text-sm text-slate-200 mt-1">${pkg.tagline || ''}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 space-y-4">
          <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-sparkles text-teal-400"></i> What's Included in this Experience
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${inclusions.map(inc => `
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <i class="fa-solid fa-circle-check text-teal-400 mt-0.5"></i>
                <span class="font-medium">${inc}</span>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/30 text-xs text-slate-600 dark:text-slate-300">
            <h5 class="font-bold text-teal-500 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-shield-heart"></i> The Travique White Glove Promise
            </h5>
            <p>Every package includes 24/7 dedicated local concierge support, complimentary airport lounge passes, guaranteed 5-star room categories, and 100% flexible rescheduling.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <span class="text-xs uppercase text-slate-400 font-bold block">All-Inclusive Price</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-3xl font-black text-slate-900 dark:text-white font-heading">$${pkg.price}</span>
              ${pkg.originalPrice ? `<span class="text-sm line-through text-slate-400">$${pkg.originalPrice}</span>` : ''}
              <span class="text-xs text-slate-500">/ traveler</span>
            </div>
            <p class="text-[11px] text-teal-400 font-semibold mt-1">Instant confirmation - Zero booking fee</p>
          </div>

          <div class="mt-6 space-y-2">
            <button onclick="closeModal('package-detail-modal'); initiateBooking('${pkg.id}')" class="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold text-sm hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2">
              <i class="fa-solid fa-bolt"></i> Book This Vacation
            </button>
            <button onclick="toggleWishlist('${pkg.id}'); updateWishlistButtonIcons()" class="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-teal-400 transition-colors flex items-center justify-center gap-2">
              <i class="${AppState.savedPackageIds.has(pkg.id) ? 'fa-solid text-teal-400' : 'fa-regular'} fa-heart"></i>
              <span>${AppState.savedPackageIds.has(pkg.id) ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal('package-detail-modal');
}

function initiateBooking(packageId) {
  const pkg = findPackageById(packageId);
  if (!pkg) return;

  const modalContainer = document.getElementById('booking-checkout-modal-content');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="p-6 md:p-8 space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
        <div>
          <span class="text-xs uppercase tracking-wider text-teal-400 font-bold">Fast Checkout</span>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">${pkg.title}</h3>
        </div>
        <span class="text-xl font-black text-slate-900 dark:text-white font-heading">$${pkg.price}</span>
      </div>

      <form id="checkout-form" onsubmit="confirmNewBooking('${pkg.id}', event)" class="space-y-4 text-xs">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Lead Traveler Name</label>
            <input type="text" id="chk-name" value="${AppState.traveler.name}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
          <div>
            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
            <input type="email" id="chk-email" value="${AppState.traveler.email}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Departure Date</label>
            <input type="date" id="chk-date" value="2027-02-14" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
          <div>
            <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Number of Travelers</label>
            <select id="chk-guests" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="2">2 Travelers (Couple)</option>
              <option value="1">1 Traveler (Solo)</option>
              <option value="3">3 Travelers (Small Family)</option>
              <option value="4">4+ Travelers (Family Group)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="font-bold text-slate-700 dark:text-slate-300 block mb-1">Special Requests & Concierge Preferences</label>
          <textarea id="chk-notes" rows="2" placeholder="e.g. Vegetarian cuisine, ocean-view high floor, anniversary surprise" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"></textarea>
        </div>

        <div class="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 text-[11px] text-teal-900 dark:text-teal-200 flex items-center gap-2">
          <i class="fa-solid fa-lock text-teal-500"></i>
          <span>Mock payment charged to stored Traveler card (<strong>Visa ending in 4192</strong>). Instant ticket issued to your Dashboard!</span>
        </div>

        <div class="pt-4 flex items-center justify-end gap-3">
          <button type="button" onclick="closeModal('booking-checkout-modal')" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold hover:border-slate-400">Cancel</button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2">
            <i class="fa-solid fa-check"></i> Complete Reservation & Issue Ticket
          </button>
        </div>
      </form>
    </div>
  `;

  openModal('booking-checkout-modal');
}

function confirmNewBooking(packageId, e) {
  if (e) e.preventDefault();
  const pkg = findPackageById(packageId);
  if (!pkg) return;

  const guests = parseInt(document.getElementById('chk-guests').value) || 2;
  const departureDate = document.getElementById('chk-date').value || '2027-02-14';
  const totalCost = pkg.price * guests;

  const newBookingId = `BK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const newTicketId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;
  const newInvoiceId = `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const newBooking = {
    id: newBookingId,
    packageId: pkg.id,
    title: pkg.title,
    category: pkg.region || 'Bespoke Tour',
    destination: pkg.title.split(':')[0] || 'Luxury Destination',
    dates: `${departureDate} (${pkg.duration})`,
    status: 'Ready for Departure',
    statusCode: 4,
    travelersCount: guests,
    travelers: [AppState.traveler.name, guests > 1 ? 'Guest Traveler' : ''],
    hotel: 'Travique 5-Star Partner Resort & Suites',
    flights: {
      outbound: 'Qatar Airways QR-701 | Priority Class | Seat 3A',
      return: 'Qatar Airways QR-702 | Priority Class | Seat 3A',
      pnr: `TRV-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
    },
    totalAmount: totalCost,
    currency: '$',
    image: pkg.image,
    invoiceNumber: newInvoiceId,
    ticketNumber: newTicketId,
    bookingDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    paymentMethod: 'Visa ending in 4192',
    itinerary: [
      { day: 1, title: 'VIP Airport Welcome & Check-in', time: '11:00 AM', desc: 'Private chauffeur transfer to resort.', highlight: 'Champagne welcome' },
      { day: 2, title: 'Private Guided Destination Discovery', time: '09:30 AM', desc: 'Exclusive access to landmarks with specialist.', highlight: 'Skip-the-line pass' },
      { day: 3, title: 'Sunset Gala Dinner & Departure Prep', time: '06:00 PM', desc: 'Signature dining experience.', highlight: 'Chef tasting menu' }
    ]
  };

  AppState.bookings.unshift(newBooking);
  closeModal('booking-checkout-modal');
  showToast(`Booking Confirmed! Trip #${newBookingId} added to your Dashboard.`, 'fa-circle-check');
  navigateTo('dashboard');
}

function openBookingModalDirect() {
  initiateBooking('pkg-intl-swiss');
}

function handleHeroSearch(e) {
  if (e) e.preventDefault();
  const destinationQuery = document.getElementById('search-destination')?.value.toLowerCase().trim() || '';
  const categoryQuery = document.getElementById('search-category')?.value || 'all';

  if (categoryQuery === 'domestic') {
    navigateTo('domestic');
    if (destinationQuery) renderDomesticPackages(destinationQuery);
  } else if (categoryQuery === 'international') {
    navigateTo('international');
    if (destinationQuery) renderInternationalPackages(destinationQuery);
  } else if (categoryQuery === 'honeymoon') {
    navigateTo('honeymoon-family');
    switchHoneymoonFamilyTab('honeymoon');
  } else if (categoryQuery === 'family') {
    navigateTo('honeymoon-family');
    switchHoneymoonFamilyTab('family');
  } else {
    navigateTo('international');
    showToast(`Showing holiday matches for "${destinationQuery || 'All Destinations'}"`, 'fa-magnifying-glass');
  }
}

function updateBudgetEstimator() {
  const days = parseInt(document.getElementById('budget-days-slider')?.value || 6);
  const people = parseInt(document.getElementById('budget-people-slider')?.value || 2);
  const tier = document.getElementById('budget-tier-select')?.value || 'luxury';

  const daysLabel = document.getElementById('budget-days-label');
  const peopleLabel = document.getElementById('budget-people-label');
  const totalLabel = document.getElementById('budget-total-label');

  if (daysLabel) daysLabel.textContent = `${days} Days`;
  if (peopleLabel) peopleLabel.textContent = `${people} ${people === 1 ? 'Traveler' : 'Travelers'}`;

  let dailyRatePerPerson = tier === 'ultra' ? 650 : (tier === 'luxury' ? 380 : 220);
  let total = days * people * dailyRatePerPerson;

  if (totalLabel) {
    totalLabel.textContent = `$${total.toLocaleString()}`;
  }
}

function handleContactSubmit(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('contact-name')?.value;
  const dest = document.getElementById('contact-dest')?.value;

  showToast(`Thank you, ${name}! Your inquiry for ${dest} has been sent to our concierge team.`, 'fa-paper-plane');
  e.target.reset();
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function showToast(message, icon = 'fa-info-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-teal-400 text-lg"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

function setupEventListeners() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        updateMobileMenuIcon(true);
      } else {
        mobileDrawer.classList.add('hidden');
        updateMobileMenuIcon(false);
      }
    });
  }

  const daysSlider = document.getElementById('budget-days-slider');
  const peopleSlider = document.getElementById('budget-people-slider');
  const tierSelect = document.getElementById('budget-tier-select');
  if (daysSlider) daysSlider.addEventListener('input', updateBudgetEstimator);
  if (peopleSlider) peopleSlider.addEventListener('input', updateBudgetEstimator);
  if (tierSelect) tierSelect.addEventListener('change', updateBudgetEstimator);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        if (!modal.classList.contains('hidden')) {
          closeModal(modal.id);
        }
      });
      closeHomeDropdown();
      closeFontDropdown();
      closeMobileMenuDrawer();
    }
  });

  document.addEventListener('click', (e) => {
    const homeDropdown = document.getElementById('home-dropdown');
    if (homeDropdown && !homeDropdown.contains(e.target)) {
      closeHomeDropdown();
    }
    const fontDropdown = document.getElementById('font-dropdown-wrapper');
    if (fontDropdown && !fontDropdown.contains(e.target)) {
      closeFontDropdown();
    }
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-menu-drawer');
    if (mobileToggle && mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
      if (!mobileToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        closeMobileMenuDrawer();
      }
    }
  });
}

function initGlobalScrollAnimations() {

  const rawSections = Array.from(document.querySelectorAll('section, main > div[id], .h2-screen-section, .view-section > section'));
  if (!rawSections.length) return;

  const sections = rawSections.filter(sec => {

    if (sec.closest('header, footer, .site-header, .site-footer')) return false;
    if (sec.classList.contains('hidden') || sec.id === 'login-modal') return false;
    return true;
  });

  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sec = entry.target;
        sec.classList.add('section-revealed');

        const cards = sec.querySelectorAll('.reveal-card-item');
        cards.forEach((child, i) => {
          child.style.transitionDelay = `${0.065 * (i + 1)}s`;
          child.classList.add('child-revealed');
        });

        const metrics = sec.querySelectorAll('.reveal-metric-item');
        metrics.forEach((child, i) => {
          child.style.transitionDelay = `${0.06 * (i + 1)}s`;
          child.classList.add('child-revealed');
        });

        const chips = sec.querySelectorAll('.reveal-chip-item');
        chips.forEach((child, i) => {
          child.style.transitionDelay = `${0.035 * (i + 1)}s`;
          child.classList.add('child-revealed');
        });

        const genericStagger = sec.querySelectorAll('.stagger-reveal:not(.reveal-card-item):not(.reveal-metric-item):not(.reveal-chip-item)');
        genericStagger.forEach((child, i) => {
          child.style.transitionDelay = `${0.05 * (i + 1)}s`;
          child.classList.add('child-revealed');
        });

        obs.unobserve(sec);
      }
    });
  }, observerOptions);

  sections.forEach((sec, idx) => {
    if (!sec.classList.contains('section-scroll-anim')) {
      sec.classList.add('section-scroll-anim');
    }

    const secId = (sec.id || '').toLowerCase();
    const secClass = (sec.className || '').toLowerCase();

    const isHero = (idx === 0) || secId.includes('hero') || secClass.includes('hero');
    if (isHero) {
      sec.classList.add('reveal-layout-hero');
      const tag = sec.querySelector('.section-tag-badge, .section-kicker-badge, [class*="tag-badge"]');
      if (tag && !tag.classList.contains('hero-tag-reveal')) tag.classList.add('hero-tag-reveal');
      const title = sec.querySelector('h1, h2');
      if (title && !title.classList.contains('hero-title-reveal')) title.classList.add('hero-title-reveal');
      const desc = sec.querySelector('p');
      if (desc && !desc.classList.contains('hero-desc-reveal')) desc.classList.add('hero-desc-reveal');
      const ctas = sec.querySelector('.flex.items-center.gap-4, .hero-cta-group, .flex.flex-wrap.gap-4');
      if (ctas && !ctas.classList.contains('hero-cta-reveal')) ctas.classList.add('hero-cta-reveal');
      const visual = sec.querySelector('.lg\\:col-span-6:last-child, .lg\\:col-span-5:last-child, .lg\\:col-span-7:last-child, img[class*="object-contain"], .dest-glossy-hero-card, [id*="slideshow"]');
      if (visual && !visual.classList.contains('hero-visual-reveal')) visual.classList.add('hero-visual-reveal');

      requestAnimationFrame(() => {
        setTimeout(() => {
          sec.classList.add('section-revealed', 'hero-opening-active');
        }, 40);
      });
      return;
    }

    if (secId.includes('cta') || secClass.includes('cta') || sec.querySelector('.rounded-3xl.p-8, .bg-gradient-to-r.from-\\[\\#1A3B55\\]')) {
      sec.classList.add('reveal-layout-cta');
      const bannerCard = sec.querySelector('.rounded-3xl, .rounded-2xl');
      if (bannerCard && !bannerCard.classList.contains('cta-sheen-sweep')) {
        bannerCard.classList.add('cta-sheen-sweep');
      }
      sectionObserver.observe(sec);
      return;
    }

    const statItems = sec.querySelectorAll('.stat-card, [class*="stat-"], .grid-cols-2.md\\:grid-cols-4 > div:not(.group)');
    if (statItems.length >= 3 || secId.includes('stats') || secId.includes('metrics')) {
      sec.classList.add('reveal-layout-metrics');
      statItems.forEach(item => {
        if (!item.classList.contains('reveal-metric-item')) item.classList.add('reveal-metric-item');
      });
      sectionObserver.observe(sec);
      return;
    }

    const cardItems = sec.querySelectorAll('.travel-card, .destination-card, .package-catalog-card, .wonder-spotlight-card, .package-inclusion-card, .h1-mission-feature, .card-hover-lift, .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3 > div, .grid-cols-1.md\\:grid-cols-3 > div, .grid-cols-2.md\\:grid-cols-4 > div');
    if (cardItems.length >= 2) {
      sec.classList.add('reveal-layout-cards');
      cardItems.forEach((c) => {
        if (!c.classList.contains('reveal-card-item')) c.classList.add('reveal-card-item');
      });
      sectionObserver.observe(sec);
      return;
    }

    const splitGrid = sec.querySelector('.grid-cols-1.lg\\:grid-cols-2, .grid-cols-1.lg\\:grid-cols-12, .grid.grid-cols-1.md\\:grid-cols-2');
    if (splitGrid && splitGrid.children.length === 2) {
      sec.classList.add('reveal-layout-split');
      if (!splitGrid.children[0].classList.contains('reveal-split-left')) {
        splitGrid.children[0].classList.add('reveal-split-left');
      }
      if (!splitGrid.children[1].classList.contains('reveal-split-right')) {
        splitGrid.children[1].classList.add('reveal-split-right');
      }
      sectionObserver.observe(sec);
      return;
    }

    const filterChips = sec.querySelectorAll('#destinations-filter-chips button, #packages-filter-tabs button, .destination-filter-btn');
    if (filterChips.length >= 2) {
      sec.classList.add('reveal-layout-controls');
      filterChips.forEach(chip => {
        if (!chip.classList.contains('reveal-chip-item')) chip.classList.add('reveal-chip-item');
      });
      sectionObserver.observe(sec);
      return;
    }

    sec.classList.add('reveal-layout-standard');
    sectionObserver.observe(sec);
  });

  window.refreshScrollAnimations = function() {
    const unrevealed = document.querySelectorAll('.section-scroll-anim:not(.section-revealed)');
    unrevealed.forEach(sec => sectionObserver.observe(sec));
  };
}
