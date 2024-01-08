export interface Buyer {
  name: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  token?: string;
  isVerified: boolean;
  orders: string[];
  orderHistory: string[];
  location?: string;
  online?: boolean;
  bio: string;
  collections: string[];
  reviews: string[];
}

export interface Merchant {
  companyName: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  token?: string;
  isVerified: boolean;
  products: string[];
  orders: string[];
  orderHistory: string[];
  location?: string;
  online?: boolean;
  bio: string;
  customers: string[];
  reviews: string[];
}

export interface Product {
  name: string;
  merchantId: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  tags: string[];
  rating: number;
  reviews: string[];
  unpublish: boolean;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface DashboardInfo extends Buyer, Merchant {
  updatedAt: Date;
  createdAt: Date;
  role: "buyer" | "merchant";
}
