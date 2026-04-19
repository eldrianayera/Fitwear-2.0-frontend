import { Session } from "@supabase/supabase-js";
import Link from "next/link";

interface Props {
  image?: string;
  price: string;
  name: string;
  id: string;
  isAdmin: Session | null;
}

export default function ProductsCards({
  image,
  price,
  name,
  id,
  isAdmin,
}: Props) {
  return (
    <Link
      href={isAdmin ? `/admin/product-detail/${id}` : `/product-detail/${id}`}
      className="
        group
        wise-card
        bg-wise-white
        overflow-hidden
        flex flex-col
        wise-card-hover
        focus:outline-none focus:ring-2 focus:ring-wise-green
      "
      style={{ borderRadius: "30px", width: "280px" }}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] bg-wise-surface flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-wise-gray wise-caption">No image</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="
            wise-card-title text-wise-black
            truncate
            group-hover:text-wise-green-dark
            transition-colors duration-200
          "
        >
          {name}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <p className="wise-body-semibold text-wise-black">
            ${Number(price).toFixed(2)}
          </p>
          <div
            className="
              w-8 h-8 rounded-full
              bg-wise-mint
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
            "
          >
            <span className="text-wise-green-dark text-sm">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
