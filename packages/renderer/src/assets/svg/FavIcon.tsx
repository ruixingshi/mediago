import React from "react";

export function FavIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.6508 8.79885L14.1178 12.2394L15.864 17.8376C15.8912 17.9243 15.9063 18.018 15.9063 18.1141C15.9063 18.604 15.5284 19 15.0625 19C14.8776 19 14.7073 18.9368 14.5681 18.8313L10 15.3648L5.43196 18.8312H5.43167C5.29275 18.9368 5.12234 19 4.93749 19C4.47138 19 4.09373 18.6039 4.09373 18.114C4.09373 18.0179 4.10876 17.9242 4.13598 17.8375L5.88218 12.2394L1.34903 8.79885H1.34932C1.13781 8.63829 1 8.37697 1 8.08164C1 7.59297 1.37765 7.19686 1.84373 7.19686H7.45543L9.19312 1.62576C9.29915 1.26252 9.6201 1 10 1C10.3799 1 10.7009 1.2625 10.8066 1.62576L12.5446 7.19686H18.1563C18.6224 7.19686 19 7.59297 19 8.08164C19 8.37697 18.8622 8.63829 18.6508 8.79885Z" />
    </svg>
  );
}
