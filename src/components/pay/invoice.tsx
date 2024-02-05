import { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

export default function InvoiceForm({
  selectedColor,
  selectedImg
}: {
  selectedColor: string;
  selectedImg: string;
}) {
  const [DarkColor, setDarkColor] = useState(selectedColor);
  useEffect(() => {
    // Calculate a slightly darker version of selectedColor
    const darkerColor = tinycolor(selectedColor).darken(35).toString();
    setDarkColor(darkerColor);
  }, [selectedColor]);
  return (
    <div className="bg-[#fff] px-[2rem] py-[1rem] rounded-[20px] shadow-sm">
      <div className="px-[3rem] py-[1.5rem] rounded-[20px] overflow-hidden relative">
        <section className="clip-path-before: Heading ">
          <h2 className="font-bold  text-[32px] text-right mb-4 relative">
            Invoice
            <div
              style={{ backgroundColor: selectedColor }}
              className="circle_rounded"
            ></div>
            <div className="absolute top-5">
              {" "}
              <img
                src={selectedImg || "/Profile.png"}
                className="w-[4rem] h-[4rem] rounded-full object-cover"
                alt=""
              />{" "}
            </div>
          </h2>
        </section>

        <section className="Profile ">
          <div className="grid grid-cols-2 justify-between mb-4">
            <div></div>
            <div>
              <div
                style={{ color: DarkColor }}
                className="flex text-[12px] font-bold justify-between"
              >
                <p>Invoice Num:</p>
                <p>JP-1667-0001</p>
              </div>
              <div
                style={{ color: DarkColor }}
                className="flex text-[12px] font-semibold justify-between"
              >
                <p>Invoice Date</p>
                <p>15, August 2023</p>
              </div>
              <div
                style={{ color: DarkColor }}
                className="flex text-[12px] font-semibold justify-between"
              >
                <p>Due Date</p>
                <p>14, October 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="Info">
          <div
            style={{ color: DarkColor }}
            className="flex text-[12px] font-bold justify-between"
          >
            <div>Sid Mudgal Engineering lnc.</div>
            <div>Invoice to</div>
          </div>

          <div className="flex text-[12px] font-medium justify-between text-[#000]">
            <div>sid@dealflow.com</div>
            <div>Dealflow APS</div>
          </div>

          <div className="flex text-[12px] font-medium justify-between text-[#000]">
            <div>Street 920/18</div>
            <div>DK42666238</div>
          </div>

          <div className="flex text-[12px] font-medium justify-between text-[#000]">
            <div>Copenhegan 2200, DK</div>
            <div>Applesby Plads 7, Copenhegan</div>
          </div>

          <div className="flex text-[12px] font-medium justify-between text-[#000]">
            <div>+45 92 10 28 47</div>
            <div>1411 Denmark</div>
          </div>

          <div className="flex text-[12px] font-medium justify-between text-[#000]">
            <div>DK 83920089</div>
            <div>Seb Haugeto</div>
          </div>

          <div className="flex text-[12px] font-medium justify-end">
            <div>Seb@delflow.live</div>
          </div>
        </section>

        <section className="Objective">
          <div className="flex flex-col gap-1 mb-4">
            <div
              style={{ color: DarkColor }}
              className="text-[15px] font-bold "
            >
              DKK 3,200 due on 14,October 2023
            </div>
            <p className="text-[12px] font-medium text-[#000]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exerc
              itat ionem facilis.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-28">
          <section className="Description text-[12px]">
            <div className="border-b-2 border-y-gray flex gap-6 py-1">
              <div className="w-[50%] font-bold flex justify-between">
                <div style={{ color: DarkColor }} className="w-[45%] ">
                  Description
                </div>
                <div style={{ color: DarkColor }} className="w-[5%]">
                  Qty
                </div>
              </div>
              <div className="w-[50%] font-bold flex justify-between">
                <div style={{ color: DarkColor }}>Rate</div>
                <div style={{ color: DarkColor }}>Tax</div>
                <div style={{ color: DarkColor }}>Total</div>
              </div>
            </div>

            <div className=" flex gap-6 py-1">
              <div className="w-[50%] font-medium flex justify-between text-[12px]">
                <div className="w-[45%] text-[#000]">Co-Founding</div>
                <div className="w-[5%] text-[#000]">42</div>
              </div>
              <div className="w-[50%] text-[#000] font-medium flex justify-between border-b-2 border-gray">
                <div>DKK 420K</div>
                <div>25%</div>
                <div>DKK 420K</div>
              </div>
            </div>

            <div className=" flex gap-6 py-1">
              <div className="w-[50%] font-medium flex justify-between text-[12px]">
                <div className="w-[45%] text-[#000]"></div>
                <div className="w-[5%] text-[#000]"></div>
              </div>
              <div className="w-[50%] text-[#000] font-medium flex justify-between border-b-2 border-gray">
                <div>Subtotal</div>
                <div></div>
                <div>DKK 420K</div>
              </div>
            </div>

            <div className=" flex gap-6 py-1">
              <div className="w-[50%] font-medium flex justify-between text-[12px]">
                <div className="w-[45%] text-[#000]"></div>
                <div className="w-[5%] text-[#000]"></div>
              </div>
              <div className="w-[50%] text-[#000] font-medium flex justify-between border-b-2 border-gray">
                <div>Total ex.VAT </div>
                <div></div>
                <div>DKK 420K</div>
              </div>
            </div>

            <div className=" flex gap-6 py-1">
              <div className="w-[50%] font-medium flex justify-between text-[12px]">
                <div className="w-[45%] text-[#000]"></div>
                <div className="w-[5%] text-[#000]"></div>
              </div>
              <div className="w-[50%] text-[#000] font-medium flex justify-between border-b-2 border-gray">
                <div>Vat Denmark 25% </div>
                <div></div>
                <div>DKK 105K</div>
              </div>
            </div>

            <div className=" flex gap-6 py-1">
              <div className="w-[50%] font-medium flex justify-between text-[12px]">
                <div className="w-[45%] text-[#000]"></div>
                <div className="w-[5%] text-[#000]"></div>
              </div>
              <div className="w-[50%] text-[#000] font-bold flex justify-between">
                <div>Total Due </div>

                <div>DKK 525K</div>
              </div>
            </div>
          </section>
          <div className="overflow-hidde">
            <section className="Paymentinstrucions clip-path-after:">
              <div
                style={{ color: DarkColor }}
                className="font-bold text-[15px] pb-4"
              >
                Payment Instructions (Pay Online{" "}
                <span style={{ color: selectedColor }} className="underline">
                  here
                </span>{" "}
                )
              </div>
              <div className="pb-4  border-b-2 border-y-gray relative">
                <div className="flex text-[12px] font-medium justify-between text-[#000]">
                  <div>Bank</div>
                  <div>Revolut Bank UAB</div>
                </div>
                <div className="flex text-[12px] font-medium justify-between text-[#000]">
                  <div>Bank Address:</div>
                  <div>Konstitcijos ave 21B, 08130 vinius, Lithuania</div>
                </div>
                <div className="flex text-[12px] font-medium justify-between text-[#000]">
                  <div>Account name</div>
                  <div>Account name : Dealflow ApS</div>
                </div>
                <div className="flex text-[12px] font-medium justify-between text-[#000]">
                  <div>IBAN</div>
                  <div>LT 24 3250 0494 6632 2270</div>
                </div>
                <div className="flex text-[12px] font-medium justify-between text-[#000]">
                  <div>BEC</div>
                  <div>REVOLT21</div>
                </div>
                <div
                  style={{ backgroundColor: selectedColor }}
                  className="circle"
                ></div>
              </div>
            </section>
          </div>
        </div>
        <section>
          <div className="flex justify-between">
            <div className="text-[8px] text-[#000] w-[70%] flex flex-col gap-3 py-2">
              <p className="relative z-20">
                This Invoice is owned by Dealflow ApS (cvr : 42666238). The
                payment should be made to the account as listed above, with the
                correct reffence. Any question regarding the contents of this
                invoice should be directed to JP consult ApS.
              </p>
              <p>Page 1 of 1</p>
            </div>

            <div className="text-[#000] leading-4 flex justify-center items-center w-[30%]">
              <span
                style={{ color: selectedColor }}
                className="font-bold text-[10px]"
              >
                Invoicing powered by{" "}
                <div className="text-[15px] flex justify-end">Dealflow</div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
