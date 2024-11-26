import Slider from "./Slider/Slider";
import FeesAndPayout from "./Fees and payout methods/FeesAndPayout";
import SubmitClaim from "./SubmitClaim/SubmitClaim";
import DocPrivacy from "./Documents and privacy/DocPrivacy";
import PassLaw from "./Air passenger Law/PassLaw";
import Faq from "./Faq";


function FaqPage() {

  return (
    <div>
      <Slider />
      <Faq />
      <FeesAndPayout />
      <SubmitClaim />
      <DocPrivacy/>
      <PassLaw/>
    </div>
  );
}

export default FaqPage;