/**
 * Structured Data (Schema.org JSON-LD) for SEO
 * 
 * This file contains the business information and structured data
 * that helps search engines understand The Golden Hour Co business.
 * 
 */

export const businessInfo = {
	name: "The Golden Hour Co",
	url: "https://thegoldenhourco.net",
	description: "Professional lactation consultation and antenatal education in Fremantle, Western Australia. Supporting families during pregnancy, birth, and the postpartum period.",
	// logo: "https://thegoldenhourco.net/logo.png", // TODO: Update with actual logo path
	// image: "https://thegoldenhourco.net/og-image.jpg", // TODO: Update with actual OG image path
	telephone: "+61-466-499-868",
	email: "ellie@thegoldenhourco.net",
	priceRange: "$$",
	address: {
		locality: "Fremantle",
		region: "WA",
		postalCode: "6160",
		country: "AU"
	},
	geo: {
		latitude: -32.0569,
		longitude: 115.7439
	},
	businessHours: [
		{
			days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "17:00"
		}
		// Add Saturday/Sunday if applicable
	],
	socialMedia: {
		// facebook: "https://www.facebook.com/thegoldenhourco", // TODO: Update or remove
		// instagram: "https://www.instagram.com/thegoldenhourco" // TODO: Update or remove
	}
};

export const services = [
	{
		type: "MedicalProcedure",
		name: "Lactation Consultation",
		description: "Professional IBCLC lactation support for breastfeeding mothers",
		procedureType: "Consultation"
	},
	{
		type: "EducationalOccupationalProgram",
		name: "Antenatal Education Classes",
		description: "Birth preparation and education for expecting parents",
		educationalProgramMode: "In-person and online"
	}
];

/**
 * Generates LocalBusiness structured data
 */
export function getLocalBusinessSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": `${businessInfo.url}/#organization`,
		"name": businessInfo.name,
		"description": businessInfo.description,
		"url": businessInfo.url,
		// "logo": businessInfo.logo,
		// "image": businessInfo.image,
		"telephone": businessInfo.telephone,
		"email": businessInfo.email,
		"priceRange": businessInfo.priceRange,
		"address": {
			"@type": "PostalAddress",
			"addressLocality": businessInfo.address.locality,
			"addressRegion": businessInfo.address.region,
			"postalCode": businessInfo.address.postalCode,
			"addressCountry": businessInfo.address.country
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": businessInfo.geo.latitude,
			"longitude": businessInfo.geo.longitude
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Fremantle",
				"@id": "https://www.wikidata.org/wiki/Q213196"
			},
			{
				"@type": "City",
				"name": "Perth",
				"@id": "https://www.wikidata.org/wiki/Q3183"
			},
			{
				"@type": "AdministrativeArea",
				"name": "Western Australia"
			}
		],
		"openingHoursSpecification": businessInfo.businessHours.map(hours => ({
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": hours.days,
			"opens": hours.opens,
			"closes": hours.closes
		})),
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Healthcare Services",
			"itemListElement": services.map(service => ({
				"@type": "Offer",
				"itemOffered": {
					"@type": service.type,
					"name": service.name,
					"description": service.description,
					...(service.type === "MedicalProcedure" && { procedureType: (service as any).procedureType }),
					...(service.type === "EducationalOccupationalProgram" && { educationalProgramMode: (service as any).educationalProgramMode }),
					...(service.type === "Service" && { serviceType: (service as any).serviceType })
				}
			}))
		},
		"sameAs": [
			// businessInfo.socialMedia.facebook,
			// businessInfo.socialMedia.instagram
		].filter(Boolean) // Remove any undefined/null values
	};
}

/**
 * Generates WebSite structured data
 */
export function getWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${businessInfo.url}/#website`,
		"url": businessInfo.url,
		"name": businessInfo.name,
		"description": businessInfo.description,
		"publisher": {
			"@id": `${businessInfo.url}/#organization`
		},
		"inLanguage": "en-AU"
	};
}
