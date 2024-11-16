import { Link, useNavigate } from "react-router-dom";

export const PrimaryButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <Link
      to={path}
      className={`gradient-btn-bg font-mich max-[540px]:text-sm h-[61px] flex justify-center items-center rounded-md min-w-[220px] hover:bg-transparent duration-300 relative after:absolute after:w-[98%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md after:opacity-0 after:hover:opacity-100 after:duration-300  ${className}`}
    >
      <span className="relative z-20">{title}</span>
    </Link>
  );
};
export const SecondaryButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <Link
      to={path}
      className={`gradient-btn-bg font-mich max-[540px]:text-sm h-[61px] flex justify-center items-center rounded-md min-w-[220px]  hover:bg-transparent duration-300 relative after:absolute after:w-[98%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%]  after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md  after:hover:opacity-0 after:duration-300  ${className}`}
    >
      <span className="relative z-20">{title}</span>
    </Link>
  );
};
export const DeveloperButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <Link
      to={path}
      className={`hover:!bg-primary-developer  max-[540px]:text-sm flex justify-center items-center  font-mich h-[61px] rounded-md min-w-[220px] duration-300 border-[2px] !border-primary-developer bg-transparent   ${className}`}
    >
      <span className="relative z-20">{title}</span>
    </Link>
  );
};
export const UserButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <Link
      to={path}
      className={`hover:!bg-primary-user max-[540px]:text-sm border-[2px] flex justify-center items-center !border-primary-user font-mich h-[61px] rounded-md min-w-[220px]  bg-transparent duration-300  ${className}`}
    >
      <span className="relative z-20">{title}</span>
    </Link>
  );
};
export const InvestorButton = ({ title, className, path }: { title: string; className: string; path: string }) => {
  return (
    <Link
      to={path}
      className={`hover:!bg-primary-stakeholder max-[540px]:text-sm border-[2px] flex justify-center items-center !border-primary-stakeholder font-mich h-[61px] rounded-md min-w-[220px]  bg-transparent duration-300  ${className}`}
    >
      <span className="relative z-20">{title}</span>
    </Link>
  );
};
