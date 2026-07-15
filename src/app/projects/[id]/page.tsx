"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { useRouter } from "next/navigation";

// Mock data to simulate dynamic fetching based on ID
const projectsData: Record<string, any> = {
  "histopathology-ai": {
    title: "Histopathology AI Grading System",
    subtitle: "Edge deployment of YOLOv8 for smart traffic monitoring.",
    shortDesc: "A highly efficient object detection system designed to monitor and classify traffic in real-time, optimized for deployment on resource-constrained edge devices.",
    longDesc: "This project involved training a custom YOLOv8 (You Only Look Once) architecture on a large dataset of urban traffic images. The primary challenge was balancing detection accuracy with inference speed to allow for real-time processing on edge devices like NVIDIA Jetson Nano.\n\nThe system is capable of detecting and tracking various vehicle types, pedestrians, and cyclists under varying lighting and weather conditions. Using TensorRT for optimization, the model achieved a 40% increase in inference speed compared to the baseline PyTorch model without a significant drop in mean Average Precision (mAP).",
    tech: ["PyTorch", "OpenSlide", "ResNet", "FastAPI"],
    image: "/images/yolo.png",
    github: "#",
    demo: "#"
  },
  "defect-detection": {
    title: "Defect Detection in Manufacturing",
    subtitle: "Domain-specific LLM fine-tuned for automated customer support.",
    shortDesc: "An intelligent customer support agent capable of context-aware conversations, built by fine-tuning an open-source Large Language Model using LoRA.",
    longDesc: "To reduce support ticket resolution times, I developed a generative AI chatbot specialized in handling complex technical queries. The project utilized the LangChain framework to orchestrate RAG (Retrieval-Augmented Generation), allowing the model to pull context from proprietary company documentation.\n\nI fine-tuned a LLaMA-2 7B model using Low-Rank Adaptation (LoRA) to adapt it to the company's specific tone and terminology without requiring massive computational resources. The final application was served via a FastAPI backend and integrated seamlessly into the existing support portal, resulting in a 30% reduction in human agent workload.",
    tech: ["YOLO", "OpenCV", "TensorRT", "CUDA"],
    image: "/images/chatbot.png",
    github: "#",
    demo: "#"
  },
  "medical-llm": {
    title: "Medical Report Generation using LLMs",
    subtitle: "Reinforcement Learning agent designed to navigate stock market volatility.",
    shortDesc: "An autonomous trading system built using Deep Q-Learning (DQN) to analyze market trends and execute simulated trades to maximize portfolio returns.",
    longDesc: "Financial markets are highly stochastic environments, making them perfect candidates for Reinforcement Learning (RL). This project involved creating a custom OpenAI Gym environment to simulate a stock market based on 10 years of historical S&P 500 data.\n\nThe core intelligence is driven by a Deep Q-Network (DQN) that uses technical indicators (RSI, MACD, Moving Averages) as its state space. Through epsilon-greedy exploration, the agent learned to balance risk and reward, outperforming a standard buy-and-hold strategy during backtesting periods with high volatility.",
    tech: ["HuggingFace", "Transformers", "LangChain", "AWS"],
    image: "/images/trading.png",
    github: "#",
    demo: "#"
  },
  "employee-monitoring": {
    title: "Employee Monitoring System",
    subtitle: "Edge deployment of YOLOv8 for smart traffic monitoring.",
    shortDesc: "A highly efficient object detection system designed to monitor and classify traffic in real-time, optimized for deployment on resource-constrained edge devices.",
    longDesc: "This project involved training a custom YOLOv8 (You Only Look Once) architecture on a large dataset of urban traffic images. The primary challenge was balancing detection accuracy with inference speed to allow for real-time processing on edge devices like NVIDIA Jetson Nano.\n\nThe system is capable of detecting and tracking various vehicle types, pedestrians, and cyclists under varying lighting and weather conditions. Using TensorRT for optimization, the model achieved a 40% increase in inference speed compared to the baseline PyTorch model without a significant drop in mean Average Precision (mAP).",
    tech: ["PyTorch", "OpenSlide", "ResNet", "FastAPI"],
    image: "/images/chatbot.png",
    github: "#",
    demo: "#"
  },
  "pest-detection": {
    title: "Precision Agriculture: ML and DL-Based Detection of Pests",
    subtitle: "A deep learning approach for early detection and classification of crop pests.",
    shortDesc: "This research project presents an advanced machine learning framework utilizing CNNs and TensorFlow to accurately detect and classify agricultural pests, mitigating crop loss.",
    longDesc: "Late detection of crop pests leads to significant agricultural losses and non-sustainable farming practices. Traditional pest monitoring requires intensive manual labor and often results in delayed or inaccurate responses.\n\nTo address this, we developed a Precision Agriculture solution that employs Convolutional Neural Networks (CNN) to automate pest identification. By training the model on extensive datasets of pest imagery, the system achieves high accuracy in classifying various pest species. This automated detection framework empowers farmers with early warnings, allowing for targeted, sustainable agricultural practices.",
    tech: ["CNN", "TensorFlow", "Deep Learning", "Computer Vision", "Precision Agriculture"],
    image: "/images/pest_detection.png",
    github: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5590275",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  },
  "medical-ocr-system": {
    title: "Medical Packaging OCR System",
    subtitle: "Automated OCR pipeline for pharmaceutical packaging inspection.",
    shortDesc: "An end-to-end computer vision and OCR system designed to detect and extract key fields like expiry dates and MRP from medical packages.",
    longDesc: "This project automates the inspection of medical packaging on production lines. A custom YOLOv8 model detects key regions of interest such as medicine name, expiry date, batch number, MRP, and barcodes from images of medicine boxes and blister packs. These regions are cropped and preprocessed using OpenCV to enhance readability.\n\nThe cleaned images are passed to PaddleOCR for text extraction. Post-processing with Python and regular expressions standardizes dates, validates prices, and corrects common OCR errors. The structured results are returned as JSON through a FastAPI backend, and the entire pipeline is wrapped in a Streamlit interface for easy user interaction and deployed using Docker.",
    tech: ["YOLOv8", "OpenCV", "PaddleOCR", "FastAPI", "Streamlit", "Docker"],
    image: "/images/proj_medical_ocr.png",
    github: "#",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  },
  "tumor-detection": {
    title: "Tumor Localization Project",
    subtitle: "Computational Pathology — Tumor vs Non-Tumor classification + localization",
    shortDesc: "A Multiple Instance Learning (MIL) approach to localize tumor regions in Whole Slide Images without pixel-level annotations, achieving over 95% accuracy.",
    longDesc: "This project addresses the scale problem in computational pathology, where gigapixel Whole Slide Images (WSI) cannot fit into GPU memory and pixel-level annotations are clinically expensive. I built an end-to-end pipeline that extracts 128x128 patches at 2.5x magnification and processes them through a UNet2-based feature extractor.\n\nThe core model is based on CLAM (Clustering-constrained Attention Multiple Instance Learning). It treats each slide as a bag of instances and learns attention scores to identify tumor-relevant patches from only slide-level labels. Finally, the attention maps are exported as GeoJSON overlays for visualization in QuPath, bridging AI reasoning directly with clinical workflows.",
    tech: ["UNet2", "CLAM", "K-Means", "QuPath", "OpenCV"],
    image: "/images/proj_tumor.png",
    github: "#",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  },
  "anemia-detection": {
    title: "Non-Invasive Anemia Detection",
    subtitle: "A deep learning approach for non-invasive anemia diagnosis using Vision Transformers.",
    shortDesc: "A complete computer vision pipeline utilizing YOLOv8 for automated region-of-interest cropping and Vision Transformers (ViT) for accurate, non-invasive detection of anemia.",
    longDesc: "Traditional anemia diagnosis relies on invasive blood tests. This project proposes a non-invasive diagnostic alternative by analyzing images of the palpebral conjunctiva (the inner lining of the eyelid). The system leverages an advanced two-stage deep learning pipeline.\n\nFirst, a YOLOv8 object detection model automatically identifies and crops the specific region of interest from raw patient images, ensuring standardized inputs. The cropped images are then processed by a Vision Transformer (ViT-B/16) architecture, which utilizes self-attention mechanisms to analyze the subtle pallor and color variations indicative of hemoglobin levels. The solution provides an efficient, accessible, and pain-free screening method that can be deployed via Streamlit in resource-constrained medical environments.",
    tech: ["U-Net", "ViT-B/16", "YOLOv8", "Streamlit", "PyTorch"],
    image: "/images/proj_anemia.png",
    github: "https://github.com/Namratapatel9027/Non-Invasive_Anemia_Detection_Using_Vision_Transformers",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  },
  "atliq-hardware-360": {
    title: "AtliQ Hardware - Business Insights 360",
    subtitle: "Domain/Function: Brick & Mortar and E-commerce",
    shortDesc: "AtliQ Hardware seeks to overcome challenges posed by outdated data methods like Excel. This project aims to provide a thorough analysis of their 1.8 million dataset across Finance, Sales, Marketing, Supply Chain, and Executive sectors, empowering informed decision-making.",
    longDesc: "Project Overview: AtliQ Hardware, a global leader in computers and accessories, faces unexpected losses. To outshine competitors, they've adopted Power BI analytics with 1.8 million records from Excel, CSV, and MySQL.\n\nThe Power BI Dashboard includes:\n• Home Page: Central navigation.\n• Finance: Enhances financial planning.\n• Sales: Boosts revenue and market share.\n• Marketing: Elevates brand visibility.\n• Supply Chain: Optimizes inventory management.\n• Executive: Provides top management overview.",
    tech: ["Power BI", "DAX", "Data Modeling", "Excel", "MySQL"],
    image: "/images/proj_hardware.png",
    github: "https://github.com/Namratapatel9027/Business-Insight-360",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiMjdkMjUwOTAtYjQwYS00YmE4LWI0ZGYtYmJkZTIzYjQzMmU5IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    youtube: "https://www.youtube.com/embed/G7lz2goFStQ",
    hideVideo: false,
    hideDemo: false
  },
  "bearing-quality-inspection": {
    title: "Automated Bearing Quality Inspection",
    subtitle: "AI-driven pipeline for detecting defective bearings based on pin count analysis.",
    shortDesc: "An automated quality control system utilizing a dual-stage YOLOv8 pipeline to detect bearings and count internal pins for real-time defect classification.",
    longDesc: "This project presents an Automated Bearing Quality Inspection System that leverages deep learning and computer vision to inspect bearing images automatically in a manufacturing setting. The system accurately detects bearings, counts their internal pins, and classifies each bearing as either Good or Defective based on a strict 16-pin count threshold.\n\nThe pipeline follows a highly optimized two-stage detection process using custom-trained YOLOv8 models. Stage 1 identifies and localizes individual bearings from a tray image, cropping them for further analysis. Stage 2 detects and counts pins inside each cropped bearing. A rule-based classification algorithm then marks bearings with exactly 16 pins as 'Good' and fewer than 16 pins as 'Defective'. The entire pipeline is integrated into an interactive Streamlit dashboard that displays bounding boxes, pin counts, highlights defective bearings for review, and exports analytical reports.",
    tech: ["YOLOv8", "Python", "OpenCV", "Streamlit", "PyTorch"],
    image: "/images/proj_bearing_new.png",
    github: "https://github.com/Namratapatel9027/Automated-Bearing-Quality-Inspection",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  },
  "atliq-grand-hotel": {
    title: "AtliQ Grand Hotel Data Analysis",
    subtitle: "Uncovering hotel booking trends to boost occupancy and revenue.",
    shortDesc: "A Python-based data analytics project that cleans, transforms, and analyzes AtliQ Grands' booking data to uncover actionable business insights.",
    longDesc: "AtliQ Grands, a prominent hotel chain, was experiencing a decline in bookings and revenue but lacked an in-house analytics team to identify the root causes. This project bridges that gap by comprehensively analyzing historical booking trends across various cities, room types, and temporal factors.\n\nThe data pipeline involves extracting multi-source booking data, performing extensive ETL (Extract, Transform, Load) operations using Pandas, and conducting exploratory data analysis in Jupyter Notebooks. Key insights revealed that Presidential Rooms had the highest occupancy rate (59.28%), while weekend traffic significantly outperformed weekday bookings. Based on the analysis, several data-driven recommendations were provided to the management, including launching targeted weekend travel packages, offering strategic discounts in underperforming cities like Bangalore, and expanding reach through online platform partnerships.",
    tech: ["Python", "Pandas", "Jupyter Notebook", "Data Analytics", "ETL"],
    image: "/images/proj_hotel.png",
    github: "https://github.com/Namratapatel9027/AtliQ_Grands_hotel_booking_analysis",
    demo: "#",
    youtube: "https://www.youtube.com/embed/5gf1EetFP_A",
    hideVideo: false,
    hideDemo: true
  },
  "sales-finance-report": {
    title: "Sales & Finance Report",
    subtitle: "Comprehensive Sales and Finance Analysis for AtliQ Hardware using Excel.",
    shortDesc: "An advanced Excel-driven analytics project that leverages ETL processes, Power Query, and Power Pivot to generate dynamic financial reports and track key performance indicators.",
    longDesc: "This project focuses on executing a comprehensive Sales and Finance Analysis for AtliQ Hardware. The primary objective was to empower the business with actionable insights to monitor sales trends, evaluate key performance indicators (KPIs), and optimize corporate financial reporting.\n\nThe analysis is structured into two core modules. The Sales Report tracks customer performance, compares market results against established targets, and identifies top/bottom products to facilitate negotiations and uncover global expansion opportunities. The Finance Report provides detailed Profit and Loss (P&L) statements categorized by fiscal year, month, and specific markets. The technical implementation was achieved using advanced Excel capabilities, including Power Query for rigorous ETL processes, Power Pivot for robust relational data modeling, and DAX for generating custom calculated columns.",
    tech: ["Excel", "Power Query", "Power Pivot", "DAX", "ETL", "Financial Analytics"],
    image: "/images/proj_finance.png",
    github: "https://github.com/Namratapatel9027/Finance-and-Sales-Analysis-Using-Excel",
    demo: "#",
    hideVideo: true,
    hideDemo: true
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projectsData[id] || projectsData["histopathology-ai"];
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.back()} className="inline-flex items-center text-text-secondary hover:text-accent-cyan transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">{project.subtitle}</p>
        </motion.div>

        <div className={`grid ${project.hideVideo ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8 mb-16`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`glass-card rounded-2xl overflow-hidden aspect-video relative ${project.hideVideo ? 'max-w-4xl mx-auto w-full' : ''}`}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </motion.div>
          
          {!project.hideVideo && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center bg-surface/50"
            >
              {/* YouTube Embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src={project.youtube || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold text-accent-cyan mb-4">Short Description</h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">{project.shortDesc}</p>

          <h2 className="text-2xl font-bold text-accent-blue mb-4">Long Details</h2>
          <div className="space-y-4 mb-10">
            {project.longDesc.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="text-text-secondary leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-accent-purple mb-4">Technologies & Skills Used</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-8 border-t border-white/10">
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 font-medium flex items-center">
                {project.github.includes("ssrn.com") || project.github.includes("paper") ? (
                  <><ExternalLink className="w-5 h-5 mr-2" /> Read Paper</>
                ) : (
                  <><Code className="w-5 h-5 mr-2" /> View Source</>
                )}
              </Link>
            )}
            {!project.hideDemo && project.demo && (
              <Link href={project.demo} className="px-6 py-3 rounded-full bg-accent-blue/20 hover:bg-accent-blue/30 text-accent-blue transition-colors border border-accent-blue/30 font-medium flex items-center">
                <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
