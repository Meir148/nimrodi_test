import roles from "../data/roles.json";

interface IUseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IUseActivityParams) => {
  return activities.includes(activity) && roles.includes(role);
};

export default useIsVerified;

//VerifyActivity.ts