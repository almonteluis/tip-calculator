"use client";
import React, { useState, useEffect } from "react";
import { space_mono } from "@/app/fonts/fonts";
import { FaDollarSign, FaUser } from "react-icons/fa";
import Footer from "./ui/footer";
import ResultRow from "@/app/ui/resultRow";
import SectionHeader from "@/app/ui/section-header";

export default function Home() {
  const [billAmount, setBillAmount] = useState("");
  const [selectTips, setSelectTips] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const tips = ["5", "10", "15", "25", "50", "custom"];

  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBillAmount(e.target.value);
  }

  function handleTipSelect(tip: string) {
    const tipValue = tip === "custom" ? 0 : parseFloat(tip);
    setSelectTips(tipValue);
  }

  function handlePeopleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    setNumberOfPeople(value > 0 ? value : 1);
  }

  useEffect(() => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill) || selectTips === 0 || numberOfPeople === 0) {
      setTipAmount(0);
      setTotal(0);
      return;
    }

    const calculatedTip = (bill * selectTips) / 100;
    const calculatedTotal = bill + calculatedTip;

    setTipAmount(calculatedTip / numberOfPeople);
    setTotal(calculatedTotal / numberOfPeople);
  }, [billAmount, selectTips, numberOfPeople]);

  const listTipsOptions = tips.map((tip, index) => (
    <button
      className={`btn w-auto h-12 rounded-lg flex items-center justify-center text-center font-bold text-xl ${
        selectTips === (tip === "custom" ? 0 : parseFloat(tip))
          ? "bg-strong-cyan text-very-dark-cyan"
          : "bg-very-dark-cyan text-white hover:bg-strong-cyan hover:text-very-dark-cyan"
      } ${space_mono.className}`}
      key={index}
      onClick={() => handleTipSelect(tip)}
    >
      {tip}%
    </button>
  ));

  return (
    <div className=" bg-light-grayish-cyan grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen px-3.5 p-8 pb-20 gap-16 sm:p-[20px]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[800px] w-full">
        <div className="container mx-auto flex gap-6 bg-white rounded-2xl h-max p-9">
          <div className="w-1/2 flex flex-col gap-10">
            <div>
              <SectionHeader title="Bill" />
              <div className="relative">
                <input
                  className={` appearance-none border rounded w-full text-right py-2 px-3 text-xl font-bold text-very-dark-cyan bg-very-light-grayish-cyan border-very-light-grayish-cyan leading-tight focus:outline-none focus:shadow-outline ${space_mono.className}`}
                  id="Bill"
                  type="number"
                  placeholder="0"
                  value={billAmount}
                  onChange={handleBillChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaDollarSign />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <SectionHeader title="Select Tip %" />
              <div className="grid grid-cols-3 gap-4">
                {listTipsOptions}
                {selectTips === 0 && (
                  <input
                    type="number"
                    placeholder="Custom"
                    className="w-36 h-10 rounded-lg text-center"
                    onChange={(e) =>
                      setSelectTips(parseFloat(e.target.value) || 0)
                    }
                  />
                )}
              </div>
            </div>
            <div>
              <SectionHeader title="Number of People" />
              <div className="relative">
                <input
                  className={`appearance-none border rounded w-full text-right py-2 px-3 text-xl font-bold text-very-dark-cyan bg-very-light-grayish-cyan border-very-light-grayish-cyan leading-tight focus:outline-none focus:shadow-outline ${space_mono.className}`}
                  id="People"
                  type="number"
                  placeholder="1"
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                  min="1"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-very-dark-cyan rounded-2xl px-9 pt-9 pb-8 mx-auto flex flex-col justify-between">
            <div className="flex flex-col gap-12">
              <ResultRow title="Tip Amount" total={tipAmount} />
              <ResultRow title="Total" total={total} />
            </div>
            <button
              className={`bg-strong-cyan text-very-dark-cyan py-2 rounded-md uppercase hover:bg-light-grayish-cyan font-extrabold ${space_mono.className}`}
            >
              Reset
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
