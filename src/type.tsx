import type { ReactNode } from "react";


export type AppProviderProps = {
  children: ReactNode;
}

export type LinkComponentProps = {
  classLink: string;
}

export type SocialComponentProps = {
  classSocial: string;
}

export type ContextType = {
  openSidebar: () => void;
  closeSidebar: () => void;
  sidebarOpen: boolean;
  query: string;
  searchButterfly: (input: string) => void;
  isLoading: boolean;
  isError: boolean;
  count: number;
  data: ApiResponse;

  getScrollPosition: (value: number) => void;
  deleteScrollPosition: () => void;
  scrollPosition: number;
}

export type HeroType ={
    children: ReactNode; 
    img?:string; 
    disableOverlay?:boolean;
}

export type CardType={
  className?:string;
  title?:string;
  subtitle?:string;
  icon?:ReactNode;
  text?:string;
  img?:string;
}

export type Butterfly = {
  id: number;
  name: string;
  preferred_common_name?: string | null;
  rank: string;

  default_photo?: {
    medium_url?: string;
    square_url?: string;
    attribution?: string;
    license_code?: string | null;
  } | null;

  wikipedia_url?: string | null;
  observations_count?: number;
}

export type ApiResponse = {
  data: Butterfly[] | Butterfly | null;
}

export type OnlyButterfly = {
  data: Butterfly[];
}