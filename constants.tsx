
import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Wallet, 
  Smartphone, 
  Fingerprint, 
  MapPin, 
  Heart,
  Zap,
  Lock,
  Database
} from 'lucide-react';
import { Feature } from './types';

export const COLORS = {
  background: '#0a0a0c',
  accent: '#2dd4bf', // Electric Teal
  accentSoft: '#059669', // Soft Green
  surface: '#1e293b',
  text: '#f8fafc',
  textMuted: '#94a3b8'
};

export interface ExtendedFeature extends Feature {
  longDescription: string;
  methodology: string[];
  image: string;
  whatsappContext: string;
}

export const FEATURES: ExtendedFeature[] = [
  {
    id: 'bitcoin-recovery',
    category: 'High-Value',
    title: 'Bitcoin (BTC) Recovery',
    description: 'Specialized UTXO mapping and cluster analysis for high-value Bitcoin theft cases.',
    longDescription: 'Bitcoin requires a unique forensic approach. Our investigators use cluster analysis to identify wallet ownership patterns and track funds through obfuscation layers like CoinJoins.',
    methodology: ['UTXO (Unspent Transaction Output) Mapping', 'Address Clustering & Entity Tagging', 'Dust Attack Trace-backs'],
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    whatsappContext: "I need help recovering lost Bitcoin assets. I have the transaction hashes ready."
  },
  {
    id: 'crypto',
    category: 'Finance',
    title: 'Blockchain Tracing (Alt-Chains)',
    description: 'Forensic tracking for Ethereum, Solana, and BSC networks using node-level data.',
    longDescription: 'Our proprietary "Chain-Link" engine deciphers obfuscated transactions across 40+ mainnets. We specialize in de-mixing and identification of high-value exit nodes.',
    methodology: ['Multi-hop transaction analysis', 'Off-ramp entity tagging', 'Whale movement monitoring'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    icon: <Wallet className="w-6 h-6 text-teal-400" />,
    whatsappContext: "I need to trace a fraudulent transaction on a non-BTC chain."
  },
  {
    id: 'dark-web',
    category: 'Intelligence',
    title: 'Dark Web Monitoring',
    description: 'Scanning hidden forums and leaked databases to identify the perpetrator\'s digital footprint.',
    longDescription: 'We cross-reference wallet signatures against 40TB of leaked dark-web databases to find IP addresses, emails, or aliases linked to the attacker.',
    methodology: ['Leaked Database Cross-Referencing', 'Undercover Forum Engagement', 'Digital Persona Attribution'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    whatsappContext: "I believe my personal info is being sold on the dark web after a scam."
  },
  {
    id: 'accounts',
    category: 'Security',
    title: 'Device & Account Recovery',
    description: 'Official recovery paths and hardware-level security hardening for compromised accounts.',
    longDescription: 'Rapid intervention for account takeover incidents. We coordinate directly with Tier-1 provider security teams to restore root access.',
    methodology: ['Carrier-level SIM locks', 'Hardware security key integration', 'Recovery token auditing'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
    whatsappContext: "My device/account was hacked and I am locked out."
  }
];

export const APP_NAME = "Hackite";
