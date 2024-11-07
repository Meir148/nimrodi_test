import { ReactNode, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useIsVerified from "./VerifyActivity";
import useBuildingData from "./BuildingDataProvider";

interface IPrivateRoute {
  component?: ReactNode;
  children: ReactNode;
  role: string;
}

const PrivateRoute = ({ component, children, role }: IPrivateRoute) => {
  const navigate = useNavigate();
  const { floorId = "" } = useParams<{ floorId?: string }>();
  const { getFloorByIndex, getListOfActivities } = useBuildingData();
  const floor = getFloorByIndex(parseInt(floorId));

  useEffect(() => {
    if (!floor) {
      navigate("/");
    } else {
      const isVerified = useIsVerified({ activity: floor.activity, role, activities: getListOfActivities() });
      if (!isVerified) {
        navigate("/");
      }
    }
  }, [floor, role, navigate, getFloorByIndex, getListOfActivities]);

  return (
    <div>
      {component}
      {children}
    </div>
  );
};

export default PrivateRoute;

//PrivateRoute.ts