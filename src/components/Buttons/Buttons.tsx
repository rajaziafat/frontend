import { useNavigate } from "react-router-dom";

export const PrimaryButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${props.path}`)}
      className={`gradient-btn-bg font-mich max-[540px]:text-sm h-[61px] rounded-md min-w-[220px] hover:bg-transparent duration-300 relative after:absolute after:w-[98%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md after:opacity-0 after:hover:opacity-100 after:duration-300  ${props.className}`}
    >
      <span className="relative z-20">{props.title}</span>
    </button>
  );
};
export const SecondaryButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${props.path}`)}
      className={`gradient-btn-bg font-mich max-[540px]:text-sm h-[61px] rounded-md min-w-[220px]  hover:bg-transparent duration-300 relative after:absolute after:w-[98%] after:top-1/2 after:left-1/2 after:bg-secondary after:h-[93%]  after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-md  after:hover:opacity-0 after:duration-300  ${props.className}`}
    >
      <span className="relative z-20">{props.title}</span>
    </button>
  );
};
export const DeveloperButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${props.path}`)}
      className={`hover:!bg-primary-developer  max-[540px]:text-sm  font-mich h-[61px] rounded-md min-w-[220px] duration-300 border-[2px] !border-primary-developer bg-transparent   ${props.className}`}
    >
      <span className="relative z-20">{props.title}</span>
    </button>
  );
};
export const UserButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${props.path}`)}
      className={`hover:!bg-primary-user max-[540px]:text-sm border-[2px] !border-primary-user font-mich h-[61px] rounded-md min-w-[220px]  bg-transparent duration-300  ${props.className}`}
    >
      <span className="relative z-20">{props.title}</span>
    </button>
  );
};
export const InvestorButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${props.path}`)}
      className={`hover:!bg-primary-stakeholder max-[540px]:text-sm border-[2px] !border-primary-stakeholder font-mich h-[61px] rounded-md min-w-[220px]  bg-transparent duration-300  ${props.className}`}
    >
      <span className="relative z-20">{props.title}</span>
    </button>
  );
};
