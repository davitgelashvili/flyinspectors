import CancelledFlights from "./CancelledFlights/CancelledFlights";
import MechanicalIssues from "./Mechanical Issues/MechanicalIssues";
import Slider from "../../components/Common/Slider/Slider"

function BlogPage() {
  return (
    <div>
      <Slider/>
      <CancelledFlights />
      <MechanicalIssues />
    </div>
  );
}

export default BlogPage;
