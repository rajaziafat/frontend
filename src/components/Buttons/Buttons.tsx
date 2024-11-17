import { Link, useNavigate } from "react-router-dom";

export const PrimaryButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`gradient-btn-bg font-mich  h-[61px] flex justify-center items-center rounded-md min-w-[210px] hover:bg-transparent duration-300 relative after:absolute after:w-[98%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md after:opacity-0 after:hover:opacity-100 after:duration-300  ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
export const SecondaryButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`gradient-btn-bg font-mich  h-[55px] flex justify-center items-center rounded-md w-[190px]  hover:bg-transparent duration-300 relative after:absolute after:w-[97%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%]  after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md  after:hover:opacity-0 after:duration-300  ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
export const DeveloperButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`hover:!bg-primary-developer text-[13px]   flex justify-center items-center  font-mich h-[55px] rounded-md px-3 duration-300 border-[2px] !border-primary-developer bg-transparent   ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
export const SecondaryDeveloperButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`!bg-primary-developer text-[13px]   flex justify-center items-center  font-mich h-[55px] rounded-md px-3 duration-300 border-[2px] !border-primary-developer hover:!bg-transparent   ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
export const UserButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`hover:!bg-primary-user text-[13px]  border-[2px] flex justify-center items-center !border-primary-user font-mich h-[55px] rounded-md px-3   bg-transparent duration-300  ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
export const InvestorButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <button
      className={`hover:!bg-primary-stakeholder text-[13px]  border-[2px] flex justify-center items-center !border-primary-stakeholder font-mich h-[55px] rounded-md  px-3  bg-transparent duration-300  ${className}`}
    >
      <Link to={path}>
        <span className="relative z-20">{title}</span>
      </Link>
    </button>
  );
};
