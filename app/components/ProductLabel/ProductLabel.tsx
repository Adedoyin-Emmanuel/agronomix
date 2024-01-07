import React from "react";
import Link from "next/link";
import Text from "../Text";
import { formatDateTime } from "@/app/helpers/utils";

interface ProductLabel {
  className?: string;
  href: string;
  productImage: string;
  productName: string;
  createdAt?: Date;
  isPublished: boolean;
}

const ProductLabel = ({
  className,
  href,
  productImage,
  productName,
  createdAt,
  isPublished,
}: ProductLabel) => {
  const status = isPublished ? "published" : "unpublished";
  let defaultStatus = (
    <section className="status-badge text-black rounded bg-yellow-300 flex items-center justify-center h-5 w-20">
      <Text className="text-[12px] font-bold">unpublished</Text>
    </section>
  );

  switch (status) {
    case "unpublished":
      defaultStatus = (
        <section className="status-badge text-black rounded bg-yellow-300 flex items-center justify-center h-5 w-20">
          <Text className="text-[12px] font-bold">unpublished</Text>
        </section>
      );
      break;
    case "published":
      defaultStatus = (
        <section className="status-badge text-black rounded bg-green-300 flex items-center justify-center h-5 w-20">
          <Text className="text-[12px] font-bold">published</Text>
        </section>
      );
      break;

    default:
      defaultStatus = defaultStatus;
  }

  const formattedDate = formatDateTime(createdAt!);
  return (
    <Link href={href}>
      <section
        className={`bg-gray-50 transition-colors ease-in hover:bg-gray-100 flex items-center justify-between p-4 rounded cursor-pointer my-4 ${className} w-full`}
      >
        <img
          alt={`An image relating to ${productName}`}
          src={productImage}
          className="object-cover h-14 w-14 rounded"
        />

        <section className="other-content w-11/12 flex items-center justify-around">
          <Text className="text-sm">11/04/2024</Text>
          <Text className="text-sm font-bold" noCapitalize={true}>
            @
            {productName?.length > 12
              ? productName?.substring(0, 12) + "..."
              : productName}
          </Text>
          <section className="status-badge text-black rounded bg-accent flex items-center justify-center h-5 w-20">
            {defaultStatus}
          </section>
        </section>
      </section>
    </Link>
  );
};

export default ProductLabel;
