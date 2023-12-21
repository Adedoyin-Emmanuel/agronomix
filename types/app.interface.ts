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
}
