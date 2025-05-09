// Product types
export interface Product {
    id: string
    name: string
    slug: string
    category: string
    price: number
    description: string
    features: string[]
    specs: Record<string, string>
    images: string[]
    emoji: string
}

// Mock product database
export const products: Product[] = [
    {
        id: "1",
        name: "Quantum Processor",
        slug: "quantum-processor",
        category: "Computing",
        price: 2999,
        description:
            "Next-generation computing power with revolutionary quantum architecture. The Quantum Processor represents a paradigm shift in computing technology, utilizing quantum mechanics principles to perform complex calculations at unprecedented speeds.",
        features: [
            "Performs complex calculations in milliseconds",
            "Quantum entanglement for secure data processing",
            "Self-cooling superconducting circuits",
            "Compatible with standard computing interfaces",
            "Includes quantum programming SDK",
        ],
        specs: {
            Qubits: "128",
            "Clock Speed": "4.5 GHz",
            "Quantum Volume": "128",
            "Error Correction": "Advanced ECC",
            "Power Consumption": "120W",
            Dimensions: "10cm × 10cm × 2cm",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "⚡",
    },
    {
        id: "2",
        name: "Neural Interface",
        slug: "neural-interface",
        category: "Neural Tech",
        price: 1499,
        description:
            "Seamless brain-computer interface for intuitive digital interaction. Our Neural Interface creates a direct communication pathway between the brain and external devices, allowing for unprecedented control and interaction with digital systems through thought alone.",
        features: [
            "Non-invasive neural sensing technology",
            "Adaptive learning algorithms",
            "Real-time thought-to-action conversion",
            "Customizable command mapping",
            "Wireless connectivity with 20-hour battery life",
        ],
        specs: {
            Sensors: "256 quantum sensors",
            "Response Time": "<10ms",
            Connectivity: "Bluetooth 6.0, Wi-Fi 7",
            "Battery Life": "20 hours",
            Compatibility: "All major operating systems",
            Weight: "45g",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "🔮",
    },
    {
        id: "3",
        name: "Quantum Encryption",
        slug: "quantum-encryption",
        category: "Security",
        price: 899,
        description:
            "Unbreakable security solutions powered by quantum cryptography. Our Quantum Encryption system leverages the principles of quantum mechanics to create encryption keys that are theoretically impossible to crack, ensuring your data remains secure even against quantum computing attacks.",
        features: [
            "Quantum key distribution (QKD)",
            "Post-quantum cryptographic algorithms",
            "Real-time intrusion detection",
            "Automatic key rotation",
            "Compatible with existing security infrastructure",
        ],
        specs: {
            "Encryption Level": "Quantum-resistant 512-bit",
            "Key Generation": "True quantum random",
            Protocols: "QKD, BB84, E91",
            Integration: "API and SDK available",
            Deployment: "Cloud or on-premises",
            Compliance: "NIST, ISO 27001, GDPR",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "🛡️",
    },
    {
        id: "4",
        name: "AI Accelerator",
        slug: "ai-accelerator",
        category: "Computing",
        price: 1999,
        description:
            "Specialized hardware designed to accelerate artificial intelligence workloads. The AI Accelerator dramatically reduces training and inference times for neural networks, making advanced AI applications more efficient and accessible.",
        features: [
            "Dedicated tensor processing units",
            "Optimized for deep learning frameworks",
            "Dynamic power management",
            "Multi-model parallel processing",
            "Edge AI capabilities",
        ],
        specs: {
            "Processing Power": "500 TOPS",
            Memory: "64GB HBM3",
            Interfaces: "PCIe 5.0, NVLink",
            "Power Efficiency": "5 TOPS/W",
            "Supported Frameworks": "TensorFlow, PyTorch, JAX",
            "Form Factor": "Dual-slot PCIe",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "🧠",
    },
    {
        id: "5",
        name: "Holographic Display",
        slug: "holographic-display",
        category: "Visualization",
        price: 2499,
        description:
            "True volumetric holographic display for immersive 3D visualization. Our Holographic Display creates genuine three-dimensional images that can be viewed from any angle without special glasses, revolutionizing how we interact with digital content.",
        features: [
            "True volumetric 3D rendering",
            "360° viewing angle",
            "Gesture and voice control",
            "4K resolution per viewing angle",
            "Compatible with standard and specialized 3D content",
        ],
        specs: {
            "Display Type": "Volumetric Light Field",
            Resolution: "4K per angle (12K effective)",
            "Refresh Rate": "120Hz",
            "Color Gamut": "120% Adobe RGB",
            "Viewing Angle": "360° horizontal, 270° vertical",
            Dimensions: "40cm diameter sphere",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "🌐",
    },
    {
        id: "6",
        name: "Fusion Battery",
        slug: "fusion-battery",
        category: "Power",
        price: 799,
        description:
            "Compact, long-lasting power source using controlled fusion technology. Our revolutionary Fusion Battery provides unprecedented energy density and lifespan, powering your devices for months on a single charge with zero emissions.",
        features: [
            "Month-long battery life for standard devices",
            "Rapid charging capability (0-100% in 5 minutes)",
            "Zero degradation for 10+ years",
            "Environmentally friendly materials",
            "Integrated safety systems",
        ],
        specs: {
            "Energy Density": "5,000 Wh/kg",
            Lifespan: "10,000+ charge cycles",
            "Charging Time": "5 minutes (full charge)",
            "Operating Temperature": "-40°C to 85°C",
            "Safety Rating": "UL 9540A, IEC 62133",
            Weight: "150g",
        },
        images: ["/placeholder.svg?height=600&width=600"],
        emoji: "🔋",
    },
]

// Function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug)
}

// Function to get product by ID
export function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id)
}

// Function to get related products (same category, excluding current product)
export function getRelatedProducts(currentProduct: Product, limit = 3): Product[] {
    return products
        .filter((product) => product.category === currentProduct.category && product.id !== currentProduct.id)
        .slice(0, limit)
}

// Function to get products by category
export function getProductsByCategory(category: string): Product[] {
    return products.filter((product) => product.category === category)
}

// Get all unique categories
export function getAllCategories(): string[] {
    return Array.from(new Set(products.map((product) => product.category)))
}
