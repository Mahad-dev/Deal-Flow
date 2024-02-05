import ChooseYourStyles from "@/components/pay/chooseYourStyles";
import Invoice from "@/components/pay/invoice";

export default function Pay() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1230px] mx-auto px-8">
        <ChooseYourStyles />
        <Invoice />
      </div>
    </div>
  );
}
