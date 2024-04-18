import { drivers } from "../data";
import { useLoaderData } from "react-router";
import DriverDetails from "../Components/DriverDetails/DriverDetails";

export async function loader({ params }) {
  const driver = drivers.find(
    (tempDriver) =>
      tempDriver.firstName + "-" + tempDriver.lastName === params.driverId
  );
  return { driver };
}

function Driver() {
  const { driver } = useLoaderData();

  return (
    <div>
      <h1>
        <DriverDetails driver={driver} />
        {/* {driver.firstName} {driver.lastName} */}
      </h1>
    </div>
  );
}

export default Driver;
