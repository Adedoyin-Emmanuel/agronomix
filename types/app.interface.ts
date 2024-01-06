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

export interface BuyerDashboardInfo extends Buyer {
  role: "buyer";
  updatedAt: Date;
  createdAt: Date;
}

export interface MerchantDashboardInfo extends Merchant {
  role: "merchant";
  updatedAt: Date;
  createdAt: Date;
}
