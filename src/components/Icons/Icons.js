import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faDog,
   faCat,
   faShieldDog,
   faNewspaper as faNewspaperActive,
} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
export const UploadIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M22.1571 13.8359L21.9247 12.3786C21.4686 9.51917 18.9876 7.3335 16 7.3335C12.6863 7.3335 10 10.0197 9.99996 13.3334L10.0011 15.2304L8.11578 15.3398C6.19293 15.4513 4.66663 17.0482 4.66663 19.0002C4.66663 21.0252 6.30825 22.6668 8.33329 22.6668H15.3333V17.0813L14.1785 18.236C13.9182 18.4964 13.4961 18.4964 13.2357 18.236L12.7643 17.7646C12.504 17.5043 12.504 17.0822 12.7643 16.8218L15.862 13.7242C16.1223 13.4638 16.5444 13.4638 16.8048 13.7242L19.9024 16.8218C20.1628 17.0822 20.1628 17.5043 19.9024 17.7646L19.431 18.236C19.1706 18.4964 18.7485 18.4964 18.4882 18.236L17.3333 17.0811V22.6668H23C25.3932 22.6668 27.3333 20.7267 27.3333 18.3335C27.3333 16.151 25.7179 14.3423 23.6181 14.0437L22.1571 13.8359ZM8.33329 24.6668H15.3333H17.3333H23C26.4978 24.6668 29.3333 21.8313 29.3333 18.3335C29.3333 15.1411 26.9714 12.5005 23.8997 12.0636C23.2913 8.24881 19.9861 5.3335 16 5.3335C11.5817 5.3335 7.99996 8.91522 7.99996 13.3335L7.99996 13.3431C5.0255 13.5157 2.66663 15.9824 2.66663 19.0002C2.66663 22.1298 5.20368 24.6668 8.33329 24.6668Z"
      ></path>
   </svg>
);

export const MessageIcon = ({
   width = '2.6rem',
   height = '2.6rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
      ></path>
   </svg>
);

export const InboxIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
      ></path>
   </svg>
);

export const SearchIcon = ({
   width = '2.4rem',
   height = '2.4rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
      ></path>
   </svg>
);

export const HomeIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
      ></path>
   </svg>
);

export const HomeActiveIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
      ></path>
   </svg>
);

export const DogIcon = ({ width = '3.4rem', height = '3.4rem', className }) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faDog}
   />
);

export const DogActiveIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faDog}
   />
);

export const CatIcon = ({ width = '3.4rem', height = '3.4rem', className }) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faCat}
   />
);

export const CatActiveIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faCat}
   />
);

export const EquipsIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faShieldDog}
   />
);

export const EquipsActiveIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faShieldDog}
   />
);

export const PagazinesIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faNewspaper}
   />
);

export const PagazinesActiveIcon = ({
   width = '3.4rem',
   height = '3.4rem',
   className,
}) => (
   <FontAwesomeIcon
      className={className}
      width={width}
      height={height}
      icon={faNewspaperActive}
   />
);
