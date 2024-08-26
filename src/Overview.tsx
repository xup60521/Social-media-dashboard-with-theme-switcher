import IconUp from "@/images/icon-up.svg?react";
import IconDown from "@/images/icon-down.svg?react";
import { OverviewData } from "./utils";

export default function Overview() {
    return (
        <>
            <h2 className="text-light_text_Dark_Grayish_Blue text-2xl -mb-6 font-bold">Overview - Today</h2>
            <div className="md:grid flex flex-col grid-cols-4 md:gap-8 gap-4 grid-rows-2">
                {OverviewData.map((item, index) => {
                    return (
                        <div
                            key={`overview ${index}`}
                            className="bg-light_card_bg_Light_Grayish_Blue dark:bg-dark_card_bg_Dark_Desaturated_Blue flex flex-col px-6 py-6 gap-4 rounded-md"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-light_text_Dark_Grayish_Blue text-xs font-bold dark:text-dark_text_Desaturated_Blue">
                                    {item.category}
                                </span>
                                {<item.icon />}
                            </div>
                            <div className="flex items-end justify-between">
                                <span className="text-light_text_Very_Dark_Blue dark:text-white text-3xl font-bold">{item.value}</span>
                                <span className={`text-xs flex items-center rounded-md gap-1 font-bold ${item.offsetType === "up" ? "text-p_Lime_Green" : "text-p_Bright_Red"}`}>{item.offsetType === "up" ? <IconUp /> : <IconDown />} {item.offset}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
