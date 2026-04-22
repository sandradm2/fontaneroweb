
import React from 'react';

export interface ServiceCard {
  title: string;
  category: string;
  description: string;
  points: string[];
  image: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CoverageArea {
  name: string;
  subareas: string[];
  image: string;
  extra?: number;
}